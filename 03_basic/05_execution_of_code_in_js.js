// ### **JavaScript Execution Context - Step-by-Step Explanation**  
// When executing the given JavaScript code, the JavaScript engine creates an **Execution Context** that follows two phases:  
// 1. **Memory Creation Phase (Creation Phase / Hoisting Phase)**  
// 2. **Execution Phase (Code Execution / Runtime Phase)**  

// Additionally, JavaScript uses a **Call Stack** to manage function execution. Let's break it down step by step:

// ---

// ## **Step 1: Global Execution Context (GEC)**
// Before executing the code, JavaScript creates a **Global Execution Context (GEC)** with two phases:

// ### **Phase 1: Memory Creation Phase**
// - **Allocate memory for variables and functions** but does not execute them yet.
// - Assigns `undefined` to variables and stores function definitions.

// | Variable/Function | Memory Allocation |
// |------------------|------------------|
// | `val1` | `undefined` |
// | `val2` | `undefined` |
// | `addSum` | `Function definition` |
// | `result1` | `undefined` |
// | `result2` | `undefined` |

// ### **Phase 2: Execution Phase**
// Now, the code executes line by line.

// 1. `let val1 = 10;` → Assign `10` to `val1`
// 2. `let val2 = 5;` → Assign `5` to `val2`
// 3. Function `addSum` remains in memory (not executed yet).
// 4. `let result1 = addSum(val1, val2);`
//    - A new **Function Execution Context (FEC)** is created for `addSum(10, 5)` and pushed onto the **Call Stack**.

// ---

// ## **Step 2: Execution of `addSum(val1, val2)`**
// When `addSum(10, 5)` is called, a **Function Execution Context (FEC)** is created with its own **Memory Phase** and **Execution Phase**.

// ### **Function Execution Context for `addSum(10,5)`**
// #### **Phase 1: Memory Creation**
// | Variable | Memory Allocation |
// |----------|------------------|
// | `num1` | `undefined` |
// | `num2` | `undefined` |
// | `total` | `undefined` |

// #### **Phase 2: Execution Phase**
// 1. `num1 = 10;`
// 2. `num2 = 5;`
// 3. `total = num1 + num2 = 10 + 5 = 15;`
// 4. `return total;` → The function returns `15`, and the **FEC is popped off** the call stack.
// 5. `result1 = 15;` is stored in the **Global Execution Context**.

// ---

// ## **Step 3: Execution of `addSum(12, 3)`**
// Similarly, another **FEC** is created for `addSum(12, 3)`.

// ### **Function Execution Context for `addSum(12,3)`**
// #### **Phase 1: Memory Creation**
// | Variable | Memory Allocation |
// |----------|------------------|
// | `num1` | `undefined` |
// | `num2` | `undefined` |
// | `total` | `undefined` |

// #### **Phase 2: Execution Phase**
// 1. `num1 = 12;`
// 2. `num2 = 3;`
// 3. `total = num1 + num2 = 12 + 3 = 15;`
// 4. `return total;` → The function returns `15`, and the **FEC is popped off** the call stack.
// 5. `result2 = 15;` is stored in the **Global Execution Context**.

// ---

// ## **Step 4: Completion of Execution**
// At this point, the **Call Stack** is empty, and the script execution completes.

// ### **Final Memory State**
// | Variable | Value |
// |----------|-------|
// | `val1` | `10` |
// | `val2` | `5` |
// | `addSum` | `Function definition` |
// | `result1` | `15` |
// | `result2` | `15` |

// ---

// ### **Call Stack Trace**
// | Step | Call Stack |
// |------|-----------|
// | Start | `Global Execution Context (GEC)` |
// | `addSum(10, 5)` is called | `GEC → addSum(10,5)` |
// | `addSum(10, 5)` returns | `GEC` |
// | `addSum(12, 3)` is called | `GEC → addSum(12,3)` |
// | `addSum(12, 3)` returns | `GEC` |
// | End | (Empty) |

// ---

// ## **Final Output**
// ```javascript
// console.log(result1); // 15
// console.log(result2); // 15
// ```

// This is how JavaScript executes the code step by step using the **Execution Context, Memory Phase, Execution Phase, and Call Stack**. 🚀

//After the completion of the Function Execution Context , it gets deleted and if their is any return value , then it is stored in the variale value in global context. 