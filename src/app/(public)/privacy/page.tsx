import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | HBT Enterprises',
  description: 'Learn how HBT Enterprises protects and manages your personal data and privacy online.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="bg-white dark:bg-neutral-950 p-8 md:p-12 rounded-3xl shadow-sm border border-neutral-200 dark:border-neutral-800">
          <h1 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-neutral-500 mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-8">
            Last Updated: October 2023
          </p>

          <div className="space-y-8 text-neutral-600 dark:text-neutral-400 prose dark:prose-invert max-w-none">
            
            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                HBT Enterprises ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">2. The Data We Collect</h2>
              <p className="leading-relaxed mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                <li><strong>Financial Data</strong> includes bank account and payment card details (managed securely by our payment processors).</li>
                <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products you have purchased from us.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">3. How We Use Your Data</h2>
              <p className="leading-relaxed">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to register you as a new customer, process and deliver your order, manage our relationship with you, and to improve our website, products/services, marketing, or customer relationships.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">4. Data Security</h2>
              <p className="leading-relaxed">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. At HBT Enterprises, all sensitive data exchanges run through highly encrypted SSL channels.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">5. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this privacy policy or our privacy practices, please contact our data grievance officer at support@hbtenterprises.com.
              </p>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
}
