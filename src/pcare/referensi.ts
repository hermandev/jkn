import { PCareBaseApi } from './base.js';

export class Referensi extends PCareBaseApi {
	/**
	 * Get Data Alergi
	 * @param params param {kode = [01 = Makanan, 02 = Udara, 03 = Obat]}
	 */
	async alergi(params: {
		/** Kode Jenis Alergi [01 = Makanan, 02 = Udara, 03 = Obat] */
		kode: string;
	}) {
		return this.send<{ count: number; list: AlergiResult[] }>({
			name: `${this.name} Data Alergi`,
			path: ['/alergi/jenis/:kode', params],
			method: 'GET'
		});
	}

	/**
	 * Get Data Diagnosa
	 * @param params param {kode, row, limit}
	 */
	async diagnosa(params: {
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

	/**
	 * Get Data Dokter
	 * @param params params{row,limit}
	 */
	async dokter(params: {
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

	/**
	 * Get Data Kesadaran
	 */
	async kesadaran() {
		return this.send<{ count: number; list: KesadaranResult[] }>({
			name: `${this.name} Data Kesadaran`,
			path: '/kesadaran',
			method: 'GET'
		});
	}

	/**
	 * Get Data Poli FKTP
	 * @param params params{row, limit}
	 */
	async poli(params: { row: number; limit: number }) {
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

interface KesadaranResult {
	/** kode sadar */
	kdSadar: string;

	/** nama sadar */
	nmSadar: string;
}

interface DokterResult {
	/** kode dokter */
	kdDokter: string;

	/** nama dokter */
	nmDokter: string;
}

interface DiagnosaResult {
	/** kode diagnosa */
	kdDiag: string;

	/** nama diagnonsa */
	nmDiag: string;

	/** non-spesialis */
	nonSpesialis: boolean;
}

interface AlergiResult {
	/** kode alergi */
	kdAlergi: string;

	/** nama alergi */
	nmAlergi: string;
}
