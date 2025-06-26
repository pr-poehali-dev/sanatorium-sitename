import React from "react";
import Icon from "@/components/ui/icon";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({
  icon,
  title,
  description,
  features,
}: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="bg-emerald-100 p-3 rounded-lg mr-4">
          <Icon name={icon as any} className="text-emerald-600" size={28} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>

      <p className="text-gray-600 mb-4">{description}</p>

      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <Icon name="Check" className="text-emerald-600 mr-2" size={16} />
            {feature}
          </li>
        ))}
      </ul>

      <button className="mt-6 w-full bg-emerald-50 text-emerald-600 py-2 rounded-lg hover:bg-emerald-100 transition-colors">
        Подробнее
      </button>
    </div>
  );
};

export default ServiceCard;
