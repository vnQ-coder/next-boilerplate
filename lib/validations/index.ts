// Validation helpers (can be used with Zod or other validation libraries)

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validators = {
  email: (value: string) => emailRegex.test(value),
  
  minLength: (value: string, min: number) => value.length >= min,
  
  maxLength: (value: string, max: number) => value.length <= max,
  
  required: (value: any) => {
    if (typeof value === "string") return value.trim().length > 0;
    return value !== null && value !== undefined;
  },
  
  url: (value: string) => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  },
  
  phoneNumber: (value: string) => {
    const phoneRegex = /^\+?[\d\s-()]+$/;
    return phoneRegex.test(value);
  },
};

export function validateForm<T extends Record<string, any>>(
  data: T,
  rules: Partial<Record<keyof T, (value: any) => boolean | string>>
): { isValid: boolean; errors: Partial<Record<keyof T, string>> } {
  const errors: Partial<Record<keyof T, string>> = {};

  for (const field in rules) {
    const validator = rules[field];
    if (validator) {
      const result = validator(data[field]);
      if (typeof result === "string") {
        errors[field] = result;
      } else if (!result) {
        errors[field] = `${String(field)} is invalid`;
      }
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

