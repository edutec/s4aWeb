smalltalk.addPackage('AFI', {});
smalltalk.addClass('Ajax', smalltalk.Object, ['url', 'settings', 'options'], 'AFI');
smalltalk.addMethod(
'_url_',
smalltalk.method({
selector: 'url:',
fn: function (aString){
var self=this;
self['@url']=aString;
return self;}
}),
smalltalk.Ajax);

smalltalk.addMethod(
'_options',
smalltalk.method({
selector: 'options',
fn: function (){
var self=this;
return (($receiver = self['@options']) == nil || $receiver == undefined) ? (function(){return self['@options']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []);})() : $receiver;
return self;}
}),
smalltalk.Ajax);

smalltalk.addMethod(
'_send',
smalltalk.method({
selector: 'send',
fn: function (){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [self['@url'], self['@options']]);
return self;}
}),
smalltalk.Ajax);

smalltalk.addMethod(
'_onSuccessDo_',
smalltalk.method({
selector: 'onSuccessDo:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_options", []), "_at_put_", ["success", aBlock]);
return self;}
}),
smalltalk.Ajax);

smalltalk.addMethod(
'_onErrorDo_',
smalltalk.method({
selector: 'onErrorDo:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_options", []), "_at_put_", ["error", aBlock]);
return self;}
}),
smalltalk.Ajax);

smalltalk.addMethod(
'_onCompleteDo_',
smalltalk.method({
selector: 'onCompleteDo:',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_options", []), "_at_put_", ["complete", aBlock]);
return self;}
}),
smalltalk.Ajax);


smalltalk.addMethod(
'_url_',
smalltalk.method({
selector: 'url:',
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_url_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Ajax.klass);


