// JavaScript Document
(function($){
	$.fn.Myplugin=function(){
		alert("hello");
		};
		
	$.fn.Maxheight=function(){
		var max=0;
		this.each(function(){
			max=Math.max(max,$(this).height());
			})
		alert (max);
		};
		
	$.fn.Lockdemision=function(type){
		return this.each(function(){
		if(!type || type == "width"){
			alert($(this).width());
			
			}
		if(!type || type == "height"){
			alert($(this).height());

			}
			})
		};
		
	$.fn.tooltips=function(options){
		var settings={
			'location':'top',
			'background-color':'blue'
		};
		return this.each(function(){
			if(options){
			$.extend(settings,options);
			alert("当前传入方向："+settings['location']+";当前传入背景色："+settings['background-color']);
				}else{
					alert("默认方向："+settings['location']+";默认背景色："+settings['background-color']);
					}
		})
		
	};
	
	$.fn.maxHeight=function(){
		var max=0;
		this.each(function(){
			max=Math.max(max,$(this).height());
			});
		console.log(max);
		
		}
	$.fn.minHeight=function(){
		var min=[];
		this.each(function(a,b){
			b=$(this).height();
			//console.log(a+" : "+b);
		 min.push(b);
		});
		//console.log(min);
		//var minVal;
		
		}
})(jQuery)