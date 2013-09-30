smalltalk.addPackage('HiScratch', {});
smalltalk.addClass('HiScratchApp', smalltalk.Widget, ['ipInput', 'updateTime', 'connectButton', 'messagesWidget', 'varsWidget', 'settingsWidget', 'div', 'updating', 'httpClient', 'pointerWidget', 'subWidgets', 'logWidget'], 'HiScratch');
smalltalk.addMethod(
'_connect',
smalltalk.method({
selector: 'connect',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_httpClient", []), "_connectTo_onSuccessDo_onErrorDo_", [smalltalk.send(smalltalk.send(self['@ipInput'], "_element", []), "_value", []), (function(){smalltalk.send(smalltalk.send(self, "_logWidget", []), "_addEntry_", [smalltalk.send("connected to ", "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_httpClient", []), "_ip", []), "_asString", [])])]);smalltalk.send(smalltalk.send(self, "_messagesWidget", []), "_retrieveMessages", []);smalltalk.send(smalltalk.send(self, "_varsWidget", []), "_retrieveVars", []);smalltalk.send(smalltalk.send(self, "_settingsWidget", []), "_update", []);return smalltalk.send(self, "_update", []);}), (function(){smalltalk.send(smalltalk.send(self, "_logWidget", []), "_addEntry_", [smalltalk.send("ERROR: failed to connect to ", "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_httpClient", []), "_ip", []), "_asString", [])])]);smalltalk.send(smalltalk.send(self, "_settingsWidget", []), "_update", []);return smalltalk.send(self, "_update", []);})]);
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_disconnect',
smalltalk.method({
selector: 'disconnect',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_httpClient", []), "_disconnect", []);
smalltalk.send(self, "_update", []);
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_toggleConnection',
smalltalk.method({
selector: 'toggleConnection',
fn: function (){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(self, "_httpClient", []), "_connected", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self, "_connect", []);return smalltalk.send(self, "_updateConnectButton", []);})() : (function(){smalltalk.send(self, "_disconnect", []);return smalltalk.send(self, "_updateConnectButton", []);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(self, "_connect", []);return smalltalk.send(self, "_updateConnectButton", []);}), (function(){smalltalk.send(self, "_disconnect", []);return smalltalk.send(self, "_updateConnectButton", []);})]));
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_httpClient',
smalltalk.method({
selector: 'httpClient',
fn: function (){
var self=this;
return (($receiver = self['@httpClient']) == nil || $receiver == undefined) ? (function(){return self['@httpClient']=smalltalk.send(smalltalk.send((smalltalk.HSHTTPClient || HSHTTPClient), "_new", []), "_owner_", [self]);})() : $receiver;
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_updateTime',
smalltalk.method({
selector: 'updateTime',
fn: function (){
var self=this;
return (($receiver = self['@updateTime']) == nil || $receiver == undefined) ? (function(){return self['@updateTime']=(1000);})() : $receiver;
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_updateTime_',
smalltalk.method({
selector: 'updateTime:',
fn: function (anInteger){
var self=this;
self['@updateTime']=anInteger;
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
smalltalk.send(self, "_updateLoop", []);
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
((($receiver = smalltalk.send(smalltalk.send((typeof navigator == 'undefined' ? nil : navigator), "_userAgent", []), "_match_", ["MSIE"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_renderExplorerMessageOn_", [html]);})() : (function(){return self['@div']=smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return smalltalk.send(self, "_renderContentOn_", [html]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_renderExplorerMessageOn_", [html]);}), (function(){return self['@div']=smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return smalltalk.send(self, "_renderContentOn_", [html]);})]);})]));
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_renderConnectButtonOn_',
smalltalk.method({
selector: 'renderConnectButtonOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["button"]);smalltalk.send($rec, "_with_", [((($receiver = smalltalk.send(smalltalk.send(self, "_httpClient", []), "_connected", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return "connect";})() : (function(){return "disconnect";})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return "connect";}), (function(){return "disconnect";})]))]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_toggleConnection", []);})]);})(smalltalk.send(html, "_a", []));
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_renderIpInputOn_',
smalltalk.method({
selector: 'renderIpInputOn:',
fn: function (html){
var self=this;
self['@ipInput']=(function($rec){smalltalk.send($rec, "_type_", ["text"]);smalltalk.send($rec, "_value_", [smalltalk.send(smalltalk.send(self, "_httpClient", []), "_ip", [])]);return smalltalk.send($rec, "_onKeyPress_", [(function(event){return ((($receiver = smalltalk.send(smalltalk.send(event, "_keyCode", []), "__eq", [(13)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_toggleConnection", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_toggleConnection", []);})]));})]);})(smalltalk.send(html, "_input", []));
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_renderContentOn_',
smalltalk.method({
selector: 'renderContentOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["wrapper"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_id_", ["controlPanel"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderConnectDivOn_", [html]);return smalltalk.send(html, "_with_", [smalltalk.send(self, "_settingsWidget", [])]);})]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_id_", ["widgetsPanel"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(self, "_subWidgets", []), "_do_", [(function(each){return smalltalk.send(html, "_with_", [each]);})]);})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_messagesWidget',
smalltalk.method({
selector: 'messagesWidget',
fn: function (){
var self=this;
return (($receiver = self['@messagesWidget']) == nil || $receiver == undefined) ? (function(){return self['@messagesWidget']=smalltalk.send((smalltalk.HSMessagesWidget || HSMessagesWidget), "_owner_", [self]);})() : $receiver;
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_varsWidget',
smalltalk.method({
selector: 'varsWidget',
fn: function (){
var self=this;
return (($receiver = self['@varsWidget']) == nil || $receiver == undefined) ? (function(){return self['@varsWidget']=smalltalk.send((smalltalk.HSVarsWidget || HSVarsWidget), "_owner_", [self]);})() : $receiver;
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_settingsWidget',
smalltalk.method({
selector: 'settingsWidget',
fn: function (){
var self=this;
return (($receiver = self['@settingsWidget']) == nil || $receiver == undefined) ? (function(){return self['@settingsWidget']=smalltalk.send((smalltalk.HSSettingsWidget || HSSettingsWidget), "_owner_", [self]);})() : $receiver;
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_pointerWidget',
smalltalk.method({
selector: 'pointerWidget',
fn: function (){
var self=this;
return (($receiver = self['@pointerWidget']) == nil || $receiver == undefined) ? (function(){return self['@pointerWidget']=smalltalk.send((smalltalk.HSPointerWidget || HSPointerWidget), "_owner_", [self]);})() : $receiver;
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_update',
smalltalk.method({
selector: 'update',
fn: function (){
var self=this;
smalltalk.send(self['@div'], "_contents_", [(function(html){return smalltalk.send(self, "_renderContentOn_", [html]);})]);
smalltalk.send(smalltalk.send(self, "_subWidgets", []), "_do_", [(function(each){return smalltalk.send(each, "_update", []);})]);
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_updateLoop',
smalltalk.method({
selector: 'updateLoop',
fn: function (){
var self=this;
smalltalk.send((function(){((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_httpClient", []), "_connected", []), "_and_", [(function(){return smalltalk.send(self, "_updating", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(smalltalk.send(self, "_varsWidget", []), "_retrieveVars", []);return smalltalk.send(smalltalk.send(self, "_varsWidget", []), "_update", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(smalltalk.send(self, "_varsWidget", []), "_retrieveVars", []);return smalltalk.send(smalltalk.send(self, "_varsWidget", []), "_update", []);})]));return smalltalk.send(self, "_updateLoop", []);}), "_valueWithTimeout_", [smalltalk.send(self, "_updateTime", [])]);
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_updateConnectButton',
smalltalk.method({
selector: 'updateConnectButton',
fn: function (){
var self=this;
smalltalk.send(self['@connectButton'], "_contents_", [(function(html){return smalltalk.send(self, "_renderConnectButtonOn_", [html]);})]);
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_updating',
smalltalk.method({
selector: 'updating',
fn: function (){
var self=this;
return (($receiver = self['@updating']) == nil || $receiver == undefined) ? (function(){return self['@updating']=false;})() : $receiver;
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_stopUpdating',
smalltalk.method({
selector: 'stopUpdating',
fn: function (){
var self=this;
self['@updating']=false;
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_startUpdating',
smalltalk.method({
selector: 'startUpdating',
fn: function (){
var self=this;
self['@updating']=true;
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_toggleUpdating',
smalltalk.method({
selector: 'toggleUpdating',
fn: function (){
var self=this;
self['@updating']=smalltalk.send(smalltalk.send(self, "_updating", []), "_not", []);
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_subWidgets',
smalltalk.method({
selector: 'subWidgets',
fn: function (){
var self=this;
return (($receiver = self['@subWidgets']) == nil || $receiver == undefined) ? (function(){return self['@subWidgets']=[smalltalk.send(self, "_varsWidget", []),smalltalk.send(self, "_messagesWidget", []),smalltalk.send(self, "_logWidget", [])];})() : $receiver;
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_allSubWidgets',
smalltalk.method({
selector: 'allSubWidgets',
fn: function (){
var self=this;
return [smalltalk.send(self, "_messagesWidget", []),smalltalk.send(self, "_varsWidget", []),smalltalk.send(self, "_pointerWidget", []),smalltalk.send(self, "_logWidget", [])];
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_renderConnectDivOn_',
smalltalk.method({
selector: 'renderConnectDivOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["connectDiv"]);return smalltalk.send($rec, "_with_", [(function(){((($receiver = smalltalk.send(smalltalk.send(self, "_httpClient", []), "_connected", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_renderIpInputOn_", [html]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_renderIpInputOn_", [html]);})]));return self['@connectButton']=smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return smalltalk.send(self, "_renderConnectButtonOn_", [html]);})]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_renderExplorerMessageOn_',
smalltalk.method({
selector: 'renderExplorerMessageOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_style_", [unescape("font-family%3A%20Arial%3B%20font-size%3A%2014px%3B")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", [unescape("Please%2C%20for%20the%20sake%20of%20the%20Internet....%20do%20not%20use%20Internet%20Explorer%20%3A%27%28")]);smalltalk.send(html, "_br", []);smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [unescape("You%20can%20choose%20between%20multiple%20free%20better%20browsers%20that%20embrace%20the%20W3C%20standards%2C%20some%20of%20them%20are%20listed%20below%3A")]);smalltalk.send(html, "_br", []);smalltalk.send(smalltalk.send(html, "_ul", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_style_", [unescape("font-weight%3A%20bold%3B")]);smalltalk.send($rec, "_href_", [unescape("http%3A//getfirefox.com")]);return smalltalk.send($rec, "_with_", ["Mozilla Firefox"]);})(smalltalk.send(html, "_a", []));})]);return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_style_", [unescape("font-weight%3A%20bold%3B")]);smalltalk.send($rec, "_href_", [unescape("http%3A//chrome.google.com")]);return smalltalk.send($rec, "_with_", ["Google Chrome"]);})(smalltalk.send(html, "_a", []));})]);})]);smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//www.iestolemylife.com")]);return smalltalk.send($rec, "_with_", [unescape("Why%20are%20you%20doing%20this%20to%20IE%20users%3F")]);})(smalltalk.send(html, "_a", []));})]);smalltalk.send(smalltalk.send(html, "_div", []), "_style_", [unescape("background-image%3A%20url%28%22http%3A//www.myremoteradio.com/wordpress/wp-content/uploads/2010/02/the_internet_box.jpg%22%29%3B%20background-repeat%3A%20no-repeat%3B%20width%3A%20600px%3B%20height%3A%20397px%3B")]);return (function($rec){smalltalk.send($rec, "_style_", [unescape("font-weight%3A%20bold%3B")]);return smalltalk.send($rec, "_with_", ["The Internet thanks you."]);})(smalltalk.send(html, "_p", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
'_logWidget',
smalltalk.method({
selector: 'logWidget',
fn: function (){
var self=this;
return (($receiver = self['@logWidget']) == nil || $receiver == undefined) ? (function(){return self['@logWidget']=smalltalk.send((smalltalk.HSLogWidget || HSLogWidget), "_owner_", [self]);})() : $receiver;
return self;}
}),
smalltalk.HiScratchApp);


smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_start", []);
return self;}
}),
smalltalk.HiScratchApp.klass);

smalltalk.addMethod(
'_start',
smalltalk.method({
selector: 'start',
fn: function (){
var self=this;
var instance=nil;
instance=smalltalk.send(self, "_new", []);
smalltalk.send(instance, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return instance;
return self;}
}),
smalltalk.HiScratchApp.klass);


smalltalk.addClass('HSWidget', smalltalk.Widget, ['div', 'owner'], 'HiScratch');
smalltalk.addMethod(
'_httpClient',
smalltalk.method({
selector: 'httpClient',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_owner", []), "_httpClient", []);
return self;}
}),
smalltalk.HSWidget);

smalltalk.addMethod(
'_owner_',
smalltalk.method({
selector: 'owner:',
fn: function (aWidget){
var self=this;
self['@owner']=aWidget;
return self;}
}),
smalltalk.HSWidget);

smalltalk.addMethod(
'_owner',
smalltalk.method({
selector: 'owner',
fn: function (){
var self=this;
return self['@owner'];
return self;}
}),
smalltalk.HSWidget);

smalltalk.addMethod(
'_update',
smalltalk.method({
selector: 'update',
fn: function (){
var self=this;
smalltalk.send(self['@div'], "_contents_", [(function(html){return smalltalk.send(self, "_renderContentOn_", [html]);})]);
return self;}
}),
smalltalk.HSWidget);


smalltalk.addMethod(
'_owner_',
smalltalk.method({
selector: 'owner:',
fn: function (aWidget){
var self=this;
return (function($rec){smalltalk.send($rec, "_owner_", [aWidget]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.HSWidget.klass);


smalltalk.addClass('HSMessagesWidget', smalltalk.HSWidget, ['messages'], 'HiScratch');
smalltalk.addMethod(
'_retrieveMessages',
smalltalk.method({
selector: 'retrieveMessages',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_httpClient", []), "_getData_onSuccessDo_onErrorDo_", [unescape("send-messages"), (function(response){smalltalk.send(self, "_parse_", [response]);return smalltalk.send(self, "_update", []);}), (function(){smalltalk.send(self, "_messages_", [smalltalk.send((smalltalk.Array || Array), "_new", [])]);smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_logWidget", []), "_addEntry_", ["ERROR: failed to retrieve messages"]);return smalltalk.send(self, "_update", []);})]);
return self;}
}),
smalltalk.HSMessagesWidget);

smalltalk.addMethod(
'_messages',
smalltalk.method({
selector: 'messages',
fn: function (){
var self=this;
return (($receiver = self['@messages']) == nil || $receiver == undefined) ? (function(){return self['@messages']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;}
}),
smalltalk.HSMessagesWidget);

smalltalk.addMethod(
'_messages_',
smalltalk.method({
selector: 'messages:',
fn: function (aCollection){
var self=this;
self['@messages']=aCollection;
return self;}
}),
smalltalk.HSMessagesWidget);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
fn: function (aString){
var self=this;
var proxyMessages=nil;
proxyMessages=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aString, "_replace_with_", [" ", ""]), "_tokenize_", [unescape("%22")]), "_allButFirst", []), "_select_", [(function(each){return smalltalk.send(each, "_notEmpty", []);})]);
((($receiver = smalltalk.send(smalltalk.send(self, "_messages", []), "__eq", [proxyMessages])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_messages_", [proxyMessages]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_messages_", [proxyMessages]);})]));
return self;}
}),
smalltalk.HSMessagesWidget);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
self['@div']=(function($rec){smalltalk.send($rec, "_class_", ["widget"]);smalltalk.send($rec, "_id_", ["messages"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderContentOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.HSMessagesWidget);

smalltalk.addMethod(
'_renderContentOn_',
smalltalk.method({
selector: 'renderContentOn:',
fn: function (html){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(self, "_httpClient", []), "_connected", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_messages", []), "_do_", [(function(each){return smalltalk.send(self, "_renderMessage_on_", [each, html]);})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_messages", []), "_do_", [(function(each){return smalltalk.send(self, "_renderMessage_on_", [each, html]);})]);})]));
return self;}
}),
smalltalk.HSMessagesWidget);

smalltalk.addMethod(
'_title',
smalltalk.method({
selector: 'title',
fn: function (){
var self=this;
return "Messages";
return self;}
}),
smalltalk.HSMessagesWidget);

smalltalk.addMethod(
'_renderMessage_on_',
smalltalk.method({
selector: 'renderMessage:on:',
fn: function (aMessage, html){
var self=this;
((($receiver = smalltalk.send(aMessage, "_match_", [unescape("%5E%5C+")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_class_", ["button"]);smalltalk.send($rec, "_with_", [smalltalk.send(aMessage, "_allButFirst", [])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_httpClient", []), "_sendBroadcast_", [aMessage]);})]);})(smalltalk.send(html, "_a", []));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["button"]);smalltalk.send($rec, "_with_", [smalltalk.send(aMessage, "_allButFirst", [])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_httpClient", []), "_sendBroadcast_", [aMessage]);})]);})(smalltalk.send(html, "_a", []));})]));
return self;}
}),
smalltalk.HSMessagesWidget);


smalltalk.addMethod(
'_owner_',
smalltalk.method({
selector: 'owner:',
fn: function (aWidget){
var self=this;
return (function($rec){smalltalk.send($rec, "_owner_", [aWidget]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.HSMessagesWidget.klass);


smalltalk.addClass('HSVarsWidget', smalltalk.HSWidget, ['vars'], 'HiScratch');
smalltalk.addMethod(
'_retrieveVars',
smalltalk.method({
selector: 'retrieveVars',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_httpClient", []), "_getData_onSuccessDo_onErrorDo_", [unescape("send-vars"), (function(response){smalltalk.send(self, "_parse_", [response]);smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_logWidget", []), "_addEntry_", ["read variables"]);return smalltalk.send(self, "_update", []);}), (function(){smalltalk.send(self, "_vars_", [smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])]);smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_logWidget", []), "_addEntry_", ["ERROR: failed to retrieve variables"]);return smalltalk.send(self, "_update", []);})]);
return self;}
}),
smalltalk.HSVarsWidget);

smalltalk.addMethod(
'_vars',
smalltalk.method({
selector: 'vars',
fn: function (){
var self=this;
return (($receiver = self['@vars']) == nil || $receiver == undefined) ? (function(){return self['@vars']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);})() : $receiver;
return self;}
}),
smalltalk.HSVarsWidget);

smalltalk.addMethod(
'_vars_',
smalltalk.method({
selector: 'vars:',
fn: function (aDictionary){
var self=this;
self['@vars']=aDictionary;
return self;}
}),
smalltalk.HSVarsWidget);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.HSWidget);
self['@vars']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
return self;}
}),
smalltalk.HSVarsWidget);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
fn: function (aString){
var self=this;
var collection=nil;
var proxyVars=nil;
collection=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aString, "_replace_with_", [" ", ""]), "_tokenize_", [unescape("%22")]), "_allButFirst", []), "_select_", [(function(each){return smalltalk.send(each, "_notEmpty", []);})]);
proxyVars=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(smalltalk.send(collection, "_select_", [(function(each){return smalltalk.send(smalltalk.send(collection, "_indexOf_", [each]), "_odd", []);})]), "_withIndexDo_", [(function(each, index){return smalltalk.send(proxyVars, "_add_", [smalltalk.send(each, "__minus_gt", [smalltalk.send(collection, "_at_", [((($receiver = index).klass === smalltalk.Number) ? $receiver *(2) : smalltalk.send($receiver, "__star", [(2)]))])])]);})]);
((($receiver = smalltalk.send(proxyVars, "__eq", [smalltalk.send(self, "_vars", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self, "_vars_", [proxyVars]);return smalltalk.send(self, "_update", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){smalltalk.send(self, "_vars_", [proxyVars]);return smalltalk.send(self, "_update", []);})]));
return self;}
}),
smalltalk.HSVarsWidget);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
self['@div']=(function($rec){smalltalk.send($rec, "_class_", ["widget"]);smalltalk.send($rec, "_id_", ["vars"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderContentOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.HSVarsWidget);

smalltalk.addMethod(
'_renderContentOn_',
smalltalk.method({
selector: 'renderContentOn:',
fn: function (html){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(self, "_httpClient", []), "_connected", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_vars", []), "_associationsDo_", [(function(each){return (function($rec){smalltalk.send($rec, "_class_", ["var"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderVar_on_", [each, html]);})]);})(smalltalk.send(html, "_div", []));})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_vars", []), "_associationsDo_", [(function(each){return (function($rec){smalltalk.send($rec, "_class_", ["var"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderVar_on_", [each, html]);})]);})(smalltalk.send(html, "_div", []));})]);})]));
return self;}
}),
smalltalk.HSVarsWidget);

smalltalk.addMethod(
'_renderVar_on_',
smalltalk.method({
selector: 'renderVar:on:',
fn: function (aVar, html){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(aVar, "_key", []), "_match_", [unescape("%5E%5B%5C-%5C+%5D")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var input=nil;
smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [smalltalk.send(smalltalk.send(aVar, "_key", []), "_allButFirst", [])]);input=(function($rec){smalltalk.send($rec, "_type_", ["text"]);smalltalk.send($rec, "_value_", [smalltalk.send(aVar, "_value", [])]);smalltalk.send($rec, "_onFocus_", [(function(){smalltalk.send(smalltalk.send(self, "_owner", []), "_stopUpdating", []);return smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_settingsWidget", []), "_update", []);})]);return smalltalk.send($rec, "_onBlur_", [(function(){return smalltalk.send(smalltalk.send(self, "_httpClient", []), "_updateVar_value_", [aVar, smalltalk.send(smalltalk.send(input, "_element", []), "_value", [])]);})]);})(smalltalk.send(html, "_input", []));return ((($receiver = smalltalk.send(smalltalk.send(aVar, "_key", []), "_match_", [unescape("%5E%5C+")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(input, "_at_put_", ["disabled", "true"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(input, "_at_put_", ["disabled", "true"]);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var input=nil;
smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [smalltalk.send(smalltalk.send(aVar, "_key", []), "_allButFirst", [])]);input=(function($rec){smalltalk.send($rec, "_type_", ["text"]);smalltalk.send($rec, "_value_", [smalltalk.send(aVar, "_value", [])]);smalltalk.send($rec, "_onFocus_", [(function(){smalltalk.send(smalltalk.send(self, "_owner", []), "_stopUpdating", []);return smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_settingsWidget", []), "_update", []);})]);return smalltalk.send($rec, "_onBlur_", [(function(){return smalltalk.send(smalltalk.send(self, "_httpClient", []), "_updateVar_value_", [aVar, smalltalk.send(smalltalk.send(input, "_element", []), "_value", [])]);})]);})(smalltalk.send(html, "_input", []));return ((($receiver = smalltalk.send(smalltalk.send(aVar, "_key", []), "_match_", [unescape("%5E%5C+")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(input, "_at_put_", ["disabled", "true"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(input, "_at_put_", ["disabled", "true"]);})]));})]));
return self;}
}),
smalltalk.HSVarsWidget);

smalltalk.addMethod(
'_title',
smalltalk.method({
selector: 'title',
fn: function (){
var self=this;
return "Variables";
return self;}
}),
smalltalk.HSVarsWidget);


smalltalk.addMethod(
'_owner_',
smalltalk.method({
selector: 'owner:',
fn: function (aWidget){
var self=this;
return (function($rec){smalltalk.send($rec, "_owner_", [aWidget]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.HSVarsWidget.klass);


smalltalk.addClass('HSSettingsWidget', smalltalk.HSWidget, ['slider', 'span'], 'HiScratch');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
self['@div']=(function($rec){smalltalk.send($rec, "_id_", ["settings"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderContentOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.HSSettingsWidget);

smalltalk.addMethod(
'_renderContentOn_',
smalltalk.method({
selector: 'renderContentOn:',
fn: function (html){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(self, "_httpClient", []), "_connected", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_renderSliderOn_", [html]);smalltalk.send(self, "_renderToggleUpdateOn_", [html]);return smalltalk.send(self, "_renderWidgetSelectorOn_", [html]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_renderSliderOn_", [html]);smalltalk.send(self, "_renderToggleUpdateOn_", [html]);return smalltalk.send(self, "_renderWidgetSelectorOn_", [html]);})]));
return self;}
}),
smalltalk.HSSettingsWidget);

smalltalk.addMethod(
'_renderSliderOn_',
smalltalk.method({
selector: 'renderSliderOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["slider"]);return smalltalk.send($rec, "_with_", [(function(){self['@slider']=(function($rec){smalltalk.send($rec, "_type_", ["range"]);smalltalk.send($rec, "_value_", [smalltalk.send(smalltalk.send(self, "_owner", []), "_updateTime", [])]);smalltalk.send($rec, "_at_put_", ["min", (100)]);smalltalk.send($rec, "_at_put_", ["max", (5000)]);smalltalk.send($rec, "_at_put_", ["step", (100)]);return smalltalk.send($rec, "_onChange_", [(function(){smalltalk.send(smalltalk.send(self, "_owner", []), "_updateTime_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@slider'], "_element", []), "_value", []), "_asNumber", [])]);return smalltalk.send(self['@span'], "_contents_", [smalltalk.send(self, "_sliderLabel", [])]);})]);})(smalltalk.send(html, "_input", []));return self['@span']=smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [smalltalk.send(self, "_sliderLabel", [])]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.HSSettingsWidget);

smalltalk.addMethod(
'_renderToggleUpdateOn_',
smalltalk.method({
selector: 'renderToggleUpdateOn:',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["button"]);smalltalk.send($rec, "_with_", [((($receiver = smalltalk.send(smalltalk.send(self, "_owner", []), "_updating", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "stop updating";})() : (function(){return "start updating";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "stop updating";}), (function(){return "start updating";})]))]);return smalltalk.send($rec, "_onClick_", [(function(){smalltalk.send(smalltalk.send(self, "_owner", []), "_toggleUpdating", []);return smalltalk.send(self, "_update", []);})]);})(smalltalk.send(html, "_a", []));
return self;}
}),
smalltalk.HSSettingsWidget);

smalltalk.addMethod(
'_sliderLabel',
smalltalk.method({
selector: 'sliderLabel',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(((($receiver = smalltalk.send(smalltalk.send(self, "_owner", []), "_updateTime", [])).klass === smalltalk.Number) ? $receiver /(1000) : smalltalk.send($receiver, "__slash", [(1000)])), "_asString", []), "__comma", ["s"]);
return self;}
}),
smalltalk.HSSettingsWidget);

smalltalk.addMethod(
'_renderWidgetSelectorOn_',
smalltalk.method({
selector: 'renderWidgetSelectorOn:',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_allSubWidgets", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){var checkbox=nil;
checkbox=(function($rec){smalltalk.send($rec, "_type_", ["checkbox"]);return smalltalk.send($rec, "_onChange_", [(function(){return smalltalk.send(self, "_toggleWidget_", [each]);})]);})(smalltalk.send(html, "_input", []));((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_subWidgets", []), "_includes_", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(checkbox, "_at_put_", ["checked", "yes"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(checkbox, "_at_put_", ["checked", "yes"]);})]));return (function($rec){smalltalk.send($rec, "_class_", ["label"]);return smalltalk.send($rec, "_with_", [smalltalk.send(each, "_title", [])]);})(smalltalk.send(html, "_span", []));})]);})]);
return self;}
}),
smalltalk.HSSettingsWidget);

smalltalk.addMethod(
'_toggleWidget_',
smalltalk.method({
selector: 'toggleWidget:',
fn: function (aWidget){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_subWidgets", []), "_includes_", [aWidget])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_subWidgets", []), "_remove_", [aWidget]);})() : (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_subWidgets", []), "_add_", [aWidget]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_subWidgets", []), "_remove_", [aWidget]);}), (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_subWidgets", []), "_add_", [aWidget]);})]));
smalltalk.send(smalltalk.send(self, "_owner", []), "_update", []);
return self;}
}),
smalltalk.HSSettingsWidget);


