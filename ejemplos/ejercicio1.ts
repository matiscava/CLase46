import {
    red,green,bgWhite,bold,yellow,black
} from "https://deno.land/std@0.100.0/fmt/colors.ts";

const argArray = Deno.args;
const nums = argArray.map( num => parseInt(num))

const min = Math.min(...nums);
const max = Math.max(...nums);

const sum = nums.reduce((previous, current) => current += previous);
const media = sum / nums.length;

console.log('****************************');
console.log(bgWhite(bold(black(`Números: ${nums.toString()}`))));
console.log(bgWhite(yellow(`Mínimo: ${min}`)));
console.log(bgWhite(red(`Máximo: ${max}`)));
console.log(bgWhite(green(`Promedio: ${media}`)));
console.log('****************************');
