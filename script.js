	var cursorX;
	var cursorY;
	var enable = false;
	var noGrey = false;
	var tempBottom = "50px";
	var tempBottomH = "58px";
	$('.anchor').click(function(e){
		// Special stuff to do when this link is clicked...
		// Cancel the default action
		e.preventDefault();
	});
	document.onmousemove = function(e){
		cursorX = e.screenX;
		cursorY = e.screenY;
	}
	setInterval("checkCursor()", 0.25);
	function checkCursor(){
		if(cursorY>((screen.height*0.7)|0)){
			$('#botDiv').css("bottom", tempBottomH);
		}
		else
			$('#botDiv').css("bottom", "-200px");
	}
	function botIconDoubleH(a){
		var className = a.className;
		$("#"+className).css("backgroundColor", "#F62A00");
		var s;
		for(i = 0; i < 7; i++){
			s = 'double'+(i+1);
			if($("#"+s).attr("id")!=className){
				$("#"+s).css("backgroundColor","black");
			}
		}
		noGrey = true;
	}
	function botIconDoubleO(a){
			$("#"+a.className).css("backgroundColor","black");
	}
	function toolbarHovered(){
		$("#toolbar").css("height", "40px");
		$("#toolbar").css("opacity", "0.8");
		$("#toolbar").css("margin", "5px");
	}
	function toolbarOut(){
		$("#toolbar").css("height", "25px");
		$("#toolbar").css("opacity", "0.55");
		$("#toolbar").css("margin", "10px");
	}
	function botButtonDoubleH(a){
		var g;
		g = document.getElementsByTagName('div');
		$("."+a.id).css("borderColor", "red");
		for(i = 0; i < 7; i++){
		    if(("double"+(i+1))!=a.id)
				$(".double"+(i+1)).css("borderColor",  "black");
		}
	}
	function botButtonDoubleO(a){
		for(i = 0; i < 7; i++){
			$(".double"+(i+1)).css("borderColor", "black");
		}
	}
	function loadEvent(){
		window.location.href = "events.html";
	}
	function loadNews(){
		window.location.href = "news.html";
	}
	function loadHoF(){
		window.location.href = "hall-2.html";
	}
	function loadProfile(){
		window.location.href = "profile3.html";
	}
	function loadFriend(){
		window.location.href = "profilefriend.html";
	}
	function loadMess(a){
		localStorage.setItem("fromProfile",a);
		window.location.href = "messages.html";
	}
	function loadNotifs(){
		window.location.href = "notifs.html";
	}
	function loadAllFriends(){
		window.location.href = "seefriends.html"
	}
	function loadLanding(){
		window.document.location.href = "landing_page.html";
	}
	function loadSettings(){
		window.location.href = "settings.html";
	}
	function loadCreateEvents(){
		window.location.href = 'create_events.html';
	}
	function loadUpdateEvents(){
		window.location.href = 'update_events.html';
	}
	function loadClubs(){
		window.location.href = 'clubs.html';
	}
	function loadAllClubs(){
		window.location.href = 'seeclubs.html';
	}
	function loadAllBadges(){
		window.location.href = 'seebadges.html';
	}
	function eventClicked(){
		$dimDiv = $("<div></div>");
		$($dimDiv).addClass("eventDim");
		$($dimDiv).click(function(){
			this.remove();
			$(".eventPop").remove();
		});
		$close = $("<div></div>");
		$close.html("X");
		$($close).addClass("popClose");
		$($dimDiv).append($close);
		$eventShow = $("<div></div>");
		$($eventShow).addClass("eventPop");
		$eventPic = $("<div></div>");
		$($eventPic).addClass("eventPic");
		$($eventShow).append($eventPic);
		$who = $("<div></div>");
		$($who).addClass("eventDescription");
		$($who).html("Who: RINGERS VS. LOOPERS </br> What: 5v5 </br> When: mm/dd/yy </br> Where: Sta. Rosa, Laguna </br> Why: All-Star League");
		$update = $("<div></div>");
		$($update).addClass("updateEvents");
		$($update).html("Update");
		$($update).on('click',loadUpdateEvents);
		$($who).append($update);
		$($eventShow).append($who);
		$("body").append($dimDiv);
		$("body").append($eventShow);
	}
	

