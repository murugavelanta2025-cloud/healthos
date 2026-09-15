'use client';
import { useState } from 'react';
import { Camera, Plus, Sparkles } from 'lucide-react';

export default function NutritionPage(){
 const [protein,setProtein]=useState(118);
 return <main className="content">
  <div className="eyebrow">Fuel the goal</div><h1 style={{marginTop:8}}>Nutrition</h1><p className="sub">Track food quickly, then let HEALTHOS connect nutrition to your training and recovery.</p>
  <div className="grid grid-3 mt-6">
   <div className="card"><div className="eyebrow">Calories</div><div className="metric-value">1,840</div><div className="metric-label">of 2,300 kcal</div><div className="progress mt-4"><span style={{width:'80%'}}/></div></div>
   <div className="card"><div className="eyebrow">Protein</div><div className="metric-value">{protein}g</div><div className="metric-label">of 150g</div><div className="progress mt-4"><span style={{width:`${Math.round(protein/150*100)}%`}}/></div></div>
   <div className="card"><div className="eyebrow">Hydration</div><div className="metric-value">1.7L</div><div className="metric-label">of 2.8L</div><div className="progress mt-4"><span style={{width:'61%'}}/></div></div>
  </div>
  <div className="grid grid-2 mt-6">
   <div className="card"><div className="section-head"><h2>Quick log</h2><Plus size={18}/></div><div style={{display:'grid',gap:10}}><button className="btn btn-primary"><Camera size={16}/> Analyze meal photo</button><button className="btn btn-ghost">Log by text</button><button className="btn btn-ghost">Search food</button></div></div>
   <div className="card"><div className="section-head"><h2>AI nutrition insight</h2><Sparkles size={18}/></div><p className="sub">You are still short about 32g protein today. Because today's workout is adaptive, prioritize a protein-rich meal without adding excessive calories.</p><button className="btn btn-soft" onClick={()=>setProtein((v)=>Math.min(150,v+16))}>Add suggested protein meal +16g</button></div>
  </div>
 </main>
}
