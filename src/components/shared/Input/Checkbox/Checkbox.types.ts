import { Payload } from "@/components/types";
import { UseFormRegister } from "react-hook-form";

export type CheckboxProps = {
  name: 'cafe_name' | 'location' | 'instagram' | 'beverages' | 'meals' | 'snacks' | 'wifi'  | 'air_conditioner' |'sockets' | 'meetingRoom' | 'indoor' | 'outdoor' |'musholla' | 'toilet' | 'parkingCar' | 'parkingMotorcycle',
  label: string;
  register: UseFormRegister<{
  cafe_name: string;
  location: string;
  instagram: string;
  beverages: boolean;
  meals: boolean;
  snacks: boolean;
  wifi: boolean;
  air_conditioner: boolean;
  sockets: boolean;
  meetingRoom: boolean;
  openTime: string;
  closedTime: string;
  indoor: boolean;
  outdoor: boolean;
  musholla: boolean;
  toilet: boolean;
  parkingCar: boolean;
  parkingMotorcycle: boolean;
}>
};