import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Promise | HBT Enterprises',
  description: 'The guarantees and commitments we make to every shopper at HBT Enterprises.',
};

export default function PromisePage() {
  const promises = [
    {
      title: "100% Genuine Products",
      description: "We are authorized dealers for all the brands we carry. You will never receive counterfeit or tampered goods from HBT."
    },
    {
      title: "Secure Transactions",
      description: "Your data is safe with us. Our payment gateways use industry-leading encryption to ensure your financial details remain completely secure."
    },
    {
      title: "Transparent Pricing",
      description: "What you see is what you pay. We hate hidden fees as much as you do. All taxes and standard shipping costs are clearly communicated."
    },
    {
      title: "Hassle-Free Returns",
      description: "If an item arrives damaged or defective, our return process is straightforward and designed to get your money back or a replacement sent immediately."
    },
    {
      title: "Dedicated Support",
      description: "Our customer service team doesn't rely on endless robotic loops. You will get real help from real people who understand our inventory."
    },
    {
      title: "Fast, Careful Shipping",
      description: "Electronics are fragile. Our logistical partners are vetted specifically for handling high-value appliances with the utmost care and speed."
    }
  ];

  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white tracking-tight mb-6">
            The <span className="text-accent">HBT</span> Promise
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Trust is earned. Here are the concrete commitments we make to ensure your shopping experience is completely stress-free.
          </p>
        </div>

        <div className="space-y-6">
          {promises.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-neutral-950 p-6 md:p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 flex gap-6 items-start hover:border-accent/40 transition-colors">
              <div className="shrink-0 mt-1">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
