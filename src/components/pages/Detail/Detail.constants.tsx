import IcWifi from "@/public/icons/ic-wifi.svg";
import IcParking from "@/public/icons/ic-parking.svg";
import IcSocket from "@/public/icons/ic-socket.svg";
import IcAirConditioner from "@/public/icons/ic-air-conditioner.svg";
import IcMeeting from "@/public/icons/ic-meeting.svg";
import IcMusholla from "@/public/icons/ic-musholla.svg";
import IcToilet from "@/public/icons/ic-toilet.svg";

export const FACILITIES = [
  {
    id: "wifi",
    name: "Wifi",
    component: <IcWifi />,
  },
  {
    id: "parking",
    name: "Parking",
    component: <IcParking />,
  },
  {
    id: "sockets",
    name: "Electrical Sockets",
    component: <IcSocket />,
  },
  {
    id: "air_conditioner",
    name: "AC",
    component: <IcAirConditioner />,
  },
  {
    id: "meetingRoom",
    name: "Meeting Rooms",
    component: <IcMeeting />,
  },
  {
    id: "musholla",
    name: "Musholla",
    component: <IcMusholla />,
  },
  {
    id: "toilet",
    name: "Toilet",
    component: <IcToilet />,
  },
];

export const initialData = {
  cafe_name: "",
  indoor: false,
  outdoor: false,
  location: "",
  instagram: "",
  openTime: "",
  closedTime: "",
  menu: {
    beverages: false,
    meals: false,
    snacks: false,
  },
  price: {
    minPrice: 0,
    maxPrice: 0,
  },
  facilities: {
    wifi: false,
    air_conditioner: false,
    sockets: false,
    meetingRoom: false,
    musholla: false,
    toilet: false,
  },
  parking: {
    parkingCar: false,
    parkingMotorcycle: false,
  },
};
