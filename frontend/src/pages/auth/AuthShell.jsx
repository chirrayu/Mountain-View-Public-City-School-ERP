import Logo from "../../components/common/Logo.jsx";

function AuthShell({ children, title, subtitle, split = false }) {
  return (
    <main className="min-h-screen bg-background text-on-surface dark:bg-[#111d23] dark:text-slate-100">
      <div className="flex min-h-screen">
        {split && (
          <aside className="relative hidden w-5/12 overflow-hidden bg-primary p-12 text-on-primary lg:flex lg:flex-col lg:justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(185,244,116,0.22),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(162,201,255,0.24),transparent_32%)]" />
            <div className="relative z-10 max-w-lg">
              <div className="mb-8 inline-flex rounded-xl border border-white/20 bg-white/10 p-4">
                <Logo />
              </div>
              <h1 className="font-display text-4xl font-bold leading-tight">Empowering academic excellence</h1>
              <p className="mt-4 text-lg leading-7 text-white/80">
                Secure ERP access for administrators, teachers, students, and parents of Mountain View Public School.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-white/20 bg-white/10 p-4">
                  <p className="font-bold">Indian School Ready</p>
                  <p className="mt-1 text-sm text-white/75">Class, Section, Roll Number, Report Card, and Fee Receipt.</p>
                </div>
                <div className="rounded-lg border border-white/20 bg-white/10 p-4">
                  <p className="font-bold">Daily Attendance</p>
                  <p className="mt-1 text-sm text-white/75">Present, Absent, and Half Day status in one daily record.</p>
                </div>
              </div>
            </div>
          </aside>
        )}
        <section className="flex flex-1 items-center justify-center px-4 py-10 md:px-12">
          <div className="w-full max-w-[440px]">
            <div className="mb-8 flex justify-center">
              <Logo />
            </div>
            <div className="card p-6 shadow-modal md:p-8">
              <header className="mb-8 text-center">
                <h1 className="font-display text-2xl font-bold text-primary md:text-3xl">{title}</h1>
                <p className="mt-2 text-on-surface-variant dark:text-slate-400">{subtitle}</p>
              </header>
              {children}
            </div>
            <div className="mt-6 flex justify-center gap-5 text-xs font-semibold text-on-surface-variant dark:text-slate-400">
              <span>Privacy Policy</span>
              <span>Terms</span>
              <span>Accessibility</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AuthShell;
