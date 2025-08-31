<script setup>
import {ref } from 'vue'
// import { } from '@heroicons/vue'

const actionsTitles = {
    xMove: 'Player X\'s turn',
    oMove: 'Player O\'s turn',
}

const moves = ref({});

const action = ref(actionsTitles.xMove)
const isFinished = ref(false)

const user = ref('x');

function move(e, row, col) {
    if (moves.value[`${row}-${col}`] || isFinished.value) {
        return;
    }

    moves.value[`${row}-${col}`] = user.value;
    checkGame(row, col);

    if (isFinished.value) return;

    user.value = user.value === 'x' ? 'o' : 'x';
    action.value = user.value === 'x' ? actionsTitles.xMove : actionsTitles.oMove;
};

function checkGame(row, col) {
    const madeMoves = Object.keys(moves.value).length;

    // Nothing to Check
    if (madeMoves < 5) {
        return;
    }

    const u = user.value;

    if (
        (moves.value[`1-${col}`] == u && moves.value[`2-${col}`] == u && moves.value[`3-${col}`] == u) ||
        (moves.value[`${row}-1`] == u && moves.value[`${row}-2`] == u && moves.value[`${row}-3`] == u) ||
        (moves.value[`1-1`] == u && moves.value[`2-2`] == u && moves.value[`3-3`] == u) ||
        (moves.value[`1-3`] == u && moves.value[`2-2`] == u && moves.value[`3-1`] == u)
    ) {
        isFinished.value = true;
        action.value = `User ${user.value.toUpperCase()} WON!`
        return;
    }


    //all Moves done
    if (madeMoves === 9) {
        isFinished.value = true;
        action.value = 'Draw!'
    }
}

function restartGame() {
    isFinished.value=false;
    moves.value = {};
    user.value = 'x';
    action.value = actionsTitles.xMove;
}

</script>


<template>
    <section>
        <div>
            <header>
                <h1 class="center">Tick-Tac-Toe</h1>
                <h3 :class="{center: true, finished: isFinished}">{{ action }}</h3>
                <div v-if="isFinished" class="center" >
                    <button @click="restartGame">New Game</button>
                </div>
            </header>
            <div class="battlefield">
                <table>
                    <tr v-for="j in 3" :key="`row-${j}`">
                        <td
                            v-for="k in 3"
                            :key="`col-${k}`"
                            @click="move($event, j, k)"
                            :class="`user-${moves[j + '-' + k]}`"
                        >
                            {{ moves[`${j}-${k}`] }}
                        </td>
                    </tr>
                </table>
            </div>
            <div class="center" >
                <button @click="restartGame">Restart Game</button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.center {
    display: flex;
    justify-content: center;
}
section {
    align-items: center;
    color: white;
}

h1 {
    font-size: 2rem;
    font-weight: 500;
}

h3 {
    font-size: 1.5rem;

    &.finished {
        font-size: 3rem;
    }
}

.battlefield {
    margin-top: 20px;
    display: flex;
    justify-content: center;

    td {
        font-size: 4rem;
        width: 100px;
        height: 100px;
        align-items: center;
        align-content: center;
        text-align: center;
        border: 2px solid wheat;

        &.user-x {
            color:green;
        }

        &.user-o {
            color:orange;
        }
    }
}
</style>
