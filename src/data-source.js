"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Message_1 = require("./entity/Message");
exports.MessageDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "rtc",
    entities: [Message_1.Message],
    synchronize: true,
    logging: false,
});
// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
exports.MessageDataSource.initialize()
    .then(() => {
    // here you can start to work with your database
})
    .catch((error) => console.log(error));
