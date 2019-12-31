$( '.friend-drawer--onhover' ).on( 'click',  function() {
  
  $( '.chat-bubble' ).hide('slow').show('slow');
  
});

$('.cached').on('click', function() {
	$('.friend-drawer--onhover').hide('slow').show('slow');
});

$('.message').on('click', function() {
	$('.messaging').hide('slow');
	$('.friend-list').show('slow');
})