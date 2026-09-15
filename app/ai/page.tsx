'use client';
import { useState } from 'react';
import { Bot, Send, Sparkles } from 'lucide-react';

export default function AIPage(){
 const [messages,setMessages]=useState<{role:'ai'|'user';text:string}[]>([
  {role:'ai',text:'I have your current recovery, training, nutrition and sleep context. Ask me what changed or what you should do next.'},
 ]);
 const [input,setInput]=useState('');
 const [scenario,setScenario]=useState('overtraining');
 function send(){ if(!input.trim()) return; const q=input.trim(); setInput(''); setMessages(m=>[...m,{role:'user',text:q},{role:'ai',text:q.toLowerCase().includes('train')?'I would reduce today’s push volume. Sleep is 16% below your baseline, HRV is 13% below baseline, resting HR is elevated, and training load is up 18%. The safest adaptive action is to reduce working sets by about 20% and avoid failure work.':'Based on the current Health Twin, recovery is the main bottleneck today. I would prioritize sleep tonight and keep training moderate.'}]); }
 return <main className="content">
  <div className="eyebrow">Adaptive health intelligence</div><h1 style={{marginTop:8}}>AI Coach</h1><p className="sub">A tool-using assistant grounded in your actual HEALTHOS data.</p>
  <div className="grid grid-2 mt-6">
   <div className="card chat"><div className="messages">{messages.map((m,i)=><div key={i} className={`msg ${m.role}`}>{m.text}</div>)}</div><div className="composer"><input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="Ask: Should I train heavy today?"/><button className="btn btn-primary" onClick={send}><Send size={15}/></button></div></div>
   <div className="card"><div className="section-head"><h2>Run a scenario</h2><Sparkles size={18}/></div><div className="scenario">{['overtraining','sleep loss','nutrition deficit','lab trend','improvement'].map(s=><button key={s} className={scenario===s?'selected':''} onClick={()=>setScenario(s)}>{s}</button>)}</div><div style={{marginTop:18,padding:16,borderRadius:16,background:'#edf5ef'}}><div className="eyebrow">Selected</div><div style={{fontSize:20,fontWeight:700,marginTop:5}}>{scenario}</div><p className="sub">Run this deterministic demo scenario to see how HEALTHOS updates health state and recommendations.</p><button className="btn btn-primary" onClick={()=>setMessages(m=>[...m,{role:'ai',text:`Scenario “${scenario}” applied. Health state recalculated and recommendations updated.`}])}><Bot size={15}/> Run simulation</button></div><div style={{marginTop:18}}><div className="eyebrow">Agent routing</div><div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:9}}>{['Recovery','Fitness','Nutrition','Health'].map(x=><span className="chip" key={x}>{x} Agent</span>)}</div></div></div>
  </div>
 </main>
}
