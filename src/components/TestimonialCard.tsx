import React from "react";
import Icon from "@/components/ui/icon";

interface TestimonialCardProps {
  name: string;
  age: number;
  program: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({
  name,
  age,
  program,
  text,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
          <Icon name="User" className="text-emerald-600" size={20} />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">
            {age} лет, {program}
          </p>
        </div>
      </div>

      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            name="Star"
            className={
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }
            size={16}
          />
        ))}
      </div>

      <p className="text-gray-600 italic leading-relaxed">"{text}"</p>
    </div>
  );
};

export default TestimonialCard;
