import http from "./http-client";

class DataService {
  get(id) {
    return http.get(`/products/${id}`);
  }
}

export default new DataService();
