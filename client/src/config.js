export default {
    services: {
      host: process.env.REACT_APP_SERVICES_HOST || process.env.REACT_APP_SOCKET || "http://localhost:5000" ,
      socket : process.env.REACT_APP_SOCKET || "http://localhost:5000"
    }
  }