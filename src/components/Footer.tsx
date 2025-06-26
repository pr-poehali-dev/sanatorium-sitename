import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Leaf" className="text-emerald-400" size={28} />
              <h3 className="text-xl font-bold">Санаторий "Здравница"</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Ведущий центр оздоровления и профилактики заболеваний. 25 лет
              заботы о вашем здоровье в экологически чистом районе Подмосковья.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Общее оздоровление
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Кардиопрофилактика
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Водолечение
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Физиотерапия
                </a>
              </li>
              <li>
                <a
                  href="/sitemap"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Карта сайта
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-300">
              <li>+7 (495) 123-45-67</li>
              <li>info@zdravnitsa.ru</li>
              <li>
                г. Звенигород,
                <br />
                ул. Лесная, 15
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Санаторий "Здравница". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
