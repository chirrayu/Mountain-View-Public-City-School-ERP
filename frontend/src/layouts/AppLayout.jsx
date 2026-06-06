import { useState } from "react";
import { Outlet } from "react-router-dom";
import MobileDrawer from "../components/layout/MobileDrawer.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Sidebar from "../components/layout/Sidebar.jsx";

function AppLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-on-surface dark:bg-[#111d23] dark:text-slate-100">
      <div className="fixed inset-y-0 left-0 z-40 hidden w-64 md:block">
        <Sidebar />
      </div>
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <div className="flex min-h-screen flex-col md:pl-64">
        <Navbar onMenuClick={() => setDrawerOpen(true)} />
        <main className="mx-auto w-full max-w-7xl flex-1 space-y-6 px-4 py-6 md:px-8 md:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
