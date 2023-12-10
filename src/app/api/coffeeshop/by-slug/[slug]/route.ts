import { Client } from "@notionhq/client"
import { NextResponse } from "next/server"



const NOTION_SECRET = process.env.NOTION_SECRET
const NOTION_DB_COFFEE_SHOP_ID =  process.env.NOTION_DB_COFFEE_SHOP_ID
const notion = new Client({auth: NOTION_SECRET })

export async function GET(req:Request, {params}: {params: {slug: string}}) {
  const slug = params.slug || ""
  if(!NOTION_DB_COFFEE_SHOP_ID || !NOTION_SECRET) throw Error("Missing notion secret or DB-ID")

  const getUserBySlug =  async (slug: string) => {
    const response = await notion.databases.query({
      database_id: NOTION_DB_COFFEE_SHOP_ID,
      filter: {
        property: 'slug',
        rich_text: {
          equals: slug
        }
      }
    })

    return response
  }
  try {
    const coffeeShopInNotion = await getUserBySlug(slug)

    if(coffeeShopInNotion.results.length === 0 ) {
      return NextResponse.json(
        { message: `Slug ${slug} is not exist`, data: null },
        { status: 400 })
    }

    //@ts-ignore
    const result = coffeeShopInNotion.results[0].properties

    const rowsStructured = {
      uid: result.uid.title[0].text.content,
      cafe_name: result.cafe_name.rich_text[0].text.content,
      location: result.location.rich_text[0].text.content,
      instagram: result.instagram.rich_text[0].text.content,
      openTime: result.openTime.rich_text[0].text.content,
      closedTime: result.closedTime.rich_text[0].text.content,
      indoor: result.indoor.checkbox,
      outdoor: result.outdoor.checkbox,
      menu: {
        beverages: result.beverages.checkbox,
        meals: result.meals.checkbox,
        snacks: result.snacks.checkbox,
      },
      price: {
        minPrice: result.minPrice.number,
        maxPrice: result.maxPrice.number
      },
      facilities: {
        wifi: result.wifi.checkbox,
        toilet: result.toilet.checkbox,
        meetingRoom: result.meetingRoom.checkbox,
        musholla: result.musholla.checkbox,
        air_conditioner: result.air_conditioner.checkbox,
        sockets: result.sockets.checkbox,
      },
      parking: {
        parkingCar: result.parkingCar.checkbox,
        parkingMotorcycle: result.parkingMotorcycle.checkbox,
      } 
    }

    return NextResponse.json(rowsStructured)

  } catch(error) {
    console.error(error)
    return NextResponse.json(
      { message: 'Error while get user by slug' },
      { status: 500 },
    )
  }
}