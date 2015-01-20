var Sequelize, config, path, sequelize;
config = require('./../config.js');
path = require('path');



global.loadService = function(functionName) {
    return require(path.join(config.base_path, 'services', functionName + config.script_ext));
};


/**
 * 移除默认数据库支持，改用loopback
 */
console.log('移除默认数据库支持,改用loopback')
