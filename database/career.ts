import { Schema, models, model, Document } from "mongoose";

export interface ICareerForm extends Document {
  fullName: string;
  email: string;
  typeOfPosition: string;
  contactNumber: string;
  message: string;
}

const CareerFormSchema = new Schema({
  fullName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  typeOfPosition: { type: String, required: true },
  message: { type: String, required: true },
});

const CareerForm =
  models.CareerForm || model<ICareerForm>("CareerForm", CareerFormSchema);

export default CareerForm;
