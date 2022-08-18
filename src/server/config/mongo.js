const mongo = require("mongodb");
const url = "mongodb://localhost:27017/example";
const client = new mongo.MongoClient(url, {
	useUnifiedTopology: true
});

connect = () => {
	client.connect(err => {
		if (err) console.error(err);
		console.warn("Mongo connected in 27017");
	});

	let _db = client.db("testdb");
	return _db;
};

seed = async (collection, data) => {
	let _db = connect();
	await _db.collection(collection).deleteMany();
	return await _db.collection(collection).insertMany(data);
};

initialize = async () => {
	await initializeSeed();
	return true;
};

getDb = async () => {
	return await connect();
};

getAll = async (collection) => {
	let _db = connect();
	var data = await _db.collection(collection).find({})

	return data.toArray();
};

getById = async (collection, id) => {
	let _db = connect();
	var o_id = new mongo.ObjectID(id);
	return await _db.collection(collection).findOne({
		'_id': o_id
	});
};

getOneByFilter = async (collection, filter) => {
	let _db = connect();
	return await _db.collection(collection).findOne(filter);
};

getByFilter = async (collection, filter) => {
	let _db = connect();
	data = await _db.collection(collection).find(filter);
	return data.toArray();
};

updateById = async (collection, id, obj) => {
	let _db = connect()
	var o_id = new mongo.ObjectID(id);
	return await _db.collection(collection).updateOne({
		'_id': o_id
	}, {
		$set: obj
	})
};

deleteById = async (collection, id) => {
	let _db = connect()
	var o_id = new mongo.ObjectID(id);
	return await _db.collection(collection).deleteOne({
		'_id': o_id
	})
};

insert = async (collection, object) => {
	let _db = connect()
	return await _db.collection(collection).insertOne(object)
};

module.exports = {
	connect,
	seed,
	initialize,
	getDb,
	getAll,
	getById,
	getOneByFilter,
	getByFilter,
	updateById,
	deleteById,
	insert
};