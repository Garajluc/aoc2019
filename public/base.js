const fs = require('fs');

module.exports = {
    getInput: function (file) {
        try {
            const data = fs.readFileSync(__dirname + file, 'utf-8');
            return data;
        }
        catch (err) {
            if (err.ENOENT) console.log('File not found')
            else throw err
        }
    }
}