import { describe, expect, it } from 'vitest';
import jkn from '../jkn';

describe('PCare - Kesadaran', { timeout: 25_000 }, () => {
	it.concurrent('dataKesadaran()', async () => {
		const result = await jkn.pcare.kesadaran.get();
		expect(result.metaData.code).toBe(200); // no example data
	});
});
