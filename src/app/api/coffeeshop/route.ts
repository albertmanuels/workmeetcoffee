import {Client} from "@notionhq/client"
import {  NextRequest, NextResponse } from "next/server"

const notionSecret = process.env.NOTION_SECRET
const notionDatabaseId = process.env.NOTION_DB_COFFEE_SHOP_ID

const notion = new Client({
  auth: notionSecret
})

export async function GET(req: NextRequest) {
  if(!notionSecret || !notionDatabaseId) throw Error("Missing notion secret or DB-ID")

  const query = await notion.databases.query({
    database_id: notionDatabaseId
  })

  // @ts-ignore
  const rows = query.results.map((res) => res.properties) 

  const rowsStructured = rows.map((row) => ({
    uid: row.uid.title[0].text.content,
    cafe_name: row.cafe_name.rich_text[0].text.content,
    slug: row.slug.rich_text[0].text.content,
    location: row.location.rich_text[0].text.content,
    instagram: row.instagram.rich_text[0].text.content,
    openTime: row.openTime.rich_text[0].text.content,
    closedTime: row.closedTime.rich_text[0].text.content,
    menu: {
      beverages: row.beverages.checkbox,
      meals: row.meals.checkbox,
      snacks: row.snacks.checkbox,
    },
    price: {
      minPrice: row.minPrice.number,
      maxPrice: row.maxPrice.number
    },
    facilities: {
      wifi: row.wifi.checkbox,
      indoor: row.indoor.checkbox,
      outdoor: row.outdoor.checkbox,
      toilet: row.toilet.checkbox,
      meetingRoom: row.meetingRoom.checkbox,
      musholla: row.musholla.checkbox,
      air_conditioner: row.air_conditioner.checkbox,
      sockets: row.sockets.checkbox,
    },
    parking: {
      parkingCar: row.parkingCar.checkbox,
      parkingMotorcycle: row.parkingMotorcycle.checkbox,
    } 
  }))

  return NextResponse.json(rowsStructured)
}


