import { AppImages } from '../../../res';

export interface HotelListType {
  id: number;
  imagePath: any;
  titleTxt: string;
  subTxt: string;
  dist: number;
  reviews: number;
  rating: number;
  perNight: number;
}

export const HOTEL_LIST: HotelListType[] = [
  // 1st item dummy for 'stickyHeaderIndices'
  {
    id: 0,
    imagePath: '',
    titleTxt: '',
    subTxt: '',
    dist: 0,
    reviews: 0,
    rating: 0,
    perNight: 0,
  },
  {
    id: 1,
    imagePath: AppImages.service_1,
    titleTxt: 'Best Tattoo 1',
    subTxt: 'Wembley, London',
    dist: 2.0,
    reviews: 80,
    rating: 4.4,
    perNight: 180,
  },
  {
    id: 2,
    imagePath: AppImages.service_2,
    titleTxt: 'Best Tattoo 1',
    subTxt: 'Wembley, London',
    dist: 4.0,
    reviews: 74,
    rating: 4.5,
    perNight: 200,
  },
  {
    id: 3,
    imagePath: AppImages.service_3,
    titleTxt: 'Best Tattoo 3',
    subTxt: 'Wembley, London',
    dist: 3.0,
    reviews: 62,
    rating: 4.0,
    perNight: 60,
  },
  {
    id: 4,
    imagePath: AppImages.service_4,
    titleTxt: 'Best Tattoo 4',
    subTxt: 'Wembley, London',
    dist: 7.0,
    reviews: 90,
    rating: 4.4,
    perNight: 170,
  },
  {
    id: 5,
    imagePath: AppImages.service_5,
    titleTxt: 'Best Tattoo 5',
    subTxt: 'Wembley, London',
    dist: 2.0,
    reviews: 240,
    rating: 4.5,
    perNight: 200,
  },
];
