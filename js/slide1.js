function slide1(){
	this.cfg={
		img:['images/demo01.jpg','images/demo02.jpg','images/demo03.jpg','images/demo04.jpg','images/demo05.jpg',],
		sudu:1500,
		speed:4000
	}
}
slide1.prototype={
	move:function(cfg){
		var CFG=$.extend(this.cfg,cfg);
		var layout=$('<div class="slide1_wrap">'
							+'<div id="img">'
								+'<div class="panel">'+'<img src="'+CFG.img[0]+'"/>'+'</div>'
								+'<div class="panel">'+'<img src="'+CFG.img[1]+'"/>'+'</div>'
								+'<div class="panel">'+'<img src="'+CFG.img[2]+'"/>'+'</div>'
								+'<div class="panel">'+'<img src="'+CFG.img[3]+'"/>'+'</div>'
								+'<div class="panel">'+'<img src="'+CFG.img[4]+'"/>'+'</div>'
							+'</div>'
							+'<ul class="point1">'
								+'<li class="spot spot_active"></li>'
								+'<li class="spot"></li>'
								+'<li class="spot"></li>'
								+'<li class="spot"></li>'
								+'<li class="spot"></li>'
							+'</ul>'
						+'</div>'
					);
		layout.appendTo('body');
		//$(".spot").css('border', CFG.border);
		//$(".spot_active").css('background', CFG.bgcolor);
		$(".spot").click(function(){
			clearInterval(timer);
			$(".spot").removeClass('spot_active');
			$(this).addClass('spot_active');
			var s=$(this).index();
			$("#img").animate(
				{
					left: -$(window).width()*s
				}, CFG.sudu)
		});
		autoMove();
		var timer=null;
		var num=0;
		function autoMove(num){
			clearInterval(timer);
			timer=setInterval(function(){
				if(num<4){
					num+=1
				}else{
					num=0
				}
				$(".spot").click(function(){
					num=$(this).index()-1;
				})
				$(".spot").removeClass('spot_active');
				$(".spot").eq(num).addClass('spot_active');
				$("#img").animate({
					left:-$(window).width()*num
				},CFG.sudu)
			},CFG.speed)
		}



	}
}