import { PCareBaseApi } from './base.js';

export class Spesialis extends PCareBaseApi {
	/**
	 * Get Data Referensi Spesialis
	 */
	async get() {
		return this.send<{ count: number; list: SpesialisResult[] }>({
			name: `${this.name} Data Referensi Spesialis`,
			path: '/spesialis',
			method: 'GET'
		});
	}

	/**
	 * Get Data Referensi Sub Spesialis
	 * @param params params{kode}
	 */
	async sub(params: {
		/** Kode Spesialis */
		kode: string;
	}) {
		return this.send<{ count: number; list: SubSpesialisResult[] }>({
			name: `${this.name} Data Referensi Sub Spesialis`,
			path: ['/spesialis/:kode/subspesialis', params],
			method: 'GET'
		});
	}

	/**
	 * Get Data Referensi Sarana
	 */
	async sarana() {
		return this.send<{ count: number; list: SaranaResult[] }>({
			name: `${this.name} Data Referensi Sarana`,
			path: '/spesialis/sarana',
			method: 'GET'
		});
	}
}

interface SpesialisResult {
	/** kode spesialis */
	kdSpesialis: string;

	/** nama spesialis */
	nmSpesialis: string;
}

interface SubSpesialisResult {
	/** kode sub spesialis */
	kdSubSpesialis: string;

	/** nama sub spesialis */
	nmSubSpesialis: string;

	/** kode poli rujuk  */
	kdPoliRujuk: string;
}

interface SaranaResult {
	/** kode sarana */
	kdSarana: string;

	/** nama sarana */
	nmSarana: string;
}
