var RNDBModel = require('react-native-db-models')

var DB = {
    "users": new RNDBModel.create_db('users'),
    "history": new RNDBModel.create_db('history'),
    "totals": new RNDBModel.create_db('totals'),
    "multipliers": new RNDBModel.create_db('multipliers'),
}

module.exports = DB
