const BASE_URL = 'http://localhost:3001/api';

export const ALL_USERS = `${BASE_URL}/users`;
export const signUp = () => `${BASE_URL}/auth/signup`;
export const signIn = () => `${BASE_URL}/auth/signin`;
