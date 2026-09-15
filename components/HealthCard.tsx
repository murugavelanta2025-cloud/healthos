import { ArrowDownRight, ArrowUpRight, Minus } from 'lucide-react';

export function HealthCard({ label, value, sub, trend }: { label:string; value:string; sub:string; trend?:'up'|'down'|'flat' }) {
  const Icon = trend === 'up' ? ArrowUpRight : trend === 'down' ? ArrowDownRight : Minus;
  return <div className="card metric">
    <div className="metric-top">
      <div className="metric-label">{label}</div>
      <Icon size={16} className={trend === 'down' ? 'trend-down' : 'trend-up'} />
    </div>
    <div className="metric-value">{value}</div>
    <div className="metric-label" style={{marginTop:7}}>{sub}</div>
  </div>;
}
