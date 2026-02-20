import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | HBT Enterprises',
  description: 'The terms and conditions governing the use of the HBT Enterprises platform.',
};

export default function TermsPage() {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="bg-white dark:bg-neutral-950 p-8 md:p-12 rounded-3xl shadow-sm border border-neutral-200 dark:border-neutral-800">
          <h1 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white tracking-tight mb-2">
            Terms & Conditions
          </h1>
          <p className="text-sm text-neutral-500 mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-8">
            Last Updated: October 2023
          </p>

          <div className="space-y-8 text-neutral-600 dark:text-neutral-400 prose dark:prose-invert max-w-none">
            
            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">1. Agreement to Terms</h2>
              <p className="leading-relaxed">
                By accessing our website, you agree to be bound by these Terms and Conditions and agree that you are responsible for agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this website are protected by copyright and trade mark law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">2. Use License</h2>
              <p className="leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on HBT Enterprises' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on HBT Enterprises' website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">3. Accuracy of Materials</h2>
              <p className="leading-relaxed">
                The materials appearing on HBT Enterprises' website could include technical, typographical, or photographic errors. HBT Enterprises does not warrant that any of the materials on its website are accurate, complete or current. HBT Enterprises may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">4. Links</h2>
              <p className="leading-relaxed">
                HBT Enterprises has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by HBT Enterprises of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">5. Modifications</h2>
              <p className="leading-relaxed">
                HBT Enterprises may revise these Terms and Conditions for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms and conditions.
              </p>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
}
