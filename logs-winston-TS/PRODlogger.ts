import winston from 'winston'
import { format, createLogger, transports} from 'winston'
const {combine, timestamp, errors, json} = format;

const buildProdLog = ()=>{
    return createLogger({
        level: 'warn',
        format: combine(
            timestamp({format : 'YYYY-MM-DD HH:mm:ss ZZ'}),
            errors({stack : true}),
            json()
        ),
        defaultMeta:{service : 'user-service'},
        transports: [
            new transports.Console(),
            new transports.File({filename : './LOGS/PROD.log'})
        ],
    });
}

export {buildProdLog}
