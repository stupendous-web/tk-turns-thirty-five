import { MongoClient } from "mongodb";

export default async function handler(request, response) {
  const { method, body } = request;

  const client = new MongoClient(process.env.MONGO_DB_URI);
  const collection = client.db("bessa").collection("names");
  await client.connect();

  switch (method) {
    case "GET":
      await collection
        .aggregate([])
        .toArray()
        .then((results) => response.json(results))
        .catch((error) => response.status(422).json(error))
        .finally(() => client.close());
      break;
    case "POST":
      await collection
        .insertOne({ ...body })
        .then(() => response.send("Good things come to those who wait."))
        .catch((error) => response.status(422).json(error))
        .finally(() => client.close());
      break;
    default:
      response.status(405).send();
  }
}
