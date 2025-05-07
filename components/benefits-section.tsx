import { Truck, RefreshCcw, CreditCard, Gift } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Fast Delivery",
      description: "Free shipping on orders over $50",
    },
    {
      icon: <RefreshCcw className="h-6 w-6" />,
      title: "Easy Returns",
      description: "30-day hassle-free returns",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Secure Payments",
      description: "Multiple payment options",
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Special Offers",
      description: "Discounts & promotions",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
            {benefit.icon}
          </div>
          <div>
            <h3 className="font-medium">{benefit.title}</h3>
            <p className="text-sm text-gray-600">{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
