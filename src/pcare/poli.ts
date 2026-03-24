import { PCareBaseApi } from './base.js';

export class Poli extends PCareBaseApi {
	/**
	 * Get Data Poli FKTP
	 * @param params params{row, limit}
	 */
	async get(params: { row: number; limit: number }) {
		return this.send<{ count: number; list: PoliResult[] }>({
			name: `${this.name} Data Poli FKTP`,
			path: ['/poli/fktp/:row/:limit', params],
			method: 'GET'
		});
	}
}

interface PoliResult {
	/** kode poliklinik */
	kdPoli: string;

	/** nama polikinink */
	nmPoli: string;

	/** poli sakit */
	poliSakit: boolean;
}
