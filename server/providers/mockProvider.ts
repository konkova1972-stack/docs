export async function generateMock(mode:string){return `/mock-result.svg?mode=${encodeURIComponent(mode)}&t=${Date.now()}`}
export const futureProviderEnv={AI_PROVIDER_API_KEY:process.env.AI_PROVIDER_API_KEY,AI_PROVIDER_BASE_URL:process.env.AI_PROVIDER_BASE_URL};
