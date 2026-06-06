import { Bell, Menu, Moon, Search, Settings, Sun } from "lucide-react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import { useTheme } from "../../hooks/useTheme.js";
import { titleFromPath } from "../../utils/navigation.js";

function Navbar({ onMenuClick }) {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-30 border-b border-outline-variant bg-surface/95 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
      <div className="flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <button className="icon-button md:hidden" onClick={onMenuClick} type="button" aria-label="Open navigation menu">
            <Menu size={21} aria-hidden="true" />
          </button>
          <div className="min-w-0">
            <p className="truncate font-display text-lg font-bold text-primary dark:text-primary-fixed-dim">
              {titleFromPath(location.pathname)}
            </p>
            <Breadcrumbs />
          </div>
        </div>

        <div className="hidden min-w-[260px] max-w-md flex-1 items-center rounded-full border border-outline-variant bg-surface-container-low px-3 py-2 focus-within:ring-4 focus-within:ring-primary/15 dark:border-slate-700 dark:bg-slate-900 sm:flex">
          <Search className="mr-2 text-on-surface-variant dark:text-slate-400" size={18} aria-hidden="true" />
          <input
            className="w-full border-0 bg-transparent text-sm text-on-surface outline-none placeholder:text-outline dark:text-slate-100"
            placeholder="Quick search..."
            type="search"
          />
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <button className="icon-button" type="button" aria-label="View notifications">
            <Bell size={20} aria-hidden="true" />
            <span className="absolute mt-[-12px] ml-3 h-2 w-2 rounded-full bg-tertiary" />
          </button>
          <button className="icon-button" onClick={toggleTheme} type="button" aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
          </button>
          <button className="icon-button hidden lg:inline-flex" type="button" aria-label="Open settings">
            <Settings size={20} aria-hidden="true" />
          </button>
          <div className="ml-1 flex items-center gap-2 rounded-full p-1 pr-2 hover:bg-surface-container-low dark:hover:bg-slate-900">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-container text-sm font-bold text-on-primary-container">
              {user?.name?.charAt(0) || "M"}
            </div>
            <span className="hidden max-w-[120px] truncate text-sm font-bold text-on-surface dark:text-slate-100 lg:block">
              {user?.role}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
