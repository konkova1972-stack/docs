import type { GenerationJob } from '../types';
export type ProviderResult={result_url:string};
export interface AIProvider{generate(job:GenerationJob):Promise<ProviderResult>}
