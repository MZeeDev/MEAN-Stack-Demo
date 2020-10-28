'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let tagSchema = new Schema(
	{
		tagID: Number,
		StoreCode: Number,
		facilityCode: Number,
		thingTypeCode: Number,
		iDocNumber: Number,
		iDocType: String,
		iDocCreatedOn: Date,
		iDocCreatedAt: Date,
		DocumentNum: Number,
		Timestamp: Date,
		itemcode: Number,
		Sloc: String,
		Batch: String,
		status: String,
		supplier: String,
		Quantity: Number,
		UOM: Number,
		serialNUM: Number,
		Edate: Date,
		brand: String,
		brandDesc: String,
		sGroup: String,
		CorporateDescription: String,
		DepartmentElectronics: String,
		GroupDescription: String
	},
	{
		timestamps: true
	}
);

let Tag = mongoose.model('tag', tagSchema);

module.exports = Tag;
