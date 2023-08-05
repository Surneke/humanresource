import { Schema, model, models } from "mongoose";

const requestSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  jobId: {
    type: Schema.Types.ObjectId,
    ref: "Job",
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
});

const RequestCv = models.Request || model("Request", requestSchema);

export default RequestCv;
