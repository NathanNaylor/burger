const connection = require("./connection")

const orm = {

    selectAll: (tableName, cb) => {
        const queryString = "SELECT * FROM ??"

        connection.query(queryString, [tableName], (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: (tableName, newRowData, cb) => {
        const queryString = "INSERT INTO ?? SET ?"
        const values = [tableName, newRowData]

        connection.query(queryString, values, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    updateOne: (tableName, updatedInfo, condition, cb) => {
        const queryString = "UPDATE ?? SET ? WHERE ?"
        const values = [tableName, updatedInfo, condition]

        connection.query(queryString, values, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};

//In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

module.exports = orm;