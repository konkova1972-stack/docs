import type { AIProvider } from './types';
export const mockProvider:AIProvider={async generate(){return {result_url:'/mock-result.svg'}}};
