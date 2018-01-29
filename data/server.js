var config = require("../config");
const {Pool} = require("pg");

const pool = new Pool({
	max: config.DB_CONNECTIONS,
	host: config.DB_HOST,
	port: config.DB_PORT,
	database: config.DB_NAME,
	user: config.DB_USER,
	password: config.DB_PASSWPRD
});

class DataAccess {
	constructor() {
		this._pool = pool;
		this.loaded = false;
	}

	load() {
		if (this.loaded)
			throw "Data has already been loaded.";
		this.loaded = true;
	}
}

class BotAccess extends DataAccess {
	constructor() {
		super();
	}
}

module.exports = BotAccess;