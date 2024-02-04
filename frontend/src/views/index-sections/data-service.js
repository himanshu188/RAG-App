import http from "./http-client";

class DataService {
  get(id) {
    return http.get(`/products/${id}`);
  }

  getLLM(data) {
    return http.post("/query", data);
    // return http.post("/query", `{"query" : ${data}}`);
  }
}

export default new DataService();
