// JavaScript Document
function slide(){
	this.cfg={
		tu:["demo1.jpg","demo2.jpg","demo3.jpg","demo4.jpg"],
		speed:800		
		}
	
	};
slide.prototype={
	slide:function(cfg){
		var CFG=$.extend(this.cfg,cfg);
		var huan=$('<div class="panel one panel_active"><img src="images/'+CFG.tu[0]+'" alt=""/></div>'
					+'<div class="panel two"><img src="images/'+CFG.tu[1]+'" alt=""/></div>'
					+'<div class="panel three"><img src="images/'+CFG.tu[2]+'" alt=""/></div>'
					+'<div class="panel four"><img src="images/'+CFG.tu[3]+'" alt=""/></div>'
					+'<ul class="point_ul">'
						+'<li class="point_active"></li>'
						+'<li></li>'
						+'<li></li>'
						+'<li></li>'
					+'</ul>');
			huan.appendTo('.slide_wrap');
			var point=$(".point_ul li");
			point.click(function(){
					$(".panel").removeClass("panel_active").animate({opacity:0},CFG.speed);
					$(".panel").eq($(this).index()).addClass("panel_active").animate({opacity:1},CFG.speed);
					$(".point_ul li").removeClass("point_active");
					$(this).addClass("point_active");
				});
			$(".point_ul").css({
				left:($(window).width()-$(".point_ul").width())/2+"px",
				bottom:20+"px"
				});
			$(window).resize(function(){
				$(".point_ul").css({
				left:($(window).width()-$(".point_ul").width())/2+"px",
				bottom:20+"px"
				})
				});
		
		}
	
	}