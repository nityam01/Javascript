/**
 * Keyword	Scope	          Hoisting	 Can_Be_Reassigned	Can_Be_Redeclared
 *  var	    Function scope	    Yes	               Yes            Yes
 *  let	    Block scope	        No	               Yes	          No
 *  const	Block scope	        No	               No	          No
 *
 * Global variables are those declared outside of a block
 * Local variables are those declared inside of a block
 */

// Declarations
var x = 10;
let y = 12;
const something = "Hello";

/**
 * HOISTING
 * Hoisting: Mechanism in JS where the variable declarations are moved to the top of the scope before execution. Therefore it is possible to call a function before initializing it.
 * https://www.youtube.com/watch?v=Fnlnw8uY6jo
 */
