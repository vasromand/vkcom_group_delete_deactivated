//Part 1
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
//Part 2
jQuery.noConflict();
jQuery( document ).ready(function( $ ) {
	var deleted = 0;
	$("img.gedit_user_img").each(function(){
		var src = $(this).attr("src").split("/").pop();

		if(src == "deactivated_100.gif")
		{
			var cmd = $(this).closest(".gedit_user")[0];
			cmd = $(".gedit_user_actions", cmd)[0];
			cmd = $(".gedit_user_action", cmd)[1].click();
			deleted++;
		}
	});
	console.log(deleted);
});
