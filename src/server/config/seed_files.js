const fs = require('fs');
const path = require('path');

module.exports = {
	getBirthdayData: () => fs.readFileSync(
		path.join(__dirname, 'data', 'friends_bdays.csv'), {
			encoding: 'utf8'
		}
	)
};