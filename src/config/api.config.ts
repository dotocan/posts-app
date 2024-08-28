export const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const defaultHeaders = {
  "X-Auth": API_KEY,
};
