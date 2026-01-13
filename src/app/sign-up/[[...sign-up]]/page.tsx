import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-neutral-light py-12 px-4 sm:px-6 lg:px-8">
      <SignUp
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
  );
}
