import type{GenerationMode}from'../types';
const modes:GenerationMode[]=['Photo to Video','AI Photoshoot','Enhance Photo','Face Swap'];
export default function ModeSelector({mode,setMode}:{mode:GenerationMode;setMode:(m:GenerationMode)=>void}){return <div className="flex gap-2 overflow-x-auto pb-1">{modes.map(m=><button key={m} onClick={()=>setMode(m)} className={`whitespace-nowrap rounded-2xl border px-4 py-3 font-semibold ${mode===m?'border-purple-400 bg-purple-500/25 shadow-glow':'border-white/10 bg-white/5 hover:bg-white/10'}`}>✨ {m}</button>)}</div>}
