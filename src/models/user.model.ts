import mongoose, { Schema, Model, Document } from "mongoose";

import { IUserSchema } from "../interfaces/user.interface";

interface IUserDocument extends IUserSchema, Document {}

class userModel {
  private readonly schema: Schema<IUserDocument>;
  private readonly model: Model<IUserDocument>;

  constructor() {
    this.schema = new Schema<IUserDocument>(
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
          lowercase: true,
          trim: true,
        },
        password: {
          type: String,
          required: true,
          minlength: 6,
        },
      },
      {
        timestamps: true,
        toJSON: {
          transform(doc, ret) {
            delete ret.password;
            delete ret.__v;
          },
        },
      }
    );

    this.model = mongoose.model<IUserDocument>("User", this.schema);
  }

  public getModel(): Model<IUserDocument> {
    return this.model;
  }
}

export default new userModel().getModel();