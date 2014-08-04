
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){yepnope({load:"http://cdn.edgecommons.org/an/1.1.2/js/min/EdgeCommons.js",complete:function(){EC.Parallax.setup(sym);}});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","scroll",function(sym,e){jQuery(document).ready(function($){$(Stage).stellar();var links=$('.navigation').find('li');slide=$('.slide');button=$('.button');mywindow=$(Stage);htmlbody=$('html,body');slide.waypoint(function(event,direction){dataslide=$(this).attr('data-slide');if(direction==='down'){$('.navigation li[data-slide="'+dataslide+'"]').addClass('active').prev().removeClass('active');}
else{$('.navigation li[data-slide="'+dataslide+'"]').addClass('active').next().removeClass('active');}});mywindow.scroll(function(){if(mywindow.scrollTop()==0){$('.navigation li[data-slide="1"]').addClass('active');$('.navigation li[data-slide="2"]').removeClass('active');}});function goToByScroll(dataslide){htmlbody.animate({scrollTop:$('.slide[data-slide="'+dataslide+'"]').offset().top},2000,'easeInOutQuint');}
links.click(function(e){e.preventDefault();dataslide=$(this).attr('data-slide');goToByScroll(dataslide);});button.click(function(e){e.preventDefault();dataslide=$(this).attr('data-slide');goToByScroll(dataslide);});if(window.addEventListener)window.addEventListener('DOMMouseScroll',wheel,false);window.onmousewheel=document.onmousewheel=wheel;var time=350;var distance=100;function wheel(event){if(event.wheelDelta)delta=event.wheelDelta/50;else if(event.detail)delta=-event.detail/1;handle();if(event.preventDefault)event.preventDefault();event.returnValue=false;}
function handle(){$('html, body').stop().animate({scrollTop:$(window).scrollTop()-(distance*delta)},time);}
$(document).keydown(function(e){switch(e.which){case 38:$('html, body').stop().animate({scrollTop:$(window).scrollTop()-distance},time);break;case 40:$('html, body').stop().animate({scrollTop:$(window).scrollTop()+distance},time);break;}});});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-120926339");