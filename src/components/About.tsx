import React from "react";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              О санатории "Здравница"
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Уже более 25 лет наш санаторий является ведущим центром
              оздоровления и профилактики заболеваний. Мы объединяем
              традиционные методы санаторно-курортного лечения с современными
              медицинскими технологиями.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Расположенный в живописном экологически чистом районе, наш
              санаторий предлагает идеальные условия для восстановления здоровья
              и профилактики заболеваний.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  25+
                </div>
                <div className="text-gray-600">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  50000+
                </div>
                <div className="text-gray-600">довольных гостей</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  15
                </div>
                <div className="text-gray-600">программ лечения</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  98%
                </div>
                <div className="text-gray-600">рекомендуют друзьям</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-emerald-100 rounded-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
                alt="Санаторий"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Award" className="text-emerald-600" size={24} />
                  <div>
                    <div className="font-semibold text-gray-800">
                      Лицензия Минздрава
                    </div>
                    <div className="text-sm text-gray-600">
                      № ЛО-77-01-020003
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
