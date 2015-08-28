/*! grafana - v2.1.3 - 2015-08-24
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache License */

angular.module("app",["hljs","ang-drag-drop"]).controller("MainCtrl",function(a){a.men=["John","Jack","Mark","Ernie","Mike (Locked)"],a.women=["Jane","Jill","Betty","Mary"],a.addText="",a.dropValidateHandler=function(a,b,c){return"Mike (Locked)"===c?!1:a.element[0]===b.srcElement.parentNode?!1:!0},a.dropSuccessHandler=function(a,b,c){c.splice(b,1)},a.onDrop=function(a,b,c,d){void 0!==d?c.splice(d,0,b):c.push(b)}});