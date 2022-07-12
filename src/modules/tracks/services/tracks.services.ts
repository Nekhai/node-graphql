import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import "dotenv/config";
import { Track } from "../../../types";
export class TracksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_TRACKS;
  }

  async willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", `Bearer ${this.context.token}`);
  }

  getTracks(limit: number, offset: number) {
    return this.get("", { limit, offset });
  }

  getTrack(trackId: string) {
    return this.get(`/${trackId}`);
  }
  createTrack(track: Track) {
    return this.post("", track);
  }

  deleteTrack(trackId: string) {
    return this.delete(`/${trackId}/`);
  }

  updateTrack(trackId: string, track: Track) {
    return this.put(`/${trackId}/`, track);
  }
}
