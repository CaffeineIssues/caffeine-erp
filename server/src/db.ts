import {
    types,
    Client,
    CustomTypesConfig,
    QueryArrayConfig,
    Pool,
    DatabaseError,
} from 'pg'

import { load } from 'ts-dotenv'

const pool_caffeine = new Pool({
    database: 'caffeine-erp',
    host: 'localhost',
    password: '123456',
    user: 'postgres',
    port: 5432,
})

const pool_watcher = new Client({
    database: 'caffeine-erp',
    host: 'localhost',
    password: '123456',
    user: 'postgres',
    port: 5432,
})
const pools = {
    caffeine: pool_caffeine,
    watcher: pool_watcher,
}

export default pools
