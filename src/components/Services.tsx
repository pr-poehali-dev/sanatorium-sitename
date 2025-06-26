import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      icon: "Activity",
      title: "Общее оздоровление",
      description:
        "Комплексные программы для укрепления здоровья и повышения иммунитета",
      features: [
        "Диагностика организма",
        "Лечебная физкультура",
        "Фитотерапия",
        "Диетическое питание",
      ],
    },
    {
      icon: "Shield",
      title: "Профилактика заболеваний",
      description: "Предупреждение развития хронических заболеваний",
      features: [
        "Кардиопрофилактика",
        "Профилактика диабета",
        "Остеопрофилактика",
        "Неврологическая профилактика",
      ],
    },
    {
      icon: "Droplets",
      title: "Водолечение",
      description: "Целебные процедуры с использованием минеральной воды",
      features: [
        "Минеральные ванны",
        "Подводный массаж",
        "Гидромассаж",
        "Питьевое лечение",
      ],
    },
    {
      icon: "Zap",
      title: "Физиотерапия",
      description: "Современные методы физиотерапевтического лечения",
      features: [
        "Электролечение",
        "Магнитотерапия",
        "Лазеротерапия",
        "Ультразвуковая терапия",
      ],
    },
    {
      icon: "Users",
      title: "Групповые занятия",
      description: "Коллективные оздоровительные программы",
      features: [
        "Аква-аэробика",
        "Скандинавская ходьба",
        "Йога на природе",
        "Дыхательная гимнастика",
      ],
    },
    {
      icon: "Utensils",
      title: "Диетология",
      description: "Индивидуальные программы питания для оздоровления",
      features: [
        "Консультации диетолога",
        "Лечебные столы",
        "Детокс-программы",
        "Разгрузочные дни",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр оздоровительных и профилактических программ для
            восстановления и укрепления вашего здоровья
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
