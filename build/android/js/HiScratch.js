smalltalk.addPackage('HiScratch', {});
smalltalk.addClass('HiScratchApp', smalltalk.Widget, ['ipInput', 'updateTime', 'connectButton', 'messagesWidget', 'varsWidget', 'settingsWidget', 'div', 'updating', 'httpClient', 'pointerWidget', 'subWidgets', 'logWidget'], 'HiScratch');
smalltalk.addMethod(
unescape('_connect'),
smalltalk.method({
selector: unescape('connect'),
category: 'HTTP',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_httpClient", []), "_connectTo_onSuccessDo_onErrorDo_", [smalltalk.send(smalltalk.send(self['@ipInput'], "_element", []), "_value", []), (function(){smalltalk.send(smalltalk.send(self, "_logWidget", []), "_addEntry_", [smalltalk.send("connected to ", "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_httpClient", []), "_ip", []), "_asString", [])])]);smalltalk.send(smalltalk.send(self, "_messagesWidget", []), "_retrieveMessages", []);smalltalk.send(smalltalk.send(self, "_varsWidget", []), "_retrieveVars", []);smalltalk.send(smalltalk.send(self, "_settingsWidget", []), "_update", []);return smalltalk.send(self, "_update", []);}), (function(){smalltalk.send(smalltalk.send(self, "_logWidget", []), "_addEntry_", [smalltalk.send("ERROR: failed to connect to ", "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_httpClient", []), "_ip", []), "_asString", [])])]);smalltalk.send(smalltalk.send(self, "_settingsWidget", []), "_update", []);return smalltalk.send(self, "_update", []);})]);
return self;},
args: [],
source: unescape('connect%0A%09self%20httpClient%20%0A%09%09connectTo%3A%20ipInput%20element%20value%0A%09%09onSuccessDo%3A%20%5B%20%0A%09%09%09self%20logWidget%20addEntry%3A%20%27connected%20to%20%27%20%2C%20self%20httpClient%20ip%20asString.%0A%09%09%09self%20messagesWidget%20retrieveMessages.%0A%09%09%09self%20varsWidget%20retrieveVars.%0A%09%09%09self%20settingsWidget%20update.%0A%09%09%09self%20update%20%5D%0A%09%09onErrorDo%3A%20%5B%0A%09%09%09self%20logWidget%20addEntry%3A%20%27ERROR%3A%20failed%20to%20connect%20to%20%27%20%2C%20self%20httpClient%20ip%20asString.%0A%09%09%09self%20settingsWidget%20update.%0A%09%09%09self%20update%20%5D'),
messageSends: ["connectTo:onSuccessDo:onErrorDo:", "httpClient", "value", "element", "addEntry:", "logWidget", unescape("%2C"), "asString", "ip", "retrieveMessages", "messagesWidget", "retrieveVars", "varsWidget", "update", "settingsWidget"],
referencedClasses: []
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_disconnect'),
smalltalk.method({
selector: unescape('disconnect'),
category: 'HTTP',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_httpClient", []), "_disconnect", []);
smalltalk.send(self, "_update", []);
return self;},
args: [],
source: unescape('disconnect%0A%09self%20httpClient%20disconnect.%0A%09self%20update.'),
messageSends: ["disconnect", "httpClient", "update"],
referencedClasses: []
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_toggleConnection'),
smalltalk.method({
selector: unescape('toggleConnection'),
category: 'HTTP',
fn: function (){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(self, "_httpClient", []), "_connected", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self, "_connect", []);return smalltalk.send(self, "_updateConnectButton", []);})() : (function(){smalltalk.send(self, "_disconnect", []);return smalltalk.send(self, "_updateConnectButton", []);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(self, "_connect", []);return smalltalk.send(self, "_updateConnectButton", []);}), (function(){smalltalk.send(self, "_disconnect", []);return smalltalk.send(self, "_updateConnectButton", []);})]));
return self;},
args: [],
source: unescape('toggleConnection%0A%09self%20httpClient%20connected%0A%09%09ifFalse%3A%20%5B%09self%20connect.%0A%09%09%09%09self%20updateConnectButton%20%5D%0A%09%09ifTrue%3A%20%5B%0A%09%09%09self%20disconnect.%0A%09%09%09self%20updateConnectButton%20%5D'),
messageSends: ["ifFalse:ifTrue:", "connected", "httpClient", "connect", "updateConnectButton", "disconnect"],
referencedClasses: []
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_httpClient'),
smalltalk.method({
selector: unescape('httpClient'),
category: 'HTTP',
fn: function (){
var self=this;
return (($receiver = self['@httpClient']) == nil || $receiver == undefined) ? (function(){return self['@httpClient']=smalltalk.send(smalltalk.send((smalltalk.HSHTTPClient || HSHTTPClient), "_new", []), "_owner_", [self]);})() : $receiver;
return self;},
args: [],
source: unescape('httpClient%0A%09%5E%20httpClient%20ifNil%3A%20%5B%20httpClient%20%3A%3D%20HSHTTPClient%20new%20owner%3A%20self%20%5D'),
messageSends: ["ifNil:", "owner:", "new"],
referencedClasses: ["HSHTTPClient"]
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_updateTime'),
smalltalk.method({
selector: unescape('updateTime'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@updateTime']) == nil || $receiver == undefined) ? (function(){return self['@updateTime']=(1000);})() : $receiver;
return self;},
args: [],
source: unescape('updateTime%0A%09%5E%20updateTime%20ifNil%3A%20%5B%20updateTime%20%3A%3D%201000%20%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_updateTime_'),
smalltalk.method({
selector: unescape('updateTime%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
self['@updateTime']=anInteger;
return self;},
args: ["anInteger"],
source: unescape('updateTime%3A%20anInteger%0A%09updateTime%20%3A%3D%20anInteger'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
smalltalk.send(self, "_updateLoop", []);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09self%20updateLoop.'),
messageSends: ["initialize", "updateLoop"],
referencedClasses: []
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
((($receiver = smalltalk.send(smalltalk.send((typeof navigator == 'undefined' ? nil : navigator), "_userAgent", []), "_match_", ["MSIE"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_renderExplorerMessageOn_", [html]);})() : (function(){return self['@div']=smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return smalltalk.send(self, "_renderContentOn_", [html]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_renderExplorerMessageOn_", [html]);}), (function(){return self['@div']=smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return smalltalk.send(self, "_renderContentOn_", [html]);})]);})]));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09%28%20navigator%20userAgent%20match%3A%20%27MSIE%27%20%29%0A%09%09ifTrue%3A%20%5B%20self%20renderExplorerMessageOn%3A%20html%20%5D%20%0A%09%09ifFalse%3A%20%5B%09div%20%3A%3D%20html%20div%20with%3A%20%5B%20self%20renderContentOn%3A%20html%20%5D%20%5D'),
messageSends: ["ifTrue:ifFalse:", "match:", "userAgent", "renderExplorerMessageOn:", "with:", "div", "renderContentOn:"],
referencedClasses: []
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_renderConnectButtonOn_'),
smalltalk.method({
selector: unescape('renderConnectButtonOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["button"]);smalltalk.send($rec, "_with_", [((($receiver = smalltalk.send(smalltalk.send(self, "_httpClient", []), "_connected", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return "connect";})() : (function(){return "disconnect";})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return "connect";}), (function(){return "disconnect";})]))]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_toggleConnection", []);})]);})(smalltalk.send(html, "_a", []));
return self;},
args: ["html"],
source: unescape('renderConnectButtonOn%3A%20html%0A%09html%20a%20%0A%09%09class%3A%20%27button%27%3B%0A%09%09with%3A%20%0A%09%09%09%28%20self%20httpClient%20connected%20%0A%09%09%09%09ifFalse%3A%20%5B%20%27connect%27%20%5D%20%0A%09%09%09%09ifTrue%3A%20%5B%20%27disconnect%27%20%5D%20%29%3B%0A%09%09onClick%3A%0A%09%09%09%5B%20self%20toggleConnection%20%5D'),
messageSends: ["class:", "with:", "ifFalse:ifTrue:", "connected", "httpClient", "onClick:", "toggleConnection", "a"],
referencedClasses: []
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_renderIpInputOn_'),
smalltalk.method({
selector: unescape('renderIpInputOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@ipInput']=(function($rec){smalltalk.send($rec, "_type_", ["text"]);smalltalk.send($rec, "_value_", [smalltalk.send(smalltalk.send(self, "_httpClient", []), "_ip", [])]);return smalltalk.send($rec, "_onKeyPress_", [(function(event){return ((($receiver = smalltalk.send(smalltalk.send(event, "_keyCode", []), "__eq", [(13)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_toggleConnection", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_toggleConnection", []);})]));})]);})(smalltalk.send(html, "_input", []));
return self;},
args: ["html"],
source: unescape('renderIpInputOn%3A%20html%0A%09ipInput%20%3A%3D%20%0A%09%09html%20input%0A%09%09%09type%3A%20%27text%27%3B%0A%09%09%09value%3A%20self%20httpClient%20ip%3B%0A%09%09%09onKeyPress%3A%20%5B%20%3Aevent%20%7C%20%0A%09%09%09%09event%20keyCode%20%3D%2013%0A%09%09%09%09%09ifTrue%3A%20%5B%20self%20toggleConnection%20%5D%20%5D.'),
messageSends: ["type:", "value:", "ip", "httpClient", "onKeyPress:", "ifTrue:", unescape("%3D"), "keyCode", "toggleConnection", "input"],
referencedClasses: []
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_renderContentOn_'),
smalltalk.method({
selector: unescape('renderContentOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["wrapper"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_id_", ["controlPanel"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderConnectDivOn_", [html]);return smalltalk.send(html, "_with_", [smalltalk.send(self, "_settingsWidget", [])]);})]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_id_", ["widgetsPanel"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(self, "_subWidgets", []), "_do_", [(function(each){return smalltalk.send(html, "_with_", [each]);})]);})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderContentOn%3A%20html%0A%0A%09html%20div%20id%3A%20%27wrapper%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20div%20%0A%09%09%09%09id%3A%20%27controlPanel%27%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09self%20renderConnectDivOn%3A%20html.%0A%09%09%09%09%09html%20with%3A%20self%20settingsWidget%20%5D.%0A%09%09%09html%20div%0A%09%09%09%09id%3A%20%27widgetsPanel%27%20%3B%0A%09%09%09%09with%3A%20%5B%20self%20subWidgets%20do%3A%20%5B%20%3Aeach%20%7C%20html%20with%3A%20each%20%5D%20%5D%20%5D'),
messageSends: ["id:", "with:", "renderConnectDivOn:", "settingsWidget", "div", "do:", "subWidgets"],
referencedClasses: []
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_messagesWidget'),
smalltalk.method({
selector: unescape('messagesWidget'),
category: 'subWidgets',
fn: function (){
var self=this;
return (($receiver = self['@messagesWidget']) == nil || $receiver == undefined) ? (function(){return self['@messagesWidget']=smalltalk.send((smalltalk.HSMessagesWidget || HSMessagesWidget), "_owner_", [self]);})() : $receiver;
return self;},
args: [],
source: unescape('messagesWidget%0A%09%5E%20messagesWidget%20ifNil%3A%20%5B%20messagesWidget%20%3A%3D%20HSMessagesWidget%20owner%3A%20self.%20%5D'),
messageSends: ["ifNil:", "owner:"],
referencedClasses: ["HSMessagesWidget"]
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_varsWidget'),
smalltalk.method({
selector: unescape('varsWidget'),
category: 'subWidgets',
fn: function (){
var self=this;
return (($receiver = self['@varsWidget']) == nil || $receiver == undefined) ? (function(){return self['@varsWidget']=smalltalk.send((smalltalk.HSVarsWidget || HSVarsWidget), "_owner_", [self]);})() : $receiver;
return self;},
args: [],
source: unescape('varsWidget%0A%09%5E%20varsWidget%20ifNil%3A%20%5B%20varsWidget%20%3A%3D%20HSVarsWidget%20owner%3A%20self.%20%5D'),
messageSends: ["ifNil:", "owner:"],
referencedClasses: ["HSVarsWidget"]
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_settingsWidget'),
smalltalk.method({
selector: unescape('settingsWidget'),
category: 'subWidgets',
fn: function (){
var self=this;
return (($receiver = self['@settingsWidget']) == nil || $receiver == undefined) ? (function(){return self['@settingsWidget']=smalltalk.send((smalltalk.HSSettingsWidget || HSSettingsWidget), "_owner_", [self]);})() : $receiver;
return self;},
args: [],
source: unescape('settingsWidget%0A%09%5E%20settingsWidget%20ifNil%3A%20%5B%20settingsWidget%20%3A%3D%20HSSettingsWidget%20owner%3A%20self.%20%5D'),
messageSends: ["ifNil:", "owner:"],
referencedClasses: ["HSSettingsWidget"]
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_pointerWidget'),
smalltalk.method({
selector: unescape('pointerWidget'),
category: 'subWidgets',
fn: function (){
var self=this;
return (($receiver = self['@pointerWidget']) == nil || $receiver == undefined) ? (function(){return self['@pointerWidget']=smalltalk.send((smalltalk.HSPointerWidget || HSPointerWidget), "_owner_", [self]);})() : $receiver;
return self;},
args: [],
source: unescape('pointerWidget%0A%09%5E%20pointerWidget%20ifNil%3A%20%5B%20pointerWidget%20%3A%3D%20HSPointerWidget%20owner%3A%20self.%20%5D'),
messageSends: ["ifNil:", "owner:"],
referencedClasses: ["HSPointerWidget"]
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_update'),
smalltalk.method({
selector: unescape('update'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@div'], "_contents_", [(function(html){return smalltalk.send(self, "_renderContentOn_", [html]);})]);
smalltalk.send(smalltalk.send(self, "_subWidgets", []), "_do_", [(function(each){return smalltalk.send(each, "_update", []);})]);
return self;},
args: [],
source: unescape('update%0A%09div%20contents%3A%20%5B%20%3Ahtml%20%7C%20self%20renderContentOn%3A%20html%20%5D.%0A%09self%20subWidgets%20do%3A%20%5B%20%3Aeach%20%7C%20each%20update%20%5D.'),
messageSends: ["contents:", "renderContentOn:", "do:", "subWidgets", "update"],
referencedClasses: []
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_updateLoop'),
smalltalk.method({
selector: unescape('updateLoop'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send((function(){((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_httpClient", []), "_connected", []), "_and_", [(function(){return smalltalk.send(self, "_updating", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(smalltalk.send(self, "_varsWidget", []), "_retrieveVars", []);return smalltalk.send(smalltalk.send(self, "_varsWidget", []), "_update", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(smalltalk.send(self, "_varsWidget", []), "_retrieveVars", []);return smalltalk.send(smalltalk.send(self, "_varsWidget", []), "_update", []);})]));return smalltalk.send(self, "_updateLoop", []);}), "_valueWithTimeout_", [smalltalk.send(self, "_updateTime", [])]);
return self;},
args: [],
source: unescape('updateLoop%0A%09%5B%20%0A%09%28%20self%20httpClient%20connected%20and%3A%20%5B%20self%20updating%20%5D%20%29%0A%09%09ifTrue%3A%20%5B%09%0A%09%09%09self%20varsWidget%20retrieveVars.%0A%09%09%09self%20varsWidget%20update%5D.%0A%09self%20updateLoop%20%5D%20valueWithTimeout%3A%20self%20updateTime'),
messageSends: ["valueWithTimeout:", "ifTrue:", "and:", "connected", "httpClient", "updating", "retrieveVars", "varsWidget", "update", "updateLoop", "updateTime"],
referencedClasses: []
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_updateConnectButton'),
smalltalk.method({
selector: unescape('updateConnectButton'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@connectButton'], "_contents_", [(function(html){return smalltalk.send(self, "_renderConnectButtonOn_", [html]);})]);
return self;},
args: [],
source: unescape('updateConnectButton%0A%09connectButton%20contents%3A%20%5B%3Ahtml%20%7C%20self%20renderConnectButtonOn%3A%20html%20%5D.'),
messageSends: ["contents:", "renderConnectButtonOn:"],
referencedClasses: []
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_updating'),
smalltalk.method({
selector: unescape('updating'),
category: 'updating',
fn: function (){
var self=this;
return (($receiver = self['@updating']) == nil || $receiver == undefined) ? (function(){return self['@updating']=false;})() : $receiver;
return self;},
args: [],
source: unescape('updating%0A%09%5E%20updating%20ifNil%3A%20%5B%20updating%20%3A%3D%20false%20%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_stopUpdating'),
smalltalk.method({
selector: unescape('stopUpdating'),
category: 'updating',
fn: function (){
var self=this;
self['@updating']=false;
return self;},
args: [],
source: unescape('stopUpdating%0A%09updating%20%3A%3D%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_startUpdating'),
smalltalk.method({
selector: unescape('startUpdating'),
category: 'updating',
fn: function (){
var self=this;
self['@updating']=true;
return self;},
args: [],
source: unescape('startUpdating%0A%09updating%20%3A%3D%20true'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_toggleUpdating'),
smalltalk.method({
selector: unescape('toggleUpdating'),
category: 'updating',
fn: function (){
var self=this;
self['@updating']=smalltalk.send(smalltalk.send(self, "_updating", []), "_not", []);
return self;},
args: [],
source: unescape('toggleUpdating%0A%09updating%20%3A%3D%20self%20updating%20not'),
messageSends: ["not", "updating"],
referencedClasses: []
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_subWidgets'),
smalltalk.method({
selector: unescape('subWidgets'),
category: 'subWidgets',
fn: function (){
var self=this;
return (($receiver = self['@subWidgets']) == nil || $receiver == undefined) ? (function(){return self['@subWidgets']=[smalltalk.send(self, "_varsWidget", []),smalltalk.send(self, "_messagesWidget", []),smalltalk.send(self, "_logWidget", [])];})() : $receiver;
return self;},
args: [],
source: unescape('subWidgets%0A%09%5E%20subWidgets%20ifNil%3A%20%5B%20subWidgets%20%3A%3D%20%7B%20self%20varsWidget.%20self%20messagesWidget.%20self%20logWidget%20%7D%20%5D'),
messageSends: ["ifNil:", "varsWidget", "messagesWidget", "logWidget"],
referencedClasses: []
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_allSubWidgets'),
smalltalk.method({
selector: unescape('allSubWidgets'),
category: 'subWidgets',
fn: function (){
var self=this;
return [smalltalk.send(self, "_messagesWidget", []),smalltalk.send(self, "_varsWidget", []),smalltalk.send(self, "_pointerWidget", []),smalltalk.send(self, "_logWidget", [])];
return self;},
args: [],
source: unescape('allSubWidgets%0A%09%5E%20%7B%20self%20messagesWidget.%20self%20varsWidget.%20self%20pointerWidget.%20self%20logWidget%20%7D'),
messageSends: ["messagesWidget", "varsWidget", "pointerWidget", "logWidget"],
referencedClasses: []
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_renderConnectDivOn_'),
smalltalk.method({
selector: unescape('renderConnectDivOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["connectDiv"]);return smalltalk.send($rec, "_with_", [(function(){((($receiver = smalltalk.send(smalltalk.send(self, "_httpClient", []), "_connected", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_renderIpInputOn_", [html]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_renderIpInputOn_", [html]);})]));return self['@connectButton']=smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return smalltalk.send(self, "_renderConnectButtonOn_", [html]);})]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderConnectDivOn%3A%20html%0A%09html%20div%20%0A%09%09id%3A%20%27connectDiv%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09self%20httpClient%20connected%20ifFalse%3A%20%5B%20self%20renderIpInputOn%3A%20html%20%5D.%0A%09%09%09connectButton%20%3A%3D%20html%20div%20with%3A%20%5B%20self%20renderConnectButtonOn%3A%20html%20%5D%20%5D'),
messageSends: ["id:", "with:", "ifFalse:", "connected", "httpClient", "renderIpInputOn:", "div", "renderConnectButtonOn:"],
referencedClasses: []
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_renderExplorerMessageOn_'),
smalltalk.method({
selector: unescape('renderExplorerMessageOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_style_", [unescape("font-family%3A%20Arial%3B%20font-size%3A%2014px%3B")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_h1_", [unescape("Please%2C%20for%20the%20sake%20of%20the%20Internet....%20do%20not%20use%20Internet%20Explorer%20%3A%27%28")]);smalltalk.send(html, "_br", []);smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [unescape("You%20can%20choose%20between%20multiple%20free%20better%20browsers%20that%20embrace%20the%20W3C%20standards%2C%20some%20of%20them%20are%20listed%20below%3A")]);smalltalk.send(html, "_br", []);smalltalk.send(smalltalk.send(html, "_ul", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_style_", [unescape("font-weight%3A%20bold%3B")]);smalltalk.send($rec, "_href_", [unescape("http%3A//getfirefox.com")]);return smalltalk.send($rec, "_with_", ["Mozilla Firefox"]);})(smalltalk.send(html, "_a", []));})]);return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_style_", [unescape("font-weight%3A%20bold%3B")]);smalltalk.send($rec, "_href_", [unescape("http%3A//chrome.google.com")]);return smalltalk.send($rec, "_with_", ["Google Chrome"]);})(smalltalk.send(html, "_a", []));})]);})]);smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//www.iestolemylife.com")]);return smalltalk.send($rec, "_with_", [unescape("Why%20are%20you%20doing%20this%20to%20IE%20users%3F")]);})(smalltalk.send(html, "_a", []));})]);smalltalk.send(smalltalk.send(html, "_div", []), "_style_", [unescape("background-image%3A%20url%28%22http%3A//www.myremoteradio.com/wordpress/wp-content/uploads/2010/02/the_internet_box.jpg%22%29%3B%20background-repeat%3A%20no-repeat%3B%20width%3A%20600px%3B%20height%3A%20397px%3B")]);return (function($rec){smalltalk.send($rec, "_style_", [unescape("font-weight%3A%20bold%3B")]);return smalltalk.send($rec, "_with_", ["The Internet thanks you."]);})(smalltalk.send(html, "_p", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderExplorerMessageOn%3A%20html%0A%09html%20div%20%0A%09%09style%3A%20%27font-family%3A%20Arial%3B%20font-size%3A%2014px%3B%27%3B%0A%09%09with%3A%20%5B%20%0A%09%09%09html%20h1%3A%20%27Please%2C%20for%20the%20sake%20of%20the%20Internet....%20do%20not%20use%20Internet%20Explorer%20%3A%27%27%28%27.%0A%09%09%09html%20br.%0A%09%09%09html%20span%20with%3A%20%27You%20can%20choose%20between%20multiple%20free%20better%20browsers%20that%20embrace%20the%20W3C%20standards%2C%20some%20of%20them%20are%20listed%20below%3A%27.%0A%09%09%09html%20br.%0A%09%09%09html%20ul%20with%3A%20%5B%0A%09%09%09%09html%20li%20with%3A%20%5B%20html%20a%20style%3A%20%27font-weight%3A%20bold%3B%27%3B%20href%3A%20%27http%3A//getfirefox.com%27%3B%20with%3A%20%27Mozilla%20Firefox%27%20%5D.%0A%09%09%09%09html%20li%20with%3A%20%5B%20html%20a%20style%3A%20%27font-weight%3A%20bold%3B%27%3B%20href%3A%20%27http%3A//chrome.google.com%27%3B%20with%3A%20%27Google%20Chrome%27%20%5D%20%5D.%0A%09%09%09html%20span%20with%3A%20%5B%20html%20a%20href%3A%20%27http%3A//www.iestolemylife.com%27%3B%20with%3A%20%27Why%20are%20you%20doing%20this%20to%20IE%20users%3F%27%20%5D.%0A%09%09%09html%20div%20style%3A%20%27background-image%3A%20url%28%22http%3A//www.myremoteradio.com/wordpress/wp-content/uploads/2010/02/the_internet_box.jpg%22%29%3B%20background-repeat%3A%20no-repeat%3B%20width%3A%20600px%3B%20height%3A%20397px%3B%27.%0A%09%09%09html%20p%20style%3A%20%27font-weight%3A%20bold%3B%27%3B%20with%3A%20%27The%20Internet%20thanks%20you.%27%0A%09%09%09%5D'),
messageSends: ["style:", "with:", "h1:", "br", "span", "ul", "li", "href:", "a", "div", "p"],
referencedClasses: []
}),
smalltalk.HiScratchApp);

smalltalk.addMethod(
unescape('_logWidget'),
smalltalk.method({
selector: unescape('logWidget'),
category: 'subWidgets',
fn: function (){
var self=this;
return (($receiver = self['@logWidget']) == nil || $receiver == undefined) ? (function(){return self['@logWidget']=smalltalk.send((smalltalk.HSLogWidget || HSLogWidget), "_owner_", [self]);})() : $receiver;
return self;},
args: [],
source: unescape('logWidget%0A%09%5E%20logWidget%20ifNil%3A%20%5B%20logWidget%20%3A%3D%20HSLogWidget%20owner%3A%20self.%20%5D'),
messageSends: ["ifNil:", "owner:"],
referencedClasses: ["HSLogWidget"]
}),
smalltalk.HiScratchApp);


smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_start", []);
return self;},
args: [],
source: unescape('initialize%0A%09self%20start.'),
messageSends: ["start"],
referencedClasses: []
}),
smalltalk.HiScratchApp.klass);

smalltalk.addMethod(
unescape('_start'),
smalltalk.method({
selector: unescape('start'),
category: 'initialization',
fn: function (){
var self=this;
var instance=nil;
instance=smalltalk.send(self, "_new", []);
smalltalk.send(instance, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return instance;
return self;},
args: [],
source: unescape('start%0A%09%7Cinstance%7C%0A%09instance%20%3A%3D%20self%20new.%0A%09instance%20appendToJQuery%3A%20%28%27body%27%20asJQuery%29.%0A%09%5Einstance'),
messageSends: ["new", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.HiScratchApp.klass);


smalltalk.addClass('HSWidget', smalltalk.Widget, ['div', 'owner'], 'HiScratch');
smalltalk.addMethod(
unescape('_httpClient'),
smalltalk.method({
selector: unescape('httpClient'),
category: 'HTTP',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_owner", []), "_httpClient", []);
return self;},
args: [],
source: unescape('httpClient%0A%09%5E%20self%20owner%20httpClient'),
messageSends: ["httpClient", "owner"],
referencedClasses: []
}),
smalltalk.HSWidget);

smalltalk.addMethod(
unescape('_owner_'),
smalltalk.method({
selector: unescape('owner%3A'),
category: 'accessing',
fn: function (aWidget){
var self=this;
self['@owner']=aWidget;
return self;},
args: ["aWidget"],
source: unescape('owner%3A%20aWidget%0A%09owner%20%3A%3D%20aWidget'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HSWidget);

smalltalk.addMethod(
unescape('_owner'),
smalltalk.method({
selector: unescape('owner'),
category: 'accessing',
fn: function (){
var self=this;
return self['@owner'];
return self;},
args: [],
source: unescape('owner%0A%09%5E%20owner'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HSWidget);

smalltalk.addMethod(
unescape('_update'),
smalltalk.method({
selector: unescape('update'),
category: 'updating',
fn: function (){
var self=this;
smalltalk.send(self['@div'], "_contents_", [(function(html){return smalltalk.send(self, "_renderContentOn_", [html]);})]);
return self;},
args: [],
source: unescape('update%0A%09div%20contents%3A%20%5B%3Ahtml%20%7C%20self%20renderContentOn%3A%20html%20%5D'),
messageSends: ["contents:", "renderContentOn:"],
referencedClasses: []
}),
smalltalk.HSWidget);


smalltalk.addMethod(
unescape('_owner_'),
smalltalk.method({
selector: unescape('owner%3A'),
category: 'not yet classified',
fn: function (aWidget){
var self=this;
return (function($rec){smalltalk.send($rec, "_owner_", [aWidget]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aWidget"],
source: unescape('owner%3A%20aWidget%0A%09%5E%20%28self%20new%29%0A%09%09owner%3A%20aWidget%3B%0A%09%09yourself'),
messageSends: ["owner:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.HSWidget.klass);


smalltalk.addClass('HSMessagesWidget', smalltalk.HSWidget, ['messages'], 'HiScratch');
smalltalk.addMethod(
unescape('_retrieveMessages'),
smalltalk.method({
selector: unescape('retrieveMessages'),
category: 'HTTP',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_httpClient", []), "_getData_onSuccessDo_onErrorDo_", [unescape("send-messages"), (function(response){smalltalk.send(self, "_parse_", [response]);return smalltalk.send(self, "_update", []);}), (function(){smalltalk.send(self, "_messages_", [smalltalk.send((smalltalk.Array || Array), "_new", [])]);smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_logWidget", []), "_addEntry_", ["ERROR: failed to retrieve messages"]);return smalltalk.send(self, "_update", []);})]);
return self;},
args: [],
source: unescape('retrieveMessages%0A%09self%20httpClient%0A%09%09getData%3A%20%27send-messages%27%0A%09%09onSuccessDo%3A%20%5B%20%3Aresponse%20%7C%20%0A%09%09%09self%20parse%3A%20response.%0A%09%09%09self%20update%20%5D%0A%09%09onErrorDo%3A%20%5B%20%0A%09%09%09self%20messages%3A%20Array%20new.%0A%09%09%09self%20owner%20logWidget%20addEntry%3A%20%27ERROR%3A%20failed%20to%20retrieve%20messages%27.%0A%09%09%09self%20update%20%5D'),
messageSends: ["getData:onSuccessDo:onErrorDo:", "httpClient", "parse:", "update", "messages:", "new", "addEntry:", "logWidget", "owner"],
referencedClasses: ["Array"]
}),
smalltalk.HSMessagesWidget);

smalltalk.addMethod(
unescape('_messages'),
smalltalk.method({
selector: unescape('messages'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@messages']) == nil || $receiver == undefined) ? (function(){return self['@messages']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;},
args: [],
source: unescape('messages%0A%09%5E%20messages%20ifNil%3A%20%5B%20messages%20%3A%3D%20Array%20new%20%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.HSMessagesWidget);

smalltalk.addMethod(
unescape('_messages_'),
smalltalk.method({
selector: unescape('messages%3A'),
category: 'accessing',
fn: function (aCollection){
var self=this;
self['@messages']=aCollection;
return self;},
args: ["aCollection"],
source: unescape('messages%3A%20aCollection%0A%09messages%20%3A%3D%20aCollection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HSMessagesWidget);

smalltalk.addMethod(
unescape('_parse_'),
smalltalk.method({
selector: unescape('parse%3A'),
category: 'parsing',
fn: function (aString){
var self=this;
var proxyMessages=nil;
proxyMessages=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aString, "_replace_with_", [" ", ""]), "_tokenize_", [unescape("%22")]), "_allButFirst", []), "_select_", [(function(each){return smalltalk.send(each, "_notEmpty", []);})]);
((($receiver = smalltalk.send(smalltalk.send(self, "_messages", []), "__eq", [proxyMessages])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_messages_", [proxyMessages]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_messages_", [proxyMessages]);})]));
return self;},
args: ["aString"],
source: unescape('parse%3A%20aString%0A%09%7C%20proxyMessages%20%7C%0A%09proxyMessages%20%3A%3D%20%28%20%28%20%28%20aString%20replace%3A%20%27%20%27%20with%3A%20%27%27%20%29%20tokenize%3A%20%27%22%27%20%29%20allButFirst%20select%3A%20%5B%20%3Aeach%20%7C%20each%20notEmpty%20%5D%20%29.%0A%09self%20messages%20%3D%20proxyMessages%20ifFalse%3A%20%5B%20self%20messages%3A%20proxyMessages%20%5D.'),
messageSends: ["select:", "allButFirst", "tokenize:", "replace:with:", "notEmpty", "ifFalse:", unescape("%3D"), "messages", "messages:"],
referencedClasses: []
}),
smalltalk.HSMessagesWidget);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@div']=(function($rec){smalltalk.send($rec, "_class_", ["widget"]);smalltalk.send($rec, "_id_", ["messages"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderContentOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09div%20%3A%3D%20html%20div%20class%3A%20%27widget%27%3B%20id%3A%20%27messages%27%3B%20with%3A%20%5B%20self%20renderContentOn%3A%20html%20%5D'),
messageSends: ["class:", "id:", "with:", "renderContentOn:", "div"],
referencedClasses: []
}),
smalltalk.HSMessagesWidget);

smalltalk.addMethod(
unescape('_renderContentOn_'),
smalltalk.method({
selector: unescape('renderContentOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(self, "_httpClient", []), "_connected", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_messages", []), "_do_", [(function(each){return smalltalk.send(self, "_renderMessage_on_", [each, html]);})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_messages", []), "_do_", [(function(each){return smalltalk.send(self, "_renderMessage_on_", [each, html]);})]);})]));
return self;},
args: ["html"],
source: unescape('renderContentOn%3A%20html%0A%09self%20httpClient%20connected%20ifTrue%3A%20%5B%0A%09%09self%20messages%20do%3A%20%5B%20%3Aeach%20%7C%20%0A%09%09%09self%20renderMessage%3A%20each%20on%3A%20html%20%5D%20%5D'),
messageSends: ["ifTrue:", "connected", "httpClient", "do:", "messages", "renderMessage:on:"],
referencedClasses: []
}),
smalltalk.HSMessagesWidget);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'rendering',
fn: function (){
var self=this;
return "Messages";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27Messages%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HSMessagesWidget);

smalltalk.addMethod(
unescape('_renderMessage_on_'),
smalltalk.method({
selector: unescape('renderMessage%3Aon%3A'),
category: 'rendering',
fn: function (aMessage, html){
var self=this;
((($receiver = smalltalk.send(aMessage, "_match_", [unescape("%5E%5C+")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_class_", ["button"]);smalltalk.send($rec, "_with_", [smalltalk.send(aMessage, "_allButFirst", [])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_httpClient", []), "_sendBroadcast_", [aMessage]);})]);})(smalltalk.send(html, "_a", []));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["button"]);smalltalk.send($rec, "_with_", [smalltalk.send(aMessage, "_allButFirst", [])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(smalltalk.send(self, "_httpClient", []), "_sendBroadcast_", [aMessage]);})]);})(smalltalk.send(html, "_a", []));})]));
return self;},
args: ["aMessage", "html"],
source: unescape('renderMessage%3A%20aMessage%20on%3A%20html%0A%09%28%20aMessage%20match%3A%20%27%5E%5C+%27%20%29%20ifTrue%3A%20%5B%0A%09%09html%20a%20%0A%09%09%09class%3A%20%27button%27%3B%20%0A%09%09%09with%3A%20aMessage%20allButFirst%3B%0A%09%09%09onClick%3A%20%5B%20self%20httpClient%20sendBroadcast%3A%20aMessage%20%5D%20%5D'),
messageSends: ["ifTrue:", "match:", "class:", "with:", "allButFirst", "onClick:", "sendBroadcast:", "httpClient", "a"],
referencedClasses: []
}),
smalltalk.HSMessagesWidget);


smalltalk.addMethod(
unescape('_owner_'),
smalltalk.method({
selector: unescape('owner%3A'),
category: 'not yet classified',
fn: function (aWidget){
var self=this;
return (function($rec){smalltalk.send($rec, "_owner_", [aWidget]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aWidget"],
source: unescape('owner%3A%20aWidget%0A%09%5E%20%28self%20new%29%0A%09%09owner%3A%20aWidget%3B%0A%09%09yourself'),
messageSends: ["owner:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.HSMessagesWidget.klass);


smalltalk.addClass('HSVarsWidget', smalltalk.HSWidget, ['vars'], 'HiScratch');
smalltalk.addMethod(
unescape('_retrieveVars'),
smalltalk.method({
selector: unescape('retrieveVars'),
category: 'HTTP',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_httpClient", []), "_getData_onSuccessDo_onErrorDo_", [unescape("send-vars"), (function(response){smalltalk.send(self, "_parse_", [response]);smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_logWidget", []), "_addEntry_", ["read variables"]);return smalltalk.send(self, "_update", []);}), (function(){smalltalk.send(self, "_vars_", [smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])]);smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_logWidget", []), "_addEntry_", ["ERROR: failed to retrieve variables"]);return smalltalk.send(self, "_update", []);})]);
return self;},
args: [],
source: unescape('retrieveVars%0A%09self%20httpClient%0A%09%09getData%3A%20%27send-vars%27%0A%09%09onSuccessDo%3A%20%5B%20%3Aresponse%20%7C%20%0A%09%09%09self%20parse%3A%20response.%0A%09%09%09self%20owner%20logWidget%20addEntry%3A%20%27read%20variables%27.%0A%09%09%09self%20update%20%5D%0A%09%09onErrorDo%3A%20%5B%20%0A%09%09%09self%20vars%3A%20Dictionary%20new.%0A%09%09%09self%20owner%20logWidget%20addEntry%3A%20%27ERROR%3A%20failed%20to%20retrieve%20variables%27.%0A%09%09%09self%20update%20%5D'),
messageSends: ["getData:onSuccessDo:onErrorDo:", "httpClient", "parse:", "addEntry:", "logWidget", "owner", "update", "vars:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.HSVarsWidget);

smalltalk.addMethod(
unescape('_vars'),
smalltalk.method({
selector: unescape('vars'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@vars']) == nil || $receiver == undefined) ? (function(){return self['@vars']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);})() : $receiver;
return self;},
args: [],
source: unescape('vars%0A%09%5E%20vars%20ifNil%3A%20%5B%20vars%20%3A%3D%20Dictionary%20new%20%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.HSVarsWidget);

smalltalk.addMethod(
unescape('_vars_'),
smalltalk.method({
selector: unescape('vars%3A'),
category: 'accessing',
fn: function (aDictionary){
var self=this;
self['@vars']=aDictionary;
return self;},
args: ["aDictionary"],
source: unescape('vars%3A%20aDictionary%0A%09vars%20%3A%3D%20aDictionary'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HSVarsWidget);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.HSWidget);
self['@vars']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09vars%20%3A%3D%20Dictionary%20new'),
messageSends: ["initialize", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.HSVarsWidget);

smalltalk.addMethod(
unescape('_parse_'),
smalltalk.method({
selector: unescape('parse%3A'),
category: 'parsing',
fn: function (aString){
var self=this;
var collection=nil;
var proxyVars=nil;
collection=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aString, "_replace_with_", [" ", ""]), "_tokenize_", [unescape("%22")]), "_allButFirst", []), "_select_", [(function(each){return smalltalk.send(each, "_notEmpty", []);})]);
proxyVars=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);
smalltalk.send(smalltalk.send(collection, "_select_", [(function(each){return smalltalk.send(smalltalk.send(collection, "_indexOf_", [each]), "_odd", []);})]), "_withIndexDo_", [(function(each, index){return smalltalk.send(proxyVars, "_add_", [smalltalk.send(each, "__minus_gt", [smalltalk.send(collection, "_at_", [((($receiver = index).klass === smalltalk.Number) ? $receiver *(2) : smalltalk.send($receiver, "__star", [(2)]))])])]);})]);
((($receiver = smalltalk.send(proxyVars, "__eq", [smalltalk.send(self, "_vars", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self, "_vars_", [proxyVars]);return smalltalk.send(self, "_update", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){smalltalk.send(self, "_vars_", [proxyVars]);return smalltalk.send(self, "_update", []);})]));
return self;},
args: ["aString"],
source: unescape('parse%3A%20aString%0A%09%7C%20collection%20proxyVars%20%7C%0A%09collection%20%3A%3D%20%28%20%28%20%28%20aString%20replace%3A%20%27%20%27%20with%3A%20%27%27%20%29%20tokenize%3A%20%27%22%27%20%29%20allButFirst%20select%3A%20%5B%20%3Aeach%20%7C%20each%20notEmpty%20%5D%20%29.%0A%09proxyVars%20%3A%3D%20Dictionary%20new.%0A%09%28%20collection%20select%3A%20%5B%20%3Aeach%20%7C%20%28%20collection%20indexOf%3A%20each%20%29%20odd%20%5D%20%29%20withIndexDo%3A%20%5B%20%3Aeach%20%3Aindex%20%7C%20proxyVars%20add%3A%20%28%20each%20-%3E%20%28%20collection%20at%3A%20%28%20index%20*%202%20%29%20%29%20%29%20%5D.%0A%09proxyVars%20%3D%20self%20vars%20ifFalse%3A%20%5B%20self%20vars%3A%20proxyVars.%20self%20update%20%5D'),
messageSends: ["select:", "allButFirst", "tokenize:", "replace:with:", "notEmpty", "new", "withIndexDo:", "odd", "indexOf:", "add:", unescape("-%3E"), "at:", unescape("*"), "ifFalse:", unescape("%3D"), "vars", "vars:", "update"],
referencedClasses: ["Dictionary"]
}),
smalltalk.HSVarsWidget);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@div']=(function($rec){smalltalk.send($rec, "_class_", ["widget"]);smalltalk.send($rec, "_id_", ["vars"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderContentOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09div%20%3A%3D%20html%20div%20class%3A%20%27widget%27%3B%20id%3A%20%27vars%27%3B%20with%3A%20%5B%20self%20renderContentOn%3A%20html%20%5D'),
messageSends: ["class:", "id:", "with:", "renderContentOn:", "div"],
referencedClasses: []
}),
smalltalk.HSVarsWidget);

smalltalk.addMethod(
unescape('_renderContentOn_'),
smalltalk.method({
selector: unescape('renderContentOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(self, "_httpClient", []), "_connected", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_vars", []), "_associationsDo_", [(function(each){return (function($rec){smalltalk.send($rec, "_class_", ["var"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderVar_on_", [each, html]);})]);})(smalltalk.send(html, "_div", []));})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(self, "_vars", []), "_associationsDo_", [(function(each){return (function($rec){smalltalk.send($rec, "_class_", ["var"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderVar_on_", [each, html]);})]);})(smalltalk.send(html, "_div", []));})]);})]));
return self;},
args: ["html"],
source: unescape('renderContentOn%3A%20html%0A%09self%20httpClient%20connected%20ifTrue%3A%20%5B%0A%09%09self%20vars%20associationsDo%3A%20%5B%20%3Aeach%20%7C%20%0A%09%09%09html%20div%20%0A%09%09%09%09class%3A%20%27var%27%3B%20%0A%09%09%09%09with%3A%20%5B%20self%20renderVar%3A%20each%20on%3A%20html%20%5D%20%5D%20%5D'),
messageSends: ["ifTrue:", "connected", "httpClient", "associationsDo:", "vars", "class:", "with:", "renderVar:on:", "div"],
referencedClasses: []
}),
smalltalk.HSVarsWidget);

smalltalk.addMethod(
unescape('_renderVar_on_'),
smalltalk.method({
selector: unescape('renderVar%3Aon%3A'),
category: 'rendering',
fn: function (aVar, html){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(aVar, "_key", []), "_match_", [unescape("%5E%5B%5C-%5C+%5D")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var input=nil;
smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [smalltalk.send(smalltalk.send(aVar, "_key", []), "_allButFirst", [])]);input=(function($rec){smalltalk.send($rec, "_type_", ["text"]);smalltalk.send($rec, "_value_", [smalltalk.send(aVar, "_value", [])]);smalltalk.send($rec, "_onFocus_", [(function(){smalltalk.send(smalltalk.send(self, "_owner", []), "_stopUpdating", []);return smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_settingsWidget", []), "_update", []);})]);return smalltalk.send($rec, "_onBlur_", [(function(){return smalltalk.send(smalltalk.send(self, "_httpClient", []), "_updateVar_value_", [aVar, smalltalk.send(smalltalk.send(input, "_element", []), "_value", [])]);})]);})(smalltalk.send(html, "_input", []));return ((($receiver = smalltalk.send(smalltalk.send(aVar, "_key", []), "_match_", [unescape("%5E%5C+")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(input, "_at_put_", ["disabled", "true"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(input, "_at_put_", ["disabled", "true"]);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var input=nil;
smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [smalltalk.send(smalltalk.send(aVar, "_key", []), "_allButFirst", [])]);input=(function($rec){smalltalk.send($rec, "_type_", ["text"]);smalltalk.send($rec, "_value_", [smalltalk.send(aVar, "_value", [])]);smalltalk.send($rec, "_onFocus_", [(function(){smalltalk.send(smalltalk.send(self, "_owner", []), "_stopUpdating", []);return smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_settingsWidget", []), "_update", []);})]);return smalltalk.send($rec, "_onBlur_", [(function(){return smalltalk.send(smalltalk.send(self, "_httpClient", []), "_updateVar_value_", [aVar, smalltalk.send(smalltalk.send(input, "_element", []), "_value", [])]);})]);})(smalltalk.send(html, "_input", []));return ((($receiver = smalltalk.send(smalltalk.send(aVar, "_key", []), "_match_", [unescape("%5E%5C+")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(input, "_at_put_", ["disabled", "true"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(input, "_at_put_", ["disabled", "true"]);})]));})]));
return self;},
args: ["aVar", "html"],
source: unescape('renderVar%3A%20aVar%20on%3A%20html%0A%09%28%20aVar%20key%20match%3A%20%27%5E%5B%5C-%5C+%5D%27%20%29%20ifTrue%3A%20%5B%0A%09%09%7Cinput%7C%0A%09%09html%20span%20with%3A%20aVar%20key%20allButFirst.%0A%09%09input%20%3A%3D%20html%20input%20%0A%09%09%09type%3A%20%27text%27%3B%0A%09%09%09value%3A%20aVar%20value%3B%0A%09%09%09onFocus%3A%20%5B%20self%20owner%20stopUpdating.%20self%20owner%20settingsWidget%20update%20%5D%3B%0A%09%09%09onBlur%3A%20%5B%20self%20httpClient%20updateVar%3A%20aVar%20value%3A%20input%20element%20value%20%5D.%0A%09%09%28%20aVar%20key%20match%3A%20%27%5E%5C+%27%20%29%20ifFalse%3A%20%5B%20input%20at%3A%20%27disabled%27%20put%3A%20%27true%27%20%5D%20%5D'),
messageSends: ["ifTrue:", "match:", "key", "with:", "span", "allButFirst", "type:", "value:", "value", "onFocus:", "stopUpdating", "owner", "update", "settingsWidget", "onBlur:", "updateVar:value:", "httpClient", "element", "input", "ifFalse:", "at:put:"],
referencedClasses: []
}),
smalltalk.HSVarsWidget);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'rendering',
fn: function (){
var self=this;
return "Variables";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27Variables%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HSVarsWidget);


smalltalk.addMethod(
unescape('_owner_'),
smalltalk.method({
selector: unescape('owner%3A'),
category: 'not yet classified',
fn: function (aWidget){
var self=this;
return (function($rec){smalltalk.send($rec, "_owner_", [aWidget]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aWidget"],
source: unescape('owner%3A%20aWidget%0A%09%5E%20%28self%20new%29%0A%09%09owner%3A%20aWidget%3B%0A%09%09yourself'),
messageSends: ["owner:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.HSVarsWidget.klass);


smalltalk.addClass('HSSettingsWidget', smalltalk.HSWidget, ['slider', 'span'], 'HiScratch');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@div']=(function($rec){smalltalk.send($rec, "_id_", ["settings"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderContentOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09div%20%3A%3D%20html%20div%20id%3A%20%27settings%27%3B%20with%3A%20%5B%20self%20renderContentOn%3A%20html%20%5D'),
messageSends: ["id:", "with:", "renderContentOn:", "div"],
referencedClasses: []
}),
smalltalk.HSSettingsWidget);

smalltalk.addMethod(
unescape('_renderContentOn_'),
smalltalk.method({
selector: unescape('renderContentOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(self, "_httpClient", []), "_connected", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_renderSliderOn_", [html]);smalltalk.send(self, "_renderToggleUpdateOn_", [html]);return smalltalk.send(self, "_renderWidgetSelectorOn_", [html]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_renderSliderOn_", [html]);smalltalk.send(self, "_renderToggleUpdateOn_", [html]);return smalltalk.send(self, "_renderWidgetSelectorOn_", [html]);})]));
return self;},
args: ["html"],
source: unescape('renderContentOn%3A%20html%0A%09self%20httpClient%20connected%20%0A%09%09ifTrue%3A%20%5B%0A%09%09%09self%20renderSliderOn%3A%20html.%0A%09%09%09self%20renderToggleUpdateOn%3A%20html.%0A%09%09%09self%20renderWidgetSelectorOn%3A%20html.%20%5D'),
messageSends: ["ifTrue:", "connected", "httpClient", "renderSliderOn:", "renderToggleUpdateOn:", "renderWidgetSelectorOn:"],
referencedClasses: []
}),
smalltalk.HSSettingsWidget);

smalltalk.addMethod(
unescape('_renderSliderOn_'),
smalltalk.method({
selector: unescape('renderSliderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["slider"]);return smalltalk.send($rec, "_with_", [(function(){self['@slider']=(function($rec){smalltalk.send($rec, "_type_", ["range"]);smalltalk.send($rec, "_value_", [smalltalk.send(smalltalk.send(self, "_owner", []), "_updateTime", [])]);smalltalk.send($rec, "_at_put_", ["min", (100)]);smalltalk.send($rec, "_at_put_", ["max", (5000)]);smalltalk.send($rec, "_at_put_", ["step", (100)]);return smalltalk.send($rec, "_onChange_", [(function(){smalltalk.send(smalltalk.send(self, "_owner", []), "_updateTime_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@slider'], "_element", []), "_value", []), "_asNumber", [])]);return smalltalk.send(self['@span'], "_contents_", [smalltalk.send(self, "_sliderLabel", [])]);})]);})(smalltalk.send(html, "_input", []));return self['@span']=smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [smalltalk.send(self, "_sliderLabel", [])]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderSliderOn%3A%20html%0A%09html%20div%20%0A%09%09id%3A%20%27slider%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09slider%20%3A%3D%20html%20input%0A%09%09%09%09type%3A%20%27range%27%3B%0A%09%09%09%09value%3A%20self%20owner%20updateTime%3B%0A%09%09%09%09at%3A%20%27min%27%20put%3A%20100%3B%0A%09%09%09%09at%3A%20%27max%27%20put%3A%205000%3B%0A%09%09%09%09at%3A%20%27step%27%20put%3A%20100%3B%0A%09%09%09%09onChange%3A%20%5B%20%0A%09%09%09%09%09self%20owner%20updateTime%3A%20slider%20element%20value%20asNumber.%0A%09%09%09%09%09span%20contents%3A%20self%20sliderLabel%20%5D.%0A%0A%09%09%09span%20%3A%3D%20html%20span%20with%3A%20self%20sliderLabel%20%5D.'),
messageSends: ["id:", "with:", "type:", "value:", "updateTime", "owner", "at:put:", "onChange:", "updateTime:", "asNumber", "value", "element", "contents:", "sliderLabel", "input", "span", "div"],
referencedClasses: []
}),
smalltalk.HSSettingsWidget);

smalltalk.addMethod(
unescape('_renderToggleUpdateOn_'),
smalltalk.method({
selector: unescape('renderToggleUpdateOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["button"]);smalltalk.send($rec, "_with_", [((($receiver = smalltalk.send(smalltalk.send(self, "_owner", []), "_updating", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "stop updating";})() : (function(){return "start updating";})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "stop updating";}), (function(){return "start updating";})]))]);return smalltalk.send($rec, "_onClick_", [(function(){smalltalk.send(smalltalk.send(self, "_owner", []), "_toggleUpdating", []);return smalltalk.send(self, "_update", []);})]);})(smalltalk.send(html, "_a", []));
return self;},
args: ["html"],
source: unescape('renderToggleUpdateOn%3A%20html%0A%09html%20a%0A%09%09class%3A%20%27button%27%3B%20%0A%09%09with%3A%20%28self%20owner%20updating%20ifTrue%3A%20%5B%20%27stop%20updating%27%20%5D%20ifFalse%3A%20%5B%20%27start%20updating%27%20%5D%20%29%3B%0A%09%09onClick%3A%20%5B%0A%09%09%09self%20owner%20toggleUpdating.%20%0A%09%09%09self%20update%20%5D'),
messageSends: ["class:", "with:", "ifTrue:ifFalse:", "updating", "owner", "onClick:", "toggleUpdating", "update", "a"],
referencedClasses: []
}),
smalltalk.HSSettingsWidget);

smalltalk.addMethod(
unescape('_sliderLabel'),
smalltalk.method({
selector: unescape('sliderLabel'),
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(((($receiver = smalltalk.send(smalltalk.send(self, "_owner", []), "_updateTime", [])).klass === smalltalk.Number) ? $receiver /(1000) : smalltalk.send($receiver, "__slash", [(1000)])), "_asString", []), "__comma", ["s"]);
return self;},
args: [],
source: unescape('sliderLabel%0A%09%5E%20%28%20self%20owner%20updateTime%20/%201000%20%29%20asString%20%2C%20%27s%27'),
messageSends: [unescape("%2C"), "asString", unescape("/"), "updateTime", "owner"],
referencedClasses: []
}),
smalltalk.HSSettingsWidget);

smalltalk.addMethod(
unescape('_renderWidgetSelectorOn_'),
smalltalk.method({
selector: unescape('renderWidgetSelectorOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_allSubWidgets", []), "_do_", [(function(each){return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){var checkbox=nil;
checkbox=(function($rec){smalltalk.send($rec, "_type_", ["checkbox"]);return smalltalk.send($rec, "_onChange_", [(function(){return smalltalk.send(self, "_toggleWidget_", [each]);})]);})(smalltalk.send(html, "_input", []));((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_subWidgets", []), "_includes_", [each])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(checkbox, "_at_put_", ["checked", "yes"]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(checkbox, "_at_put_", ["checked", "yes"]);})]));return (function($rec){smalltalk.send($rec, "_class_", ["label"]);return smalltalk.send($rec, "_with_", [smalltalk.send(each, "_title", [])]);})(smalltalk.send(html, "_span", []));})]);})]);
return self;},
args: ["html"],
source: unescape('renderWidgetSelectorOn%3A%20html%0A%09self%20owner%20allSubWidgets%20do%3A%20%5B%3Aeach%20%7C%0A%09%09html%20div%20with%3A%20%5B%0A%09%09%09%7C%20checkbox%20%7C%0A%09%09%09checkbox%20%3A%3D%20html%20input%0A%09%09%09%09type%3A%20%27checkbox%27%3B%0A%09%09%09%09onChange%3A%20%5B%20self%20toggleWidget%3A%20each%20%5D.%0A%09%09%09%28%20self%20owner%20subWidgets%20includes%3A%20each%20%29%20ifTrue%3A%20%5B%20checkbox%20at%3A%20%27checked%27%20put%3A%20%27yes%27%20%5D.%0A%09%09%09html%20span%20%0A%09%09%09%09class%3A%20%27label%27%3B%0A%09%09%09%09with%3A%20each%20title.%20%5D%20%5D'),
messageSends: ["do:", "allSubWidgets", "owner", "with:", "div", "type:", "onChange:", "toggleWidget:", "input", "ifTrue:", "includes:", "subWidgets", "at:put:", "class:", "title", "span"],
referencedClasses: []
}),
smalltalk.HSSettingsWidget);

smalltalk.addMethod(
unescape('_toggleWidget_'),
smalltalk.method({
selector: unescape('toggleWidget%3A'),
category: 'rendering',
fn: function (aWidget){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_subWidgets", []), "_includes_", [aWidget])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_subWidgets", []), "_remove_", [aWidget]);})() : (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_subWidgets", []), "_add_", [aWidget]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_subWidgets", []), "_remove_", [aWidget]);}), (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_subWidgets", []), "_add_", [aWidget]);})]));
smalltalk.send(smalltalk.send(self, "_owner", []), "_update", []);
return self;},
args: ["aWidget"],
source: unescape('toggleWidget%3A%20aWidget%0A%09%28%20self%20owner%20subWidgets%20includes%3A%20aWidget%20%29%20%0A%09%09ifTrue%3A%20%5B%20self%20owner%20subWidgets%20remove%3A%20aWidget%20%5D%0A%09%09ifFalse%3A%20%5B%20self%20owner%20subWidgets%20add%3A%20aWidget%20%5D.%0A%09self%20owner%20update.'),
messageSends: ["ifTrue:ifFalse:", "includes:", "subWidgets", "owner", "remove:", "add:", "update"],
referencedClasses: []
}),
smalltalk.HSSettingsWidget);


smalltalk.addMethod(
unescape('_owner_'),
smalltalk.method({
selector: unescape('owner%3A'),
category: 'not yet classified',
fn: function (aWidget){
var self=this;
return (function($rec){smalltalk.send($rec, "_owner_", [aWidget]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aWidget"],
source: unescape('owner%3A%20aWidget%0A%09%5E%20%28self%20new%29%0A%09%09owner%3A%20aWidget%3B%0A%09%09yourself'),
messageSends: ["owner:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.HSSettingsWidget.klass);


smalltalk.addClass('HSHTTPClient', smalltalk.Object, ['ip', 'connected', 'owner'], 'HiScratch');
smalltalk.addMethod(
unescape('_connected'),
smalltalk.method({
selector: unescape('connected'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@connected']) == nil || $receiver == undefined) ? (function(){return self['@connected']=false;})() : $receiver;
return self;},
args: [],
source: unescape('connected%0A%09%5E%20connected%20ifNil%3A%20%5B%20connected%20%3A%3D%20false%20%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
unescape('_connected_'),
smalltalk.method({
selector: unescape('connected%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
self['@connected']=aBoolean;
return self;},
args: ["aBoolean"],
source: unescape('connected%3A%20aBoolean%0A%09connected%20%3A%3D%20aBoolean'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
unescape('_ip'),
smalltalk.method({
selector: unescape('ip'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@ip']) == nil || $receiver == undefined) ? (function(){return self['@ip']="192.168.";})() : $receiver;
return self;},
args: [],
source: unescape('ip%0A%09%5E%20ip%20ifNil%3A%20%5B%20ip%20%3A%3D%20%27192.168.%27%20%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
unescape('_disconnect'),
smalltalk.method({
selector: unescape('disconnect'),
category: 'connection',
fn: function (){
var self=this;
smalltalk.send(self, "_connected_", [false]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_logWidget", []), "_addEntry_", ["disconnected"]);
return self;},
args: [],
source: unescape('disconnect%0A%09self%20connected%3A%20false.%0A%0A%09self%20owner%20logWidget%20addEntry%3A%20%27disconnected%27.'),
messageSends: ["connected:", "addEntry:", "logWidget", "owner"],
referencedClasses: []
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
unescape('_url'),
smalltalk.method({
selector: unescape('url'),
category: 'connection',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("http%3A//"), "__comma", [self['@ip']]), "__comma", [unescape("%3A42001/")]);
return self;},
args: [],
source: unescape('url%0A%09%5E%20%27http%3A//%27%2C%20ip%2C%20%27%3A42001/%27.'),
messageSends: [unescape("%2C")],
referencedClasses: []
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
unescape('_getData_onSuccessDo_'),
smalltalk.method({
selector: unescape('getData%3AonSuccessDo%3A'),
category: 'send / retrieve data',
fn: function (data, aBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(self, "_url", []), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("data", "__minus_gt", [data]),smalltalk.send("timeout", "__minus_gt", [(500)]),smalltalk.send("success", "__minus_gt", [aBlock])])]);
return self;},
args: ["data", "aBlock"],
source: unescape('getData%3A%20data%20onSuccessDo%3A%20aBlock%0A%0A%09jQuery%0A%09%09ajax%3A%20self%20url%0A%09%09options%3A%20%23%7B%0A%09%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%09%27data%27%20-%3E%20data.%0A%09%09%09%27timeout%27%20-%3E%20500.%0A%09%09%09%27success%27%20-%3E%20aBlock%20%7D.'),
messageSends: ["ajax:options:", "url", unescape("-%3E")],
referencedClasses: []
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
unescape('_sendBroadcast_'),
smalltalk.method({
selector: unescape('sendBroadcast%3A'),
category: 'send / retrieve data',
fn: function (broadcast){
var self=this;
smalltalk.send(self, "_getData_onSuccessDo_", [smalltalk.send(unescape("broadcast%3D"), "__comma", [broadcast]), (function(){return nil;})]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_logWidget", []), "_addEntry_", [smalltalk.send("broadcasted ", "__comma", [broadcast])]);
return self;},
args: ["broadcast"],
source: unescape('sendBroadcast%3A%20broadcast%0A%0A%09self%20%0A%09%09getData%3A%20%27broadcast%3D%27%20%2C%20broadcast%0A%09%09onSuccessDo%3A%20%5B%20%5D.%0A%0A%09self%20owner%20logWidget%20addEntry%3A%20%27broadcasted%20%27%20%2C%20broadcast.'),
messageSends: ["getData:onSuccessDo:", unescape("%2C"), "addEntry:", "logWidget", "owner"],
referencedClasses: []
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
unescape('_updateVar_value_'),
smalltalk.method({
selector: unescape('updateVar%3Avalue%3A'),
category: 'send / retrieve data',
fn: function (aVar, aValue){
var self=this;
smalltalk.send(self, "_getData_onSuccessDo_", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("vars-update%3D"), "__comma", [smalltalk.send(aVar, "_key", [])]), "__comma", [unescape("%3D")]), "__comma", [aValue]), (function(){return nil;})]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_logWidget", []), "_addEntry_", [smalltalk.send(smalltalk.send(smalltalk.send("updated variable ", "__comma", [smalltalk.send(smalltalk.send(aVar, "_key", []), "_asString", [])]), "__comma", [" to value "]), "__comma", [smalltalk.send(aValue, "_asString", [])])]);
return self;},
args: ["aVar", "aValue"],
source: unescape('updateVar%3A%20aVar%20value%3A%20aValue%0A%0A%09self%09getData%3A%20%28%20%27vars-update%3D%27%20%2C%20aVar%20key%20%2C%20%27%3D%27%20%2C%20aValue%20%29%0A%09%09onSuccessDo%3A%20%5B%20%5D.%0A%0A%09self%20owner%20logWidget%20addEntry%3A%20%27updated%20variable%20%27%20%2C%20aVar%20key%20asString%20%2C%20%27%20to%20value%20%27%20%2C%20aValue%20asString.'),
messageSends: ["getData:onSuccessDo:", unescape("%2C"), "key", "addEntry:", "logWidget", "owner", "asString"],
referencedClasses: []
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
unescape('_updateSensor_value_'),
smalltalk.method({
selector: unescape('updateSensor%3Avalue%3A'),
category: 'send / retrieve data',
fn: function (aSensor, aValue){
var self=this;
smalltalk.send(self, "_getData_onSuccessDo_", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("sensor-update%3D"), "__comma", [aSensor]), "__comma", [unescape("%3D")]), "__comma", [aValue]), (function(){return nil;})]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_owner", []), "_logWidget", []), "_addEntry_", [smalltalk.send(smalltalk.send(smalltalk.send("updated sensor ", "__comma", [smalltalk.send(aSensor, "_asString", [])]), "__comma", [" to value "]), "__comma", [smalltalk.send(aValue, "_asString", [])])]);
return self;},
args: ["aSensor", "aValue"],
source: unescape('updateSensor%3A%20aSensor%20value%3A%20aValue%0A%0A%09self%09getData%3A%20%28%20%27sensor-update%3D%27%20%2C%20aSensor%20%2C%20%27%3D%27%20%2C%20aValue%20%29%0A%09%09onSuccessDo%3A%20%5B%20%5D.%0A%0A%09self%20owner%20logWidget%20addEntry%3A%20%27updated%20sensor%20%27%20%2C%20aSensor%20asString%20%2C%20%27%20to%20value%20%27%20%2C%20aValue%20asString.'),
messageSends: ["getData:onSuccessDo:", unescape("%2C"), "addEntry:", "logWidget", "owner", "asString"],
referencedClasses: []
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
unescape('_owner'),
smalltalk.method({
selector: unescape('owner'),
category: 'accessing',
fn: function (){
var self=this;
return self['@owner'];
return self;},
args: [],
source: unescape('owner%0A%09%5E%20owner'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
unescape('_owner_'),
smalltalk.method({
selector: unescape('owner%3A'),
category: 'accessing',
fn: function (anOwner){
var self=this;
self['@owner']=anOwner;
return self;},
args: ["anOwner"],
source: unescape('owner%3A%20anOwner%0A%09owner%20%3A%3D%20anOwner'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
unescape('_getData_onSuccessDo_onErrorDo_'),
smalltalk.method({
selector: unescape('getData%3AonSuccessDo%3AonErrorDo%3A'),
category: 'send / retrieve data',
fn: function (data, aBlock, anErrorBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(self, "_url", []), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("data", "__minus_gt", [data]),smalltalk.send("timeout", "__minus_gt", [(500)]),smalltalk.send("success", "__minus_gt", [aBlock]),smalltalk.send("error", "__minus_gt", [anErrorBlock])])]);
return self;},
args: ["data", "aBlock", "anErrorBlock"],
source: unescape('getData%3A%20data%20onSuccessDo%3A%20aBlock%20onErrorDo%3A%20anErrorBlock%0A%0A%09jQuery%0A%09%09ajax%3A%20self%20url%0A%09%09options%3A%20%23%7B%0A%09%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%09%27data%27%20-%3E%20data.%0A%09%09%09%27timeout%27%20-%3E%20500.%0A%09%09%09%27success%27%20-%3E%20aBlock.%0A%09%09%09%27error%27%20-%3E%20anErrorBlock%20%7D.'),
messageSends: ["ajax:options:", "url", unescape("-%3E")],
referencedClasses: []
}),
smalltalk.HSHTTPClient);

smalltalk.addMethod(
unescape('_connectTo_onSuccessDo_onErrorDo_'),
smalltalk.method({
selector: unescape('connectTo%3AonSuccessDo%3AonErrorDo%3A'),
category: 'connection',
fn: function (anIP, aBlock, anErrorBlock){
var self=this;
self['@ip']=anIP;
smalltalk.send(self, "_getData_onSuccessDo_onErrorDo_", ["", (function(){smalltalk.send(self, "_connected_", [true]);return smalltalk.send(aBlock, "_value", []);}), (function(){smalltalk.send(self, "_connected_", [false]);return smalltalk.send(anErrorBlock, "_value", []);})]);
return self;},
args: ["anIP", "aBlock", "anErrorBlock"],
source: unescape('connectTo%3A%20anIP%20onSuccessDo%3A%20aBlock%20onErrorDo%3A%20anErrorBlock%0A%0A%09ip%20%3A%3D%20anIP.%0A%0A%09self%20%0A%09%09getData%3A%20%27%27%20%0A%09%09onSuccessDo%3A%20%5B%20%0A%09%09%09self%20connected%3A%20true.%0A%09%09%09aBlock%20value%20%5D%0A%09%09onErrorDo%3A%20%5B%20%0A%09%09%09self%20connected%3A%20false.%0A%09%09%09anErrorBlock%20value%20%5D'),
messageSends: ["getData:onSuccessDo:onErrorDo:", "connected:", "value"],
referencedClasses: []
}),
smalltalk.HSHTTPClient);



smalltalk.addClass('HSPointerWidget', smalltalk.HSWidget, ['mousePosition', 'crossHair'], 'HiScratch');
smalltalk.addMethod(
unescape('_updateSensors'),
smalltalk.method({
selector: unescape('updateSensors'),
category: 'HTTP',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_httpClient", []), "_updateSensor_value_", ["remoteX", ((($receiver = smalltalk.send(self['@mousePosition'], "_x", [])).klass === smalltalk.Number) ? $receiver -(240) : smalltalk.send($receiver, "__minus", [(240)]))]);
smalltalk.send(smalltalk.send(self, "_httpClient", []), "_updateSensor_value_", ["remoteY", (180) - smalltalk.send(self['@mousePosition'], "_y", [])]);
return self;},
args: [],
source: unescape('updateSensors%0A%09self%20httpClient%20updateSensor%3A%20%27remoteX%27%20value%3A%20%28%20mousePosition%20x%20-%20240%20%29.%0A%09self%20httpClient%20updateSensor%3A%20%27remoteY%27%20value%3A%20%28%20180%20-%20mousePosition%20y%20%29.'),
messageSends: ["updateSensor:value:", "httpClient", unescape("-"), "x", "y"],
referencedClasses: []
}),
smalltalk.HSPointerWidget);

smalltalk.addMethod(
unescape('_mousePosition'),
smalltalk.method({
selector: unescape('mousePosition'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@mousePosition']) == nil || $receiver == undefined) ? (function(){return self['@mousePosition']=smalltalk.send((0), "__at", [(0)]);})() : $receiver;
return self;},
args: [],
source: unescape('mousePosition%0A%09%5E%20mousePosition%20ifNil%3A%20%5B%20mousePosition%20%3A%3D%200@0%20%5D'),
messageSends: ["ifNil:", unescape("@")],
referencedClasses: []
}),
smalltalk.HSPointerWidget);

smalltalk.addMethod(
unescape('_mouseEvent_'),
smalltalk.method({
selector: unescape('mouseEvent%3A'),
category: 'events',
fn: function (evt){
var self=this;
smalltalk.send(self, "_getMousePositionFromEvent_", [evt]);
smalltalk.send(self, "_updateSensors", []);
smalltalk.send(self, "_update", []);
return self;},
args: ["evt"],
source: unescape('mouseEvent%3A%20evt%0A%09self%20getMousePositionFromEvent%3A%20evt.%0A%09self%20updateSensors.%0A%09self%20update.'),
messageSends: ["getMousePositionFromEvent:", "updateSensors", "update"],
referencedClasses: []
}),
smalltalk.HSPointerWidget);

smalltalk.addMethod(
unescape('_getMousePositionFromEvent_'),
smalltalk.method({
selector: unescape('getMousePositionFromEvent%3A'),
category: 'events',
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
return self;},
args: ["evt"],
source: unescape('getMousePositionFromEvent%3A%20evt%0A%0A%09%7C%20divPosition%20windowScrollTop%20windowScrollLeft%20divRelativePosition%20%7C%0A%0A%09windowScrollTop%20%3A%3D%20%3C%24%28window%29.scrollTop%28%29%3B%3E.%0A%09windowScrollLeft%20%3A%3D%20%3C%24%28window%29.scrollLeft%28%29%3B%3E.%0A%09divPosition%20%3A%3D%20%27%23pointer%27%20asJQuery%20position.%0A%0A%09divRelativePosition%20%3A%3D%20%28%20divPosition%20left%20-%20windowScrollLeft%20%29%20@%20%28%20divPosition%20top%20-%20windowScrollTop%20%29%20.%0A%09mousePosition%20%3A%3D%20%28%20evt%20clientX%20-%20divRelativePosition%20x%29%20@%20%28evt%20clientY%20-%20divRelativePosition%20y%20%29.'),
messageSends: ["position", "asJQuery", unescape("@"), unescape("-"), "left", "top", "clientX", "x", "clientY", "y"],
referencedClasses: []
}),
smalltalk.HSPointerWidget);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
self['@div']=(function($rec){smalltalk.send($rec, "_class_", ["widget"]);smalltalk.send($rec, "_id_", ["remotePad"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderContentOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09div%20%3A%3D%20html%20div%20%0A%09%09class%3A%20%27widget%27%3B%0A%09%09id%3A%20%27remotePad%27%3B%0A%09%09with%3A%20%5B%20self%20renderContentOn%3A%20html%20%5D'),
messageSends: ["class:", "id:", "with:", "renderContentOn:", "div"],
referencedClasses: []
}),
smalltalk.HSPointerWidget);

smalltalk.addMethod(
unescape('_renderContentOn_'),
smalltalk.method({
selector: unescape('renderContentOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
((($receiver = smalltalk.send(smalltalk.send(self, "_httpClient", []), "_connected", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var pointerDiv=nil;
pointerDiv=(function($rec){smalltalk.send($rec, "_id_", ["pointer"]);return smalltalk.send($rec, "_with_", [(function(){self['@crossHair']=smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [unescape("images/crossHair.png")]);smalltalk.send(self, "_updateCrosshairPosition", []);return (function($rec){smalltalk.send($rec, "_class_", ["pointer"]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28%20"), "__comma", [smalltalk.send(((($receiver = smalltalk.send(smalltalk.send(self, "_mousePosition", []), "_x", [])).klass === smalltalk.Number) ? $receiver -(240) : smalltalk.send($receiver, "__minus", [(240)])), "_asString", [])]), "__comma", [unescape("%20%2C%20")]), "__comma", [smalltalk.send((180) - smalltalk.send(smalltalk.send(self, "_mousePosition", []), "_y", []), "_asString", [])]), "__comma", [unescape("%29%20")])]);})(smalltalk.send(html, "_span", []));})]);})(smalltalk.send(html, "_div", []));return smalltalk.send(smalltalk.send(pointerDiv, "_asJQuery", []), "_bind_do_", ["click", (function(evt){return smalltalk.send(self, "_mouseEvent_", [evt]);})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var pointerDiv=nil;
pointerDiv=(function($rec){smalltalk.send($rec, "_id_", ["pointer"]);return smalltalk.send($rec, "_with_", [(function(){self['@crossHair']=smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [unescape("images/crossHair.png")]);smalltalk.send(self, "_updateCrosshairPosition", []);return (function($rec){smalltalk.send($rec, "_class_", ["pointer"]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28%20"), "__comma", [smalltalk.send(((($receiver = smalltalk.send(smalltalk.send(self, "_mousePosition", []), "_x", [])).klass === smalltalk.Number) ? $receiver -(240) : smalltalk.send($receiver, "__minus", [(240)])), "_asString", [])]), "__comma", [unescape("%20%2C%20")]), "__comma", [smalltalk.send((180) - smalltalk.send(smalltalk.send(self, "_mousePosition", []), "_y", []), "_asString", [])]), "__comma", [unescape("%29%20")])]);})(smalltalk.send(html, "_span", []));})]);})(smalltalk.send(html, "_div", []));return smalltalk.send(smalltalk.send(pointerDiv, "_asJQuery", []), "_bind_do_", ["click", (function(evt){return smalltalk.send(self, "_mouseEvent_", [evt]);})]);})]));
return self;},
args: ["html"],
source: unescape('renderContentOn%3A%20html%0A%09self%20httpClient%20connected%20ifTrue%3A%20%5B%0A%09%09%7C%20pointerDiv%20%7C%0A%09%09pointerDiv%20%3A%3D%20%0A%09%09%09html%20div%20%0A%09%09%09%09id%3A%20%27pointer%27%3B%20%0A%09%09%09%09with%3A%20%5B%20%0A%09%09%09%09%09crossHair%20%3A%3D%20html%20img%20src%3A%20%27images/crossHair.png%27.%0A%09%09%09%09%09self%20updateCrosshairPosition.%0A%09%09%09%09%09html%20span%20%0A%09%09%09%09%09%09class%3A%20%27pointer%27%3B%20%0A%09%09%09%09%09%09with%3A%20%27%28%20%27%20%2C%20%28%20self%20mousePosition%20x%20-%20240%20%29%20asString%20%2C%20%27%20%2C%20%27%20%2C%20%28%20180%20-%20self%20mousePosition%20y%20%29%20asString%20%2C%20%27%29%20%27.%20%5D.%0A%09%09pointerDiv%20asJQuery%20bind%3A%20%27click%27%20do%3A%20%5B%20%3Aevt%20%7C%20self%20mouseEvent%3A%20evt%20%5D%20%5D'),
messageSends: ["ifTrue:", "connected", "httpClient", "id:", "with:", "src:", "img", "updateCrosshairPosition", "class:", unescape("%2C"), "asString", unescape("-"), "x", "mousePosition", "y", "span", "div", "bind:do:", "asJQuery", "mouseEvent:"],
referencedClasses: []
}),
smalltalk.HSPointerWidget);

smalltalk.addMethod(
unescape('_updateCrosshairPosition'),
smalltalk.method({
selector: unescape('updateCrosshairPosition'),
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send(self['@crossHair'], "_at_put_", ["style", smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("position%3A%20absolute%3B%20left%3A%20"), "__comma", [smalltalk.send(((($receiver = smalltalk.send(smalltalk.send(self, "_mousePosition", []), "_x", [])).klass === smalltalk.Number) ? $receiver -(5) : smalltalk.send($receiver, "__minus", [(5)])), "_asString", [])]), "__comma", [unescape("px%3B%20top%3A%20")]), "__comma", [smalltalk.send(((($receiver = smalltalk.send(smalltalk.send(self, "_mousePosition", []), "_y", [])).klass === smalltalk.Number) ? $receiver -(5) : smalltalk.send($receiver, "__minus", [(5)])), "_asString", [])]), "__comma", [unescape("px%3B")])]);
return self;},
args: [],
source: unescape('updateCrosshairPosition%0A%0A%09crossHair%20%0A%09%09at%3A%20%27style%27%0A%09%09put%3A%0A%09%09%09%27position%3A%20absolute%3B%20left%3A%20%27%0A%09%09%09%2C%20%28%20self%20mousePosition%20x%20-%205%20%29%20asString%0A%09%09%09%2C%20%27px%3B%20top%3A%20%27%0A%09%09%09%2C%20%28%20self%20mousePosition%20y%20-%205%20%29%20asString%0A%09%09%09%2C%20%27px%3B%27'),
messageSends: ["at:put:", unescape("%2C"), "asString", unescape("-"), "x", "mousePosition", "y"],
referencedClasses: []
}),
smalltalk.HSPointerWidget);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'rendering',
fn: function (){
var self=this;
return "Remote Pad";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27Remote%20Pad%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HSPointerWidget);


smalltalk.addMethod(
unescape('_owner_'),
smalltalk.method({
selector: unescape('owner%3A'),
category: 'not yet classified',
fn: function (aWidget){
var self=this;
return (function($rec){smalltalk.send($rec, "_owner_", [aWidget]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aWidget"],
source: unescape('owner%3A%20aWidget%0A%09%5E%20%28self%20new%29%0A%09%09owner%3A%20aWidget%3B%0A%09%09yourself'),
messageSends: ["owner:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.HSPointerWidget.klass);


smalltalk.addClass('HSLogWidget', smalltalk.HSWidget, ['span', 'entries'], 'HiScratch');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
self['@div']=(function($rec){smalltalk.send($rec, "_class_", ["widget"]);smalltalk.send($rec, "_id_", ["log"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderContentOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09div%20%3A%3D%20html%20div%0A%09%09class%3A%20%27widget%27%3B%0A%09%09id%3A%20%27log%27%3B%0A%09%09with%3A%20%5B%20self%20renderContentOn%3A%20html%20%5D'),
messageSends: ["class:", "id:", "with:", "renderContentOn:", "div"],
referencedClasses: []
}),
smalltalk.HSLogWidget);

smalltalk.addMethod(
unescape('_renderContentOn_'),
smalltalk.method({
selector: unescape('renderContentOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
self['@span']=smalltalk.send(html, "_span", []);
return self;},
args: ["html"],
source: unescape('renderContentOn%3A%20html%0A%09span%20%3A%3D%20html%20span.'),
messageSends: ["span"],
referencedClasses: []
}),
smalltalk.HSLogWidget);

smalltalk.addMethod(
unescape('_addEntry_'),
smalltalk.method({
selector: unescape('addEntry%3A'),
category: 'not yet classified',
fn: function (anEntry){
var self=this;
smalltalk.send(smalltalk.send(self, "_entries", []), "_add_", [anEntry]);
smalltalk.send(self, "_update", []);
return self;},
args: ["anEntry"],
source: unescape('addEntry%3A%20anEntry%0A%09self%20entries%20add%3A%20anEntry.%0A%09self%20update.'),
messageSends: ["add:", "entries", "update"],
referencedClasses: []
}),
smalltalk.HSLogWidget);

smalltalk.addMethod(
unescape('_update'),
smalltalk.method({
selector: unescape('update'),
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@span'], "_asJQuery", []), "_empty", []);
smalltalk.send(smalltalk.send(self, "_entries", []), "_do_", [(function(each){return (($receiver = self['@span']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(self['@span'], "_asJQuery", []), "_prepend_", [smalltalk.send(each, "__comma", [unescape("%3Cbr/%3E")])]);})() : nil;})]);
return self;},
args: [],
source: unescape('update%0A%09span%20asJQuery%20empty.%0A%09self%20entries%20do%3A%20%5B%3Aeach%20%7C%0A%09%09span%20ifNotNil%3A%20%5B%20span%20asJQuery%20prepend%3A%20each%20%2C%20%27%3Cbr/%3E%27%20%5D%20%5D'),
messageSends: ["empty", "asJQuery", "do:", "entries", "ifNotNil:", "prepend:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.HSLogWidget);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'not yet classified',
fn: function (){
var self=this;
return "Logger";
return self;},
args: [],
source: unescape('title%0A%09%5E%20%27Logger%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HSLogWidget);

smalltalk.addMethod(
unescape('_entries'),
smalltalk.method({
selector: unescape('entries'),
category: 'not yet classified',
fn: function (){
var self=this;
return (($receiver = self['@entries']) == nil || $receiver == undefined) ? (function(){return self['@entries']=smalltalk.send((smalltalk.Array || Array), "_new", []);})() : $receiver;
return self;},
args: [],
source: unescape('entries%0A%09%5E%20entries%20ifNil%3A%20%5B%20entries%20%3A%3D%20Array%20new%20%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.HSLogWidget);



