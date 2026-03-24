import { PCareBaseApi } from './base.js';

export class Kesadaran extends PCareBaseApi {
	/**
	 * Get Data Kesadaran
	 */
	async get() {
		return this.send<{ count: number; list: KesadaranResult[] }>({
			name: `${this.name} Data Kesadaran`,
			path: '/kesadaran',
			method: 'GET'
		});
	}
}

interface KesadaranResult {
	/** kode sadar */
	kdSadar: string;

	/** nama sadar */
	nmSadar: string;
}
