## tickerNews

`$.fn.tickerNews([options])`

####options #####

* ##### `base` #####

	+   **Definition** : define the speed of scroll
	+	**Value type** : [object]
	+   **Default** : 
			{
				'width' : 2100,
				'time' : 40000
			}

* ##### `itemWidth` 
	
	+	**Definition** : define width of the item inside ticker
	+	**Value type** : `"auto"` `0` `Number` `'100px'`
	+	**Derault** : `"auto"`

* ##### `ticker` 
	
	+	**Definition** : selector of items inside ticker
	+	**Value type** : jquery string selector
	+	**Derault** : `".ti_news"`

* ##### `wrapper` 
	
	+	**Definition** : selector of ticker wrapper
	+	**Value type** : jquery string selector
	+	**Derault** : `".ti_wrapper"`

* ##### `slide` 
	
	+	**Definition** : selector of the static container of sliding item
	+	**Value type** : jquery string selector
	+	**Derault** : `".ti_slide"`

* ##### `content` 
	
	+	**Definition** : selector of sliding content
	+	**Value type** : jquery string selector
	+	**Derault** : `".ti_content"`

* ##### `tickerColne` 
	
	+	**Definition** : class name added when clone the **content**
	+	**Value type** : `string`
	+	**Derault** : `"ti_clone"`

* ##### `callbacks` 
	
	+	**Definition** : an object of callbacks called each time a particolar event occurred.
	+	**Value type** : `object`
	+	**Derault** : 

				{
					//before a ticker load
					beforeLoad : function($Ticker){},
					//after a ticker load (with current element initialized)
					onLoad : function($current,$Ticker){},
					//before each animation start
					beforeAnimation : function($old,$current){},
					//after each animation end
					completeAnimation : function($old,$current){},
					//after each time a ticker is paused
					isPaused : function($current,$Ticker){},
					//after each time a ticker is resumed
					isResumed : function($current,$Ticker){}
				}

## Pause and Remsume a ticker

You can pause and resume a ticker by calling this two methods on an element or a group of element that have an instance of ticker inside.

`$.fn.tickerNewsPause()`
`$.fn.tickerNewsResume()`

