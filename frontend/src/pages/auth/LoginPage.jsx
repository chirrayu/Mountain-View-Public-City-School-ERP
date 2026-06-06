import { Eye, Lock, Mail, MoveRight } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button.jsx";
import AuthShell from "./AuthShell.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import { ROLES } from "../../utils/roles.js";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "admin@mvps.edu.in",
      password: "password",
      role: ROLES.ADMIN,
      remember: true,
    },
  });

  const onSubmit = async (values) => {
    const { redirectTo } = await login(values);
    navigate(location.state?.from?.pathname || redirectTo, { replace: true });
  };

  return (
    <AuthShell title="Welcome Back" subtitle="Sign in to Mountain View Public School ERP">
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <label className="block">
          <span className="mb-1 block text-sm font-bold">Work Email</span>
          <span className="relative block">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={18} />
            <input
              className="input-field pl-12"
              type="email"
              placeholder="name@mvps.edu.in"
              {...register("email", { required: true })}
            />
          </span>
        </label>

        <label className="block">
          <span className="mb-1 flex items-center justify-between text-sm font-bold">
            Password
            <Link className="text-xs text-primary hover:underline" to="/forgot-password">
              Forgot Password?
            </Link>
          </span>
          <span className="relative block">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={18} />
            <input
              className="input-field px-12"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              {...register("password", { required: true })}
            />
            <button
              aria-label="Show password"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-outline hover:text-primary"
              onClick={() => setShowPassword((value) => !value)}
              type="button"
            >
              <Eye size={18} />
            </button>
          </span>
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-bold">Login Role</span>
          <select className="input-field" {...register("role")}>
            {Object.values(ROLES).map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2 text-sm text-on-surface-variant dark:text-slate-400">
          <input className="h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" {...register("remember")} />
          Stay signed in for 30 days
        </label>

        <Button className="w-full" disabled={formState.isSubmitting} type="submit">
          {formState.isSubmitting ? "Authenticating..." : "Sign In"}
          <MoveRight size={18} aria-hidden="true" />
        </Button>
      </form>
    </AuthShell>
  );
}

export default LoginPage;
