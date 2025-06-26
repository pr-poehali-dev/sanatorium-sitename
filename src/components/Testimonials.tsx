import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Елена Петрова",
      age: 52,
      program: "Кардиопрофилактика",
      text: "Прекрасный санаторий! После 2 недель лечения чувствую себя на 10 лет моложе. Персонал очень внимательный, процедуры эффективные.",
      rating: 5,
    },
    {
      name: "Михаил Иванов",
      age: 45,
      program: "Общее оздоровление",
      text: "Отличное место для восстановления сил. Особенно понравились водные процедуры и массаж. Рекомендую всем!",
      rating: 5,
    },
    {
      name: "Анна Сидорова",
      age: 38,
      program: "Антистресс программа",
      text: "После стрессовой работы нужно было восстановиться. Санаторий превзошёл все ожидания - и лечение, и отдых на высшем уровне.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Отзывы наших гостей
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Узнайте, что говорят люди, которые уже прошли оздоровление в нашем
            санатории
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
