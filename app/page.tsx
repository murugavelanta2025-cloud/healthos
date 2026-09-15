'use client';

import { Activity, ArrowRight, CheckCircle2, Droplets, Moon, Zap } from 'lucide-react';
import { HealthCard } from '@/components/HealthCard';
import { evidence, health, timeline } from '@/lib/data';

export default function HomePage() {
  return <main className="content">
    <div className="hero">
      <div className="hero-row">
        <div>
          <div className="eyebrow">Personal health twin · Tue, Sep 15</div>
          <h1 style={{marginTop:8}}>Your health, connected.</h1>
          <p className="sub" style={{maxWidth:700}}>HEALTHOS combines your recovery, nutrition, training, sleep and health records into one adaptive daily plan.</p>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:18}}>
            <span className="chip"><Activity size={13}/> 3 sources synced</span>
            <span className="chip"><CheckCircle2 size={13}/> Baseline active</span>
          </div>
        </div>
        <div className="readiness">
          <div className="eyebrow">Health readiness</div>
          <div className="readiness-score">{health.readiness}</div>
          <div className="metric-label">Below your 30-day peak</div>
          <div className="readiness-bar"><div className="readiness-fill"/></div>
        </div>
      </div>
    </div>

    <div className="grid grid-4 mt-6">
      <HealthCard label="Sleep" value={health.sleep} sub="16% below baseline" trend="down" />
      <HealthCard label="HRV" value={health.hrv} sub="13% below baseline" trend="down" />
      <HealthCard label="Resting HR" value={health.rhr} sub="+6 bpm vs baseline" trend="up" />
      <HealthCard label="Steps" value={health.steps} sub="Target 8,000" trend="up" />
    </div>

    <div className="grid grid-2 mt-6">
      <div className="insight">
        <div className="row"><div className="eyebrow" style={{color:'#b8c9bc'}}>AI insight</div><SparklesIcon /></div>
        <h2 style={{marginTop:8,color:'white'}}>Recovery is slightly below your normal baseline.</h2>
        <p>Your sleep is down, HRV is lower and recent training load is elevated. HEALTHOS recommends a lighter push session today.</p>
        <div className="evidence">
          {evidence.map(([name, delta, note]) => <div className="evidence-row" key={name}><span>{name}</span><strong>{delta}</strong><span style={{color:'#aebeaf'}}>{note}</span></div>)}
        </div>
        <div style={{display:'flex',gap:10,marginTop:17}}><a href="/fitness" className="btn" style={{background:'#f1f6f2',color:'#173f2a'}}>Open adaptive workout <ArrowRight size={15}/></a></div>
      </div>

      <div className="card">
        <div className="section-head"><h2>Today</h2><span className="chip">Live timeline</span></div>
        <div className="timeline">
          {timeline.map(([time,title,copy]) => <div className="timeline-item" key={time+title}><div className="dot"/><div className="timeline-time">{time}</div><div className="timeline-title">{title}</div><div className="timeline-copy">{copy}</div></div>)}
        </div>
      </div>
    </div>

    <div className="grid grid-3 mt-6">
      <div className="card"><div className="section-head"><h2>Nutrition</h2><SaladIcon /></div><div className="row"><strong>1,840 kcal</strong><span className="metric-label">/ 2,300</span></div><div className="progress mt-4"><span style={{width:'80%'}}/></div><div className="row" style={{marginTop:14}}><span className="metric-label">Protein</span><strong>{health.protein} / 150g</strong></div><div className="row" style={{marginTop:8}}><span className="metric-label">Hydration</span><strong>{health.hydration} / 2.8L</strong></div></div>
      <div className="card"><div className="section-head"><h2>Training</h2><DumbbellIcon /></div><div style={{fontSize:14,fontWeight:700}}>Push · Adaptive</div><p className="sub">Volume reduced ~20% based on current recovery state.</p><a className="btn btn-soft" href="/fitness">View workout <ArrowRight size={15}/></a></div>
      <div className="card"><div className="section-head"><h2>Next best action</h2><Zap size={18}/></div><div style={{fontSize:17,fontWeight:700}}>Prioritize sleep tonight</div><p className="sub">Your current signals suggest recovery is the biggest controllable bottleneck today.</p><span className="chip"><Moon size={12}/> Sleep target 7h 30m</span></div>
    </div>
  </main>;
}
function SparklesIcon(){ return <Activity size={18} color="#b8c9bc"/> }
function SaladIcon(){ return <Droplets size={18} color="#6c7770"/> }
function DumbbellIcon(){ return <Activity size={18} color="#6c7770"/> }
