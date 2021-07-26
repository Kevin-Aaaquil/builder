require('dotenv').config();
import logger from './logs'
import { MongoClient, Db } from 'mongodb';
let db : Db;

async function connect() : Promise <Db> {

    const client = new MongoClient(process.env.MONGO_URI!,{
        ignoreUndefined: true
    })
    logger.info('database connected')
    return client.db(process.env.DB_NAME)
}


async function DB() : Promise<Db>{
    if(!db)
    db=await connect()
    return db;
}

export default DB