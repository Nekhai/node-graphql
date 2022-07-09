import { RESTDataSource } from "apollo-datasource-rest";
import "dotenv/config";
// import { Album } from "../../../types";

export class AlbumsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_ALBUMS;
  }

  getAlbums() {
    return this.get("");
  }

  getAlbum(albumId: string) {
    return this.get(`/${albumId}/`);
  }

  // addAlbum(album: Album) {
  //   this.post("", album);
  // }

  // async getAlbumBands(albumId: string, BandsAPI: any) {
  //   const album = await this.get(`/${albumId}/`);
  //   const bands = album.bandsIds.map((bandId: any) => BandsAPI.getBand(bandId));
  //   return bands;
  // }
}
