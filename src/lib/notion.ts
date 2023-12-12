import { Client } from "@notionhq/client"

const notionSecret = process.env.NOTION_SECRET
const notionDatabaseId = process.env.NOTION_DB_COFFEE_SHOP_ID

const notion = new Client({
  auth: notionSecret
})
if(!notionSecret || !notionDatabaseId) throw Error("Missing notion secret or DB-ID")


export const addCoffeeShop = async (param) => {
 await notion.pages.create({
    parent: {
      database_id: notionDatabaseId
    },
    properties: {
      uid:{
        type: 'title',
        title:[
          {
            type: "text",
            text: {content: param.uid}

          }
        ]
      },
      cafe_name: {
        rich_text:[
          {
            type: "text",
            text: {
              content: param.cafe_name
            }
          }
        ]
      },
      slug: {
        rich_text:[
          {
            type: "text",
            text: {
              content: param.slug
            }
          }
        ]
      },
      location: {
        rich_text:[
          {
            type: "text",
            text: {
              content: param.location
            }
          }
        ]
      },
      instagram: {
        rich_text:[
          {
            type: "text",
            text: {
              content: param.instagram
            }
          }
        ]
      },
      openTime: {
        rich_text:[
          {
            type: "text",
            text: {
              content: param.openTime
            }
          }
        ]
      },
      closedTime: {
        rich_text:[
          {
            type: "text",
            text: {
              content: param.closedTime
            }
          }
        ]
      },
      beverages: {
        checkbox: param.menu.beverages
      },
      meals: {
        checkbox: param.menu.meals
      },
      snacks: {
        checkbox: param.menu.snacks
      },
      minPrice: {
        number: param.price.minPrice
      },
      maxPrice: {
        number: param.price.maxPrice
      },
      wifi: {
        checkbox: param.facilities.wifi
      },
      indoor: {
        checkbox: param.facilities.indoor
      },
      outdoor: {
        checkbox: param.facilities.outdoor
      },
      toilet: {
        checkbox: param.facilities.toilet
      },
      meetingRoom: {
        checkbox: param.facilities.meetingRoom
      },
      musholla: {
        checkbox: param.facilities.musholla
      },
      air_conditioner: {
        checkbox: param.facilities.air_conditioner
      },
      sockets: {
        checkbox: param.facilities.sockets
      },
      parkingCar: {
        checkbox: param.parking.parkingCar
      },
      parkingMotorcycle: {
        checkbox: param.parking.parkingMotorcycle
      },
    }
  })
}