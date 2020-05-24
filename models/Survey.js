const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require("./Recipient");

// we are not nesting surveys further into user because of the 16 MB of a BSON document (instance) in Mongo
const SurveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  //array of recipients
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  // _ (underscore signifies that this is a relationship field   ** not required)
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date,
});

mongoose.model("surveys", SurveySchema);
