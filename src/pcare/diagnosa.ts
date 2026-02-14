import { PCareBaseApi } from "./base.js";

export class Diagnosa extends PCareBaseApi {
  async get(params: { kode: string; row: number; limit: number }) {
    return this.send<{ count: number; list: DiagnosaResult[] }>({
      name: this.name + "Data Diagnosa",
      path: ["/diagnosa/:kode/:row/:limit", params],
      method: "GET",
    });
  }
}

interface DiagnosaResult {
  kdDiag: string;
  nmDiag: string;
  nonSpesialis: boolean;
}
