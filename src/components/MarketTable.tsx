import type { FC } from "react";

const marketData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$42,850.32",
    change: "+2.35%",
    changeColor: "green",
    cap: "$836.5B",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$2,315.76",
    change: "-1.12%",
    changeColor: "red",
    cap: "$278.3B",
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "$102.45",
    change: "+5.67%",
    changeColor: "green",
    cap: "$44.2B",
  },
  {
    name: "Cardano",
    symbol: "ADA",
    price: "$0.5123",
    change: "+0.89%",
    changeColor: "green",
    cap: "$18.1B",
  },
];

export const MarketTable: FC = () => {
  return (
    <section id="markets" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Live Market Data</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Real-time cryptocurrency prices and market capitalization for the top digital assets traded on our platform.
        </p>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coin</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h Change</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Cap</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trade</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {marketData.map(({ name, symbol, price, change, cap, changeColor }) => (
                  <tr key={symbol}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{name}</div>
                          <div className="text-sm text-gray-500">{symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{price}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          changeColor === "green"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {change}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{cap}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900">Trade Now</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              View All Markets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
