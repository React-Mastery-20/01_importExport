// ⭐ Why We Need Renaming? (Real Reason)
    // ✅ 1. Naming Conflict

// Do different files same name export kar rahe ho.

    // Example:

    // math.js → add

    // string.js → add

    // Toh import karte waqt problem ho jayegi.

    // Wrong way: 
        // import { add } from "./math";
        // import { add } from "./string"; // ERROR same name

    // Right way:
        // import { add as addNumbers } from "./math";
        // import { add as addStrings } from "./string";

function hello(){
    console.log("k hal chal bhai ji");
}

export {hello};