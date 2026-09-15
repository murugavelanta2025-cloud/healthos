import { LockKeyhole, Shield, Users } from 'lucide-react';

export default function FamilyPage(){
 const members=[['Alex','You','Full access'],['Maya','Partner','Shared wellness'],['Arjun','Child','Parent-managed'],['Ravi','Parent','Appointments only']];
 return <main className="content">
  <div className="eyebrow">Private by design</div><h1 style={{marginTop:8}}>Family Health</h1><p className="sub">One family view with granular permissions—shared where useful, private where necessary.</p>
  <div className="grid grid-2 mt-6">
   <div className="card"><div className="section-head"><h2>Family members</h2><Users size={18}/></div>{members.map(([a,b,c])=><div className="row" style={{padding:'13px 0',borderBottom:'1px solid var(--line)'}} key={a}><div><strong>{a}</strong><div className="metric-label">{b}</div></div><span className="chip">{c}</span></div>)}</div>
   <div className="card"><div className="section-head"><h2>Privacy controls</h2><LockKeyhole size={18}/></div><p className="sub">Family access is not all-or-nothing. Control what is shared across adults and what remains private.</p>{['Activity','Appointments','Medication adherence','Private medical documents'].map((x,i)=><div className="row" style={{padding:'12px 0',borderBottom:'1px solid var(--line)'}} key={x}><span>{x}</span><span className="chip">{i===3?'Private':'Shared'}</span></div>)}<div style={{padding:14,background:'#f3f6f3',borderRadius:14,marginTop:16}}><Shield size={16}/><div style={{fontWeight:700,marginTop:7}}>Permission-first</div><div className="metric-label" style={{marginTop:4}}>Adult family members never automatically receive the entire health record.</div></div></div>
  </div>
 </main>
}
