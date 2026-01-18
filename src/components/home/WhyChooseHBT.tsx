"use client";

import { Button } from "@/components/ui/Button";
import { 
  Tag, 
  CreditCard, 
  Truck, 
  RefreshCcw, 
  Handshake, 
  ShieldCheck, 
  Headphones 
} from "lucide-react";

const FEATURES = [
  {
    icon: Tag,
    title: "Best Offers & Prices",
    description: "Guaranteed lowest prices"
  },
  {
    icon: CreditCard,
    title: "Multiple Payment Modes",
    description: "Secure & flexible options"
  },
  {
    icon: Truck,
    title: "Scheduled Delivery",
    description: "& Easy Installations"
  },
  {
    icon: RefreshCcw,
    title: "No Cost EMI",
    description: "& Exchange Offers"
  },
  {
    icon: Handshake,
    title: "Exceptional Service",
    description: "Customer first approach"
  },
  {
    icon: ShieldCheck,
    title: "Extended Warranty",
    description: "Multiple plans available"
  }
];

export function WhyChooseHBT() {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4 text-neutral-900 dark:text-white">
            Why choose HBT?
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-600 dark:text-neutral-400 text-lg">
            HBT&apos;s Promise of Joyful Experience & Assured Quality, Creating Milestones Since 2024. 
            <br className="hidden sm:block" />
            Your trusted destination for Premium Consumer Electronics.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-0 mb-16">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center px-4 group 
                  ${index !== FEATURES.length - 1 ? 'lg:border-r border-neutral-200 dark:border-neutral-800' : ''}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-neutral-900 dark:text-white mb-2 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
            <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white font-bold rounded-full px-8 h-14 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all gap-2"
            >
                <Headphones className="w-5 h-5" />
                Connect to Expert
            </Button>
        </div>
      </div>
    </section>
  );
}
