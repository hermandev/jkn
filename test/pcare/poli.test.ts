import { describe, expect, it } from 'vitest';
import jkn from '../jkn';

describe('PCare - Poli FKTP', { timeout: 25_000 }, () => {
	it.concurrent('dataPoliFKTP()', async () => {
		const result = await jkn.pcare.poli.get({ row: 1, limit: 10 });
		expect(result.metaData.code).toBe(200); // no example data
	});
});
