const birthdayRepo = require('../src/infrastructure/birthdays_repo');
const mongo = require('./mongo')

initializeSeed = async () => {
	let _db = mongo.connect();

	await birthdayRepo.seed();
	console.warn("Initial data inserted");
}

module.exports = {initializeSeed};