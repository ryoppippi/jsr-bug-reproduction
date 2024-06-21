import * as mod from "jsr:@ryoppippi/jsr-bug-reproduction";

type Add = (a: number, b: number) => number;

mod.fAdd satisfies Add; // OK
mod.f.add satisfies Add; // OK

mod.fAdd satisfies string; // Error because `mod.fAdd` is a function
mod.f.add satisfies string; // Error because `mod.f.add` is a function
