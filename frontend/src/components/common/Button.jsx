function Button({ children, variant = "primary", className = "", ...props }) {
  const variants = {
    primary:
      "bg-primary text-on-primary hover:bg-[#004881] focus:ring-primary/25 shadow-sm",
    secondary:
      "border border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface-container-high dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800",
    ghost:
      "text-on-surface-variant hover:bg-surface-container-high dark:text-slate-300 dark:hover:bg-slate-800",
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition active:scale-[0.98] focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
