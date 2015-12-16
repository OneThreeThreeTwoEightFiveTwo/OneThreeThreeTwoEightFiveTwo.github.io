// jQuery to resize the navbar-brand font based on if the user has scrolled or not.
$( document ).ready( function ()
{
    // Used to check if the user has scrolled down the page.
    var scroll = 0;

    // Plugs into '.content'.
    var change = $( '.content' );

    // Gets the current coordinates of the element.
    var offset = change.offset();

    // Function to check whether the user has scrolled down the page.
    $( document ).scroll( function()
    {
        // Gets the current vertical position of the scroll bar.
        scroll = $( this ).scrollTop();

        // If the user has scrolled down the page.
        if( scroll > offset.top )
        {
            // Resize the navbar-brand via css to 16px.
            $( '.navbar-brand' ).css( 'font-size', '16px' );

            // Changes navbar-default background colour.
            $( '.navbar-default' ).css( 'background-color', 'rgba( 255, 255, 255, 0.8 )' );
        }
        // Otherwise reset.
        else
        {
            // Resize navbar-brand via css back to 18px (default).
            $( '.navbar-brand' ).css( 'font-size', '18px' );

            // Changes navbar-default background colour.
            $( '.navbar-default' ).css( 'background-color', 'rgba( 255, 255, 255, 1 )' );
        }
    });
});
