import mongodb from "../../../utils/mongodb";
import Bestellung from "../../../models/Bestellung";

export default async function handler(req, res) {
    const { method } = req;
    await mongodb.dbConnect();

    if (method === "GET") {
        try {
            const bestellungen = await Bestellung.find();
            res.status(200).json(bestellungen);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    if (method === "POST") {
        try {
            const bestellung = await Bestellung.create(req.body);
            res.status(201).json(bestellung);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    // await mongodb.dbDisconnect();
}