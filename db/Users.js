const db = require("./index");

const REGISTER_USER = "INSERT INTO \"Users\" (username, password, email) VALUES (${username}, ${password}, ${email}) RETURNING id, username";

const register = ({ username, password, email }) => {
    return db.one(REGISTER_USER, { username, password, email });
};

module.exports = { register };