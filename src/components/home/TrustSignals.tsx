import { Truck, ShieldCheck, Clock, CreditCard } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $150",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Get help anytime",
  },
  {
    icon: ShieldCheck,
    title: "Official Warranty",
    description: "100% Authentic products",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Encrypted transactions",
  },
];

export function TrustSignals() {
  return (
    <section className="bg-white dark:bg-neutral-800/50 py-12 border-y border-neutral-default">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row gap-4 group cursor-default">
              <div className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-700 text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-primary mb-1">{feature.title}</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
