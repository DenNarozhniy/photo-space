
export interface SquaredCarouselItem {
  main_title: string;
  sub_title: string;
  img_alt: string;
  main_placement: string;
  isShow: boolean;
  images: SquareImgForCarousel[];
  second_placement: string;
  _id?: string;
}

export interface SquareImgForCarousel {
  imgUrl: string;
  isShow: boolean;
  order: number;
  _id?: string;
}
