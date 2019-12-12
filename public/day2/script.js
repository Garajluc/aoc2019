module.exports = {
    "day2": {
        part1: function (input, noun, verbe) {
            var resource = [...input];
            resource[1] = noun;
            resource[2] = verbe;
            for (let i = 0; i < resource.length; i += 4) {
                var opcode = resource[i];
                var positionOne = resource[i + 1];
                var positionTwo = resource[i + 2];
                var positionThree = resource[i + 3];
                if (opcode === 1) {
                    var add = resource[positionOne] + resource[positionTwo];
                    resource.splice(positionThree, 1, add)
                } else if (opcode === 2) {
                    var miltiply = resource[positionOne] * resource[positionTwo];
                    resource.splice(positionThree, 1, miltiply)
                } else if (opcode === 99) {
                    break;
                }
            }
            return resource;
        },
        part2: function (input, targetValue) {
            for (let noun = 0; noun < 99; noun++) {
                for (let verbe = 0; verbe < 99; verbe++) {
                    const resource = [...input];

                    const currentResult = this.part1(resource, noun, verbe)[0];
                    if (currentResult === targetValue) {
                        return (100 * noun + verbe)
                    }
                }
            }
        }
    }
}