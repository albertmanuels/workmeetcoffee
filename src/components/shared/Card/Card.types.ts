type CardProps = {
  data: {
    id: number,
    location: {
      city: string
    },
    menus: {
      beverages: boolean,
      meals: boolean,
      snacks: boolean
    },
    name: string,
    price: {
      min: number, 
      max: number
    },
    rating: number
  }
}