export type Data = {
  uid?: string;
  cafe_name: string;
  location: string;
  instagram: string;
  openTime: string;
  closedTime: string;
  indoor: boolean;
  outdoor: boolean;
  menu: {
    beverages: boolean;
    meals: boolean;
    snacks: boolean;
  }
  price: {
    minPrice: number,
    maxPrice: number
  }
  facilities?: {
    wifi: boolean;
    air_conditioner: boolean;
    sockets: boolean;
    meetingRoom: boolean;
    musholla: boolean;
    toilet: boolean;
  }
  parking?: {
    parkingCar: boolean;
    parkingMotorcycle: boolean;
  }

}