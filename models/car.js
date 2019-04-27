
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
	make:  { type: String, required: true },
   	model : { type: String, required: true },
   	year: { type: Number, required: true },
	docs: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Document',
			index: true,
		},
	],
}, { timestamps: true });

const Car = mongoose.model("Car", carSchema);

module.exports = Car;

