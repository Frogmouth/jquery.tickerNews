(function ($) {
	$.fn.newsTicker = function(options) {
		if($(this).length < 1) return this;

		var opt = $.extend(true,{
			base : {
				width : 2100,
				time : 40000
			},
			itemWidth : "auto",
			ticker : ".ti_news",
			tickerClone : "ti_clone",
			wrapper : ".ti_wrapper",
			slide : ".ti_slide",
			content : ".ti_content",

			callbacks : {
				beforeLoad : function($Ticker){},
				onLoad : function($current,$Ticker){},
				beforeAnimation : function($old,$current){},
				completeAnimation : function($old,$current){},
				isPaused : function($current,$Ticker){},
				isResumed : function($current,$Ticker){}
			},

			core : {
				_getTime : function(w){
					baseMargin=(typeof $contentTickers === "undefined") ? 0 : $contentTickers.first().css("margin-left");
					baseMargin=(baseMargin<0)?baseMargin:0;
					return opt.base.time * (w / (baseMargin + opt.base.width));
				},

				_contentWidth : function($tickers){
					var w = 0;
					if(opt.itemWidth !== "auto" && opt.itemWidth !== 0){
						w = $tickers.length * opt.itemWidth;
						$tickers.width(opt.itemWidth);
					}else{
						$tickers.each(function(){w = w + $(this).width()});
					}
					return Math.ceil(w+2);
				}
			}

		},options); 

		$(this).each(function(){
			var $Ticker = $(this);

				$Ticker.data("ticker",{
					stop:true,
					animation:null
				});

			opt.callbacks.beforeLoad($(this));

			var $notizieTicker = $Ticker.find(opt.ticker),
			$wrapperTicker = $Ticker.find(opt.wrapper),
			$ti_slide = $Ticker.find(opt.slide),
			$contentTicker = $Ticker.find(opt.content);

			var width_content = opt.core._contentWidth($notizieTicker),
				wrapper_width = $wrapperTicker.width(),
				$current,
				$old = $();

			if(width_content < wrapper_width){
				var x = Math.ceil(wrapper_width/width_content),
					$clone = $contentTicker.children().clone();
				for (var i = 1; i <= x; i++) {
					$contentTicker.append($clone.clone());
				}
				if(!opt.itemWidth || opt.itemWidth == "auto"){
					width_content = width_content*i;
				}else{
					width_content = ($contentTicker.children().length * opt.itemWidth);
				}
			}

			if(width_content * 3 > $ti_slide.width()) $ti_slide.width((width_content*3)+100);

			$ti_slide.append($contentTicker.clone().addClass(opt.tickerClone));
			$ti_slide.append($contentTicker.clone().addClass(opt.tickerClone));

			var $contentTickers = $Ticker.find(opt.content);
				$contentTickers.width(width_content);

			$current = $contentTickers.first();

			opt.callbacks.onLoad($current,$(this));

			var animateTicker = function(m){
				$ti_slide.append($old);
				var m = (typeof m == "undefined") ? 0 : m ; 
				$old.css("margin-left",m);

				opt.callbacks.beforeAnimation($old,$current);

				$Ticker.data("stop",false);
				var tickerAnimation = $current.animate({
					"margin-left" : -width_content,
				},{
					easing : "linear",
					duration : opt.core._getTime(width_content),
					complete : function(){
						$old = $current;
						$current = $current.next();
						opt.callbacks.completeAnimation($old,$current);
						animateTicker.call($Ticker);
					}
				});
				$Ticker.data("animation",tickerAnimation);
			}

			animateTicker.call(this);

			$Ticker[0].pauseTicker = function(){
				$Ticker.each(function(){
					var _anim = $Ticker.data("animation"),
						_stop = $Ticker.data("stop");
					if(!!_stop || !_anim) return;
					_anim.stop();
					$Ticker.data("stop",true);
					opt.callbacks.isPaused();
				});
			}

			$Ticker[0].startTicker = function(){
				$Ticker.each(function(){
					if(!$Ticker.data("stop")) return;
					animateTicker($Ticker);
					$Ticker.data("stop",false);
					opt.callbacks.isResumed();
				});
			}
		});

		return this;
	};

	$.fn.newsTickerPause = function(){
		$(this).each(function(){
			if("pauseTicker" in $(this)[0]) $(this)[0].pauseTicker();
		});
	}

	$.fn.newsTickerResume = function(){
		$(this).each(function(){
			if("startTicker" in $(this)[0]) $(this)[0].startTicker();
		});
	}

}( jQuery ));
