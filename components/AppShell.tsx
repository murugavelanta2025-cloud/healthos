'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Activity, Bot, Dumbbell, FileHeart, HeartPulse, Home, Salad, Users, Bell, Search, Sparkles } from 'lucide-react';

const items = [
  ['/', 'Today', Home],
  ['/health-twin', 'Health Twin', HeartPulse],
  ['/nutrition', 'Nutrition', Salad],
  ['/fitness', 'Fitness', Dumbbell],
  ['/medical', 'Medical', FileHeart],
  ['/family', 'Family', Users],
  ['/ai', 'AI Coach', Bot],
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark"><Activity size={18} /></div>
          <div className="brand-name">HEALTHOS</div>
        </div>
        <nav className="nav">
          {items.map(([href, label, Icon]) => {
            const ActiveIcon = Icon as React.ComponentType<{ size?: number }>;
            const active = pathname === href;
            return <Link key={href as string} href={href as string} className={active ? 'active' : ''}>
              <ActiveIcon size={18} /><span>{label as string}</span>
            </Link>;
          })}
        </nav>
        <div className="sidebar-foot">
          <div className="eyebrow">Personal Health Twin</div>
          <div style={{fontSize:13,fontWeight:700,marginTop:5}}>Synced 2 min ago</div>
          <div style={{fontSize:11,color:'var(--muted)',marginTop:3}}>3 data sources active</div>
        </div>
      </aside>
      <section className="main">
        <header className="topbar">
          <div className="topbar-title">{pathname === '/' ? 'Good morning, Alex' : pathname.split('/')[1]?.replace('-', ' ')}</div>
          <div className="topbar-actions">
            <button className="icon-btn" aria-label="Search"><Search size={17}/></button>
            <button className="icon-btn" aria-label="Notifications"><Bell size={17}/></button>
            <div className="avatar">AS</div>
          </div>
        </header>
        {children}
      </section>
    </div>
  );
}
