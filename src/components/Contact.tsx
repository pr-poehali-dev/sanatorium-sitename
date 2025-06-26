import React from "react";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-300 mb-8">
              Готовы начать путь к здоровью? Наши специалисты помогут подобрать
              идеальную программу оздоровления именно для вас.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-emerald-600 p-3 rounded-lg mr-4">
                  <Icon name="Phone" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Телефон</p>
                  <p className="text-gray-300">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-emerald-600 p-3 rounded-lg mr-4">
                  <Icon name="Mail" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">info@zdravnitsa.ru</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-emerald-600 p-3 rounded-lg mr-4">
                  <Icon name="MapPin" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Адрес</p>
                  <p className="text-gray-300">
                    Московская область, г. Звенигород, ул. Лесная, 15
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-emerald-600 p-3 rounded-lg mr-4">
                  <Icon name="Clock" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Режим работы</p>
                  <p className="text-gray-300">Круглосуточно, без выходных</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 text-gray-800">
            <h3 className="text-2xl font-bold mb-6">Заявка на бронирование</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Программа
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                  <option>Общее оздоровление</option>
                  <option>Кардиопрофилактика</option>
                  <option>Антистресс программа</option>
                  <option>Водолечение</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Комментарий
                </label>
                <textarea
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Дополнительная информация..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
