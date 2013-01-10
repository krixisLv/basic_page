$(document).ready(function(){
	var $x = $('#x');
	$x.hide();
	var $pic = $('#pic');
	var $trifele = $('#trifele');
	var $shoe = $('#shoe');
	var $picWrap = $('#picWrap');
	$picWrap.hide();
	$trifele.click(function(){
		$pic.attr("src","images/trifele.png");
		$picWrap.show(600);
		$x.show(700);
	})
	$shoe.click(function(){
		$pic.attr("src","images/shoeSize.png");
		$picWrap.show(600);
		$x.show(800);
	})
	$x.click(function(){
		$x.hide();
		$picWrap.hide(600);
	})
});