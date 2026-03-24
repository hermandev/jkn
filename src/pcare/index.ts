import { CachedApi } from '../base.js';
import { Referensi } from './referensi.js';

export class PCare {
	private static instance: PCare | undefined;

	private constructor(private readonly cache: CachedApi) {}

	static getInstance(cache: CachedApi): PCare {
		if (!this.instance) {
			this.instance = new PCare(cache);
		}
		return this.instance;
	}

	get referensi() {
		return this.cache.get('pcare_referensi', Referensi);
	}
}
