import * as mod from "@ryoppippi/jsr-bug-reproduction";

type Add = (a: number, b: number) => number;

mod.fAdd satisfies Add; // OK
mod.f.add satisfies Add; // OK

mod.fAdd satisfies string; // Error because `mod.fAdd` is a function
mod.f.add satisfies string; // OK because `mod.f.add` inferred as any.....
