	var navBtn = document.getElementById("navBtn");
	var links = document.querySelectorAll(".menuLink");

	links.forEach(function(e){
		e.addEventListener("click",function(){
			if(navBtn.checked)navBtn.checked=false;
		});
	});

