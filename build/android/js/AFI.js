smalltalk.addPackage('AFI', {});
smalltalk.addClass('Ajax', smalltalk.Object, ['url', 'settings', 'options'], 'AFI');
smalltalk.addMethod(
unescape('_url_'),
smalltalk.method({
selector: unescape('url%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
self['@url']=aString;
return self;},
args: ["aString"],
source: unescape('url%3A%20aString%0A%09url%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Ajax);

smalltalk.addMethod(
unescape('_options'),
smalltalk.method({
selector: unescape('options'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@options']) == nil || $receiver == undefined) ? (function(){return self['@options']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);})() : $receiver;
return self;},
args: [],
source: unescape('options%0A%09%5E%20options%20ifNil%3A%20%5Boptions%20%3A%3D%20Dictionary%20new%20%5D'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Ajax);

smalltalk.addMethod(
unescape('_send'),
smalltalk.method({
selector: unescape('send'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [self['@url'], self['@options']]);
return self;},
args: [],
source: unescape('send%0A%09jQuery%20ajax%3A%20url%20options%3A%20options.'),
messageSends: ["ajax:options:"],
referencedClasses: []
}),
smalltalk.Ajax);

smalltalk.addMethod(
unescape('_onSuccessDo_'),
smalltalk.method({
selector: unescape('onSuccessDo%3A'),
category: 'callback',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_options", []), "_at_put_", ["success", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onSuccessDo%3A%20aBlock%0A%09%22Set%20action%20to%20execute%20when%20Ajax%20request%20is%20successful.%20Pass%20received%20data%20as%20block%20argument.%20Block%20arguments%3A%20data%2C%20textStatus%2C%20jqXHR%22%0A%09self%20options%20at%3A%20%27success%27%20put%3A%20aBlock'),
messageSends: ["at:put:", "options"],
referencedClasses: []
}),
smalltalk.Ajax);

smalltalk.addMethod(
unescape('_onErrorDo_'),
smalltalk.method({
selector: unescape('onErrorDo%3A'),
category: 'callback',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_options", []), "_at_put_", ["error", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onErrorDo%3A%20aBlock%0A%09%22A%20block%20to%20be%20called%20if%20the%20request%20fails.Block%20arguments%3A%20jqXHR%2C%20textStatus%2C%20errorThrown%22%0A%09self%20options%20at%3A%20%27error%27%20put%3A%20aBlock'),
messageSends: ["at:put:", "options"],
referencedClasses: []
}),
smalltalk.Ajax);

smalltalk.addMethod(
unescape('_onCompleteDo_'),
smalltalk.method({
selector: unescape('onCompleteDo%3A'),
category: 'callback',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_options", []), "_at_put_", ["complete", aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onCompleteDo%3A%20aBlock%0A%09%22A%20block%20to%20be%20called%20when%20the%20request%20finishes%20%28after%20success%20and%20error%20callbacks%20are%20executed%29.%20Block%20arguments%3A%20jqXHR%2C%20textStatus%22%0A%09self%20options%20at%3A%20%27complete%27%20put%3A%20aBlock'),
messageSends: ["at:put:", "options"],
referencedClasses: []
}),
smalltalk.Ajax);


smalltalk.addMethod(
unescape('_url_'),
smalltalk.method({
selector: unescape('url%3A'),
category: 'initialize',
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_url_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aString"],
source: unescape('url%3A%20aString%0A%09%5E%20self%20new%20%0A%09%09url%3A%20aString%3B%0A%09%09yourself'),
messageSends: ["url:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Ajax.klass);


