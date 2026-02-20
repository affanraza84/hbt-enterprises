import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cancellation & Returns | HBT Enterprises',
  description: 'Learn about HBT Enterprises cancellation, returns, and refund policies.',
};

export default function CancellationPage() {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="bg-white dark:bg-neutral-950 p-8 md:p-12 rounded-3xl shadow-sm border border-neutral-200 dark:border-neutral-800">
          <h1 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white tracking-tight mb-2">
            Cancellation & Returns
          </h1>
          <p className="text-sm text-neutral-500 mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-8">
            Last Updated: October 2023
          </p>

          <div className="space-y-8 text-neutral-600 dark:text-neutral-400 prose dark:prose-invert max-w-none">
            
            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">1. Order Cancellations</h2>
              <p className="leading-relaxed">
                You can cancel your order for a full refund at any time before it has been dispatched from our fulfillment center. Simply log into your account, navigate to "Orders", and select "Cancel Order". If the order has already been dispatched, you will need to follow the Return guidelines outlined below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">2. Return Eligibility</h2>
              <p className="leading-relaxed mb-4">
                We accept returns under the following conditions within 7 days of delivery:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The item is defective, damaged in transit, or dead on arrival (DOA).</li>
                <li>You received an incorrect product or a product with missing accessories.</li>
                <li>The item is completely unused, uninstalled, and still sealed in its original manufacturer packaging (for change-of-mind returns).</li>
              </ul>
              <p className="leading-relaxed mt-4 text-sm text-neutral-500 italic">
                Note: Installed appliances (like wall-mounted TVs or split ACs) cannot be returned due to change-of-mind and must be routed through brand warranty protocols for defects.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">3. The Refund Process</h2>
              <p className="leading-relaxed">
                Once we receive and inspect your returned item, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed automatically to your original method of payment.
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Credit/Debit Cards:</strong> 5-7 business days.</li>
                <li><strong>UPI/Wallets:</strong> 24-48 hours.</li>
                <li><strong>Net Banking:</strong> 3-5 business days.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">4. How to Initiate a Return</h2>
              <p className="leading-relaxed">
                To initiate a return, please contact our support team at <strong>returns@hbtenterprises.com</strong> with your Order ID and photographic evidence of the issue (if damaged/defective). Our team will schedule a pickup within 48 hours of approval.
              </p>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
}
