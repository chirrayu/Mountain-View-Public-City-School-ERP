import { LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../common/Logo.jsx";
import Button from "../common/Button.jsx";
import { navigationItems } from "../../utils/navigation.js";
import { useAuth } from "../../context/AuthContext.jsx";

function Sidebar({ onNavigate }) {
  const { logout, user } = useAuth();

  return (
    <aside className="flex h-full flex-col gap-4 border-r border-outline-variant bg-surface-container-low px-3 py-6 dark:border-slate-800 dark:bg-slate-950">
      <div className="px-3">
        <Logo />
      </div>

      <div className="rounded-lg bg-surface-container-lowest p-3 dark:bg-slate-900">
        <p className="text-xs font-bold uppercase tracking-wide text-on-surface-variant dark:text-slate-400">
          Academic Session
        </p>
        <p className="mt-1 font-display text-lg font-bold text-on-surface dark:text-slate-100">2026-27</p>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto pr-1" aria-label="Main navigation">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold transition active:translate-x-0.5 ${
                  isActive
                    ? "bg-secondary-container text-on-secondary-container dark:bg-secondary dark:text-on-secondary"
                    : "text-on-surface-variant hover:bg-surface-container-high dark:text-slate-300 dark:hover:bg-slate-900"
                }`
              }
              key={item.href}
              onClick={onNavigate}
              to={item.href}
            >
              <Icon size={20} aria-hidden="true" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t border-outline-variant pt-4 dark:border-slate-800">
        <div className="mb-3 px-3">
          <p className="truncate text-sm font-bold text-on-surface dark:text-slate-100">{user?.name}</p>
          <p className="truncate text-xs text-on-surface-variant dark:text-slate-400">{user?.subtitle}</p>
        </div>
        <Button
          className="w-full"
          onClick={() => {
            logout();
            onNavigate?.();
          }}
          type="button"
          variant="secondary"
        >
          <LogOut size={18} aria-hidden="true" />
          Logout
        </Button>
      </div>
    </aside>
  );
}

export default Sidebar;
