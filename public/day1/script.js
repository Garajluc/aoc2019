exports.day1 = {
    calc: function (input) {
        return Math.floor(parseInt(input) / 3) - 2;
    },
    part1: function (masses) {
        var result = masses.map((massPerMod) => {
            return this.calc(massPerMod);
        })
        return result.reduce((acc, curVal) => acc + curVal)
    },
    part2: function (masses) {
        let result = masses.map((massPerMod) => {
            var sum = this.calc(massPerMod);
            var total = 0;

            while (sum > 0) {
                total += sum;
                sum = this.calc(sum);
            }

            return total;
        })
        return result.reduce((acc, curVal) => acc + curVal);
    }
}