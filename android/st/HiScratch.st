Smalltalk current createPackage: 'HiScratch' properties: #{}!
Widget subclass: #HiScratchApp
	instanceVariableNames: 'ipInput updateTime connectButton messagesWidget varsWidget settingsWidget div updating httpClient pointerWidget subWidgets'
	category: 'HiScratch'!

!HiScratchApp methodsFor: 'HTTP'!

connect
	self httpClient connectTo: ipInput element value.
	self messagesWidget retrieveMessages.
	self varsWidget retrieveVars.
	self subWidgets do: [ :each | each update ].
	self settingsWidget update.
	self update.
!

disconnect
	self httpClient disconnect.
	self update.
!

toggleConnection
	self httpClient connected
		ifFalse: [	self connect.
				self updateConnectButton ]
		ifTrue: [
			self disconnect.
			self updateConnectButton ]
!

httpClient
	^ httpClient ifNil: [ httpClient := HSHTTPClient new ]
! !

!HiScratchApp methodsFor: 'accessing'!

updateTime
	^ updateTime ifNil: [ updateTime := 1000 ]
!

updateTime: anInteger
	updateTime := anInteger
! !

!HiScratchApp methodsFor: 'initialization'!

initialize
	super initialize.
	self updateLoop.
! !

!HiScratchApp methodsFor: 'rendering'!

renderOn: html
	( navigator userAgent match: 'MSIE' )
		ifTrue: [ self renderExplorerMessageOn: html ] 
		ifFalse: [	div := html div with: [ self renderContentOn: html ] ]
!

renderConnectButtonOn: html
	html a 
		class: 'button';
		with: 
			( self httpClient connected 
				ifFalse: [ 'connect' ] 
				ifTrue: [ 'disconnect' ] );
		onClick:
			[ self toggleConnection ]
!

renderIpInputOn: html
	ipInput := 
		html input
			type: 'text';
			value: self httpClient ip;
			onKeyPress: [ :event | 
				event keyCode = 13
					ifTrue: [ self toggleConnection ] ].
!

renderContentOn: html

	html div id: 'wrapper';
		with: [
			html div 
				id: 'controlPanel';
				with: [
					self renderConnectDivOn: html.
					html with: self settingsWidget ].
			html div
				id: 'widgetsPanel' ;
				with: [ self subWidgets do: [ :each | html with: each ] ] ]
!

renderConnectDivOn: html
	html div 
		id: 'connectDiv';
		with: [
			self httpClient connected ifFalse: [ self renderIpInputOn: html ].
			connectButton := html div with: [ self renderConnectButtonOn: html ] ]
!

renderExplorerMessageOn: html
	html div 
		style: 'font-family: Arial; font-size: 14px;';
		with: [ 
			html h1: 'Please, for the sake of the Internet.... do not use Internet Explorer :''('.
			html br.
			html span with: 'You can choose between multiple free better browsers that embrace the W3C standards, some of them are listed below:'.
			html br.
			html ul with: [
				html li with: [ html a style: 'font-weight: bold;'; href: 'http://getfirefox.com'; with: 'Mozilla Firefox' ].
				html li with: [ html a style: 'font-weight: bold;'; href: 'http://chrome.google.com'; with: 'Google Chrome' ] ].
			html span with: [ html a href: 'http://www.iestolemylife.com'; with: 'Why are you doing this to IE users?' ].
			html div style: 'background-image: url("http://www.myremoteradio.com/wordpress/wp-content/uploads/2010/02/the_internet_box.jpg"); background-repeat: no-repeat; width: 600px; height: 397px;'.
			html p style: 'font-weight: bold;'; with: 'The Internet thanks you.'
			]
! !

!HiScratchApp methodsFor: 'subWidgets'!

messagesWidget
	^ messagesWidget ifNil: [ messagesWidget := HSMessagesWidget owner: self. ]
!

varsWidget
	^ varsWidget ifNil: [ varsWidget := HSVarsWidget owner: self. ]
!

settingsWidget
	^ settingsWidget ifNil: [ settingsWidget := HSSettingsWidget owner: self. ]
!

pointerWidget
	^ pointerWidget ifNil: [ pointerWidget := HSPointerWidget owner: self. ]
!

subWidgets
	^ subWidgets ifNil: [ subWidgets := self allSubWidgets copy ]
!

allSubWidgets
	^ { self messagesWidget. self varsWidget. self pointerWidget }
! !

!HiScratchApp methodsFor: 'updating'!

update
	div contents: [ :html | self renderContentOn: html ]
!

updateLoop
	[ 
	( self httpClient connected and: [ self updating ] )
		ifTrue: [	
			self varsWidget retrieveVars.
			self varsWidget update].
	self updateLoop ] valueWithTimeout: self updateTime
!

updateConnectButton
	connectButton contents: [:html | self renderConnectButtonOn: html ].
!

updating
	^ updating ifNil: [ updating := false ]
!

stopUpdating
	updating := false
!

startUpdating
	updating := true
!

toggleUpdating
	updating := self updating not
! !

!HiScratchApp class methodsFor: 'initialization'!

