import { config } from "../config/Constants";
import { Request, Response } from "express";
import shortid from 'shortid'

export class URLController {
    public async shorten(req: Request, response: Response): Promise<void> {
        const { originURL } = req.body
        console.log(req.body)
        const hash = shortid.generate()
        const shortURL = `${config.API_URL}/${hash}`

        response.json({originURL, hash, shortURL})
    }

    public async redirect(req: Request, response: Response): Promise<void>{
        const {hash} = req.params
        const url = {
            originURL: '',
            hash: '',
            shortURL: ''
        }

        response.redirect(url.originURL)
    }
}
