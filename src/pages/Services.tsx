import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

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
      icon: "Heart",
      title: "Кардиопрофилактика",
      description:
        "Специализированные программы для сердечно-сосудистой системы",
      features: [
        "ЭКГ мониторинг",
        "Кардиотренировки",
        "Бальнеотерапия",
        "Диетотерапия",
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
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Наши услуги
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр оздоровительных и профилактических программ
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
