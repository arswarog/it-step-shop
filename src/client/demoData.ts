import { Category, Product } from './app/classes';

export var demoProducts: Product[] = [
    {
        id         : 1,
        name       : 'Рабочая станция HP Z640 [Y3Y42EA]',
        description: 'Высокопроизводительная рабочая станция HP Z640, выполненная в шумоизолированном корпусе, для обслуживания которого не требуются инструменты, позволит по-новому взглянуть на бизнес-решения. В HP Z640 объединены лучшие функции решений HP серии Z, благодаря чему вы сможете эффективно решать любые бизнес-задачи. Рабочая станция Z640 на базе Windows 10 отличается невероятными возможностями при малых габаритах. Решение поддерживает до 8 модулей памяти DIMM, до 4 жестких дисков, дополнительный контроллер Thunderbolt и накопители HP Z Turbo, благодаря чему обеспечивается эффективность хранения, высокая производительность и удобство работы. Корпус с шумоизоляцией разработан таким образом, чтобы доступ к компонентам рабочей станции можно было получить без использования инструментов. Он оснащен встроенным разъемом Gigabit Ethernet и удобными ручками (спереди и сзади), а благодаря высоте 4U его легко монтировать в стойку.',
        price      : 163999,
        photos     : ['https://c.dns-shop.ru/thumb/st1/fit/800/650/0266c3fa007cecb0df13be26b147097a/2f174dccf17e7aa1c149e630dc6656c4398d351b0ab6557659c0a70632656bdc.jpg'],
    },
    {
        id         : 3,
        name       : 'Рабочая станция Dell Precision T5810-0231 [5810-0231]',
        description: 'Dell Precision T5810 [5810-0231] представляет из себя надежный настольный ПК для дома и офиса, может так же использоваться как рабочая станция. Эксклюзивная запатентованная технология Reliable Memory Technology (RMT) компании Dell максимально увеличивает время безотказной работы и производительность. Работая в сочетании с памятью ECC, технология RMT обеспечивает обнаружение и исправление ошибок в реальном времени. Технология RMT сводит ошибки памяти практически к нулю: обращение к дефектной области памяти прекращается, а DIMM может по-прежнему использоваться. Путем простой перезагрузки системы RMT изолирует неисправную область памяти, фактически скрывая ее от ОС. Простота обновления: однократное обновление из любой точки с помощью уникальных расширений Dell Intel vPro для удаленного управления BIOS и удаления данных с жесткого диска,даже если система находится в автономном режиме. Dell Precision Optimizer 2.0 исключает работу вслепую,автоматически настраивая Intel Hyper-Threading, число ядер процессоров, графические ресурсы и питание. Комплектуется видеоадаптером Nvidia Quadro M2000.',
        price      : 149999,
        photos     : ['https://c.dns-shop.ru/thumb/st1/fit/800/650/d5f2f65ca088547d237d659581b29b20/bc6991119fe73eaaacdb8e142cbb8fc28fbfeb290115386ff1a12b8dde17e534.jpg'],
    },
    {
        id         : 4,
        name       : 'Рабочая станция Dell Precision T5810-0231 [5810-0231]',
        description: 'Dell Precision T5810 [5810-0231] представляет из себя надежный настольный ПК для дома и офиса, может так же использоваться как рабочая станция. Эксклюзивная запатентованная технология Reliable Memory Technology (RMT) компании Dell максимально увеличивает время безотказной работы и производительность. Работая в сочетании с памятью ECC, технология RMT обеспечивает обнаружение и исправление ошибок в реальном времени. Технология RMT сводит ошибки памяти практически к нулю: обращение к дефектной области памяти прекращается, а DIMM может по-прежнему использоваться. Путем простой перезагрузки системы RMT изолирует неисправную область памяти, фактически скрывая ее от ОС. Простота обновления: однократное обновление из любой точки с помощью уникальных расширений Dell Intel vPro для удаленного управления BIOS и удаления данных с жесткого диска,даже если система находится в автономном режиме. Dell Precision Optimizer 2.0 исключает работу вслепую,автоматически настраивая Intel Hyper-Threading, число ядер процессоров, графические ресурсы и питание. Комплектуется видеоадаптером Nvidia Quadro M2000.',
        price      : 149999,
        photos     : ['https://c.dns-shop.ru/thumb/st1/fit/800/650/d5f2f65ca088547d237d659581b29b20/bc6991119fe73eaaacdb8e142cbb8fc28fbfeb290115386ff1a12b8dde17e534.jpg'],
    },
    {
        id         : 5,
        name       : 'Рабочая станция Dell Precision T5810-0231 [5810-0231]',
        description: 'Dell Precision T5810 [5810-0231] представляет из себя надежный настольный ПК для дома и офиса, может так же использоваться как рабочая станция. Эксклюзивная запатентованная технология Reliable Memory Technology (RMT) компании Dell максимально увеличивает время безотказной работы и производительность. Работая в сочетании с памятью ECC, технология RMT обеспечивает обнаружение и исправление ошибок в реальном времени. Технология RMT сводит ошибки памяти практически к нулю: обращение к дефектной области памяти прекращается, а DIMM может по-прежнему использоваться. Путем простой перезагрузки системы RMT изолирует неисправную область памяти, фактически скрывая ее от ОС. Простота обновления: однократное обновление из любой точки с помощью уникальных расширений Dell Intel vPro для удаленного управления BIOS и удаления данных с жесткого диска,даже если система находится в автономном режиме. Dell Precision Optimizer 2.0 исключает работу вслепую,автоматически настраивая Intel Hyper-Threading, число ядер процессоров, графические ресурсы и питание. Комплектуется видеоадаптером Nvidia Quadro M2000.',
        price      : 149999,
        photos     : ['https://c.dns-shop.ru/thumb/st1/fit/800/650/d5f2f65ca088547d237d659581b29b20/bc6991119fe73eaaacdb8e142cbb8fc28fbfeb290115386ff1a12b8dde17e534.jpg'],
    },
    {
        id         : 7,
        name       : 'Рабочая станция Dell Precision T5810-0231 [5810-0231]',
        description: 'Dell Precision T5810 [5810-0231] представляет из себя надежный настольный ПК для дома и офиса, может так же использоваться как рабочая станция. Эксклюзивная запатентованная технология Reliable Memory Technology (RMT) компании Dell максимально увеличивает время безотказной работы и производительность. Работая в сочетании с памятью ECC, технология RMT обеспечивает обнаружение и исправление ошибок в реальном времени. Технология RMT сводит ошибки памяти практически к нулю: обращение к дефектной области памяти прекращается, а DIMM может по-прежнему использоваться. Путем простой перезагрузки системы RMT изолирует неисправную область памяти, фактически скрывая ее от ОС. Простота обновления: однократное обновление из любой точки с помощью уникальных расширений Dell Intel vPro для удаленного управления BIOS и удаления данных с жесткого диска,даже если система находится в автономном режиме. Dell Precision Optimizer 2.0 исключает работу вслепую,автоматически настраивая Intel Hyper-Threading, число ядер процессоров, графические ресурсы и питание. Комплектуется видеоадаптером Nvidia Quadro M2000.',
        price      : 149999,
        photos     : ['https://c.dns-shop.ru/thumb/st1/fit/800/650/d5f2f65ca088547d237d659581b29b20/bc6991119fe73eaaacdb8e142cbb8fc28fbfeb290115386ff1a12b8dde17e534.jpg'],
    },
    {
        id         : 9,
        name       : 'Рабочая станция Dell Precision T5810-0231 [5810-0231]',
        description: 'Dell Precision T5810 [5810-0231] представляет из себя надежный настольный ПК для дома и офиса, может так же использоваться как рабочая станция. Эксклюзивная запатентованная технология Reliable Memory Technology (RMT) компании Dell максимально увеличивает время безотказной работы и производительность. Работая в сочетании с памятью ECC, технология RMT обеспечивает обнаружение и исправление ошибок в реальном времени. Технология RMT сводит ошибки памяти практически к нулю: обращение к дефектной области памяти прекращается, а DIMM может по-прежнему использоваться. Путем простой перезагрузки системы RMT изолирует неисправную область памяти, фактически скрывая ее от ОС. Простота обновления: однократное обновление из любой точки с помощью уникальных расширений Dell Intel vPro для удаленного управления BIOS и удаления данных с жесткого диска,даже если система находится в автономном режиме. Dell Precision Optimizer 2.0 исключает работу вслепую,автоматически настраивая Intel Hyper-Threading, число ядер процессоров, графические ресурсы и питание. Комплектуется видеоадаптером Nvidia Quadro M2000.',
        price      : 149999,
        photos     : ['https://c.dns-shop.ru/thumb/st1/fit/800/650/d5f2f65ca088547d237d659581b29b20/bc6991119fe73eaaacdb8e142cbb8fc28fbfeb290115386ff1a12b8dde17e534.jpg'],
    },
];

export var demoCategories: Category[] = [
    {
        id  : 1,
        name: 'Категория 1',
    },
    {
        id  : 2,
        name: 'Категория 2',
    },
    {
        id  : 3,
        name: 'Категория 3',
    },
    {
        id  : 4,
        name: 'Категория 4',
    },
    {
        id  : 5,
        name: 'Категория 5',
    },
];