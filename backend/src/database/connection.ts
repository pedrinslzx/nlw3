import { ConnectionOptions, createConnection } from 'typeorm'

import con from '../../ormconfig.json'

createConnection(con as ConnectionOptions).catch(console.error)
