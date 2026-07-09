import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import { formatBDT } from "@/lib/projects-data";

export function EMICalculator({ price }: { price: number }) {
  const [principal, setPrincipal] = useState(Math.round(price * 0.7));
  const [rate, setRate] = useState(9);
  const [years, setYears] = useState(15);

  const { emi, total, interest } = useMemo(() => {
    const r = rate / 12 / 100;
    const n = years * 12;
    const emi = r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = emi * n;
    return { emi, total, interest: total - principal };
  }, [principal, rate, years]);

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-card-soft">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-gold/12 text-brand-gold">
          <Calculator className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">EMI Calculator</h3>
          <p className="text-xs text-muted-foreground">Estimate your monthly payment</p>
        </div>
      </div>

      <div className="mt-6 space-y-5">
        <Row label="Loan amount" value={formatBDT(principal)}>
          <input
            type="range"
            min={1_000_000}
            max={Math.max(price, 20_000_000)}
            step={100_000}
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full accent-brand-gold"
          />
        </Row>
        <Row label="Interest rate" value={`${rate.toFixed(2)} %`}>
          <input
            type="range"
            min={6}
            max={14}
            step={0.25}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full accent-brand-gold"
          />
        </Row>
        <Row label="Tenure" value={`${years} years`}>
          <input
            type="range"
            min={5}
            max={25}
            step={1}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full accent-brand-gold"
          />
        </Row>
      </div>

      <div className="mt-6 rounded-xl bg-primary p-5 text-primary-foreground">
        <div className="text-[11px] font-medium uppercase tracking-wider text-brand-gold">
          Monthly EMI
        </div>
        <div className="mt-1 text-3xl font-semibold">{formatBDT(Math.round(emi))}</div>
        <div className="mt-4 grid grid-cols-2 gap-4 border-t border-white/10 pt-4 text-sm">
          <div>
            <div className="text-white/60 text-xs">Total interest</div>
            <div className="font-semibold">{formatBDT(Math.round(interest))}</div>
          </div>
          <div>
            <div className="text-white/60 text-xs">Total payable</div>
            <div className="font-semibold">{formatBDT(Math.round(total))}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  children,
}: {
  label: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-xs font-medium">
        <span className="uppercase tracking-wider text-muted-foreground">{label}</span>
        <span className="text-foreground">{value}</span>
      </div>
      {children}
    </div>
  );
}