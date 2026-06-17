import client from "./client.js"
import express from "express"
import axios from "axios"

const app = express();
const port = process.env.PORT || 4008;

app.get("/photos", async (req, res) => {
	const albumId = req.query.albumId;
	await client.get('photos', async (err, photos) => {
		if (err) {
			console.log(err);
		}
		else if (photos) {
			return res.json(JSON.parse(photos));
		} else {
			const photos = await axios.get(
				"http://jsonplaceholder.typicode.com/photos",
				{params: {albumId}}
			)
			client.set("photos", JSON.stringify(photos.data), (err) => {
				if (err) {
					console.log(err);
				}
			})
			return res.status(200).json(photos.data);
		}
	})
})

app.get("/", (req, res) => {
	res.status(200).json({
		msg: "App is running"
	})
});


app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
})
