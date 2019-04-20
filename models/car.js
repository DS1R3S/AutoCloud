
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
   	name : { type: String, required: true },
   	model:  { type: String, required: true },
   	year: { type: Number, required: true },
	doc: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Document',
			index: true,
		},
	],
}, { timestamps: true });

const Car = mongoose.model("Car", carSchema);

module.exports = Car;

