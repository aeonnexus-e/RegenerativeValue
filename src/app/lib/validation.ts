// Validation utilities for Atlas Sanctum RVX Platform

export class ValidationError extends Error {
  constructor(
    message: string,
    public field?: string,
    public value?: any
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

/**
 * Validate email format
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate required field
 */
export function validateRequired(value: any, fieldName: string): void {
  if (value === null || value === undefined || value === '') {
    throw new ValidationError(`${fieldName} is required`, fieldName, value);
  }
}

/**
 * Validate number range
 */
export function validateRange(
  value: number,
  min: number,
  max: number,
  fieldName: string
): void {
  if (value < min || value > max) {
    throw new ValidationError(
      `${fieldName} must be between ${min} and ${max}`,
      fieldName,
      value
    );
  }
}

/**
 * Validate string length
 */
export function validateLength(
  value: string,
  min: number,
  max: number,
  fieldName: string
): void {
  if (value.length < min || value.length > max) {
    throw new ValidationError(
      `${fieldName} must be between ${min} and ${max} characters`,
      fieldName,
      value
    );
  }
}

/**
 * Validate array length
 */
export function validateArrayLength(
  value: any[],
  min: number,
  max: number,
  fieldName: string
): void {
  if (value.length < min || value.length > max) {
    throw new ValidationError(
      `${fieldName} must contain between ${min} and ${max} items`,
      fieldName,
      value
    );
  }
}

/**
 * Validate date
 */
export function validateDate(value: any, fieldName: string): void {
  const date = new Date(value);
  if (isNaN(date.getTime())) {
    throw new ValidationError(
      `${fieldName} must be a valid date`,
      fieldName,
      value
    );
  }
}

/**
 * Validate URL
 */
export function validateUrl(url: string, fieldName: string): void {
  try {
    new URL(url);
  } catch {
    throw new ValidationError(
      `${fieldName} must be a valid URL`,
      fieldName,
      url
    );
  }
}

/**
 * Validate project data
 */
export function validateProjectData(data: any): void {
  validateRequired(data.name, 'Project name');
  validateLength(data.name, 3, 200, 'Project name');
  validateRequired(data.description, 'Project description');
  validateLength(data.description, 10, 2000, 'Project description');
  
  if (data.budget) {
    validateRange(data.budget.allocated, 0, Number.MAX_SAFE_INTEGER, 'Budget allocated');
  }
}

/**
 * Validate impact outcome data
 */
export function validateImpactOutcome(data: any): void {
  validateRequired(data.title, 'Impact title');
  validateLength(data.title, 3, 200, 'Impact title');
  validateRequired(data.outcome, 'Outcome description');
  validateRequired(data.category, 'Impact category');
  
  if (data.beneficiaries !== undefined) {
    validateRange(data.beneficiaries, 0, Number.MAX_SAFE_INTEGER, 'Beneficiaries');
  }
  
  if (data.rvtValue !== undefined) {
    validateRange(data.rvtValue, 0, Number.MAX_SAFE_INTEGER, 'RVT value');
  }
}

/**
 * Sanitize string input
 */
export function sanitizeString(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/\s+/g, ' '); // Normalize whitespace
}

/**
 * Validate and sanitize form data
 */
export function validateFormData<T extends Record<string, any>>(
  data: T,
  schema: Record<keyof T, (value: any) => void>
): T {
  const errors: Record<string, string> = {};

  for (const [field, validator] of Object.entries(schema)) {
    try {
      validator(data[field as keyof T]);
    } catch (error) {
      if (error instanceof ValidationError) {
        errors[field] = error.message;
      }
    }
  }

  if (Object.keys(errors).length > 0) {
    throw new ValidationError('Validation failed', undefined, errors);
  }

  return data;
}

/**
 * Check if value is a valid positive number
 */
export function isPositiveNumber(value: any): boolean {
  return typeof value === 'number' && value > 0 && !isNaN(value);
}

/**
 * Check if value is a valid percentage (0-100)
 */
export function isValidPercentage(value: any): boolean {
  return typeof value === 'number' && value >= 0 && value <= 100 && !isNaN(value);
}

/**
 * Validate stakeholder data
 */
export function validateStakeholderData(data: any): void {
  validateRequired(data.stakeholder, 'Stakeholder name');
  validateRequired(data.stakeholderType, 'Stakeholder type');
  validateRequired(data.projectId, 'Project ID');
  
  if (!isValidPercentage(data.votingPower)) {
    throw new ValidationError('Voting power must be between 0 and 100', 'votingPower', data.votingPower);
  }
  
  if (!isValidPercentage(data.revenueShare)) {
    throw new ValidationError('Revenue share must be between 0 and 100', 'revenueShare', data.revenueShare);
  }
}
