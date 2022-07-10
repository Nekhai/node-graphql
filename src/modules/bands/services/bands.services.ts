import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import "dotenv/config";
import { Band } from "../../../types";

export class BandsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_BANDS;
  }

  async willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", `Bearer ${this.context.token}`);
  }

  getBands(limit: number, offset: number) {
    return this.get("", { limit, offset });
  }

  getBand(bandId: string) {
    return this.get(`/${bandId}/`);
  }

  createBand(band: Band) {
    return this.post("", band);
  }

  deleteBand(bandId: string) {
    return this.delete(`/${bandId}/`);
  }

  updateBand(bandId: string, band: Band) {
    return this.put(`/${bandId}/`, band);
  }
}