initialize
	self start.
!

start
	|instance|
	instance := self new.
	instance appendToJQuery: ('body' asJQuery).
	^instance
! !

Widget subclass: #HSWidget
	instanceVariableNames: 'div owner'
	category: 'HiScratch'!

!HSWidget methodsFor: 'HTTP'!

httpClient
	^ self owner httpClient
! !

!HSWidget methodsFor: 'accessing'!

owner: aWidget
	owner := aWidget
!

owner
	^ owner
! !

!HSWidget methodsFor: 'updating'!

update
	div contents: [:html | self renderContentOn: html ]
! !

!HSWidget class methodsFor: 'not yet classified'!

owner: aWidget
	^ (self new)
		owner: aWidget;
		yourself
! !

HSWidget subclass: #HSMessagesWidget
	instanceVariableNames: 'messages'
	category: 'HiScratch'!

!HSMessagesWidget methodsFor: 'HTTP'!

retrieveMessages
	self httpClient
		getData: 'send-messages'
		onSuccessDo: [ :response | 
			self parse: response.
			self update ]
! !

!HSMessagesWidget methodsFor: 'accessing'!

messages
	^ messages ifNil: [ messages := Collection new ]
!

messages: aCollection
	messages := aCollection
! !

!HSMessagesWidget methodsFor: 'parsing'!

parse: aString
	| proxyMessages |
	proxyMessages := ( ( ( aString replace: ' ' with: '' ) tokenize: '"' ) allButFirst select: [ :each | each notEmpty ] ).
	self messages = proxyMessages ifFalse: [ self messages: proxyMessages ].
! !

!HSMessagesWidget methodsFor: 'rendering'!

renderOn: html
	div := html div class: 'widget'; id: 'messages'; with: [ self renderContentOn: html ]
!

renderContentOn: html
	self httpClient connected ifTrue: [
		self messages do: [ :each | 
			html a 
				class: 'button'; 
				with: each;
				onClick: [ self httpClient sendBroadcast: each ] ] ]
!

title
	^ 'Messages'
! !

!HSMessagesWidget class methodsFor: 'not yet classified'!

owner: aWidget
	^ (self new)
		owner: aWidget;
		yourself
! !

HSWidget subclass: #HSVarsWidget
	instanceVariableNames: 'vars'
	category: 'HiScratch'!

!HSVarsWidget methodsFor: 'HTTP'!

retrieveVars
	self httpClient
		getData: 'send-vars'
		onSuccessDo: [ :response | 
			self parse: response.
			self update ].
! !

!HSVarsWidget methodsFor: 'accessing'!

vars
	^ vars
!

vars: aDictionary
	vars := aDictionary
! !

!HSVarsWidget methodsFor: 'initialization'!

initialize
	super initialize.
	vars := Dictionary new
! !

!HSVarsWidget methodsFor: 'parsing'!

parse: aString
	| collection proxyVars |
	collection := ( ( ( aString replace: ' ' with: '' ) tokenize: '"' ) allButFirst select: [ :each | each notEmpty ] ).
	proxyVars := Dictionary new.
	( collection select: [:each | (collection indexOf: each) odd ] ) withIndexDo: [:each :index | proxyVars add: ( each -> (collection at: (index * 2) ) ) ].
	proxyVars = self vars ifFalse: [ self vars: proxyVars. self update ]
! !

!HSVarsWidget methodsFor: 'rendering'!

renderOn: html
	div := html div class: 'widget'; id: 'vars'; with: [ self renderContentOn: html ]
!

renderContentOn: html
	self httpClient connected ifTrue: [
		self vars associationsDo: [ :each | 
			html div 
				class: 'var'; 
				with: [ self renderVar: each on: html ] ] ]
!

renderVar: aVar on: html
	|input|
	html span with: aVar key.
	input := html input 
		type: 'text';
		value: aVar value;
		onFocus: [ self owner stopUpdating. self owner settingsWidget update ];
"		onBlur: [  ];"
		onKeyPress: [ :event | 
			event keyCode = 13
				ifTrue: [ 
					self httpClient updateVar: aVar value: input element value ] ].
	( aVar key match: '^\+' ) ifFalse: [ input at: 'disabled' put: 'true' ]
!

title
	^ 'Variables'
! !

!HSVarsWidget class methodsFor: 'not yet classified'!

owner: aWidget
	^ (self new)
		owner: aWidget;
		yourself
! !

HSWidget subclass: #HSSettingsWidget
	instanceVariableNames: 'slider span'
	category: 'HiScratch'!

!HSSettingsWidget methodsFor: 'rendering'!

renderOn: html
	div := html div id: 'settings'; with: [ self renderContentOn: html ]
!

renderContentOn: html
	self httpClient connected 
		ifTrue: [
			self renderSliderOn: html.
			self renderToggleUpdateOn: html.
			self renderWidgetSelectorOn: html. ]
!

