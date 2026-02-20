import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | HBT Enterprises',
  description: 'Legal disclaimer and limitation of liability for HBT Enterprises operations.',
};

export default function DisclaimerPage() {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="bg-white dark:bg-neutral-950 p-8 md:p-12 rounded-3xl shadow-sm border border-neutral-200 dark:border-neutral-800">
          <h1 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white tracking-tight mb-2">
            Disclaimer
          </h1>
          <p className="text-sm text-neutral-500 mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-8">
            Last Updated: October 2023
          </p>

          <div className="space-y-8 text-neutral-600 dark:text-neutral-400 prose dark:prose-invert max-w-none">
            
            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">General Disclaimer</h2>
              <p className="leading-relaxed">
                The information provided by HBT Enterprises ("we," "us," or "our") on our mobile application or website is for general informational purposes only. All information on the Site and our mobile application is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site or our mobile application.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">External Links Disclaimer</h2>
              <p className="leading-relaxed">
                The Site and our mobile application may contain (or you may be sent through the Site or our mobile application) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">Professional Disclaimer</h2>
              <p className="leading-relaxed">
                The Site cannot and does not contain technical advice. The technical information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of technical advisory service. The use or reliance of any information contained on this site or our mobile application is solely at your own risk.
              </p>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
}
