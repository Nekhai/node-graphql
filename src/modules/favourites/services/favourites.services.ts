import { RESTDataSource } from "apollo-datasource-rest";
import "dotenv/config";

export class FavouritesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_FAVOURITES;
  }

  getFavourites() {
    return this.get("");
  }
}
