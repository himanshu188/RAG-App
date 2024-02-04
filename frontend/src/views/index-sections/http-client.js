import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8001/v1/llm",
  headers: {
    "Content-type": "application/json",
  },
});
