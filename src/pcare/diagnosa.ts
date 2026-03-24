import { PCareBaseApi } from './base.js';

export class Diagnosa extends PCareBaseApi {
	async get(params: {
		/** Kode atau nama diagnosa */
		kode: string;

		/** Row data awal yang akan ditampilkan */
		row: number;

		/** Limit jumlah data yang akan ditampilkan */
		limit: number;
	}) {
		return this.send<{ count: number; list: DiagnosaResult[] }>({
			name: `${this.name} Data Diagnosa`,
			path: ['/diagnosa/:kode/:row/:limit', params],
			method: 'GET'
		});
	}
}

interface DiagnosaResult {
	/** kode diagnosa */
	kdDiag: string;

	/** nama diagnonsa */
	nmDiag: string;

	/** non-spesialis */
	nonSpesialis: boolean;
}
