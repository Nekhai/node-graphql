import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import "dotenv/config";
import { Album } from "../../../types";

export class AlbumsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_ALBUMS;
  }

  async willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", `Bearer ${this.context.token}`);
  }

  getAlbums() {
    return this.get("");
  }

  getAlbum(albumId: string) {
    return this.get(`/${albumId}/`);
  }

  createAlbum(album: Album) {
    return this.post("/", album);
  }

  deleteAlbum(albumId: string) {
    return this.delete(`/${albumId}/`);
  }

  updateAlbum(albumId: string, album: Album) {
    return this.put(`/${albumId}/`, album);
  }
}
