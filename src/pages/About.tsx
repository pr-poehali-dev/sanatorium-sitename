import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              О санатории "Здравница"
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ведущий центр оздоровления с 25-летним опытом работы
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Наша история
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Санаторий "Здравница" был основан в 1999 году как современный
                центр восстановительной медицины. За четверть века мы помогли
                более 50 000 человек укрепить здоровье и обрести новые силы.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Расположенный в экологически чистом районе среди хвойных лесов,
                наш санаторий объединяет лучшие традиции курортного лечения с
                инновационными медицинскими технологиями.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop"
                alt="Главное здание санатория"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                25+
              </div>
              <div className="text-gray-600">лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                50000+
              </div>
              <div className="text-gray-600">довольных гостей</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">15</div>
              <div className="text-gray-600">программ лечения</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                98%
              </div>
              <div className="text-gray-600">рекомендуют друзьям</div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Award" className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Лицензированный центр
              </h3>
              <p className="text-gray-600">
                Лицензия Минздрава РФ № ЛО-77-01-020003
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Users" className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Опытный персонал
              </h3>
              <p className="text-gray-600">
                Команда из 40+ специалистов высшей категории
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="TreePine" className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Экологичное расположение
              </h3>
              <p className="text-gray-600">
                15 гектаров хвойного леса и чистейший воздух
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
