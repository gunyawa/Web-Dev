export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  url: string;
  image: string;
  rate: number;
  category: string;
  likes: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 14 128Gb blue',
    price: 420990,
    description: 'Отличный телефон с одной из лучших камер',
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-goluboi-106363150/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8b/h41/63073057177630/apple-iphone-14-128gb-goluboj-106363150-1.jpg',
    rate: 10,
    category: 'IPhones',
    likes: 41,
  },
  {
    id: 2,
    name: 'Apple iPhone 13 128Gb pink',
    price: 370990,
    description: 'iPhone 13 в розовом цвете для самых гламурных девушек.',
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h0e/46392660819998/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg',
    rate: 8,
    category: 'IPhones',
    likes: 29,
  },
  {
    id: 3,
    name: 'Apple iPhone 14 128Gb lilac',
    price: 419790,
    description: 'Самый востребованный телефон 2023 года',
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-sirenevyi-106363117/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/ha3/63072545734686/apple-iphone-14-128gb-sirenevyj-106363117-1.jpg',
    rate: 9,
    category: 'IPhones',
    likes: 15,
  },
  {
    id: 4,
    name: 'Apple iPhone 11 64Gb Slim Box white',
    price: 264490,
    description: 'Телефон для самых практичных и прагматичных людей.',
    url: 'https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-belyi-100692384/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcf/h0c/32579627352094/apple-iphone-11-64gb-slim-box-belyj-100692384-1-Container.jpg',
    rate: 9,
    category: 'IPhones',
    likes: 36,
  },
  {
    id: 5,
    name: 'Apple iPhone 13 128Gb Blue',
    price: 375100,
    description: 'Крутой телефон для хороших мальчиков',
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h1d/46392661737502/apple-iphone-13-128gb-sinij-102298364-1-Container.jpg',
    rate: 10,
    category: 'IPhones',
    likes: 28,
  },
  {
    id: 6,
    name: 'MacBook Air 13 MGND3 gold',
    price: 490450,
    description: 'Ноутбук для лучших походов в кофейни с серьезным видом',
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgnd3-zolotistyi-100797576/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfd/h54/33286638272542/apple-macbook-air-2020-13-3-mgnd3-zolotistyj-100797576-1-Container.jpg',
    rate: 10,
    category: 'MacBooks',
    likes: 21,
  },
  {
    id: 7,
    name: 'Apple MacBook Pro 14 MKGP3 gray',
    price: 990650,
    description: 'Новейшая модель лучшего ноутбука.',
    url: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h8a/47153374199838/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg',
    rate: 9,
    category: 'MacBooks',
    likes: 22,
  },
  {
    id: 8,
    name: 'MacBook Air 13 MLXY3 Silver',
    price: 629450,
    description: 'Новое поколоение ноутбуков для нового поколения юзеров.',
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mlxy3-serebristyi-106110064/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h91/61792617299998/apple-macbook-air-13-mlxy3-serebristyj-106110064-1.jpg',
    rate: 9,
    category: 'MacBooks',
    likes: 32,
  },
  {
    id: 9,
    name: 'MacBook Air 13 MGN63 gray',
    price: 480500,
    description:
      'Маленький и компактный ноутбук.Подойдет для частых путешествий',
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    rate: 10,
    category: 'MacBooks',
    likes: 20,
  },
  {
    id: 10,
    name: 'Apple MacBook Pro 13 MID 82 Laptop Grey',
    price: 10,
    description:
      'Новый функционал ноутбука позволяет пользоваться новыми технологиями во всей её красе.',
    url: 'https://kaspi.kz/shop/p/apple-macbook-pro-13-myd82-seryi-100797630/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h54/hd7/33090953773086/apple-macbook-pro-13-myd82-seryi-100797630-1.jpg',
    rate: 10,
    category: 'MacBooks',
    likes: 34,
  },
  {
    id: 11,
    name: 'Smart Watch Apple Iwatch SE 2nd Gen 40mm Gold',
    price: 159990,
    description:
      'Упрощенная и удешевленная версия умных часов Apple Iwatch шестого поколения, выпущенная 15 сентября 2020 года. Первое поколение серии «SE».',
    url: 'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-zolotistyi-106362759/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h46/62711073407006/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362759-1.jpg',
    rate: 10,
    category: 'Apple Watches',
    likes: 34,
  },
  {
    id: 12,
    name: 'Smart Watch Apple Iwatch SE 44mm Grey',
    price: 155780,
    description:
      'Большой дисплей Retina, на котором поместится все, что вам нужно. Усовершенствованные датчики для отслеживания любой физической активности.',
    url: 'https://kaspi.kz/shop/p/apple-watch-se-44-mm-seryi-100568195/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/he4/hb2/63895429578782.jpg?format=gallery-medium',
    rate: 10,
    category: 'Apple Watches',
    likes: 45,
  },
  {
    id: 13,
    name: 'Smart Watch Apple Iwatch SE 40mm Silver-Blue',
    price: 175700,
    description: 'Умные часы Apple Iwatch SE 40 мм Серебристый-Синий',
    url: 'https://kaspi.kz/shop/p/apple-watch-se-40-mm-serebristyi-sinii-102602475/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he0/h19/46601570975774/apple-watch-se-40mm-silver-aluminium-case-sinij-102602475-1.jpg',
    rate: 9,
    category: 'Apple Watches',
    likes: 12,
  },
  {
    id: 14,
    name: 'Apple Watch SE 2nd Gen 40mm Gold',
    price: 159990,
    description:
      'Текущая упрощенная и удешевленная версия умных часов Apple Iwatch восьмого поколения, выпущенная 7 сентября 2022 года. Второе поколение серии «SE».',
    url: 'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-zolotistyi-106362759/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h46/62711073407006/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362759-1.jpg',
    rate: 8,
    category: 'Apple Watches',
    likes: 19,
  },
  {
    id: 15,
    name: 'Apple Watch Series 8 45 mm Aluminum gold',
    price: 231990,
    description:
      'Будьте впереди всех с новыми Apple Watch Series 8 — умными часами премиум-класса с GPS для бега и триатлона, которые теперь также имеют возможность заряжаться от солнца благодаря линзе Power Glass™.',
    url: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-zolotistyi-106585021/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h23/63158668492830/apple-watch-series-8-45-mm-aluminum-zolotistyj-106585021-1.jpg',
    rate: 9,
    category: 'Apple Watches',
    likes: 30,
  },
  {
    id: 16,
    name: 'Apple Earpods Pro 2nd generation headphones white',
    price: 119690,
    description:
      'Apple Earpods Pro 2nd — уникальные наушники с технологией активного шумоподавления, которые постоянно оптимизируют звук с учетом формы вашего уха и положения вкладышей.',
    url: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hb7/h5e/64511113199646.jpg?format=gallery-medium',
    rate: 10,
    category: 'AirPods',
    likes: 12,
  },
  {
    id: 17,
    name: 'Apple Earpods Max Headphones Green',
    price: 365865,
    description:
      'Bluetooth-гарнитура Apple Earpods Max сможет полностью изменить ваше представление о полноразмерных наушниках. Данная модель разработана с использованием первоклассных материалов и передовых технологий.',
    url: 'https://kaspi.kz/shop/p/apple-airpods-max-zelenyi-101161547/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/hfd/33885803315230/apple-airpods-max-zelenyj-101161547-2-Container.jpg',
    rate: 10,
    category: 'AirPods',
    likes: 12,
  },
  {
    id: 18,
    name: 'Apple Earpods Pro Headphones White',
    price: 103155,
    description:
      'AirPods Pro — уникальные наушники с технологией активного шумоподавления, которые постоянно оптимизируют звук с учетом формы вашего уха и положения вкладышей.',
    url: 'https://kaspi.kz/shop/p/apple-airpods-pro-belyi-4804718/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h34/ha2/63785534455838.jpg?format=gallery-medium',
    rate: 9,
    category: 'AirPods',
    likes: 17,
  },
  {
    id: 19,
    name: 'Apple Earpods Max Headphones Blue',
    price: 361160,
    description:
      'Bluetooth-гарнитура Apple Earpods Max сможет полностью изменить ваше представление о полноразмерных наушниках. Данная модель разработана с использованием первоклассных материалов и передовых технологий.',
    url: 'https://kaspi.kz/shop/p/apple-airpods-max-sinii-101180956/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hba/h2e/46659800760350/apple-airpods-max-sinij-101180956-2-Container.jpg',
    rate: 10,
    category: 'AirPods',
    likes: 15,
  },
  {
    id: 20,
    name: 'Headphones Apple AirPods Pro with Magsafe Charging Case white',
    price: 104420,
    description:
      'Динамический драйвер, разработанный Apple, использует специальный усилитель, обеспечивающий невероятную детальность звука.',
    url: 'https://kaspi.kz/shop/p/apple-airpods-pro-with-magsafe-charging-case-belyi-102891649/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h39/h45/47209266348062/apple-airpods-pro-magsafe-charging-case-belyj-102891649-1.jpg',
    rate: 8,
    category: 'AirPods',
    likes: 16,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
