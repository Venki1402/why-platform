import React from "react";
import { DivideIcon as LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  dotsReq: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  dotsReq,
}) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm">
      {dotsReq && (
        <div className="grid grid-cols-12 gap-4 opacity-5 pb-2">
          {[...Array(96)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-900" />
          ))}
        </div>
      )}
      <div className="flex justify-between">
        <div className="mb-6 pr-5">
          <Icon className="w-8 h-8 text-orange-500" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};
