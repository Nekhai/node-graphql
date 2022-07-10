import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import "dotenv/config";

export class FavouritesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_FAVOURITES;
  }

  async willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", `Bearer ${this.context.token}`);
  }

  getFavourites() {
    return this.get("");
  }

  addToFavourites(type: string, userId: string, id: string) {
    console.log({ type, userId, id });
    return this.post("/add/", { type, userId, id });
  }
}
