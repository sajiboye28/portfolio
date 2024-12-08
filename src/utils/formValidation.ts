import { ValidationRules, ValidationResult } from '../types';

export const validateField = (
  value: string, 
  rules: ValidationRules
): { isValid: boolean; errorMessage?: string } => {
  if (rules.required && !value.trim()) {
    return { 
      isValid: false, 
      errorMessage: 'This field is required' 
    };
  }

  if (rules.minLength && value.length < rules.minLength) {
    return { 
      isValid: false, 
      errorMessage: `Minimum length is ${rules.minLength} characters` 
    };
  }

  if (rules.maxLength && value.length > rules.maxLength) {
    return { 
      isValid: false, 
      errorMessage: `Maximum length is ${rules.maxLength} characters` 
    };
  }

  if (rules.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return { 
        isValid: false, 
        errorMessage: 'Please enter a valid email address' 
      };
    }
  }

  if (rules.pattern && !rules.pattern.test(value)) {
    return { 
      isValid: false, 
      errorMessage: 'Invalid format' 
    };
  }

  return { isValid: true };
};

export const validateForm = (
  formData: Record<string, string>, 
  validationSchema: Record<string, ValidationRules>
): ValidationResult => {
  const errors: Record<string, string> = {};
  let isValid = true;

  Object.keys(validationSchema).forEach(field => {
    const value = formData[field];
    const rules = validationSchema[field];
    const fieldValidation = validateField(value, rules);

    if (!fieldValidation.isValid) {
      isValid = false;
      errors[field] = fieldValidation.errorMessage || 'Invalid input';
    }
  });

  return { isValid, errors };
};
