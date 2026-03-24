import { CachedApi } from '../base.js';
import { Diagnosa } from './diagnosa.js';
import { Dokter } from './dokter.js';
import { Kesadaran } from './kesadaran.js';
import { Poli } from './poli.js';

export class PCare {
	private static instance: PCare | undefined;

	private constructor(private readonly cache: CachedApi) {}

	static getInstance(cache: CachedApi): PCare {
		if (!this.instance) {
			this.instance = new PCare(cache);
		}
		return this.instance;
	}

	get diagnosa() {
		return this.cache.get('pcare_diagnosa', Diagnosa);
	}

	get dokter() {
		return this.cache.get('pcare_dokter', Dokter);
	}

	get kesadaran() {
		return this.cache.get('pcare_kesadaran', Kesadaran);
	}

	get poli() {
		return this.cache.get('pcare_poli_fktp', Poli);
	}
}
