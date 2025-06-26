import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Sitemap = () => {
  const sitePages = [
    {
      name: "Главная",
      path: "/",
      icon: "Home",
      description: "Добро пожаловать в санаторий Здравница",
    },
    {
      name: "О нас",
      path: "/about",
      icon: "Users",
      description: "История и миссия нашего санатория",
    },
    {
      name: "Услуги",
      path: "/services",
      icon: "Heart",
      description: "Лечебные и оздоровительные программы",
    },
    {
      name: "Номера",
      path: "/rooms",
      icon: "Bed",
      description: "Комфортабельные номера для проживания",
    },
    {
      name: "Галерея",
      path: "/gallery",
      icon: "Camera",
      description: "Фотографии территории и номеров",
    },
    {
      name: "Контакты",
      path: "/contact",
      icon: "Phone",
      description: "Как с нами связаться и где нас найти",
    },
    {
      name: "Карта сайта",
      path: "/sitemap",
      icon: "Map",
      description: "Навигация по всем страницам сайта",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Карта сайта</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Полная навигация по всем разделам сайта санатория "Здравница"
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sitePages.map((page) => (
            <a
              key={page.path}
              href={page.path}
              className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200 hover:border-emerald-300"
            >
              <div className="flex items-center space-x-3 mb-3">
                <Icon name={page.icon} className="text-emerald-600" size={24} />
                <h2 className="text-xl font-semibold text-gray-800">
                  {page.name}
                </h2>
              </div>
              <p className="text-gray-600 text-sm">{page.description}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 bg-emerald-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Нужна помощь?
          </h3>
          <p className="text-gray-600 mb-4">
            Если вы не можете найти нужную информацию, свяжитесь с нами
            напрямую:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
            >
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться с нами
            </a>
            <a
              href="mailto:info@zdravnica.ru"
              className="inline-flex items-center px-4 py-2 border border-emerald-600 text-emerald-600 rounded-md hover:bg-emerald-50 transition-colors"
            >
              <Icon name="Mail" size={16} className="mr-2" />
              Написать письмо
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sitemap;
