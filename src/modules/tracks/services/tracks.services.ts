import { RESTDataSource } from "apollo-datasource-rest";
import "dotenv/config";

export class TracksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_TRACKS;
  }

  getAllTracks() {
    return this.get("");
  }

  getTrack(trackId: string) {
    return this.get(`/${trackId}`);
  }
}
