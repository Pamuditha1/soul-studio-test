const PORT = process.env.REACT_APP_API_PORT || 3003;
const API = process.env.REACT_APP_API || `http://localhost:${PORT}/api`;

export const api = API;
