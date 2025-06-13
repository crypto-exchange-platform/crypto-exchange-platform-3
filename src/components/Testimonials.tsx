import type { FC } from "react";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah J.",
    role: "Professional Trader",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "CryptoXchange has the most intuitive interface I've used. The advanced charting tools and low fees make it my go-to platform for daily trading.",
    rating: 5,
  },
  {
    name: "Michael T.",
    role: "Institutional Investor",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "The API integration and OTC desk services are exceptional. We've moved significant volume through CryptoXchange with excellent execution.",
    rating: 4.5,
  },
  {
    name: "Emma R.",
    role: "Beginner Investor",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "As someone new to crypto, I found the educational resources and simple buy/sell interface incredibly helpful. Customer support is responsive too!",
    rating: 4,
  },
];

export const Testimonials: FC = () => {
  return (
    <section className="py-20 bg-blue-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          What Our <span className="text-blue-600">Traders</span> Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ name, role, image, quote, rating }) => (
            <div key={name} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img className="w-12 h-12 rounded-full" src={image} alt={name} />
                <div className="ml-4">
                  <h4 className="font-semibold">{name}</h4>
                  <p className="text-gray-500 text-sm">{role}</p>
                </div>
              </div>
              <p className="text-gray-600">"{quote}"</p>
              <div className="mt-4 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) =>
                  i + 1 <= Math.floor(rating) ? (
                    <i key={i} className="fas fa-star"></i>
                  ) : i + 0.5 === rating ? (
                    <i key={i} className="fas fa-star-half-alt"></i>
                  ) : (
                    <i key={i} className="far fa-star"></i>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 