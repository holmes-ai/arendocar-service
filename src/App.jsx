import { useMemo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import {
  Home,
  Wrench,
  Car,
  User,
  AlertTriangle,
  Clock3,
  ShieldCheck,
  Search,
  Phone,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Settings2,
  Bell,
  Star,
  Gauge,
  CalendarDays,
  CreditCard,
  BatteryCharging
} from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Замена масла',
    duration: '1 час',
    estimate: '$120',
    category: 'ТО',
    description: 'Полная замена масла и фильтров'
  },

  {
    id: 2,
    title: 'Диагностика двигателя',
    duration: '2 часа',
    estimate: '$250',
    category: 'Диагностика',
    description: 'Компьютерная диагностика двигателя'
  },

  {
    id: 3,
    title: 'Тормозная система',
    duration: '3 часа',
    estimate: '$340',
    category: 'Ремонт',
    description: 'Обслуживание тормозной системы'
  },

  {
    id: 4,
    title: 'Ремонт подвески',
    duration: '5 часов',
    estimate: '$680',
    category: 'Подвеска',
    description: 'Полная проверка подвески'
  }
]

const cars = [
  {
    id: 1,
    name: 'Ferrari SF90',
    plate: '01A777AA',
    mileage: '58 000 км',
    status: 'Готова к диагностике',
    image:
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1200&auto=format&fit=crop'
  },

  {
    id: 2,
    name: 'BMW M5 Competition',
    plate: '10B505BB',
    mileage: '32 000 км',
    status: 'Следующее ТО через 900 км',
    image:
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop'
  }
]

const categories = [
  'Все',
  'ТО',
  'Диагностика',
  'Ремонт',
  'Подвеска'
]

