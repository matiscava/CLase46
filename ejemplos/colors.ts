import {
    red,green,bgYellow,bgBlack,bgWhite,bold
} from "https://deno.land/std@0.100.0/fmt/colors.ts";

console.log(bgYellow(bold(red('Hello Deno in colors!'))));
console.log(bgWhite(bold(red('Hello Deno in colors!'))));


