import { describe, expect, it } from 'vitest';
import jkn from '../jkn';

describe('PCare - Diagnnosa', { timeout: 25_000 }, () => {
	it.concurrent('dataDiagnosa()', async () => {
		const result = await jkn.pcare.diagnosa.get({ kode: 'A00', row: 1, limit: 10 });
		expect(result.metaData.code).toBe(200); // no example data
	});
});
