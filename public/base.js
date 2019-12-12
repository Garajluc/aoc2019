const fs = require('fs');

module.exports = {
    getInput: function (file, splitter) {
        try {
            const data = fs.readFileSync(__dirname + file, 'utf-8');
            return data.split(splitter);
        }
        catch (err) {
            if (err.ENOENT) console.log('File not found')
            else throw err
        }
    }
}