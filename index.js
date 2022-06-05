window.onload = function() {
	document.body.className += " loaded";
}

$("#btn-email").click(function() {
	window.location = "mailto:turx2003@gmail.com";
});

$("#btn-email-portrait").click(function() {
	window.location = "mailto:turx2003@gmail.com";
});

$("#btn-twitter").click(function() {
	window.location = "https://twitter.com/_AruEkusu_";
});

$("#btn-blog").click(function() {
	window.location = "https://blog.turx.asia";
});

$("#btn-blog-portrait").click(function() {
	window.location = "https://blog.turx.asia";
});

$("#btn-github").click(function() {
	window.location = "https://github.com/TURX";
});

$("#btn-resume").click(function() {
	window.location = "https://direct.turx.asia/resume.pdf";
});

$("#btn-resume-portrait").click(function() {
	window.location = "https://direct.turx.asia/resume.pdf";
});

$("#bg").hover(function() {
	$("#content").css("opacity", "0.7");
}, function() {
	$("#content").css("opacity", "1");
});
