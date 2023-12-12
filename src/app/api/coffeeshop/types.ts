type PlainText = {
  id: string,
  rich_text: Array<{
    text: {
      content: string
    }
  }>
}
type Checkbox = {
  id: string,
  checkbox: boolean
}

type Number = {
  id: string,
  number: number
}

export type Row = {
  uid: PlainText,
  cafe_name: {
    id: string,
    title: Array<
    {
      text: {
        content: string
      }
    }>
  },
  minPrice: Number,
  maxPrice: Number
  instagram: PlainText,
  location: PlainText,
  beverages: Checkbox,
  meals: Checkbox,
  snacks: Checkbox,
  air_conditioner: Checkbox,
  wifi: Checkbox,
  meetingRoom: Checkbox,
  musholla: Checkbox,
  toilet: Checkbox,
  parkingCar: Checkbox,
  parkingMotorcycle: Checkbox,
  sockets: Checkbox,
  indoor: Checkbox,
  outdoor: Checkbox
}