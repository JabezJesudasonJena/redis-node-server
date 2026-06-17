import client from "./client.js";

async function init() {
	const fieldsAdded = await client.hset(
		'bike:1',
		{
			'model': 'Demios',
			'brand': 'Ergom',
			'type': 'Enduro bikes',
			'price' : 4972
		}
	)
	console.log(fieldsAdded);

	const res2 = await client.hget('bike:1', 'model');
	console.log(res2);

	const res3 = await client.hget('bike:1', 'price');
	console.log(res3)

	const res4 = await client.hgetall('bike:1');
	console.log(res4);
}

init();