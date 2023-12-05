import IcWifi from "@/public/icons/ic-wifi.svg";
import IcParking from "@/public/icons/ic-parking.svg";
import IcSocket from "@/public/icons/ic-socket.svg";
import IcAirConditioner from "@/public/icons/ic-air-conditioner.svg";
import IcMeeting from "@/public/icons/ic-meeting.svg";
import IcMusholla from "@/public/icons/ic-musholla.svg";
import IcToilet from "@/public/icons/ic-toilet.svg";

export const FACILITIES = [
  {
    name: "Wifi",
    component: <IcWifi />,
  },
  {
    name: "Parking",
    component: <IcParking />,
  },
  {
    name: "Electrical Sockets",
    component: <IcSocket />,
  },
  {
    name: "AC",
    component: <IcAirConditioner />,
  },
  {
    name: "Meeting Rooms",
    component: <IcMeeting />,
  },
  {
    name: "Musholla",
    component: <IcMusholla />,
  },
  {
    name: "Toilet",
    component: <IcToilet />,
  },
];
