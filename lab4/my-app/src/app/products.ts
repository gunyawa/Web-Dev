export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  url: string;
  image: string;
  rate: number;
}

export const products = [
  {
    id: 1,
    name: 'Мышь Logitech G102 Lightsync черный',
    price: 8899,
    description:
      'Мышь проводная Logitech G102 LightSync позволяет играть с максимальной эффективностью',
    url: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hea/h93/64119547428894.jpg?format=gallery-medium',
    rate: 10,
  },
  {
    id: 2,
    name: 'Электронная книга Amazon Kindle',
    price: 96683,
    description:
      'Электронная книга Amazon Kindle Paperwhite 2021. По сравнению с предыдущим поколением экран увеличился до 6.8 дюйма и при этом с разрешением 300 PPI',
    url: 'https://kaspi.kz/shop/p/amazon-kindle-paperwhite-2021-chernyi-102838488/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/h23/47093254520862/amazon-kindle-paper-2021-chernyi-102838488-1.jpg',
    rate: 8,
  },
  {
    id: 3,
    name: 'Вафельница Proliss Pro-808',
    price: 3807,
    description:
      'Вафельница Proliss Pro-808 черный. материал корпуса: металл/пластик',
    url: 'https://kaspi.kz/shop/p/vafel-nitsa-proliss-pro-808-chernyi-105935489/?c=750000000',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h49/h36/64432195403806.jpg?format=gallery-medium',
    rate: 9,
  },
  {
    id: 4,
    name: 'Увлажнитель воздуха Maxmoll H2O Humid-300',
    price: 1448,
    description:
      'Ультразвуковой настольный увлажнитель воздуха с заправочной емкостью для воды в объеме 300 мл.',
    url: 'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-maxmoll-h2o-humid-300-belyi-102027263/?c=750000000',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hd0/hc4/64156819783710.jpg?format=gallery-medium',
    rate: 9,
  },
  {
    id: 5,
    name: 'Блендер HAROOKO A9',
    price: 14900,
    description:
      'Портативный блендер HAROOKO A9 имеет мощный двигатель 270 Вт с импульсной технологией и позволяет вам использовать его для коктейлей и смузи, не ограничивая творческие возможности в любом месте',
    url: 'https://kaspi.kz/shop/p/harooko-a9-chernyi-110414586/?c=750000000',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h87/ha9/83061892743198.png?format=gallery-medium',
    rate: 10,
  },
  {
    id: 6,
    name: 'Смарт-часы Apple Watch SE 2 Gen (2022)',
    price: 126359,
    description:
      'Все функции, необходимые для того, чтобы оставаться активными, здоровыми и на связи. Большой дисплей Retina. Функция обнаружения падения.',
    url: 'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-zolotistyi-106362759/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h46/62711073407006/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362759-1.jpg',
    rate: 10,
  },
  {
    id: 7,
    name: 'Помпа для воды AQUA Automatic Water Dispenser',
    price: 972,
    description:
      'Электрическая помпа со встроенным аккумулятором добавит в вашу жизнь удобства и комфорта!',
    url: 'https://kaspi.kz/shop/p/aqua-automatic-water-dispenser-belyi-101406744/?c=750000000',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h97/ha2/64347982495774.jpg?format=gallery-medium',
    rate: 8,
  },
  {
    id: 8,
    name: 'Фотокамера Canon EOS',
    price: 359987,
    description:
      'Камера со сменной оптикой Canon EOS M50 Mark II kit 15-45mm IS STM – беззеркальная модель, обеспечивающая высокую четкость передачи деталей и простой процесс создания контента от съемки до публикации.',
    url: 'https://kaspi.kz/shop/p/canon-eos-m50-mark-ii-kit-ef-m-15-45mm-f-3-5-6-3-is-stm-chernyi-102026887/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc2/h32/68844292374558/canon-eos-m50-mark-ii-kit-ef-m-15-45mm-f-3-5-6-3-is-stm-chernyi-102026887-1.jpg',
    rate: 9,
  },
  {
    id: 9,
    name: 'Кухонные весы Electronic SF-400',
    price: 799,
    description:
      'Они отличаются достаточно высокой точностью, так как изготовлены по новейшей технологии, более того, их нейтральный дизайн прекрасно подойдет под любое оформление вашей кухни.',
    url: 'https://kaspi.kz/shop/p/electronic-sf-400-100806263/?c=750000000',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h65/hd5/63935744770078.jpg?format=gallery-medium',
    rate: 10,
  },
  {
    id: 10,
    name: 'Наушники Apple AirPods Pro 2nd generation',
    price: 110498,
    description:
      'вид: внутриканальные, подключение: беспроводное, тип акустического оформления: закрытые, тип крепления: без крепления',
    url: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
    rate: 10,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
