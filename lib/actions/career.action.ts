"use server";

import CareerForm from "@/database/career";
import { connectToDatabase } from "../mongoose";
import { addCareerParams } from "./shared.types";
import { revalidatePath } from "next/cache";

// add Career
export async function addCareerForm(params: addCareerParams) {
  try {
    connectToDatabase();
    const { fullName, email, contactNumber, path, message, typeOfPosition } =
      params;

    const careerForm = await CareerForm.create({
      fullName,
      email,
      contactNumber,
      message,
      typeOfPosition,
    });

    revalidatePath(path);
    return { careerForm };
  } catch (error) {
    console.log(error);
  }
}
