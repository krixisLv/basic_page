var pic=1;
$(document).ready(function(){
	var $big = $('#big_pic');
	$big.click(function(){
		if(pic==6)pic=0;
		pic++;
		$(this).attr('src','images/pic' + pic + '.jpg');
	});
	$('ul > :nth-child(1)').click(function(){
		$big.attr("src","images/pic1.jpg");
		pic=1;
	});
	$('ul > :nth-child(2)').click(function(){
		$big.attr("src","images/pic2.jpg");
		pic=2;
	});
	$('ul > :nth-child(3)').click(function(){
		$big.attr("src","images/pic3.jpg");
		pic=3;
	});
	$('ul > :nth-child(4)').click(function(){
		$big.attr("src","images/pic4.jpg");
		pic=4;
	});
	$('ul > :nth-child(5)').click(function(){
		$big.attr("src","images/pic5.jpg");
		pic=5;
	});
	$('ul > :nth-child(6)').click(function(){
		$big.attr("src","images/pic6.jpg");
		pic=6;
	});
	$('#right').click(function(){
		if(pic==6)pic=0;
		pic++;
		$big.attr('src','images/pic' + pic + '.jpg');
	});
	$('#left').click(function(){
		if(pic==1)pic=7;
		pic--;
		$big.attr('src','images/pic' + pic + '.jpg');
	});
});