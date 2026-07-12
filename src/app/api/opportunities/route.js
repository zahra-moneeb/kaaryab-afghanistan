import { NextResponse } from "next/server";
import opportunities from "@/data/opportunities.json";

export async function GET() {
  return NextResponse.json(opportunities);
}