import type { FC } from "react";

const features = [
  {
    icon: "fas fa-shield-alt",
    title: "Secure Platform",
    description: "Multi-layer security with 2FA, cold storage, and insurance protection to keep your assets safe.",
  },
  {
    icon: "fas fa-bolt",
    title: "Lightning Fast",
    description: "High-performance matching engine capable of processing millions of transactions per second.",
  },
  {
    icon: "fas fa-percentage",
    title: "Low Fees",
    description: "Competitive trading fees starting from 0.1% with additional discounts for high-volume traders.",
  },
  {
    icon: "fas fa-globe",
    title: "Global Access",
    description: "Available in 100+ countries with support for multiple fiat currencies and payment methods.",
  },
  {
    icon: "fas fa-chart-line",
    title: "Advanced Trading",
    description: "Professional trading tools, charts, and indicators for both beginners and expert traders.",
  },
  {
    icon: "fas fa-headset",
    title: "24/7 Support",
    description: "Dedicated customer support team available around the clock to assist with any issues.",
  },
];

export const Features: FC = () => {
  return (
    <section id="features" className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Why Choose <span className="text-yellow-300">CryptoXchange</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-blue-600 mb-4">
                <i className={`${feature.icon} text-4xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-500">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 