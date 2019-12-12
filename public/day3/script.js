exports.day3 = {
    detailCoordinatesR: function (move, x, y, detailCoordinates, currCoordinates) {
        var moveY = move.match(/\d/g).join('');;
        while (moveY > 0) {
            y = y + parseInt(moveY);
            detailCoordinates.push('x' + x + 'y' + y);
            moveY--;
        }
        currCoordinates.push(detailCoordinates[0]);
    },
    part1: function (wires) {
        for (let wire = 0; wire < wires.length; wire++) {
            var currWire = wires[wire];
            var currCoordinates = [];

            for (let i = 0; i < currWire.length; i++) {
                var y = 0;
                var x = 0;
                var detailCoordinates = [];

                if (currWire[i].includes('R')) {
                    this.detailCoordinatesR(currWire[i], x, y, detailCoordinates, currCoordinates)
                } 

            }

            console.log(currCoordinates);
        }
    }
}