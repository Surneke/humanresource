import { Schema, model, models } from "mongoose";

export interface IJobs {
  title: string;
  hour: string;
  future: string;
  category: string;
}
const jobSchema = new Schema({
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  hour: {
    type: String,
  },
  requirements: {
    type: String,
  },
  future: {
    type: String,
  },
});

const AdCreateSchema = models.Jobs || model<IJobs>("Jobs", jobSchema);

export default AdCreateSchema;
