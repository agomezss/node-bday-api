const mongo = require('../../config/mongo')
const { getBirthdayData } = require('../../config/seed_files')
const csvjson = require('csvjson')

module.exports = {
	collectionName: "birthdays",

	getAll: async () => {
		return await mongo.getAll(module.exports.collectionName)
	},

	getById: async (id) => {
		return await mongo.getById(module.exports.collectionName, id)
	},
	
	getByFilter: async (filter) => {
		return await mongo.getByFilter(module.exports.collectionName, filter)
	},

	updateById: async (id, obj) => {
		return await mongo.updateById(module.exports.collectionName, id, obj)
	},

	deleteById: async (id) => {
		return await mongo.deleteById(module.exports.collectionName, id)
	},

	insert: async (object) => {
		return await mongo.insert(module.exports.collectionName, object)
	},

	seed: async () => {
		data = csvjson.toObject(getBirthdayData())
		parsedData = [];
		data.map((elem, i) => {
			let name = null;
			let date = null;
			
			for (const item of Object.entries(elem)) {
				if (item && item[0]) name = item[0];
				if (item && item[1]) date = item[1];

				if(date != null && name != null) 
					parsedData.push({'name': name, 'date': date})
			}
		})
		await mongo.seed(module.exports.collectionName, parsedData);
	}
}