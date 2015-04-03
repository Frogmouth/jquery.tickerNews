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
	
	+	**Value type** : `object`
	+	**Derault** : 

				{
					beforeLoad : function($Ticker){},
					onLoad : function($current,$Ticker){},
					beforeAnimation : function($old,$current){},
					completeAnimation : function($old,$current){}
				}