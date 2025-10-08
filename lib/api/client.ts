// API Client utilities for TanStack Query

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public data?: any
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function fetchApi<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new ApiError(
      response.status,
      error.message || "An error occurred",
      error
    );
  }

  return response.json();
}

// Example API functions
export const api = {
  // GET request
  get: <T>(url: string, options?: RequestInit) =>
    fetchApi<T>(url, { ...options, method: "GET" }),

  // POST request
  post: <T>(url: string, data?: any, options?: RequestInit) =>
    fetchApi<T>(url, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    }),

  // PUT request
  put: <T>(url: string, data?: any, options?: RequestInit) =>
    fetchApi<T>(url, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data),
    }),

  // PATCH request
  patch: <T>(url: string, data?: any, options?: RequestInit) =>
    fetchApi<T>(url, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(data),
    }),

  // DELETE request
  delete: <T>(url: string, options?: RequestInit) =>
    fetchApi<T>(url, { ...options, method: "DELETE" }),
};

