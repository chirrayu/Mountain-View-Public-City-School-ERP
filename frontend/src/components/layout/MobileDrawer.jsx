import { X } from "lucide-react";
import Sidebar from "./Sidebar.jsx";

function MobileDrawer({ open, onClose }) {
  return (
    <div className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}>
      <button
        aria-label="Close navigation menu"
        className={`absolute inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
        type="button"
      />
      <div
        className={`absolute left-0 top-0 h-full w-72 max-w-[85vw] transform bg-surface transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          aria-label="Close navigation menu"
          className="icon-button absolute right-3 top-3 z-10"
          onClick={onClose}
          type="button"
        >
          <X size={20} />
        </button>
        <Sidebar onNavigate={onClose} />
      </div>
    </div>
  );
}

export default MobileDrawer;
