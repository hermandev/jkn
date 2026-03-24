import { PCareBaseApi } from './base.js';

export class Dokter extends PCareBaseApi {
	async get(params: {
		/** Row data awal yang akan ditampilkan */
		row: number;

		/** Limit jumlah data yang akan ditampilkan */
		limit: number;
	}) {
		return this.send<{ count: number; list: DokterResult[] }>({
			name: `${this.name} Data Dokter`,
			path: ['/dokter/:row/:limit', params],
			method: 'GET'
		});
	}
}

interface DokterResult {
	/** kode dokter */
	kdDokter: string;

	/** nama dokter */
	nmDokter: string;
}
