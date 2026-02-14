import { CachedApi } from "../base.js";

export class PCare {
  private static instance: PCare | undefined;

  private constructor(private readonly cache: CachedApi) {}

  static getInstance(cache: CachedApi): PCare {
    if (!this.instance) {
      this.instance = new PCare(cache);
    }
    return this.instance;
  }
}
