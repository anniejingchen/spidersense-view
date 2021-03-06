/** ===========================================================================
 * ColorSequence
 * Helper class for returning a sequence of colors. The max amount of colors
 * that this class will generate is 40. This class is mainly used for the
 * Home component when generating background colors for each module unit
 * in the module view.
 * ========================================================================= */
class ColorSequence {
    constructor() {
        this.MAX_COLORS = 50;
        this.DEFAULT_SATURATION = 50;
        this.DEFAULT_LIGHTNESS = 50;

        // 10 colors
        this.COLOR_SEQUENCE = [
            { name: "lightblue", hue: 180 },
            { name: "blue", hue: 240 },
            { name: "green", hue: 120 },
            { name: "red", hue: 0 },
            { name: "orange", hue: 39 },
            { name: "teal", hue: 160 },
            { name: "indigo", hue: 265 },
            { name: "violet", hue: 280 },
            { name: "pink", hue: 300 },
            { name: "yellow", hue: 60 },
        ];

        this.COLOR_SEQUENCE_LENGTH = this.COLOR_SEQUENCE.length;
    }

    /**
     * Given the number of items, returns back an array of the same
     * length, with each object containing color sequence information.
     * 
     * The color sequence will be generated by reusing the color sequence
     * array, and dropping down the lightness by 10 for after every 10th
     * element.
     * 
     * If there are > 50 items, then hsl set will be white.
     * @param {number} numItems The number of items that need a color
     * @return {Array} A list of hsl strings
     */
    getColorSequence(numItems) {
        let colorSequence = new Array(numItems);

        for (let i = 0; i < numItems; i++) {
            let quotient = Math.floor(i / this.COLOR_SEQUENCE_LENGTH);
            let remainder = i % this.COLOR_SEQUENCE_LENGTH;

            let colorObj = this.COLOR_SEQUENCE[remainder];
            let lightness = this.DEFAULT_LIGHTNESS - (quotient * this.COLOR_SEQUENCE_LENGTH);

            if (i >= this.MAX_COLORS) {
                colorSequence[i] = "hsl(0, 100%, 100%)";
                continue;
            }

            colorSequence[i] = `hsl(${colorObj.hue}, ${this.DEFAULT_SATURATION}%, ${lightness}%)`;
        }

        return colorSequence;
    }
}
export default ColorSequence;