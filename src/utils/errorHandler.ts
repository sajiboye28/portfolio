import React from 'react';
import { ErrorInfo } from 'react';

interface ErrorLogOptions {
  level?: 'error' | 'warn' | 'info';
  context?: Record<string, unknown>;
}

class ErrorHandler {
  private static instance: ErrorHandler;

  private constructor() {}

  public static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  public log(error: Error | string, options: ErrorLogOptions = {}): void {
    const { 
      level = 'error', 
      context = {} 
    } = options;

    const timestamp = new Date().toISOString();
    const errorMessage = error instanceof Error ? error.message : error;

    const logEntry = {
      timestamp,
      level,
      message: errorMessage,
      context,
      stackTrace: error instanceof Error ? error.stack : undefined
    };

    // Console logging
    console[level](JSON.stringify(logEntry, null, 2));

    // Optional: Send to error tracking service
    this.reportToErrorService(logEntry);
  }

  public handleAsyncError(
    promise: Promise<unknown>, 
    fallbackValue?: unknown
  ): Promise<unknown> {
    return promise.catch(error => {
      this.log(error);
      return fallbackValue;
    });
  }

  private reportToErrorService(logEntry: unknown): void {
    // Placeholder for external error reporting service
    // Could integrate with Sentry, LogRocket, etc.
    if (process.env.NODE_ENV === 'production') {
      // Implement error reporting logic
      console.log('Reporting error to external service', logEntry);
    }
  }

  public createErrorBoundary(
    fallbackComponent: React.ReactNode
  ): React.ComponentType<{ children: React.ReactNode }> {
    return class extends React.Component<{ children: React.ReactNode }> {
      state = { hasError: false };

      static getDerivedStateFromError() {
        return { hasError: true };
      }

      componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        ErrorHandler.getInstance().log(error, { 
          level: 'error',
          context: { componentStack: error.stack }
        });
      }

      render() {
        if (this.state.hasError) {
          return fallbackComponent;
        }
        return this.props.children;
      }
    };
  }
}

export const errorHandler = ErrorHandler.getInstance();