smalltalk.addMethod(
'_owner_',
smalltalk.method({
selector: 'owner:',
fn: function (aWidget){
var self=this;
return (function($rec){smalltalk.send($rec, "_owner_", [aWidget]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.HSSettingsWidget.klass);


smalltalk.addClass('HSHTTPClient', smalltalk.Object, ['ip', 'connected', 'owner'], 'HiScratch');
smalltalk.addMethod(
'_connected',
smalltalk.method({
selector: 'connected',
fn: function (){
var self=this;
return (($receiver = self['@connected']) == nil || $receiver == undefined) ? (function(){return self['@connected']=false;})() : $receiver;
return self;}
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
'_connected_',
smalltalk.method({
selector: 'connected:',
fn: function (aBoolean){
var self=this;
self['@connected']=aBoolean;
return self;}
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
'_ip',
smalltalk.method({
selector: 'ip',
fn: function (){
var self=this;
return (($receiver = self['@ip']) == nil || $receiver == undefined) ? (function(){return self['@ip']="192.168.";})() : $receiver;
return self;}
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
'_disconnect',
smalltalk.method({
selector: 'disconnect',
fn: function (){
var self=this;
smalltalk.send(self, "_connected_", [false]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_logWidget", []), "_addEntry_", ["disconnected"]);
return self;}
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
'_url',
smalltalk.method({
selector: 'url',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("http%3A//"), "__comma", [self['@ip']]), "__comma", [unescape("%3A42001/")]);
return self;}
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
'_getData_onSuccessDo_',
smalltalk.method({
selector: 'getData:onSuccessDo:',
fn: function (data, aBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(self, "_url", []), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("data", "__minus_gt", [data]),smalltalk.send("timeout", "__minus_gt", [(500)]),smalltalk.send("success", "__minus_gt", [aBlock])])]);
return self;}
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
'_sendBroadcast_',
smalltalk.method({
selector: 'sendBroadcast:',
fn: function (broadcast){
var self=this;
smalltalk.send(self, "_getData_onSuccessDo_", [smalltalk.send(unescape("broadcast%3D"), "__comma", [broadcast]), (function(){return nil;})]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_logWidget", []), "_addEntry_", [smalltalk.send("broadcasted ", "__comma", [broadcast])]);
return self;}
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
'_updateVar_value_',
smalltalk.method({
selector: 'updateVar:value:',
fn: function (aVar, aValue){
var self=this;
smalltalk.send(self, "_getData_onSuccessDo_", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("vars-update%3D"), "__comma", [smalltalk.send(aVar, "_key", [])]), "__comma", [unescape("%3D")]), "__comma", [aValue]), (function(){return nil;})]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_logWidget", []), "_addEntry_", [smalltalk.send(smalltalk.send(smalltalk.send("updated variable ", "__comma", [smalltalk.send(smalltalk.send(aVar, "_key", []), "_asString", [])]), "__comma", [" to value "]), "__comma", [smalltalk.send(aValue, "_asString", [])])]);
return self;}
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
'_updateSensor_value_',
smalltalk.method({
selector: 'updateSensor:value:',
fn: function (aSensor, aValue){
var self=this;
smalltalk.send(self, "_getData_onSuccessDo_", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("sensor-update%3D"), "__comma", [aSensor]), "__comma", [unescape("%3D")]), "__comma", [aValue]), (function(){return nil;})]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_logWidget", []), "_addEntry_", [smalltalk.send(smalltalk.send(smalltalk.send("updated sensor ", "__comma", [smalltalk.send(aSensor, "_asString", [])]), "__comma", [" to value "]), "__comma", [smalltalk.send(aValue, "_asString", [])])]);
return self;}
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
'_owner',
smalltalk.method({
selector: 'owner',
fn: function (){
var self=this;
return self['@owner'];
return self;}
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
'_owner_',
smalltalk.method({
selector: 'owner:',
fn: function (anOwner){
var self=this;
self['@owner']=anOwner;
return self;}
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
'_getData_onSuccessDo_onErrorDo_',
smalltalk.method({
selector: 'getData:onSuccessDo:onErrorDo:',
fn: function (data, aBlock, anErrorBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(self, "_url", []), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("data", "__minus_gt", [data]),smalltalk.send("timeout", "__minus_gt", [(500)]),smalltalk.send("success", "__minus_gt", [aBlock]),smalltalk.send("error", "__minus_gt", [anErrorBlock])])]);
return self;}
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
'_connectTo_onSuccessDo_onErrorDo_',
smalltalk.method({
selector: 'connectTo:onSuccessDo:onErrorDo:',
fn: function (anIP, aBlock, anErrorBlock){
var self=this;
self['@ip']=anIP;
smalltalk.send(self, "_getData_onSuccessDo_onErrorDo_", ["", (function(){smalltalk.send(self, "_connected_", [true]);return smalltalk.send(aBlock, "_value", []);}), (function(){smalltalk.send(self, "_connected_", [false]);return smalltalk.send(anErrorBlock, "_value", []);})]);
return self;}
}),
smalltalk.HSHTTPClient);



smalltalk.addClass('HSPointerWidget', smalltalk.HSWidget, ['mousePosition', 'crossHair'], 'HiScratch');
smalltalk.addMethod(
'_updateSensors',
smalltalk.method({
selector: 'updateSensors',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_httpClient", []), "_updateSensor_value_", ["remoteX", ((($receiver = smalltalk.send(self['@mousePosition'], "_x", [])).klass === smalltalk.Number) ? $receiver -(240) : smalltalk.send($receiver, "__minus", [(240)]))]);
smalltalk.send(smalltalk.send(self, "_httpClient", []), "_updateSensor_value_", ["remoteY", (180) - smalltalk.send(self['@mousePosition'], "_y", [])]);
return self;}
}),
smalltalk.HSPointerWidget);

smalltalk.addMethod(
'_mousePosition',
smalltalk.method({
selector: 'mousePosition',
fn: function (){
var self=this;
return (($receiver = self['@mousePosition']) == nil || $receiver == undefined) ? (function(){return self['@mousePosition']=smalltalk.send((0), "__at", [(0)]);})() : $receiver;
return self;}
}),
smalltalk.HSPointerWidget);

smalltalk.addMethod(
'_mouseEvent_',
smalltalk.method({
selector: 'mouseEvent:',
fn: function (evt){
var self=this;
smalltalk.send(self, "_getMousePositionFromEvent_", [evt]);
smalltalk.send(self, "_updateSensors", []);
smalltalk.send(self, "_update", []);
return self;}
}),
smalltalk.HSPointerWidget);

smalltalk.addMethod(
'_getMousePositionFromEvent_',
smalltalk.method({
selector: 'getMousePositionFromEvent:',
fn: function (evt){
var self=this;
var divPosition=nil;
var windowScrollTop=nil;
var windowScrollLeft=nil;
var divRelativePosition=nil;
windowScrollTop=$(window).scrollTop();;
windowScrollLeft=$(window).scrollLeft();;
divPosition=smalltalk.send(smalltalk.send(unescape("%23pointer"), "_asJQuery", []), "_position", []);
divRelativePosition=smalltalk.send(((($receiver = smalltalk.send(divPosition, "_left", [])).klass === smalltalk.Number) ? $receiver -windowScrollLeft : smalltalk.send($receiver, "__minus", [windowScrollLeft])), "__at", [((($receiver = smalltalk.send(divPosition, "_top", [])).klass === smalltalk.Number) ? $receiver -windowScrollTop : smalltalk.send($receiver, "__minus", [windowScrollTop]))]);
self['@mousePosition']=smalltalk.send(((($receiver = smalltalk.send(evt, "_clientX", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(divRelativePosition, "_x", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(divRelativePosition, "_x", [])])), "__at", [((($receiver = smalltalk.send(evt, "_clientY", [])).klass === smalltalk.Number) ? $receiver -smalltalk.send(divRelativePosition, "_y", []) : smalltalk.send($receiver, "__minus", [smalltalk.send(divRelativePosition, "_y", [])]))]);
return self;}
}),
smalltalk.HSPointerWidget);

smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
self['@div']=(function($rec){smalltalk.send($rec, "_class_", ["widget"]);smalltalk.send($rec, "_id_", ["remotePad"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderContentOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.HSPointerWidget);

smalltalk.addMethod(
'_renderContentOn_',
smalltalk.method({
selector: 'renderContentOn:',
fn: function (html){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(self, "_httpClient", []), "_connected", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var pointerDiv=nil;
pointerDiv=(function($rec){smalltalk.send($rec, "_id_", ["pointer"]);return smalltalk.send($rec, "_with_", [(function(){self['@crossHair']=smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [unescape("images/crossHair.png")]);smalltalk.send(self, "_updateCrosshairPosition", []);return (function($rec){smalltalk.send($rec, "_class_", ["pointer"]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28%20"), "__comma", [smalltalk.send(((($receiver = smalltalk.send(smalltalk.send(self, "_mousePosition", []), "_x", [])).klass === smalltalk.Number) ? $receiver -(240) : smalltalk.send($receiver, "__minus", [(240)])), "_asString", [])]), "__comma", [unescape("%20%2C%20")]), "__comma", [smalltalk.send((180) - smalltalk.send(smalltalk.send(self, "_mousePosition", []), "_y", []), "_asString", [])]), "__comma", [unescape("%29%20")])]);})(smalltalk.send(html, "_span", []));})]);})(smalltalk.send(html, "_div", []));return smalltalk.send(smalltalk.send(pointerDiv, "_asJQuery", []), "_bind_do_", ["click", (function(evt){return smalltalk.send(self, "_mouseEvent_", [evt]);})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var pointerDiv=nil;
pointerDiv=(function($rec){smalltalk.send($rec, "_id_", ["pointer"]);return smalltalk.send($rec, "_with_", [(function(){self['@crossHair']=smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [unescape("images/crossHair.png")]);smalltalk.send(self, "_updateCrosshairPosition", []);return (function($rec){smalltalk.send($rec, "_class_", ["pointer"]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28%20"), "__comma", [smalltalk.send(((($receiver = smalltalk.send(smalltalk.send(self, "_mousePosition", []), "_x", [])).klass === smalltalk.Number) ? $receiver -(240) : smalltalk.send($receiver, "__minus", [(240)])), "_asString", [])]), "__comma", [unescape("%20%2C%20")]), "__comma", [smalltalk.send((180) - smalltalk.send(smalltalk.send(self, "_mousePosition", []), "_y", []), "_asString", [])]), "__comma", [unescape("%29%20")])]);})(smalltalk.send(html, "_span", []));})]);})(smalltalk.send(html, "_div", []));return smalltalk.send(smalltalk.send(pointerDiv, "_asJQuery", []), "_bind_do_", ["click", (function(evt){return smalltalk.send(self, "_mouseEvent_", [evt]);})]);})]));
return self;}
}),
smalltalk.HSPointerWidget);

smalltalk.addMethod(
'_updateCrosshairPosition',
smalltalk.method({
selector: 'updateCrosshairPosition',
fn: function (){
var self=this;
smalltalk.send(self['@crossHair'], "_at_put_", ["style", smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("position%3A%20absolute%3B%20left%3A%20"), "__comma", [smalltalk.send(((($receiver = smalltalk.send(smalltalk.send(self, "_mousePosition", []), "_x", [])).klass === smalltalk.Number) ? $receiver -(5) : smalltalk.send($receiver, "__minus", [(5)])), "_asString", [])]), "__comma", [unescape("px%3B%20top%3A%20")]), "__comma", [smalltalk.send(((($receiver = smalltalk.send(smalltalk.send(self, "_mousePosition", []), "_y", [])).klass === smalltalk.Number) ? $receiver -(5) : smalltalk.send($receiver, "__minus", [(5)])), "_asString", [])]), "__comma", [unescape("px%3B")])]);
return self;}
}),
smalltalk.HSPointerWidget);

smalltalk.addMethod(
'_title',
smalltalk.method({
selector: 'title',
fn: function (){
var self=this;
return "Remote Pad";
return self;}
}),
smalltalk.HSPointerWidget);


smalltalk.addMethod(
'_owner_',
smalltalk.method({
selector: 'owner:',
fn: function (aWidget){
var self=this;
return (function($rec){smalltalk.send($rec, "_owner_", [aWidget]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.HSPointerWidget.klass);


smalltalk.addClass('HSLogWidget', smalltalk.HSWidget, ['span', 'entries'], 'HiScratch');
smalltalk.addMethod(
'_renderOn_',
smalltalk.method({
selector: 'renderOn:',
fn: function (html){
var self=this;
self['@div']=(function($rec){smalltalk.send($rec, "_class_", ["widget"]);smalltalk.send($rec, "_id_", ["log"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderContentOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.HSLogWidget);

smalltalk.addMethod(
'_renderContentOn_',
smalltalk.method({
selector: 'renderContentOn:',
fn: function (html){
var self=this;
self['@span']=smalltalk.send(html, "_span", []);
return self;}
}),
smalltalk.HSLogWidget);

smalltalk.addMethod(
'_addEntry_',
smalltalk.method({
selector: 'addEntry:',
fn: function (anEntry){
var self=this;
smalltalk.send(smalltalk.send(self, "_entries", []), "_add_", [anEntry]);
smalltalk.send(self, "_update", []);
return self;}
}),
smalltalk.HSLogWidget);

smalltalk.addMethod(
'_update',
smalltalk.method({
selector: 'update',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@span'], "_asJQuery", []), "_empty", []);
smalltalk.send(smalltalk.send(self, "_entries", []), "_do_", [(function(each){return (($receiver = self['@span']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(self['@span'], "_asJQuery", []), "_prepend_", [smalltalk.send(each, "__comma", [unescape("%3Cbr/%3E")])]);})() : nil;})]);
return self;}
}),
smalltalk.HSLogWidget);

smalltalk.addMethod(
'_title',
smalltalk.method({
selector: 'title',
fn: function (){
var self=this;
return "Logger";
return self;}
}),
smalltalk.HSLogWidget);

smalltalk.addMethod(
'_entries',
smalltalk.method({
selector: 'entries',
fn: function (){
var self=this;
return (($receiver = self['@entries']) == nil || $receiver == undefined) ? (function(){return self['@entries']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;}
}),
smalltalk.HSLogWidget);



