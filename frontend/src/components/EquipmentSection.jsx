import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { printerImages, supportedBrands, equipmentTypes } from '../data/mock';
import { useNavigate } from 'react-router-dom';

const EquipmentSection = () => {
  const navigate = useNavigate();

  // Mapping for brand routes
  const brandRoutes = {
    'HP': '/remont-printerov-hp',
    'Canon': '/remont-printerov-canon',
    'Kyocera': '/remont-printerov-kyocera',
    'Ricoh': '/remont-printerov-ricoh'
  };

  const handleCardClick = (brand) => {
    const route = brandRoutes[brand];
    if (route) {
      navigate(route);
    }
  };

  return (
    <section id="equipment" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
            Оборудование, которое мы обслуживаем
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ремонт принтеров любых брендов
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent block lg:inline lg:ml-4">
              с гарантией качества
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
            Мы чиним любые бренды: ремонт принтеров HP, Canon, Kyocera, Brother, Ricoh и других. Наши инженеры имеют сертификаты и опыт работы в авторизованных сервисных центрах, поэтому гарантируют качественный ремонт.
          </p>
          
          {/* Срочный ремонт - частые поломки */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              🔧 Срочный ремонт самых частых поломок
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-pink-500">•</span>
                <span>Не включается / не видит картридж</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-pink-500">•</span>
                <span>Полосы, пятна, бледная печать</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-pink-500">•</span>
                <span>Замятие бумаги, проблемы с подачей</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-pink-500">•</span>
                <span>Ошибки термоузла / печки</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-pink-500">•</span>
                <span>Не работает дуплекс, сканер</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-pink-500">•</span>
                <span>Проблемы с проявкой, лазером</span>
              </div>
            </div>
          </div>
          
          {/* Кнопка выбора принтера */}
          <div className="text-center">
            <a 
              href="/printer-selection" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">🖨️</span>
              Выбери печатающего помошника
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Equipment Images Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {printerImages.map((equipment) => (
            <Card 
              key={equipment.id} 
              className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => handleCardClick(equipment.brand)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={equipment.url}
                    alt={equipment.alt}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg mb-1">{equipment.brand}</h3>
                    <p className="text-sm">{equipment.alt}</p>
                  </div>
                </div>
                <div className="p-4">
                  <Badge className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 hover:from-pink-200 hover:to-purple-200">
                    {equipment.brand}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Supported Brands */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Поддерживаемые бренды</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {supportedBrands.map((brand, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">{brand.charAt(0)}</span>
                </div>
                <p className="font-semibold text-gray-900 text-sm">{brand}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Types */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Типы оборудования, которое мы обслуживаем</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {equipmentTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🖨️</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{type}</h4>
                <p className="text-gray-600">Профессиональное обслуживание и ремонт</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-yellow-50 rounded-2xl border border-yellow-200">
            <p className="text-yellow-800 font-medium">
              <strong>Примечание:</strong> Мы не обслуживаем струйные принтеры. Мы специализируемся исключительно на лазерных принтерах и плоттерах для обеспечения высочайшего качества обслуживания.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;