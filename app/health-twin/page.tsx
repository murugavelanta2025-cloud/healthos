import { HeartPulse, TrendingDown, TrendingUp } from 'lucide-react';
import { HealthCard } from '@/components/HealthCard';
import { health } from '@/lib/data';

export default function HealthTwinPage(){
 return <main className="content">
  <div className="eyebrow">The living model</div><h1 style={{marginTop:8}}>Personal Health Twin</h1><p className="sub">Your longitudinal health model, built from your own patterns rather than generic targets.</p>
  <div className="grid grid-4 mt-6">
   <HealthCard label="Readiness" value="74" sub="Personal state" trend="down"/>
   <HealthCard label="Sleep baseline" value="7h 18m" sub="30-day average" trend="flat"/>
   <HealthCard label="RHR baseline" value="57 bpm" sub="30-day average" trend="up"/>
   <HealthCard label="Protein" value="145g" sub="Typical daily intake" trend="up"/>
  </div>
  <div className="grid grid-2 mt-6">
    <div className="card"><div className="section-head"><h2>State model</h2><HeartPulse size={18}/></div>
      {[
        ['Recovery','Below baseline','68',22],['Nutrition','On target','82',72],['Fitness','Improving','79',61],['Sleep','Needs attention','64',36]
      ].map(([a,b,c,p])=><div style={{marginTop:16}} key={a as string}><div className="row"><strong>{a as string}</strong><span className="chip">{b as string}</span></div><div className="progress" style={{marginTop:8}}><span style={{width:`${p}%`}}/></div><div className="metric-label" style={{marginTop:5}}>State score {c as string}</div></div>)}
    </div>
    <div className="card"><div className="section-head"><h2>What changed</h2><TrendingDown size={18}/></div>
      <div style={{display:'grid',gap:12}}>{[
        ['Sleep','6h 42m','16% below baseline'],['HRV','48 ms','13% below baseline'],['Training load','+18%','vs recent average'],['Weight','74.6 kg','-0.4 kg this month']
      ].map(([a,b,c])=><div className="row" key={a}><div><strong>{a}</strong><div className="metric-label">{c}</div></div><div style={{fontWeight:700}}>{b}</div></div>)}</div>
      <div style={{padding:14,background:'#edf5ef',borderRadius:14,marginTop:18}}><div className="eyebrow">AI interpretation</div><div style={{fontWeight:700,marginTop:6}}>Your current recovery signal is more important than any single metric.</div><p className="sub">HEALTHOS combines multiple signals before suggesting an action.</p></div>
    </div>
  </div>
 </main>
}
