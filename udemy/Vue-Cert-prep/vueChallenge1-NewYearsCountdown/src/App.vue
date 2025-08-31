<script setup>
import { ref, watch } from 'vue';
import CountdownSegment from './components/CountdownSegment.vue'
const nextNewYear = new Date(new Date().getFullYear() + 1, 0, 1);

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const now = ref(new Date());

setInterval(() => {now.value = new Date()}, 500);

watch(() => now,
  () => {
    // seconds.value = nextNewYear.getSeconds() - now.value.getSeconds();
    // minutes.value = nextNewYear.getMinutes() - now.value.getMinutes();
    // hours.value = nextNewYear.getHours() - now.value.getHours();
    // days.value = nextNewYear.getDate() - now.value.getDate();

    
    seconds.value =  60 - now.value.getSeconds();
    minutes.value = 60 - now.value.getMinutes() ;
    hours.value = 24 - now.value.getHours();
    days.value = getDaysInYear(now.value.getFullYear()) - getDayOfYear();
  },
  {
    immediate: true,
    deep: true
  }
)

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function getDaysInYear(year) {
  var days = 0;
  
  for(var month = 1; month <= 12; month++) {
    days += daysInMonth(month, year);
  }
  
  return days;

}
function getDayOfYear() {
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);

  return day
}

</script>

<template>
  <h1>New Years Countdown</h1>
  <p>
    <CountdownSegment :number="days" type="days"/>
    <CountdownSegment :number="hours" type="hours"/>
    <CountdownSegment :number="minutes" type="minutes"/>
    <CountdownSegment :number="seconds" type="seconds"/>
  </p>

  {{ nextNewYear }}
</template>

<style scoped>
p {
  display: flex;
}
</style>
