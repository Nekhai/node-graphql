import { RESTDataSource } from "apollo-datasource-rest";
import "dotenv/config";

export class BandsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_BANDS;
  }

  getAllBands() {
    return this.get("");
  }

  async getBand(bandId: string) {
    return this.get(`/${bandId}/`);
  }
}
