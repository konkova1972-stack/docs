export type GenerationMode='Photo to Video'|'AI Photoshoot'|'Enhance Photo'|'Face Swap';
export type JobStatus='pending'|'processing'|'completed'|'failed';
export type UploadedFile={id:string;originalName:string;url:string;mimeType:string;size:number;kind:'image'|'video'};
export type GenerationSettings={aspectRatio:string;duration:string;quality:string;results:number;advanced:boolean};
export type GenerationJob={id:string;mode:GenerationMode;prompt:string;uploaded_files:UploadedFile[];reference_video?:UploadedFile|null;settings:GenerationSettings;status:JobStatus;result_url?:string;created_at:string;completed_at?:string;favorite:boolean};
export type Balance={free_generations_total:number;free_generations_used:number;credits_balance:number;plan:string};
