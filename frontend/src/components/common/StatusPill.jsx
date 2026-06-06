const toneMap = {
  success: "bg-secondary-container text-on-secondary-container",
  info: "bg-primary-fixed text-primary",
  danger: "bg-error-container text-error",
  neutral: "bg-surface-container-high text-on-surface-variant dark:bg-slate-800 dark:text-slate-300",
};

function StatusPill({ children, tone = "neutral" }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${toneMap[tone]}`}>
      {children}
    </span>
  );
}

export default StatusPill;
