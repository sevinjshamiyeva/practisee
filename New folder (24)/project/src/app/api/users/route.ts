import { NextResponse } from "next/server";
import connect from "./config";
import User from "./model";

connect();

export async function GET(req: Request, res: Response) {
  const allUsers = await User.find({});
  console.log(allUsers);
  return NextResponse.json(allUsers);
}
