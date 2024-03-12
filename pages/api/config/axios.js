import axios from "axios";

const URL_API = "https://cirebox-integration-notion.onrender.com";

function getApiUrl() {
  const api = axios.create({
    baseURL: URL_API,
  });

  api.interceptors.request.use((config) => {
    return config;
  });

  return api;
}

export const api = getApiUrl();