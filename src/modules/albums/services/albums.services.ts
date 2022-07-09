import { RESTDataSource } from "apollo-datasource-rest";
import "dotenv/config";

export class AlbumsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_ALBUMS;
  }

  getAllAlbums() {
    return this.get("");
  }

  getAlbum(albumId: string) {
    return this.get(`/${albumId}/`);
  }

  // async getAlbumBands(albumId: string, BandsAPI: any) {
  //   const album = await this.get(`/${albumId}/`);
  //   const bands = album.bandsIds.map((bandId: any) => BandsAPI.getBand(bandId));
  //   return bands;
  // }
}
