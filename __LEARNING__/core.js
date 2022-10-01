/**
 * HOW JavaScript work and execute ?
 * Everything in Javascript happen inside the EXECUTION CONTEXT
 * Javascript is a synchronous Single Threaded Language
 *
 * EXECUTION :
 * Whenever JS code is run it created a Execution Context called Global Execution Context
 *
 * Execution Context divided into 2 phases
 * Variable Environment(Memory Allocation):- In this JS program goes through the program and allocate memory of variable and function declared in the program,
 * Thread of Execution(code execution):- In this JS program now goes through the code line by line and execute the code
 *
 * Whenever a function is invoked it create it own mini execution context
 * "return" keyword return the control back to the previous Execution Contecxt and goes back to place where function is invoked. Execution Contect is DELETED
 *
 * Call Stack mentain the order of the Execution Context. It CREATES Execution Context whenever a Program starts or a Function is invoked and it pops out the Execution Context when a Function or Program ENDS.
 */

/**
 * There are three types of error:
 * [1] referenceError {given where variable does not have memory allocation}
 * [2] typeError {given when we change type that is not supposed to be changed}
 * [3] syntaxError {when proper syntax(way of writing a statement) is not used}.
 *
 */
