import { appendFile } from "fs";
import "reflect-metadata";
import {createConnection} from "typeorm";
import {Assets} from "./Entity/Asssets";
import { config } from "./Configs/config";
import app from "./Server/server"

createConnection().then(async connection => {

    await connection.runMigrations()
    

    app.listen(config.APP_PORT, () => {
        console.log(`Listening on port: ${config.APP_PORT}`)
    })

}).catch(error => console.log(error));