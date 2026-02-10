import { SignIn } from "@clerk/nextjs";
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
        <Link href="/" className="flex items-center justify-center gap-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
        </Link>
        <div className="flex justify-center">
             <div className="w-16 h-16 rounded-xl bg-[#0A2540] dark:bg-white flex items-center justify-center shadow-lg">
                  <span className="text-white dark:text-[#0A2540] font-['Orbitron'] font-black text-xl tracking-widest">
                    HBT
                  </span>
             </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-neutral-900 dark:text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md flex justify-center">
        <SignIn 
          appearance={{
            elements: {
              formButtonPrimary: 
                "bg-accent hover:bg-accent/90 text-primary-dark text-sm normal-case",
              card: "bg-white dark:bg-neutral-default shadow-xl border border-neutral-default rounded-2xl",
              headerTitle: "text-primary font-heading font-bold",
              headerSubtitle: "text-neutral-dark",
              socialButtonsBlockButton: "border-neutral-default text-primary hover:bg-neutral-light",
              formFieldLabel: "text-primary",
              formFieldInput: "bg-neutral-light border-neutral-default text-primary focus:border-accent focus:ring-accent",
              footerActionLink: "text-accent hover:text-accent/80",
            },
          }}
        />
      </div>
    </div>
  );
}
