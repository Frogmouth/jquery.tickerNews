_Sorry for my bad English :: FrogMouth_

jQuery.tickerNews
===============

A simple jquery plugin to crate a infinite scrilling ticker news

### Current Version: 1.0

Requirements
---------------------

* [jQuery](http://jquery.com/ "jQuery Home") (> 1.8 raccomanded)


What can we do?
---------------

One day I've tried to find a plugin to simple create an infinite scroll ticker news, but unfortunatly I haven't found it.


Done and To do list:
---------------------

**DONE:**

- Infinite scroll
- Automatic width
- callbacks menage


**TO DO:**

- Responsive script (but right now it work like a charm)
- Some template

Quick start:
---

Call `.newsTicker()`:

	$(function(){
		$(".TickerNews").newsTicker();
	});

Simple HTML:

	<div class="TickerNews" id="T2">
	    <div class="ti_wrapper">
	        <div class="ti_slide">
	            <div class="ti_content">
	                <div class="ti_news"><a href="#">US fisherman rescued by tanker after 66 days lost at sea</a></div>
					<div class="ti_news"><a href="#">Overseas aid must rise by £1bn in next two years, says Europe</a></div>
					<div class="ti_news"><a href="#">Muslim population looks likely to double in size </a></div>
					<div class="ti_news"><a href="#">Heathrow cuts passenger levy to boost domestic flights</a></div>
					<div class="ti_news"><a href="#">Couple plotted to sell their new baby online for €5,000 </a></div>
	            </div>
	        </div>
	    </div>
    </div>  

Simple CSS:

	.TickerNews{
		width: 100%;
		height: 50px;
		line-height: 50px;
	}
	.ti_wrapper{
		width: 100%;
		position: relative;
		overflow: hidden;
		height: 50px;
	}
	.ti_slide{
		width: 30000px;
		position: relative;
		left: 0;
		top: 0;
	}
	.ti_content{
		width: 8000px;
		position: relative;
		float:left;
	}
	.ti_news{
		float:left;
	}
	.ti_news a{
		display: block;
		margin-right: 10px;
	}
