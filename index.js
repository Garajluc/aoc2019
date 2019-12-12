var express = require("express");
var server = express();

var base = require('./public/base');
var { day1 } = require('./public/day1/script.js');
var { day2 } = require('./public/day2/script.js');

server.get('/day1', (req, res) => {
    const getData = base.getInput('/day1/input.txt', '\n');
    const resultOne = day1.part1(getData);
    const resultTwo = day1.part2(getData);

    res.render('index.ejs', { resultOne: resultOne, resultTwo: resultTwo });
    res.end();
})

server.get('/day2', (req, res) => {
    //Data
    const getData = base.getInput('/day2/input.txt', ',');
    var input = getData.map((item) => {
        return parseInt(item, 10);
    })
    const resultOne = day2.part1(input, 12, 2);
    const resultTwo = day2.part2(input, 19690720)
    // Render
    res.render('index.ejs', { resultOne: resultOne[0], resultTwo: resultTwo });
    res.end();
})

server.get('/day3', (req, res) => {

    res.render('index.ejs', { resultOne: 'TBD', resultTwo: 'TBD' });
    res.end();
})

server.listen(3000, () => {
    console.log("Server started at http://localhost:%s", 3000);
});