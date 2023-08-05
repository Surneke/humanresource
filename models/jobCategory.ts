import { Schema, model, models } from "mongoose";

const jobCategorySchema = new Schema({
  jobCategoryName: {
    type: String,
  },
});

const JobCategory = models.JobCategory || model("JobCategory", jobCategorySchema);

export default JobCategory;
