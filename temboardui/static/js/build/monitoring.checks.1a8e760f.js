(window.webpackJsonp=window.webpackJsonp||[]).push([["monitoring.checks"],{"./temboardui/plugins/monitoring/static/js/checks.js":function(n,e,o){"use strict";o.r(e),function(n){var e=o("./node_modules/lodash/lodash.js"),s=o("./node_modules/vue/dist/vue.esm.js");n(function(){var o=new s.a({el:"#checks-container",data:{checks:null},methods:{getBorderColor:function(n){if("OK"!=n&&"UNDEF"!=n)return n.toLowerCase()},sorted:function(n,o){return e.orderBy(n,o)}},watch:{}});function t(){n.ajax({url:apiUrl+"/checks.json"}).done(function(n){o.checks=n}).fail(function(n){console.error(n)})}window.setInterval(function(){t()},6e4),t()})}.call(this,o("./node_modules/jquery/dist/jquery.js-exposed"))}},[["./temboardui/plugins/monitoring/static/js/checks.js","runtime","commons","vendors~dashboard~home~maintenance~maintenance.database~maintenance.schema~maintenance.table~monitor~40b06deb"]]]);