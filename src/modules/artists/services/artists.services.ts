import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import "dotenv/config";
import { Artist } from "../../../types";

export class ArtistsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_ARTISTS;
  }

  async willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", `Bearer ${this.context.token}`);
  }

  getArtists(limit: number, offset: number) {
    return this.get("", { limit, offset });
  }

  getArtist(artistsId: string) {
    return this.get(`/${artistsId}/`);
  }

  createArtist(artist: Artist) {
    return this.post("", artist);
  }

  deleteArtist(artistsId: string) {
    return this.delete(`/${artistsId}/`);
  }

  updateArtist(artistsId: string, artist: Artist) {
    return this.put(`/${artistsId}/`, artist);
  }
}
