import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Rooms = () => {
  const rooms = [
    {
      type: "Стандарт",
      price: "3 500",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      features: [
        "Одноместное размещение",
        "Санузел в номере",
        "Телевизор",
        "Холодильник",
        "Балкон с видом на парк",
      ],
    },
    {
      type: "Комфорт",
      price: "4 500",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
      features: [
        "Двухместное размещение",
        "Улучшенная мебель",
        "Кондиционер",
        "Мини-бар",
        "Балкон с видом на лес",
      ],
    },
    {
      type: "Люкс",
      price: "6 500",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop",
      features: [
        "Двухкомнатный номер",
        "Джакузи",
        "Гостиная зона",
        "Терраса",
        "VIP обслуживание",
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
              Номера и размещение
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комфортные номера для идеального отдыха и восстановления
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={room.image}
                  alt={`Номер ${room.type}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {room.type}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-600">
                        {room.price} ₽
                      </div>
                      <div className="text-sm text-gray-600">за сутки</div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <Icon
                          name="Check"
                          className="text-emerald-600"
                          size={16}
                        />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
                    Забронировать
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Удобства в номерах
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Icon name="Wifi" className="text-emerald-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800">Wi-Fi</h3>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Icon name="Tv" className="text-emerald-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800">ТВ</h3>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Icon name="Phone" className="text-emerald-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800">Телефон</h3>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Icon name="Car" className="text-emerald-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800">Парковка</h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;
