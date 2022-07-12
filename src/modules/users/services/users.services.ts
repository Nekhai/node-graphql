import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import "dotenv/config";
import { User } from "../../../types";

export class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_USERS;
  }

  async willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", `Bearer ${this.context.token}`);
  }

  getUser(userId: string) {
    return this.get(`/${userId}/`);
  }

  getJwt(loginInfo: User) {
    return this.post("/login/", loginInfo);
  }

  getId() {
    return this.post("/verify/");
  }

  register(newUser: User) {
    return this.post("/register/", newUser);
  }
}
