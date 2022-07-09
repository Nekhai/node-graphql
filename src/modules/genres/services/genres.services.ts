import { RESTDataSource } from "apollo-datasource-rest";
import "dotenv/config";

export class GenresAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_GENERES;
  }

  getGenres() {
    return this.get("");
  }

  getGenre(genreId: string) {
    return this.get(`/${genreId}`);
  }
}
