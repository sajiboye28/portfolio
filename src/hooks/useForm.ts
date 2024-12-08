import { useState, useCallback } from 'react';
import { 
  ContactFormData, 
  ValidationRules, 
  FormState, 
  ValidationResult 
} from '../types';
import { validateForm } from '../utils/formValidation';

export const useForm = (
  initialState: ContactFormData, 
  validationSchema: Record<string, ValidationRules>,
  onSubmit: (formData: ContactFormData) => Promise<void>
) => {
  const [formData, setFormData] = useState<ContactFormData>(initialState);
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear validation error for the field being edited
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [validationErrors]);

  const handleSubmit = useCallback(async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // Convert ContactFormData to a simple string record for validation
    const formDataRecord: Record<string, string> = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    // Validate form
    const validationResult: ValidationResult = validateForm(
      formDataRecord, 
      validationSchema
    );

    if (!validationResult.isValid) {
      setValidationErrors(validationResult.errors);
      return;
    }

    // Submit form
    setFormState({
      isSubmitting: true,
      isSuccess: false,
      error: null
    });

    try {
      await onSubmit(formData);
      setFormState({
        isSubmitting: false,
        isSuccess: true,
        error: null
      });
      
      // Reset form after successful submission
      setFormData(initialState);
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        error: error instanceof Error ? error.message : 'An error occurred'
      });
    }
  }, [formData, validationSchema, onSubmit, initialState]);

  const resetForm = useCallback(() => {
    setFormData(initialState);
    setFormState({
      isSubmitting: false,
      isSuccess: false,
      error: null
    });
    setValidationErrors({});
  }, [initialState]);

  return {
    formData,
    formState,
    validationErrors,
    handleChange,
    handleSubmit,
    resetForm
  };
};
