import { RESTDataSource } from "apollo-datasource-rest";
import "dotenv/config";

export class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_USERS;
  }

  getUser(userId: string) {
    return this.get(`/${userId}/`);
  }

  getJwt(email: string, password: string) {
    return this.post("/login", { email, password });
  }
}