renderSliderOn: html
	html div 
		id: 'slider';
		with: [
			slider := html input
				type: 'range';
				value: self owner updateTime;
				at: 'min' put: 100;
				at: 'max' put: 5000;
				at: 'step' put: 100;
				onChange: [ 
					self owner updateTime: slider element value asNumber.
					span contents: self sliderLabel ].

			span := html span with: self sliderLabel ].
!

renderToggleUpdateOn: html
	html a
		class: 'button'; 
		with: (self owner updating ifTrue: [ 'stop updating' ] ifFalse: [ 'start updating' ] );
		onClick: [
			self owner toggleUpdating. 
			self update ]
!

sliderLabel
	^ ( self owner updateTime / 1000 ) asString , 's'
!

renderWidgetSelectorOn: html
	self owner allSubWidgets do: [:each |
		html div with: [
			| checkbox |
			checkbox := html input
				type: 'checkbox';
				onChange: [ self toggleWidget: each ].
			( self owner subWidgets includes: each ) ifTrue: [ checkbox at: 'checked' put: 'yes' ].
			html span 
				class: 'label';
				with: each title. ] ]
!

toggleWidget: aWidget
	( self owner subWidgets includes: aWidget ) 
		ifTrue: [ self owner subWidgets remove: aWidget ]
		ifFalse: [ self owner subWidgets add: aWidget ].
	self owner update.
! !

!HSSettingsWidget class methodsFor: 'not yet classified'!

owner: aWidget
	^ (self new)
		owner: aWidget;
		yourself
! !

Object subclass: #HSHTTPClient
	instanceVariableNames: 'ip connected'
	category: 'HiScratch'!

!HSHTTPClient methodsFor: 'accessing'!

connected
	^ connected ifNil: [ connected := false ]
!

connected: aBoolean
	connected := aBoolean
!

ip
	^ ip ifNil: [ ip := '192.168.' ]
! !

!HSHTTPClient methodsFor: 'connection'!

connectTo: anIP

	ip := anIP.
	self connected: true.
!

disconnect
	self connected: false.
!

url
	^ 'http://', ip, ':42001/'.
! !

!HSHTTPClient methodsFor: 'send / retrieve data'!

getData: data onSuccessDo: aBlock

	jQuery
		ajax: self url
		options: #{
			'type' -> 'GET'.
			'data' -> data.
			'timeout' -> 500.
			'success' -> aBlock}
!

sendBroadcast: broadcast

	self 
		getData: 'broadcast=' , broadcast
		onSuccessDo: [ ]
!

updateVar: aVar value: aValue

	self	getData: ( 'vars-update=' , aVar key , '=' , aValue )
		onSuccessDo: [ ]
!

updateSensor: aSensor value: aValue

	self	getData: ( 'sensor-update=' , aSensor , '=' , aValue )
		onSuccessDo: [ ]
! !

HSWidget subclass: #HSPointerWidget
	instanceVariableNames: 'mousePosition crossHair'
	category: 'HiScratch'!

!HSPointerWidget methodsFor: 'HTTP'!

updateSensors
	self httpClient updateSensor: 'stageX' value: ( mousePosition x - 240 ).
	self httpClient updateSensor: 'stageY' value: ( 180 - mousePosition y ).
! !

!HSPointerWidget methodsFor: 'accessing'!

mousePosition
	^ mousePosition ifNil: [ mousePosition := 0@0 ]
! !

!HSPointerWidget methodsFor: 'events'!

mouseEvent: evt
	self getMousePositionFromEvent: evt.
	self updateSensors.
	self update.
!

getMousePositionFromEvent: evt

	| divPosition windowScrollTop windowScrollLeft divRelativePosition |

	windowScrollTop := <$(window).scrollTop();>.
	windowScrollLeft := <$(window).scrollLeft();>.
	divPosition := '#pointer' asJQuery position.

	divRelativePosition := ( divPosition left - windowScrollLeft ) @ ( divPosition top - windowScrollTop ) .
	mousePosition := ( evt clientX - divRelativePosition x) @ (evt clientY - divRelativePosition y ).
! !

!HSPointerWidget methodsFor: 'rendering'!

renderOn: html
	div := html div class: 'widget'; id: 'remotePad'; with: [ self renderContentOn: html ]
!

renderContentOn: html
	self httpClient connected ifTrue: [
		| pointerDiv |
		pointerDiv := 
			html div 
				id: 'pointer'; 
				with: [ 
					crossHair := html img src: 'images/crossHair.png'.
					self updateCrosshairPosition.
					html span 
						class: 'pointer'; 
						with: '( ' , ( self mousePosition x - 240 ) asString , ' , ' , ( 180 - self mousePosition y ) asString , ') '. ].
		pointerDiv asJQuery bind: 'click' do: [ :evt | self mouseEvent: evt ] ]
!

updateCrosshairPosition

	crossHair 
		at: 'style'
		put:
			'position: absolute; left: '
			, ( self mousePosition x - 5 ) asString
			, 'px; top: '
			, ( self mousePosition y - 5 ) asString
			, 'px;'
!

title
	^ 'Remote Pad'
! !

!HSPointerWidget class methodsFor: 'not yet classified'!

owner: aWidget
	^ (self new)
		owner: aWidget;
		yourself
! !

