import axios from "axios";

const BASE_URL = process.env.BASE_URL || "/api";

const server = axios.create({ baseURL: BASE_URL });

export { server };
