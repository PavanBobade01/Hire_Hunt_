import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

export const login = async (credentials) => {
  try {
    const { data } = await axios.post(`${API_URL}/login`, credentials);
    const { token, role } = data;
    localStorage.setItem('token', token);
    localStorage.setItem('userRole', role);
    return { token, role };
  } catch (error) {
    throw error;
  }
};

export const register = async (payload) => {
  try {
    const { data } = await axios.post(`${API_URL}/register`, payload);
    const { token, role } = data;
    localStorage.setItem('token', token);
    localStorage.setItem('userRole', role);
    return { token, role };
  } catch (error) {
    throw error;
  }
};
