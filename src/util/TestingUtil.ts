import { performance } from "perf_hooks";
import MathUtil from "./MathUtil";

export function calculateFunctionExecutionTiming(func, functionArg?): number {
    let startTime = performance.now();
    functionArg ? func(functionArg) : func();
    let endTime = performance.now();
    return MathUtil.preciseRnd(endTime - startTime, 4);
}

export function expect_equal(val1: any, val2: any): void {
    if(eval(val1) !== eval(val2)) {
        throw console.log(`[TESTING] Expect failure! Value 1 [${eval(val1)}] !== Value 2 [${eval(val2)}]`);
    }
    else {
        console.log(`[TESTING] Passed Expect! Value 1 [${eval(val1)}] == Value 2 [${eval(val2)}]`);
    }
    return;
}

export function expect(val1: any): void {
    if(!eval(val1)) {
        throw console.log(`[TESTING] Expect failure! Value 1: ${eval(val1)}`);
    }
    else {
        console.log(`[TESTING] Passed Expect! Value 1: ${eval(val1)}]`);
    }
    return;
}