import logoImage from "../../assets/mountain-view-logo.png";

function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <img
        alt="Mountain View City Public School logo"
        className="h-11 w-11 shrink-0 rounded-lg object-contain"
        src={logoImage}
      />
      {!compact && (
        <div className="min-w-0">
          <p className="truncate font-display text-lg font-bold leading-6 text-primary dark:text-primary-fixed-dim">
            Mountain View
          </p>
          <p className="truncate text-xs font-semibold uppercase tracking-wide text-on-surface-variant dark:text-slate-400">
            Public School ERP
          </p>
        </div>
      )}
    </div>
  );
}

export default Logo;
