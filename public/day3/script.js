exports.day3 = {
    part1: function (wires) {
        var wiresCoordinates = [];
        for (let wire = 0; wire < wires.length; wire++) {
            var currWire = wires[wire];
            var currCoordinates = [];
            var y = 0;
            var x = 0;
            // Detail Coordinates Calculation
            for (let i = 0; i < currWire.length; i++) {
                var moveTO = currWire[i].match(/\d/g).join('');
                var n = 0;
                while (moveTO > n) {
                    if (currWire[i].includes('R')) {
                        y++;
                    } else if (currWire[i].includes('L')) {
                        y--;
                    } else if (currWire[i].includes('U')) {
                        x++;
                    } else if (currWire[i].includes('D')) {
                        x--;
                    }
                    currCoordinates.push('x' + x + 'y' + y);
                    n++;
                }
            }
            wiresCoordinates.push(currCoordinates);
        }

        // Look for the intersections
        // var wireOne = [...wiresCoordinates[0]];
        // var wireTwo = [...wiresCoordinates[1]];
        // var intersections = [];
        // if (wireOne.length < wireTwo.length) {
        //     for (let j = 0; j < wireOne.length; j++) {
        //         if (wireTwo.indexOf(wireOne[j]) !== -1) {
        //             intersections.push(wireOne[j])
        //         }
        //     }
        // } else {
        //     for (let j = 0; j < wireTwo.length; j++) {
        //         if (wireOne.indexOf(wireTwo[j]) !== -1) {
        //             intersections.push(wireTwo[j])
        //         }
        //     }
        // }

        // Calculate Distance
        // int distance = Math.abs(x1-x0) + Math.abs(y1-y0);
        var distances = [];
        this.intersections.map(item => {
            var x = item.match(/(-)*[0-9]+/g)[0];
            var y = item.match(/(-)*[0-9]+/g)[1];
            var distance = Math.abs(x) + Math.abs(y);
            distances.push(distance);
        })
        var min = Math.min.apply(null, distances);
        console.log(min)
    },
    intersections: ['x-679y-1004',
        'x-1019y-744',
        'x-823y-720',
        'x-679y-720',
        'x-907y-271',
        'x-907y-307',
        'x-1161y-377',
        'x-1349y-307',
        'x-1349y-271',
        'x-1349y-238',
        'x-1826y1161',
        'x-1516y1473',
        'x-978y1985',
        'x-1753y2117',
        'x-1874y2275',
        'x-924y2312',
        'x264y872',
        'x0y872',
        'x0y302',
        'x412y-1113',
        'x527y-1755',
        'x-90y-2391',
        'x-217y-2688',
        'x-217y-3026',
        'x-1076y-3675',
        'x-1099y-3675',
        'x-1108y-3692',
        'x-1108y-4078',
        'x58y-3026',
        'x870y-2576',
        'x-562y-3026',
        'x-659y-2840',
        'x-659y-2688',
        'x-659y-2593',
        'x-659y-2319',
        'x-753y-2236',
        'x-848y-2236',
        'x-1184y-2236',
        'x-1551y-2290',
        'x-1551y-2697',
        'x-1426y-2769',
        'x-1396y-2697',
        'x-1396y-2620',
        'x-1379y-2330',
        'x-1184y-2330',
        'x-926y-2178',
        'x-926y-1896',
        'x-1358y-1297',
        'x-1358y-971',
        'x-1358y-934',
        'x-1358y-744',
        'x-1161y-598',
        'x-1121y-598',
        'x-823y-598',
        'x-708y-307',
        'x-1579y112',
        'x-1579y-187',
        'x-1579y-238',
        'x-1579y-271',
        'x-1573y-329',
        'x-1527y-329',
        'x-1495y-329',
        'x-1161y-329',
        'x-823y-329',
        'x-249y-1215',
        'x-180y-1771',
        'x-90y-1863',
        'x584y-1755']
}