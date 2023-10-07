import mongoose, { Schema, model } from "mongoose";

const CodeSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, "The name is required"],
    },
    language: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Code = model("Code", CodeSchema);
export default Code;