import { describe, expect, it } from 'vitest';
import jkn from '../jkn';

describe('PCare - Dokter', { timeout: 25_000 }, () => {
	it.concurrent('dataDokter()', async () => {
		const result = await jkn.pcare.dokter.get({ row: 1, limit: 10 });
		expect(result.metaData.code).toBe(200); // no example data
	});
});