export default function App() {

  const [activeTab, setActiveTab] = useState('home')

  const [selectedCategory, setSelectedCategory] = useState('Все')

  const [searchTerm, setSearchTerm] = useState('')

  const [selectedService, setSelectedService] = useState(null)

  const [selectedTime, setSelectedTime] = useState('12:00')

  const [selectedCar, setSelectedCar] = useState('Ferrari SF90')

  const [emergencyModal, setEmergencyModal] = useState(false)

  const [notification, setNotification] = useState('')

  const currentHour = new Date().getHours()

  const greeting =
    currentHour < 12
      ? 'Доброе утро'
      : currentHour < 18
      ? 'Добрый день'
      : 'Добрый вечер'

    useEffect(() => {

  if(notification){

    const timer = setTimeout(() => {
      setNotification('')
    }, 2200)

    return () => clearTimeout(timer)

  }

}, [notification])
  const filteredServices = useMemo(() => {

    return services.filter((service) => {

      const matchesSearch =
        service.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase())

      const matchesCategory =
        selectedCategory === 'Все'
          ? true
          : service.category === selectedCategory

      return matchesSearch && matchesCategory

    })

  }, [searchTerm, selectedCategory])

  return (

    <div className="min-h-screen bg-[#EAF1F9] flex justify-center overflow-hidden">

      <div className="w-full max-w-[430px] min-h-screen relative overflow-hidden pb-32">

        {/* BG BLUR */}

        <div className="absolute top-[-140px] right-[-100px] w-[320px] h-[320px] bg-blue-300/30 blur-[120px]" />

        <div className="absolute bottom-[-160px] left-[-120px] w-[320px] h-[320px] bg-cyan-200/40 blur-[120px]" />

        {/* HOME */}

        {
          activeTab === 'home' && (

            <div className="px-5 pt-5">

              {/* HERO */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden rounded-[42px] bg-gradient-to-br from-[#3B82F6] to-[#2563EB] min-h-[340px] p-6 shadow-[0_30px_80px_rgba(37,99,235,0.35)]"
              >

                <div className="relative z-10">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-white/70 tracking-wide text-sm">
                        PREMIUM AUTO SERVICE
                      </p>

                      <h1 className="text-[38px] leading-[42px] font-bold text-white mt-4">

                        {greeting},
                        <br />
                        Иброхим

                      </h1>

                    </div>

                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-[40px] border border-white/20" />

                  </div>

                  <div className="mt-10 bg-white/10 backdrop-blur-[60px] border border-white/20 rounded-[32px] p-5 shadow-[0_10px_40px_rgba(255,255,255,0.12)]">

                    <p className="text-white/70 text-sm">
                      Активный автомобиль
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-2">
                      Ferrari SF90
                    </h2>

                    <p className="text-white/70 mt-2">
                      Готова к диагностике
                    </p>

                  </div>

                </div>

                <img
                  src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1200&auto=format&fit=crop"
                  className="absolute right-[-30px] bottom-0 w-[290px] object-cover"
                />

              </motion.div>

              {/* SEARCH */}

              <div className="mt-6 bg-white/20 backdrop-blur-[60px] border border-white/30 rounded-[30px] p-4 shadow-[0_10px_30px_rgba(255,255,255,0.15)]">

                <div className="flex items-center gap-3">

                  <Search className="text-zinc-500" />

                  <input
                    type="text"
                    placeholder="Поиск услуг..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-transparent outline-none w-full text-black placeholder:text-zinc-500"
                  />

                </div>

              </div>

              {/* CATEGORIES */}

              <div className="flex gap-3 overflow-x-auto mt-5 pb-2">

                {
                  categories.map((category) => (

                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-5 py-3 rounded-2xl whitespace-nowrap transition-all backdrop-blur-[50px] border ${
                        selectedCategory === category
                          ? 'bg-[#2563EB] text-white border-[#2563EB]'
                          : 'bg-white/20 text-black border-white/30'
                      }`}
                    >
                      {category}
                    </button>

                  ))
                }

              </div>

              {/* STATS */}

              <div className="grid grid-cols-2 gap-4 mt-6">

                <div className="bg-white/20 backdrop-blur-[60px] border border-white/30 rounded-[32px] p-5 shadow-xl">

                  <ShieldCheck className="text-green-500" />

                  <p className="text-zinc-500 text-sm mt-5">
                    Состояние
                  </p>

                  <h2 className="text-4xl font-bold text-black mt-3">
                    92%
                  </h2>

                  <p className="text-green-500 mt-2">
                    Отличное
                  </p>

                </div>

                <div className="bg-white/20 backdrop-blur-[60px] border border-white/30 rounded-[32px] p-5 shadow-xl">

                  <Gauge className="text-blue-500" />

                  <p className="text-zinc-500 text-sm mt-5">
                    Пробег
                  </p>

                  <h2 className="text-4xl font-bold text-black mt-3">
                    58k
                  </h2>

                  <p className="text-zinc-500 mt-2">
                    Общий пробег
                  </p>

                </div>

              </div>

              {/* ACTIONS */}

              <div className="grid grid-cols-2 gap-4 mt-6">

                <button
                  onClick={() => setNotification('Открыта запись')}
                  className="bg-[#2563EB] text-white rounded-[32px] p-5 shadow-[0_25px_50px_rgba(37,99,235,0.35)]"
                >

                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-[50px] border border-white/20 flex items-center justify-center">

                    <Wrench />

                  </div>

                  <h2 className="text-2xl font-bold mt-6 text-left">
                    Записаться
                  </h2>

                  <p className="text-white/70 mt-2 text-left">
                    Выбрать услугу
                  </p>

                </button>

                <button
                  onClick={() => setEmergencyModal(true)}
                  className="bg-red-500 text-white rounded-[32px] p-5 shadow-[0_25px_50px_rgba(239,68,68,0.35)]"
                >

                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-[50px] border border-white/20 flex items-center justify-center">

                    <AlertTriangle />

                  </div>

                  <h2 className="text-2xl font-bold mt-6 text-left">
                    SOS
                  </h2>

                  <p className="text-white/70 mt-2 text-left">
                    Экстренная помощь
                  </p>

                </button>

              </div>

              {/* SERVICES */}

              <div className="mt-8">

                <h2 className="text-2xl font-bold text-black mb-5">
                  Популярные услуги
                </h2>

                <div className="space-y-5">

                  {
                    filteredServices.map((service) => (

                      <motion.div
                        key={service.id}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white/20 backdrop-blur-[60px] border border-white/30 rounded-[34px] p-5 shadow-xl"
                      >

                        <div className="flex items-start justify-between">

                          <div>

                            <p className="text-zinc-500 text-sm">
                              {service.category}
                            </p>

                            <h2 className="text-2xl font-bold text-black mt-2">
                              {service.title}
                            </h2>

                          </div>

                          <div className="text-right">

                            <p className="text-xl font-bold text-black">
                              {service.estimate}
                            </p>

                            <p className="text-zinc-500 text-sm mt-1">
                              {service.duration}
                            </p>

                          </div>

                        </div>

                        <p className="text-zinc-500 mt-5">
                          {service.description}
                        </p>

                        <button
                          onClick={() => setSelectedService(service)}
                          className="w-full mt-6 bg-[#2563EB] text-white py-4 rounded-2xl font-semibold"
                        >
                          Записаться
                        </button>

                      </motion.div>

                    ))
                  }

                </div>

              </div>

            </div>

          )
        }

        {/* REPAIR */}

        {
          activeTab === 'repair' && (

            <div className="px-5 pt-5">

              <h1 className="text-3xl font-bold text-black">
                Статус ремонта
              </h1>

              <div className="space-y-5 mt-8">

                <div className="bg-white/20 backdrop-blur-[60px] border border-white/30 rounded-[34px] p-5">

                  <div className="flex items-center gap-4">

                    <CheckCircle2 className="text-green-500" />

                    <div>

                      <h2 className="font-bold text-black">
                        Автомобиль принят
                      </h2>

                      <p className="text-zinc-500 mt-1">
                        Ferrari SF90
                      </p>

                    </div>

                  </div>

                </div>

                <div className="bg-white/20 backdrop-blur-[60px] border border-white/30 rounded-[34px] p-5">

                  <div className="flex items-center gap-4">

                    <BatteryCharging className="text-blue-500" />

                    <div>

                      <h2 className="font-bold text-black">
                        Диагностика
                      </h2>

                      <p className="text-zinc-500 mt-1">
                        Выполняется
                      </p>

                    </div>

                  </div>

                </div>

                <div className="bg-white/20 backdrop-blur-[60px] border border-white/30 rounded-[34px] p-5">

                  <div className="flex items-center justify-between">

                    <div>

                      <h2 className="font-bold text-black">
                        Следующее ТО
                      </h2>

                      <p className="text-zinc-500 mt-2">
                        Через 14 дней
                      </p>

                    </div>

                    <CalendarDays className="text-blue-500" />

                  </div>

                </div>

              </div>

            </div>

          )
        }

        {/* CARS */}

        {
          activeTab === 'cars' && (

            <div className="px-5 pt-5">

              <h1 className="text-3xl font-bold text-black">
                Мои автомобили
              </h1>

              <div className="space-y-5 mt-8">

                {
                  cars.map((car) => (

                    <div
                      key={car.id}
                      className="bg-white/20 backdrop-blur-[60px] border border-white/30 rounded-[34px] overflow-hidden shadow-xl"
                    >

                      <img
                        src={car.image}
                        className="w-full h-[220px] object-cover"
                      />

                      <div className="p-5">

                        <div className="flex items-center justify-between">

                          <div>

                            <h2 className="text-2xl font-bold text-black">
                              {car.name}
                            </h2>

                            <p className="text-zinc-500 mt-2">
                              {car.plate}
                            </p>

                          </div>

                          <ChevronRight className="text-zinc-400" />

                        </div>

                        <div className="mt-5">

                          <p className="text-black font-medium">
                            {car.mileage}
                          </p>

                          <p className="text-zinc-500 mt-2">
                            {car.status}
                          </p>

                        </div>

                      </div>

                    </div>

                  ))
                }

              </div>

            </div>

          )
        }

        {/* PROFILE */}

        {
          activeTab === 'profile' && (

            <div className="px-5 pt-5">

              <div className="bg-white/20 backdrop-blur-[60px] border border-white/30 rounded-[34px] p-6 shadow-xl">

                <div className="flex items-center gap-5">

                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />

                  <div>

                    <h2 className="text-3xl font-bold text-black">
                      Иброхим
                    </h2>

                    <p className="text-zinc-500 mt-2">
                      Premium Client
                    </p>

                  </div>

                </div>

              </div>

              <div className="space-y-4 mt-6">

                <button
                  onClick={() => setNotification('Уведомления открыты')}
                  className="w-full bg-white/20 backdrop-blur-[60px] border border-white/30 rounded-[28px] p-5 flex items-center justify-between"
                >

                  <div className="flex items-center gap-4">

                    <Bell />

                    <span className="text-black">
                      Уведомления
                    </span>

                  </div>

                  <ChevronRight />

                </button>

                <button
                  onClick={() => setNotification('Premium активен')}
                  className="w-full bg-white/20 backdrop-blur-[60px] border border-white/30 rounded-[28px] p-5 flex items-center justify-between"
                >

                  <div className="flex items-center gap-4">

                    <Star />

                    <span className="text-black">
                      Premium статус
                    </span>

                  </div>

                  <ChevronRight />

                </button>

                <button
                  onClick={() => setNotification('Настройки открыты')}
                  className="w-full bg-white/20 backdrop-blur-[60px] border border-white/30 rounded-[28px] p-5 flex items-center justify-between"
                >

                  <div className="flex items-center gap-4">

                    <Settings2 />

                    <span className="text-black">
                      Настройки
                    </span>

                  </div>

                  <ChevronRight />

                </button>

                <button
                  onClick={() => setNotification('Способы оплаты открыты')}
                  className="w-full bg-white/20 backdrop-blur-[60px] border border-white/30 rounded-[28px] p-5 flex items-center justify-between"
                >

                  <div className="flex items-center gap-4">

                    <CreditCard />

                    <span className="text-black">
                      Способы оплаты
                    </span>

                  </div>

                  <ChevronRight />

                </button>

              </div>

            </div>

          )
        }

        {/* NAVBAR */}

        <div className="fixed bottom-5 left-0 right-0 flex justify-center z-50">

          <div className="w-[92%] max-w-[390px] bg-white/10 backdrop-blur-[80px] border border-white/20 rounded-[34px] py-4 px-6 flex justify-between shadow-[0_20px_60px_rgba(255,255,255,0.18)]">

            <button
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center ${
                activeTab === 'home'
                  ? 'text-[#2563EB]'
                  : 'text-zinc-500'
              }`}
            >

              <Home size={22} />

              <span className="text-xs mt-1">
                Главная
              </span>

            </button>

            <button
              onClick={() => setActiveTab('repair')}
              className={`flex flex-col items-center ${
                activeTab === 'repair'
                  ? 'text-[#2563EB]'
                  : 'text-zinc-500'
              }`}
            >

              <Wrench size={22} />

              <span className="text-xs mt-1">
                Ремонт
              </span>

            </button>

            <button
              onClick={() => setActiveTab('cars')}
              className={`flex flex-col items-center ${
                activeTab === 'cars'
                  ? 'text-[#2563EB]'
                  : 'text-zinc-500'
              }`}
            >

              <Car size={22} />

              <span className="text-xs mt-1">
                Авто
              </span>

            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`flex flex-col items-center ${
                activeTab === 'profile'
                  ? 'text-[#2563EB]'
                  : 'text-zinc-500'
              }`}
            >

              <User size={22} />

              <span className="text-xs mt-1">
                Профиль
              </span>

            </button>

          </div>

        </div>

      </div>

      {/* BOOKING MODAL */}

      <AnimatePresence>

        {
          selectedService && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/10 backdrop-blur-md z-50 flex items-end"
            >

              <motion.div
                initial={{ y: 500 }}
                animate={{ y: 0 }}
                exit={{ y: 500 }}
                className="bg-white/20 backdrop-blur-[80px] border border-white/30 rounded-t-[42px] p-6 w-full max-w-[430px] mx-auto"
              >

                <div className="w-16 h-1.5 rounded-full bg-white/40 mx-auto mb-8" />

                <h2 className="text-3xl font-bold text-black">
                  {selectedService.title}
                </h2>

                <p className="text-zinc-500 mt-2">
                  Оформление записи
                </p>

                <div className="space-y-5 mt-8">

                  <div className="bg-white/15 backdrop-blur-[60px] border border-white/20 rounded-[30px] p-5">

                    <p className="text-zinc-500 mb-4">
                      Автомобиль
                    </p>

                    <select
                      value={selectedCar}
                      onChange={(e) => setSelectedCar(e.target.value)}
                      className="w-full bg-white/40 rounded-2xl p-4 outline-none border border-white/20"
                    >

                      <option>Ferrari SF90</option>

                      <option>BMW M5 Competition</option>

                    </select>

                  </div>

                  <div className="bg-white/15 backdrop-blur-[60px] border border-white/20 rounded-[30px] p-5">

                    <p className="text-zinc-500 mb-4">
                      Выберите время
                    </p>

                    <div className="flex gap-3">

                      {
                        ['10:00', '12:00', '15:00'].map((time) => (

                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`flex-1 py-4 rounded-2xl ${
                              selectedTime === time
                                ? 'bg-[#2563EB] text-white'
                                : 'bg-white/30 text-black'
                            }`}
                          >
                            {time}
                          </button>

                        ))
                      }

                    </div>

                  </div>

                </div>

                <button
                  onClick={() => setNotification('Запись подтверждена')}
                  className="w-full mt-8 bg-[#2563EB] text-white py-4 rounded-2xl font-semibold"
                >
                  Продолжить
                </button>

                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full mt-5 text-zinc-500"
                >
                  Закрыть
                </button>

              </motion.div>

            </motion.div>

          )
        }

      </AnimatePresence>

      {/* EMERGENCY */}

      <AnimatePresence>

        {
          emergencyModal && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/10 backdrop-blur-md z-50 flex items-center justify-center p-5"
            >

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white/20 backdrop-blur-[80px] border border-white/30 rounded-[38px] p-6 w-full max-w-[390px]"
              >

                <h2 className="text-3xl font-bold text-black">
                  Экстренная помощь
                </h2>

                <div className="space-y-4 mt-8">

                  <button
                    onClick={() => setNotification('Эвакуатор вызван')}
                    className="w-full bg-white/20 backdrop-blur-[60px] border border-white/20 rounded-2xl p-5 flex items-center gap-4"
                  >

                    <Phone />

                    <span className="text-black">
                      Вызвать эвакуатор
                    </span>

                  </button>

                  <button
                    onClick={() => setNotification('Механик выехал')}
                    className="w-full bg-white/20 backdrop-blur-[60px] border border-white/20 rounded-2xl p-5 flex items-center gap-4"
                  >

                    <Wrench />

                    <span className="text-black">
                      Вызвать механика
                    </span>

                  </button>

                  <button
                    onClick={() => setNotification('Геолокация отправлена')}
                    className="w-full bg-white/20 backdrop-blur-[60px] border border-white/20 rounded-2xl p-5 flex items-center gap-4"
                  >

                    <MapPin />

                    <span className="text-black">
                      Отправить геолокацию
                    </span>

                  </button>

                </div>

                <button
                  onClick={() => setEmergencyModal(false)}
                  className="w-full mt-8 bg-[#2563EB] text-white py-4 rounded-2xl font-semibold"
                >
                  Закрыть
                </button>

              </motion.div>

            </motion.div>

          )
        }

      </AnimatePresence>
        <AnimatePresence>

  {
    notification && (

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[999]"
      >

        <div className="bg-white/20 backdrop-blur-[90px] border border-white/30 rounded-[24px] px-6 py-4 shadow-2xl">

          <p className="text-black font-semibold">
            {notification}
          </p>

        </div>

      </motion.div>

    )
  }

</AnimatePresence>
    </div>
  )
}