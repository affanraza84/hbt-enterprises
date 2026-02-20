import type { Metadata } from 'next';
import { HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ | HBT Enterprises',
  description: 'Frequently asked questions about shopping, shipping, and returns at HBT Enterprises.',
};

export default function FAQPage() {
  const faqs = [
    {
      q: "How long does shipping normally take?",
      a: "Standard shipping takes 3-5 business days depending on your location. Heavy appliances like refrigerators and washing machines may require dedicated freight shipping, which typically takes 5-7 business days."
    },
    {
      q: "Do you offer installation services?",
      a: "Yes! Many of our major appliances come with free installation. If your product qualifies, our installation partners will contact you within 24 hours of delivery to schedule an appointment."
    },
    {
      q: "What is your return policy?",
      a: "We offer a 7-day hassle-free return policy for any damaged, defective, or incorrect items. Please ensure you keep the original packaging during this period to authorize a smooth return."
    },
    {
      q: "Are the products covered under warranty?",
      a: "Absolutely. All electronics and appliances sold on HBT Enterprises are 100% genuine and carry full manufacturer warranties. The exact duration varies by brand and category."
    },
    {
      q: "Can I cancel my order?",
      a: "Orders can be modified or canceled free of charge before they are dispatched from our warehouse. Once dispatched, standard return policies will apply."
    }
  ];

  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white tracking-tight">
            Frequently Asked <span className="text-accent">Questions</span>
          </h1>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-neutral-950 p-6 md:p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                {faq.q}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            Still have questions? We're here to help.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
