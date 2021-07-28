require('dotenv').config();
import logger from './logs'
import { MongoClient, Db } from 'mongodb';
let db : Db;

// this function is used for connecting to mongodb client and return db
async function connect() : Promise <Db> {

    const client = new MongoClient(process.env.MONGO_URI!,{
        ignoreUndefined: true
    })
    logger.info('database connected')
    return client.db(process.env.DB_NAME)
}

// this function is default exported for other modules to call to connect
// or access db and collections
async function DB() : Promise<Db>{
    if(!db)
    db=await connect()
    return db;
}

export default DB
