import { RESTDataSource } from "apollo-datasource-rest";
import "dotenv/config";

export class FavoritesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_FAVORITES;
  }

  getAllFavorites() {
    return this.get("");
  }
}
