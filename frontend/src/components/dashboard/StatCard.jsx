const toneClass = {
  primary: "bg-primary-fixed text-primary",
  secondary: "bg-secondary-fixed text-secondary",
  tertiary: "bg-tertiary-fixed text-tertiary",
};

function StatCard({ icon: Icon, label, value, meta, tone = "primary" }) {
  return (
    <article className="card p-5 hover:shadow-lift">
      <div className="flex items-start justify-between gap-3">
        <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${toneClass[tone]}`}>
          <Icon size={22} aria-hidden="true" />
        </div>
        <span className="rounded-full bg-surface-container-low px-2 py-1 text-xs font-bold text-on-surface-variant dark:bg-slate-800 dark:text-slate-300">
          2026-27
        </span>
      </div>
      <p className="mt-5 text-sm font-bold text-on-surface-variant dark:text-slate-400">{label}</p>
      <p className="mt-1 font-display text-3xl font-bold text-on-surface dark:text-slate-50">{value}</p>
      <p className="mt-2 text-sm text-on-surface-variant dark:text-slate-400">{meta}</p>
    </article>
  );
}

export default StatCard;
