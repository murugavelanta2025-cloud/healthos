'use client';
import { useState } from 'react';
import { CheckCircle2, Dumbbell, Info, RefreshCw } from 'lucide-react';
import { workoutAdaptive, workoutNormal } from '@/lib/data';

export default function FitnessPage(){
 const [adaptive,setAdaptive]=useState(false);
 const data=adaptive?workoutAdaptive:workoutNormal;
 return <main className="content">
  <div className="eyebrow">Adaptive training</div><h1 style={{marginTop:8}}>Today's Push Workout</h1>
  <p className="sub">The workout engine reacts to your current recovery state instead of blindly following a static plan.</p>
  <div className="grid grid-2 mt-6">
   <div className="card"><div className="section-head"><div><div className="eyebrow">Current recovery</div><h2 style={{marginTop:5}}>{adaptive?'68':'74'} / 100</h2></div><Dumbbell size={20}/></div><div className="chip alert">Sleep ↓ · HRV ↓ · Load ↑</div><p className="sub">{adaptive?'Plan adapted: lower volume, moderate effort, no failure work.':'Normal plan is currently loaded.'}</p><div style={{display:'flex',gap:10,marginTop:14}}><button className="btn btn-primary" onClick={()=>setAdaptive(true)} disabled={adaptive}><RefreshCw size={15}/> {adaptive?'Workout adapted':'Adapt workout with AI'}</button><button className="btn btn-ghost" onClick={()=>setAdaptive(false)}>Reset</button></div></div>
   <div className="card"><div className="section-head"><h2>Why this changed</h2><Info size={18}/></div>{[['Sleep','-16%'],['HRV','-13%'],['Resting HR','+6 bpm'],['Training load','+18%']].map(([a,b])=><div className="row" style={{padding:'11px 0',borderBottom:'1px solid var(--line)'}} key={a}><span>{a}</span><strong>{b}</strong></div>)}<p className="sub" style={{marginTop:14}}>Recommendation is wellness-focused and not a medical diagnosis.</p></div>
  </div>
  <div className="card mt-6"><div className="section-head"><div><div className="eyebrow">Session</div><h2 style={{marginTop:5}}>{adaptive?'Adaptive Push':'Push Strength'}</h2></div><span className="chip"><CheckCircle2 size={13}/> Ready</span></div>
   <table className="table"><thead><tr><th>Exercise</th><th>Target</th><th>Effort</th><th>Status</th></tr></thead><tbody>{data.map(([a,b,c])=><tr key={a}><td style={{fontWeight:700}}>{a}</td><td>{b}</td><td>{c}</td><td><span className="chip">Planned</span></td></tr>)}</tbody></table>
  </div>
 </main>
}
