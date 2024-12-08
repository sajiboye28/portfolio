import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { 
      hasError: false 
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { 
      hasError: true,
      error 
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log the error to an error reporting service
    console.error('Uncaught error:', error, errorInfo);
    
    // Optional: Send error to monitoring service
    // logErrorToService(error, errorInfo);
    
    this.setState({ 
      hasError: true,
      error,
      errorInfo 
    });
  }

  resetErrorBoundary = () => {
    this.setState({ 
      hasError: false,
      error: undefined,
      errorInfo: undefined 
    });
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="error-fallback flex flex-col items-center justify-center min-h-screen bg-red-50 p-4"
        >
          <div className="text-center bg-white shadow-xl rounded-lg p-8 max-w-md">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-700 mb-6">
              We're sorry, but an unexpected error occurred. 
              Please try refreshing the page or contact support.
            </p>
            {this.state.error && (
              <pre className="text-xs text-red-500 bg-red-100 p-4 rounded mb-6 overflow-x-auto">
                {this.state.error.toString()}
              </pre>
            )}
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => window.location.reload()}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Reload Page
              </button>
              <button 
                onClick={this.resetErrorBoundary}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                Try Again
              </button>
            </div>
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
