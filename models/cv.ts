import mongoose, { Schema, models, model } from "mongoose";

const cvSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  general: {
    aboutMe: {
      type: String,
    },
    lastName: {
      type: String,
    },
    firstName: {
      type: String,
    },
    gender: {
      type: String,
    },
    birthday: {
      type: String,
    },
  },
  contact: {
    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  job: {
    jobType: {
      type: String,
    },
    salary: {
      type: String,
    },
    interestedJob: {
      type: String,
    },
  },
  education: {
    degree: { type: String },
    country: { type: String },
    schoolName: { type: String },
    occupation: { type: String },
    startYear: { type: String },
    endYear: { type: String },
  },
  experience: { company: { type: String }, year: { type: String } },
  course: {
    name: {
      type: String,
    },
    year: {
      type: String,
    },
  },
  practice: {
    name: {
      type: String,
    },
    period: {
      type: String,
    },
  },
  softskill: {
    list: {
      type: String,
    },
  },
});

const CV = models.CV || model("CV", cvSchema);

export default CV;
