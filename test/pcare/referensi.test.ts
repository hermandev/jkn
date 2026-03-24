import { describe, expect, it } from 'vitest';
import jkn from '../jkn';

describe('PCare - Referensi', { timeout: 25_000 }, () => {
	it.concurrent('diagnosa() - 200 ok', async () => {
		const result = await jkn.pcare.referensi.diagnosa({ kode: 'A00', row: 1, limit: 10 });
		expect(result.metaData.code).toBe(200);
	});

	it.concurrent('dokter() - 200 ok', async () => {
		const result = await jkn.pcare.referensi.dokter({ row: 1, limit: 10 });
		expect(result.metaData.code).toBe(200);
	});

	it.concurrent('kesadaran() - 200 ok', async () => {
		const result = await jkn.pcare.referensi.kesadaran();
		expect(result.metaData.code).toBe(200);
	});

	it.concurrent('poli() - 200 ok', async () => {
		const result = await jkn.pcare.referensi.poli({ row: 1, limit: 10 });
		expect(result.metaData.code).toBe(200);
	});

	it.concurrent('alergi() - 200 ok', async () => {
		const result = await jkn.pcare.referensi.alergi({ kode: '01' });
		expect(result.metaData.code).toBe(200);
		expect(result.response?.list.map((d) => d.nmAlergi)).toContain('Seafood');
	});
});
