export interface ContactInfo {
  city: string;
  country: string;
  facebook_url: string;
  viber_url: string;
  messanger_url: string;
  telegram_url: string;
  instagram_url: string;
  email_address: string;
  phone_numbers: PhoneNumber[];
  instagram_photos: InstagramPhoto[];
  _id?: string;
}

export interface PhoneNumber {
  label: string;
  number: string;
  isShow: boolean;
  order: number;
  _id?: string;
}

export interface InstagramPhoto {
  photo_url: string;
  insta_link: string;
  order: number;
  isShow: boolean;
  _id?: string;
}
