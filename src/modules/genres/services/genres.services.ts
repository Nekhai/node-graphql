import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import "dotenv/config";
import { Genre } from "../../../types";

export class GenresAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_GENERES;
  }

  async willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", `Bearer ${this.context.token}`);
  }

  getGenres(limit: number, offset: number) {
    return this.get("", { limit, offset });
  }

  getGenre(genreId: string) {
    return this.get(`/${genreId}`);
  }

  createGenre(genreId: Genre) {
    return this.post("", genreId);
  }

  deleteGenre(genreId: string) {
    return this.delete(`/${genreId}/`);
  }

  updateGenre(genreId: string, genre: Genre) {
    return this.put(`/${genreId}/`, genre);
  }
}
