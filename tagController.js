'use strict';
const Tag = require('./tagSchema');

class TagController {
	async addTags(req, res) {
		try {
			let tagID = req.body.tagID;
			let StoreCode = req.body.StoreCode;
			let facilityCode = req.body.facilityCode;
			let thingTypeCode = req.body.thingTypeCode;
			let iDocNumber = req.body.iDocNumber;
			let iDocType = req.body.iDocType;
			let iDocCreatedOn = req.body.iDocCreatedOn;
			let iDocCreatedAt = req.body.iDocCreatedAt;
			let DocumentNum = req.body.DocumentNum;
			let Timestamp = req.body.Timestamp;
			let itemcode = req.body.itemcode;
			let Sloc = req.body.Sloc;
			let Batch = req.body.Batch;
			let status = req.body.status;
			let supplier = req.body.supplier;
			let Quantity = req.body.Quantity;
			let UOM = req.body.UOM;
			let serialNUM = req.body.serialNUM;
			let Edate = req.body.Edate;
			let brand = req.body.brand;
			let brandDesc = req.body.brandDesc;
			let sGroup = req.body.sGroup;
			let CorporateDescription = req.body.CorporateDescription;
			let DepartmentElectronics = req.body.DepartmentElectronics;
			let GroupDescription = req.body.GroupDescription;
			let newtag = new Tag({
				tagID,
				StoreCode,
				facilityCode,
				thingTypeCode,
				iDocNumber,
				iDocType,
				iDocCreatedOn,
				iDocCreatedAt,
				DocumentNum,
				Timestamp,
				itemcode,
				Sloc,
				Batch,
				status,
				supplier,
				Quantity,
				UOM,
				serialNUM,
				Edate,
				brand,
				brandDesc,
				sGroup,
				CorporateDescription,
				DepartmentElectronics,
				GroupDescription
			});
			let resp = await newtag.save();
			return res.status(200).json(resp);
		} catch (error) {
			console.log(error);
		}
	}

	async getTags(req, res) {
		try {
			let response = await Tag.find().sort({ _id: -1 });
			return res.status(200).json(response);
		} catch (error) {
			console.log(error);
		}
	}

	async getTagBySupplier(req, res) {
		try {
			let supplier = req.params.supplier;
			let response = await Tag.find({
				supplier: supplier
			});
			return res.status(200).json(response);
		} catch (error) {
			console.log(error);
		}
	}
}

const tagController = new TagController();
module.exports = tagController;
