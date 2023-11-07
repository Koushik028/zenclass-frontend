import axios from "axios";

const instance = axios.create({
  // .. congigure axios baseURL
  baseURL: "https://zen-backend-h2i1.onrender.com"
});

export default instance;