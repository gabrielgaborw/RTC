import "reflect-metadata"
import { DataSource } from "typeorm"
import { Message } from "./entity/Message"
import { User } from "./entity/User"

export const RTCDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "rtc",
    entities: [Message, User],
    synchronize: true,
    logging: false,
})

// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
RTCDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))