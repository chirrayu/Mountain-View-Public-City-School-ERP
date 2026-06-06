import { Construction } from "lucide-react";
import Card from "./Card.jsx";

function EmptyState({ title = "Coming Soon", description }) {
  return (
    <Card className="flex min-h-[320px] flex-col items-center justify-center p-8 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary-fixed text-primary">
        <Construction size={28} aria-hidden="true" />
      </div>
      <h2 className="font-display text-xl font-bold text-on-surface dark:text-slate-50">{title}</h2>
      <p className="mt-2 max-w-xl text-on-surface-variant dark:text-slate-400">{description}</p>
    </Card>
  );
}

export default EmptyState;
