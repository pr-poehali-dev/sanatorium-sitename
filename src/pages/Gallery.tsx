import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop",
      alt: "Главное здание санатория",
      category: "Территория",
    },
    {
      src: "https://images.unsplash.com/photo-1594824720764-7170fe015e90?w=600&h=400&fit=crop",
      alt: "Бассейн",
      category: "Процедуры",
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      alt: "Номер люкс",
      category: "Номера",
    },
    {
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      alt: "Спа-процедуры",
      category: "Процедуры",
    },
    {
      src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop",
      alt: "Номер стандарт",
      category: "Номера",
    },
    {
      src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&h=400&fit=crop",
      alt: "Парк санатория",
      category: "Территория",
    },
    {
      src: "https://images.unsplash.com/photo-1594824720764-7170fe015e90?w=600&h=400&fit=crop",
      alt: "Гидромассаж",
      category: "Процедуры",
    },
    {
      src: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=600&h=400&fit=crop",
      alt: "Ресторан",
      category: "Питание",
    },
    {
      src: "https://images.unsplash.com/photo-1564501204317-b4bba42a1a5b?w=600&h=400&fit=crop",
      alt: "Стандартный номер",
      category: "Номера",
    },
  ];

  const categories = ["Все", "Территория", "Номера", "Процедуры", "Питание"];
  const [activeCategory, setActiveCategory] = React.useState("Все");

  const filteredImages =
    activeCategory === "Все"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Галерея
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Посмотрите на наш уютный санаторий и современные удобства
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <h3 className="font-semibold">{image.alt}</h3>
                      <p className="text-sm">{image.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
