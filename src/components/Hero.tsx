import React from "react";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-green-100 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Ваше здоровье —{" "}
            <span className="text-emerald-600">наша забота</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Современный санаторий для общего оздоровления и профилактики.
            Комплексные программы восстановления в окружении живописной природы.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg">
              Забронировать путёвку
            </button>
            <button className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors">
              <Icon name="Play" size={20} />
              <span>Смотреть видео</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-md mb-4">
                <Icon name="Heart" className="text-emerald-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Кардиопрофилактика
              </h3>
              <p className="text-gray-600 text-sm">
                Программы для укрепления сердечно-сосудистой системы
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-md mb-4">
                <Icon name="Waves" className="text-emerald-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Водолечение</h3>
              <p className="text-gray-600 text-sm">
                Минеральные ванны и гидротерапия
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-md mb-4">
                <Icon name="TreePine" className="text-emerald-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Экотерапия</h3>
              <p className="text-gray-600 text-sm">
                Оздоровление на свежем воздухе
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
