export const textMixins = {
    data() {
        return {
            text: 'Damn!'
        };
    },
    computed: {
        reverseText() {
            return this.text.split("").reverse().join("");
        },
        textLength() {
            return this.text + ' (' + this.text.length + ')';
        }
    }
}