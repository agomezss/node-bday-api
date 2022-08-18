const express = require("express");
var router = express.Router();
const {
	body,
	param,
	validationResult
} = require('express-validator');
const repository = require("../infrastructure/birthdays_repo");

router.get('/:id/', async (req, res) => {
	const id = req.params.bdayId;
	if (!id) res.status(400).send();
	data = await repository.getByFilter({
		"id": id
	})
	res.status(200).send(data);
})

router.post('/',
	body('bday_id').exists().isNumeric(),
	body('name').exists(),
	body('date').exists().isDate(),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array()
			});
		}

		let bday_entry = {
			bday_id: req.body.bday_id,
			name: req.body.name,
			date: req.body.date
		};

		await repository.insert(bday_entry).then(() => res.status(201).send());
	})

router.put('/',
	body('_id').exists().isMongoId(),
	body('bday_id').exists().isNumeric(),
	body('name').exists(),
	body('date').exists().isDate(),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array()
			});
		}

		let bday_entry = {
			bday_id: req.body.bday_id,
			name: req.body.name,
			date: req.body.date
		};

		await repository.update(req.body._id, bday_entry).then(() => res.status(200).send());
	})

router.delete('/:id',
	param('id').exists().isMongoId(),
	async (req, res) => {
		const id = req.params.id;
		if (!id) res.status(400).send("missing Id");
		data = await repository.deleteById(id)
		res.status(200).send(data);
	});

module.exports = router;