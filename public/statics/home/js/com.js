$(function() {
	// ad_top重新计算一下，防止不是1920的图片出现
	var ad_top_img = $('.ad_top_img');
	ad_top_img.load(function(){
		var imgW = ad_top_img.width() == 0 ? 960 : ad_top_img.width()/2;
		ad_top_img.css('margin-left','-' + imgW + 'px').css('left','50%');
	});
	// banner
	var banner_img = $('.banner').children('img').first();
	banner_img.load(function(){
		var imgW = banner_img.width() == 0 ? 960 : banner_img.width()/2;
		banner_img.css('margin-left','-' + imgW + 'px').css('left','50%');
	});
});