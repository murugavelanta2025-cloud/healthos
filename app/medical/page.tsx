'use client';
import { useState } from 'react';
import { FileUp, Search, ShieldCheck } from 'lucide-react';
import { labs } from '@/lib/data';

export default function MedicalPage(){
 const [uploaded,setUploaded]=useState(false);
 return <main className="content">
  <div className="eyebrow">Health records</div><h1 style={{marginTop:8}}>Medical Intelligence</h1><p className="sub">Turn health documents and lab results into a structured longitudinal timeline.</p>
  <div className="grid grid-2 mt-6">
   <div className="card"><div className="section-head"><h2>Upload document</h2><FileUp size={18}/></div><div style={{padding:28,border:'1.5px dashed #bdc9c0',borderRadius:18,textAlign:'center'}}><div style={{fontWeight:700}}>Drop a report here</div><div className="metric-label" style={{marginTop:5}}>PDF, image or text export</div><button className="btn btn-soft" style={{marginTop:14}} onClick={()=>setUploaded(true)}>{uploaded?'Report processed ✓':'Choose file'}</button></div>{uploaded&&<div style={{marginTop:15,padding:12,borderRadius:12,background:'#edf5ef'}}><strong>annual_checkup.pdf</strong><div className="metric-label">4 lab results normalized and added to timeline.</div></div>}</div>
   <div className="card"><div className="section-head"><h2>AI summary</h2><ShieldCheck size={18}/></div><div style={{fontSize:15,fontWeight:700}}>Three notable trends</div><p className="sub">LDL is higher than January, Vitamin D is lower, while hemoglobin is stable. These are recorded trends, not diagnoses.</p><button className="btn btn-ghost"><Search size={15}/> Compare reports</button></div>
  </div>
  <div className="card mt-6"><div className="section-head"><h2>Lab timeline</h2><span className="chip">Evidence-linked</span></div><table className="table"><thead><tr><th>Marker</th><th>Value</th><th>Unit</th><th>Date</th><th>Change</th></tr></thead><tbody>{labs.map(([a,b,c,d,e])=><tr key={a}><td style={{fontWeight:700}}>{a}</td><td>{b}</td><td>{c}</td><td>{d}</td><td>{e}</td></tr>)}</tbody></table></div>
 </main>
}
