import { ArrowLeft, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button.jsx";
import AuthShell from "./AuthShell.jsx";

function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit } = useForm({ defaultValues: { email: "" } });

  return (
    <AuthShell split title="Forgot Password?" subtitle="Enter your registered email to receive a secure reset link.">
      {sent ? (
        <div className="rounded-lg border border-secondary-container bg-secondary-container/40 p-4 text-on-secondary-container">
          Reset instructions have been sent if the email is registered with Mountain View ERP.
        </div>
      ) : (
        <form className="space-y-5" onSubmit={handleSubmit(() => setSent(true))}>
          <label className="block">
            <span className="mb-1 block text-sm font-bold">Registered Email</span>
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
          <Button className="w-full" type="submit">
            Send Reset Link
            <Send size={18} aria-hidden="true" />
          </Button>
        </form>
      )}
      <Link className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline" to="/login">
        <ArrowLeft size={16} aria-hidden="true" />
        Back to sign in
      </Link>
    </AuthShell>
  );
}

export default ForgotPasswordPage;
