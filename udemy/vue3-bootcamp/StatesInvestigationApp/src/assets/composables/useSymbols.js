import { ref } from 'vue';

export default function () {
    const symbols = ref(['!', '@', '#', '$', '%', '^', '&', '*']);

    const addSymbol = (symbol) => {
        symbols.value.push(symbol);
    };

    const removeSymbol = (symbol) => {
        const index = symbols.value.indexOf(symbol);
        if (index !== -1) {
            symbols.value.splice(index, 1);
        }
    };

    const hasSymbol = (symbol) => {
        return symbols.value.includes(symbol);
    };

    return {
        symbols,
        addSymbol,
        removeSymbol,
        hasSymbol
    };
}