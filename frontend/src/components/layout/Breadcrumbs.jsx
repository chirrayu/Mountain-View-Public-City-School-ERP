import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function humanize(segment) {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function Breadcrumbs() {
  const { pathname } = useLocation();
  const parts = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="hidden items-center gap-1 text-sm text-on-surface-variant dark:text-slate-400 md:flex">
      <Link className="inline-flex items-center gap-1 rounded-md px-1.5 py-1 hover:text-primary" to="/dashboard/admin">
        <Home size={14} aria-hidden="true" />
        ERP
      </Link>
      {parts.map((part, index) => {
        const href = `/${parts.slice(0, index + 1).join("/")}`;
        const isLast = index === parts.length - 1;
        return (
          <span className="inline-flex items-center gap-1" key={href}>
            <ChevronRight size={14} aria-hidden="true" />
            {isLast ? (
              <span className="font-semibold text-on-surface dark:text-slate-200">{humanize(part)}</span>
            ) : (
              <Link className="rounded-md px-1.5 py-1 hover:text-primary" to={href}>
                {humanize(part)}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
