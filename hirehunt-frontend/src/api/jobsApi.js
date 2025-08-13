import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

const mockJobs = [
  { id: '1', title: 'Spring Boot Developer', company: 'Tech Corp', description: 'Experienced Spring Boot developer needed for backend API development.', location: 'Remote', salaryRange: '90,000', jobType: 'Full-time', postedDate: new Date() },
  { id: '2', title: 'React.js Developer', company: 'Web Solutions', description: 'Front-end developer with expertise in React.js and modern JavaScript.', location: 'New York, NY', salaryRange: '80,000', jobType: 'Full-time', postedDate: new Date() },
  { id: '3', title: 'Full Stack Engineer', company: 'Innovate Labs', description: 'Seeking a full stack engineer with skills in both Spring Boot and React.js.', location: 'Austin, TX', salaryRange: '100,000', jobType: 'Full-time', postedDate: new Date() },
];

const getAuthHeaders = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const fetchAllJobs = async (params = {}) => {
  try {
    const response = await axios.get('/api/jobs', { params });
    return response.data;
  } catch (err) {
    console.error('Failed to fetch from backend, returning mock data:', err);
    return mockJobs;
  }
};

export const createJob = async (jobData, token) => {
  const response = await axios.post('/api/jobs', jobData, getAuthHeaders(token));
  return response.data;
};