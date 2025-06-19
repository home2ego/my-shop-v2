type ApiMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export function apiGet<T>(endpoint: string): Promise<T> {
  return fetch(BASE_URL + endpoint, {
    headers: {
      apikey: API_KEY,
    },
  }).then((response) => response.json());
}

export function apiMutate<T, D>(
  method: ApiMethod,
  endpoint: string,
  data: D,
): Promise<T> {
  return fetch(BASE_URL + endpoint, {
    method,
    headers: {
      apikey: API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}
