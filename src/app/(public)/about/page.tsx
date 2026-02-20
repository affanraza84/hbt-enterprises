import type { Metadata } from 'next';
import { ShieldCheck, Heart, Sparkles, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | HBT Enterprises',
  description: 'Learn about HBT Enterprises and our mission to deliver joy through premium electronics and appliances.',
};

export default function AboutPage() {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white tracking-tight">
            About <span className="text-accent">HBT Enterprises</span>
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Delivering the best in modern electronics and home appliances directly to your doorstep. We believe in quality, affordability, and selling joyfully.
          </p>
        </div>

        {/* Core Values / Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-neutral-950 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Verified Quality</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                Every product we sell is 100% genuine and sourced directly from top-tier brands like LG, Samsung, Sony, and more.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-950 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Customer First</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                Our support team genuinely cares about your shopping experience. From browsing to unboxing, we are here to help.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-950 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Modern Curation</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                We stay ahead of the curve, constantly updating our catalogs with the latest smart home tech and daily essentials.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-950 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
              <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Our Mission</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                To become the premier destination for trusted electronics globally while maintaining rapid, joyful delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Text Story */}
        <div className="bg-white dark:bg-neutral-950 p-8 md:p-12 rounded-3xl shadow-sm border border-neutral-200 dark:border-neutral-800">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Our Story</h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <p>
              HBT Enterprises was founded with a singular vision: to bridge the gap between people and the powerful technologies that make daily life easier, richer, and simply more enjoyable.
            </p>
            <p>
              What started as a small, passionate initiative has grown into a comprehensive platform offering thousands of electronics ranging from the latest high-fidelity soundbars to industrial-grade air conditioners. We do the heavy lifting of curating only the best brands so you don't have to.
            </p>
            <p>
              We firmly believe that shopping for appliances shouldn't be stressful. That's why we adopted our motto, "Selling Joyfully". When you shop with HBT, you're not just buying a product; you're joining a family that values your trust above all else.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
