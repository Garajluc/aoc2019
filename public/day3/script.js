exports.day3 = {
    // detailCoordinatesR: function (move, x, y, detailCoordinates, currCoordinates) {
    //     var moveTO = move.match(/\d/g).join('');

    //     while (moveTO > 0) {
    //         if (move.includes('R')) {
    //             y = y + parseInt(moveTO);
    //         } else if (move.includes('L')) {
    //             y = y - parseInt(moveTO);
    //         } else if (move.includes('U')) {
    //             x = x + parseInt(moveTO);
    //         } else if (move.includes('D')) {
    //             x = x - parseInt(moveTO);
    //         }
    //         detailCoordinates.push('x' + x + 'y' + y);
    //         moveTO--;
    //     }
    //     currCoordinates.push(detailCoordinates[0]);
    // },
    part1: function (wires) {
        console.log(wires)
        for (let wire = 0; wire < wires.length; wire++) {
            var currWire = wires[wire];
            var currCoordinates = [];
            var y = 0;
            var x = 0;
            
            for (let i = 0; i < currWire.length; i++) {
                var detailCoordinates = [];

                var moveTO = currWire[i].match(/\d/g).join('');
                var n = 0;
                while (moveTO >= n) {
                    if (currWire[i].includes('R')) {
                        y++;
                    } else if (currWire[i].includes('L')) {
                        y--;
                    } else if (currWire[i].includes('U')) {
                        x++;
                    } else if (currWire[i].includes('D')) {
                        x--;
                    }
                    detailCoordinates.push('x' + x + 'y' + y);
                    n++;
                }
                currCoordinates.push(detailCoordinates);
            }

            console.log(currCoordinates);
        }
    }
}