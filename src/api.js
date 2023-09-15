import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // Replace with your backend URL
    headers: {
      'Content-Type': 'application/json', // Add any default headers here
      // You can also include authentication headers if needed
    },
  });
  
  export default axiosInstance;