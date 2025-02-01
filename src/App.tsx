import React from "react";
import { Chart } from "./components/Chart";
import { FeatureCard } from "./components/FeatureCard";
import { Search, Radio, Heart } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-black text-black">
      <div className="max-w-8xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="space-y-8 bg-white p-8 lg:col-span-3 rounded-2xl font-thin">
            <div>
              <p className="text-gray-600 border border-gray-300 p-2 rounded max-w-36 mb-4 font-mono">
                Why platform
              </p>
              <h1 className="text-5xl font-normal mb-4">
                The internet's most <br />
                <span className="text-orange-500">accurate</span> visitor
                identifier
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                <strong>Industry-leading accuracy</strong> that lasts for months{" "}
                <br />
                or years, even when cookies are cleared.
              </p>
              <button className="bg-gray-100 text-black px-6 py-3 font-normal rounded-lg hover:bg-gray-200 transition-colors border-gray-400">
                Learn More
              </button>
            </div>

            <div className="space-y-4">
              <Chart />
              <div className="flex justify-between text-sm text-gray-300 uppercase">
                <div>Accuracy dropoff</div>
                <div>Days after initial identification</div>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <FeatureCard
              icon={Search}
              title="Any browser, any device."
              description="Identify returning web and mobile app visitors on all browsers, iOS, and Android, with exceptional accuracy."
              dotsReq={false}
            />
            <FeatureCard
              icon={Radio}
              title="Identify all anonymous visitors."
              description="Get details on suspicious visitors even when VPN, incognito mode, or a tampered browser or device is used."
              dotsReq={true}
            />
            <FeatureCard
              icon={Heart}
              title="Delight your trusted users."
              description="Personalize user experience and reduce 2FA and OTP requirements by identifying logged-out users."
              dotsReq={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
