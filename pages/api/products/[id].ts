import type { NextApiRequest, NextApiResponse } from "next";
import { StatusCodes } from "http-status-codes";
import { dbConnect } from "../../../utils/database";
import Product from "../../../models/Product";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {
        method,
        query: { id },
    } = req;

    await dbConnect();

    switch (method) {
        case "GET": {
            try {
                const product = await Product.findById(id);

                res.status(StatusCodes.OK).send(product);
            } catch (err) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
            }
        }
        case "PUT": {
            try {
                const product = await Product.create(req.body);

                res.status(StatusCodes.CREATED).send(product);
            } catch (err) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
            }
        }
        case "DELETE": {
            try {
                const product = await Product.create(req.body);

                res.status(StatusCodes.CREATED).send(product);
            } catch (err) {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
            }
        }
        default: {
            res.status(StatusCodes.BAD_REQUEST).send({
                message: "Unreconized method:",
                method,
            });
        }
    }
}
