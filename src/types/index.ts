// Common Interfaces and Types for Portfolio Project
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubLink?: string;
  liveLink?: string;
  category: 'frontend' | 'backend' | 'fullstack';
}

export interface ContactFormData {
  [key: string]: string;
  name: string;
  email: string;
  message: string;
}

export interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

export interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  email?: boolean;
}

export interface FormFieldValidation {
  value: string;
  rules: ValidationRules;
  errorMessage?: string;
}

export interface AccessibilityProps {
  'aria-label'?: string;
  'aria-describedby'?: string;
  role?: string;
}

export interface SkeletonProps {
  width?: string;
  height?: string;
  variant?: 'rectangular' | 'circular';
}

export interface ErrorBoundaryProps {
  children?: React.ReactNode;
  fallback?: React.ReactNode;
  onError?: (error: Error) => void;
}

export interface SkipLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
  data: any;
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export type ValidationResult = {
  isValid: boolean;
  errors: Record<string, string>;
};
