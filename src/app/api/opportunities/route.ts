
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Opportunity } from "@/types/opportunity";


const filePath = path.join(
  process.cwd(),
  "src/data/opportunities.json"
);


// GET all opportunities
export async function GET() {
  const fileData = fs.readFileSync(filePath, "utf-8");

  const opportunities: Opportunity[] = JSON.parse(fileData);

  return NextResponse.json(opportunities);
}


// POST create opportunity
export async function POST(request: Request) {

  try {

    const newOpportunity = await request.json();


    const fileData = fs.readFileSync(
      filePath,
      "utf-8"
    );


    const opportunities: Opportunity[] =
      JSON.parse(fileData);


    const newId =
      opportunities.length > 0
        ? Math.max(
            ...opportunities.map((item) => item.id)
          ) + 1
        : 1;


    const opportunityToAdd = {
      id: newId,
      postedAt: new Date()
        .toISOString()
        .split("T")[0],

      featured: false,

      ...newOpportunity,
    };


    opportunities.push(opportunityToAdd);


    fs.writeFileSync(
      filePath,
      JSON.stringify(
        opportunities,
        null,
        2
      )
    );


    return NextResponse.json(
      opportunityToAdd,
      {
        status: 201,
      }
    );


  } catch (error) {
  console.error("POST Error:", error);

  return NextResponse.json(
    {
      message: "Failed to create opportunity",
      error: String(error),
    },
    {
      status: 500,
    }
  );
}
}