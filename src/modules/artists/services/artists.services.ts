import { RESTDataSource } from "apollo-datasource-rest";
import "dotenv/config";

export class ArtistsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_ARTISTS;
  }

  getArtists() {
    return this.get("");
  }

  getArtist(artistsId: string) {
    return this.get(`/${artistsId}/`);
  }
}
