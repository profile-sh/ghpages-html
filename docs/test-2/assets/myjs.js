   // Get a handle on the first button element in the document.
import './styles.css'
    var button = document.querySelector( "button" );
 
    // If a user clicks on it, say hello!
    button.addEventListener( "click", function( ev ) {
        alert( "Hello" );
    }, false)
