import React from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Leaf" className="text-emerald-600" size={28} />
            <h1 className="text-xl font-bold text-gray-800">
              Санаторий "Здравница"
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Главная
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              О нас
            </a>
            <a
              href="/services"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="/rooms"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Номера
            </a>
            <a
              href="/gallery"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Галерея
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Контакты
            </a>
            <a
              href="/sitemap"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Карта сайта
            </a>
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              Забронировать
            </button>
          </nav>

          <button className="md:hidden">
            <Icon name="Menu" className="text-gray-700" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
