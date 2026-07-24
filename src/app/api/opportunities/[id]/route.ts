import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Opportunity } from "@/types/opportunity";


const filePath = path.join(
  process.cwd(),
  "src/data/opportunities.json"
);

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  try {

    const { id } = await params;


    const updatedData = await request.json();


    const fileData = fs.readFileSync(
      filePath,
      "utf-8"
    );


    const opportunities: Opportunity[] =
      JSON.parse(fileData);



    const index = opportunities.findIndex(
      (item) => item.id === Number(id)
    );



    if (index === -1) {

      return NextResponse.json(
        {
          message: "Opportunity not found"
        },
        {
          status: 404
        }
      );

    }



    opportunities[index] = {
      ...opportunities[index],
      ...updatedData,
    };



    fs.writeFileSync(
      filePath,
      JSON.stringify(
        opportunities,
        null,
        2
      )
    );



    return NextResponse.json(
      opportunities[index]
    );


  } catch(error) {


    return NextResponse.json(
      {
        message: "Failed to update opportunity"
      },
      {
        status:500
      }
    );


  }

}

export async function DELETE(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {

  try {

    const { id } = await params;


    const filePath = path.join(
      process.cwd(),
      "src/data/opportunities.json"
    );


    const fileData = fs.readFileSync(
      filePath,
      "utf-8"
    );


    const opportunities = JSON.parse(fileData);


    const updatedOpportunities =
      opportunities.filter(
        (item: Opportunity) =>
          item.id !== Number(id)
      );


    fs.writeFileSync(
      filePath,
      JSON.stringify(
        updatedOpportunities,
        null,
        2
      )
    );


    return NextResponse.json({
      message:
        "Opportunity deleted successfully",
    });


  } catch (error) {

    return NextResponse.json(
      {
        message:
          "Failed to delete opportunity",
      },
      {
        status: 500,
      }
    );

  }

}