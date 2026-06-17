import client from "./client.js";

async function init() {
	await client.setnx("user:4", "test_user");
	await client.expire("user:4", 15);
	const result = await client.get('user:4')
	console.log(result);
}

init();