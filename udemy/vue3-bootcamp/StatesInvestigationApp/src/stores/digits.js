import {defineStore} from 'pinia';

export const useDigitsStore = defineStore('digits', {
    state: () => {
        return {
            digits: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        };
    },
    getters: {
        doubleDugit: (state) => {
            return state.digits.map(digit => digit * 2);
        },
        filterDigits: (state) => {
            return (minDigit) => state.digits.filter(digit => digit >= minDigit);
        }
    },
    actions: {
        addDigit(digit) {
            this.digits.push(digit);
        }
    }
});