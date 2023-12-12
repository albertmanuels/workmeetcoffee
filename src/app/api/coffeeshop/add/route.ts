import { addCoffeeShop } from "@/lib/notion"

import { NextResponse } from "next/server"


export async function POST(req: Request) {
  const result = await req.json()

 await addCoffeeShop(result)
 return NextResponse.json({message: "Success Add Coffee Shop!"})
}