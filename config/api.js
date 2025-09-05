const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_STRAPI_URL || "http://localhost:1337",
  API_URL: `${import.meta.env.VITE_STRAPI_URL || "http://localhost:1337"}/api`,
};

export default API_CONFIG;
