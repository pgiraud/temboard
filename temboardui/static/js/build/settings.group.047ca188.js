(window.webpackJsonp=window.webpackJsonp||[]).push([["settings.group"],{"./node_modules/bootstrap-multiselect/dist/css/bootstrap-multiselect.css":function(t,e,i){var s=i("./node_modules/css-loader/dist/cjs.js!./node_modules/bootstrap-multiselect/dist/css/bootstrap-multiselect.css");"string"==typeof s&&(s=[[t.i,s,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};i("../../node_modules/style-loader/lib/addStyles.js")(s,l);s.locals&&(t.exports=s.locals)},"./node_modules/bootstrap-multiselect/dist/js/bootstrap-multiselect.js":function(t,e,i){(function(t){!function(t){"use strict";function e(e,i){this.$select=t(e),this.$select.attr("data-placeholder")&&(i.nonSelectedText=this.$select.data("placeholder")),this.options=this.mergeOptions(t.extend({},i,this.$select.data())),this.originalOptions=this.$select.clone()[0].options,this.query="",this.searchTimeout=null,this.lastToggledInput=null,this.options.multiple="multiple"===this.$select.attr("multiple"),this.options.onChange=t.proxy(this.options.onChange,this),this.options.onDropdownShow=t.proxy(this.options.onDropdownShow,this),this.options.onDropdownHide=t.proxy(this.options.onDropdownHide,this),this.options.onDropdownShown=t.proxy(this.options.onDropdownShown,this),this.options.onDropdownHidden=t.proxy(this.options.onDropdownHidden,this),this.buildContainer(),this.buildButton(),this.buildDropdown(),this.buildSelectAll(),this.buildDropdownOptions(),this.buildFilter(),this.updateButtonText(),this.updateSelectAll(),this.options.disableIfEmpty&&t("option",this.$select).length<=0&&this.disable(),this.$select.hide().after(this.$container)}"undefined"!=typeof ko&&ko.bindingHandlers&&!ko.bindingHandlers.multiselect&&(ko.bindingHandlers.multiselect={after:["options","value","selectedOptions"],init:function(e,i,s,l,o){var n=t(e),a=ko.toJS(i());if(n.multiselect(a),s.has("options")){var r=s.get("options");ko.isObservable(r)&&ko.computed({read:function(){r(),setTimeout(function(){var t=n.data("multiselect");t&&t.updateOriginalOptions(),n.multiselect("rebuild")},1)},disposeWhenNodeIsRemoved:e})}if(s.has("value")){var c=s.get("value");ko.isObservable(c)&&ko.computed({read:function(){c(),setTimeout(function(){n.multiselect("refresh")},1)},disposeWhenNodeIsRemoved:e}).extend({rateLimit:100,notifyWhenChangesStop:!0})}if(s.has("selectedOptions")){var d=s.get("selectedOptions");ko.isObservable(d)&&ko.computed({read:function(){d(),setTimeout(function(){n.multiselect("refresh")},1)},disposeWhenNodeIsRemoved:e}).extend({rateLimit:100,notifyWhenChangesStop:!0})}ko.utils.domNodeDisposal.addDisposeCallback(e,function(){n.multiselect("destroy")})},update:function(e,i,s,l,o){var n=t(e),a=ko.toJS(i());n.multiselect("setOptions",a),n.multiselect("rebuild")}}),e.prototype={defaults:{buttonText:function(e,i){if(0===e.length)return this.nonSelectedText;if(this.allSelectedText&&e.length===t("option",t(i)).length&&1!==t("option",t(i)).length&&this.multiple)return this.selectAllNumber?this.allSelectedText+" ("+e.length+")":this.allSelectedText;if(e.length>this.numberDisplayed)return e.length+" "+this.nSelectedText;var s="",l=this.delimiterText;return e.each(function(){var e=void 0!==t(this).attr("label")?t(this).attr("label"):t(this).text();s+=e+l}),s.substr(0,s.length-2)},buttonTitle:function(e,i){if(0===e.length)return this.nonSelectedText;var s="",l=this.delimiterText;return e.each(function(){var e=void 0!==t(this).attr("label")?t(this).attr("label"):t(this).text();s+=e+l}),s.substr(0,s.length-2)},optionLabel:function(e){return t(e).attr("label")||t(e).text()},onChange:function(t,e){},onDropdownShow:function(t){},onDropdownHide:function(t){},onDropdownShown:function(t){},onDropdownHidden:function(t){},onSelectAll:function(){},enableHTML:!1,buttonClass:"btn btn-default",inheritClass:!1,buttonWidth:"auto",buttonContainer:'<div class="btn-group" />',dropRight:!1,selectedClass:"active",maxHeight:!1,checkboxName:!1,includeSelectAllOption:!1,includeSelectAllIfMoreThan:0,selectAllText:" Select all",selectAllValue:"multiselect-all",selectAllName:!1,selectAllNumber:!0,enableFiltering:!1,enableCaseInsensitiveFiltering:!1,enableClickableOptGroups:!1,filterPlaceholder:"Search",filterBehavior:"text",includeFilterClearBtn:!0,preventInputChangeEvent:!1,nonSelectedText:"None selected",nSelectedText:"selected",allSelectedText:"All selected",numberDisplayed:3,disableIfEmpty:!1,delimiterText:", ",templates:{button:'<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"><span class="multiselect-selected-text"></span> <b class="caret"></b></button>',ul:'<ul class="multiselect-container dropdown-menu"></ul>',filter:'<li class="multiselect-item filter"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',filterClearBtn:'<span class="input-group-btn"><button class="btn btn-default multiselect-clear-filter" type="button"><i class="glyphicon glyphicon-remove-circle"></i></button></span>',li:'<li><a tabindex="0"><label></label></a></li>',divider:'<li class="multiselect-item divider"></li>',liGroup:'<li class="multiselect-item multiselect-group"><label></label></li>'}},constructor:e,buildContainer:function(){this.$container=t(this.options.buttonContainer),this.$container.on("show.bs.dropdown",this.options.onDropdownShow),this.$container.on("hide.bs.dropdown",this.options.onDropdownHide),this.$container.on("shown.bs.dropdown",this.options.onDropdownShown),this.$container.on("hidden.bs.dropdown",this.options.onDropdownHidden)},buildButton:function(){this.$button=t(this.options.templates.button).addClass(this.options.buttonClass),this.$select.attr("class")&&this.options.inheritClass&&this.$button.addClass(this.$select.attr("class")),this.$select.prop("disabled")?this.disable():this.enable(),this.options.buttonWidth&&"auto"!==this.options.buttonWidth&&(this.$button.css({width:this.options.buttonWidth,overflow:"hidden","text-overflow":"ellipsis"}),this.$container.css({width:this.options.buttonWidth}));var e=this.$select.attr("tabindex");e&&this.$button.attr("tabindex",e),this.$container.prepend(this.$button)},buildDropdown:function(){this.$ul=t(this.options.templates.ul),this.options.dropRight&&this.$ul.addClass("pull-right"),this.options.maxHeight&&this.$ul.css({"max-height":this.options.maxHeight+"px","overflow-y":"auto","overflow-x":"hidden"}),this.$container.append(this.$ul)},buildDropdownOptions:function(){this.$select.children().each(t.proxy(function(e,i){var s=t(i),l=s.prop("tagName").toLowerCase();s.prop("value")!==this.options.selectAllValue&&("optgroup"===l?this.createOptgroup(i):"option"===l&&("divider"===s.data("role")?this.createDivider():this.createOptionValue(i)))},this)),t("li input",this.$ul).on("change",t.proxy(function(e){var i=t(e.target),s=i.prop("checked")||!1,l=i.val()===this.options.selectAllValue;this.options.selectedClass&&(s?i.closest("li").addClass(this.options.selectedClass):i.closest("li").removeClass(this.options.selectedClass));var o=i.val(),n=this.getOptionByValue(o),a=t("option",this.$select).not(n),r=t("input",this.$container).not(i);if(l&&(s?this.selectAll():this.deselectAll()),l||(s?(n.prop("selected",!0),this.options.multiple?n.prop("selected",!0):(this.options.selectedClass&&t(r).closest("li").removeClass(this.options.selectedClass),t(r).prop("checked",!1),a.prop("selected",!1),this.$button.click()),"active"===this.options.selectedClass&&a.closest("a").css("outline","")):n.prop("selected",!1)),this.$select.change(),this.updateButtonText(),this.updateSelectAll(),this.options.onChange(n,s),this.options.preventInputChangeEvent)return!1},this)),t("li a",this.$ul).on("mousedown",function(t){if(t.shiftKey)return!1}),t("li a",this.$ul).on("touchstart click",t.proxy(function(e){e.stopPropagation();var i=t(e.target);if(e.shiftKey&&this.options.multiple){i.is("label")&&(e.preventDefault(),(i=i.find("input")).prop("checked",!i.prop("checked")));var s=i.prop("checked")||!1;if(null!==this.lastToggledInput&&this.lastToggledInput!==i){var l=i.closest("li").index(),o=this.lastToggledInput.closest("li").index();if(l>o){var n=o;o=l,l=n}++o;var a=this.$ul.find("li").slice(l,o).find("input");a.prop("checked",s),this.options.selectedClass&&a.closest("li").toggleClass(this.options.selectedClass,s);for(var r=0,c=a.length;r<c;r++){var d=t(a[r]);this.getOptionByValue(d.val()).prop("selected",s)}}i.trigger("change")}i.is("input")&&!i.closest("li").is(".multiselect-item")&&(this.lastToggledInput=i),i.blur()},this)),this.$container.off("keydown.multiselect").on("keydown.multiselect",t.proxy(function(e){if(!t('input[type="text"]',this.$container).is(":focus"))if(9===e.keyCode&&this.$container.hasClass("open"))this.$button.click();else{var i=t(this.$container).find("li:not(.divider):not(.disabled) a").filter(":visible");if(!i.length)return;var s=i.index(i.filter(":focus"));38===e.keyCode&&s>0?s--:40===e.keyCode&&s<i.length-1?s++:~s||(s=0);var l=i.eq(s);if(l.focus(),32===e.keyCode||13===e.keyCode){var o=l.find("input");o.prop("checked",!o.prop("checked")),o.change()}e.stopPropagation(),e.preventDefault()}},this)),this.options.enableClickableOptGroups&&this.options.multiple&&t("li.multiselect-group",this.$ul).on("click",t.proxy(function(e){e.stopPropagation();var i=t(e.target).parent().nextUntil("li.multiselect-group").filter(":visible:not(.disabled)"),s=!0,l=i.find("input");l.each(function(){s=s&&t(this).prop("checked")}),l.prop("checked",!s).trigger("change")},this))},createOptionValue:function(e){var i=t(e);i.is(":selected")&&i.prop("selected",!0);var s=this.options.optionLabel(e),l=i.val(),o=this.options.multiple?"checkbox":"radio",n=t(this.options.templates.li),a=t("label",n);a.addClass(o),this.options.enableHTML?a.html(" "+s):a.text(" "+s);var r=t("<input/>").attr("type",o);this.options.checkboxName&&r.attr("name",this.options.checkboxName),a.prepend(r);var c=i.prop("selected")||!1;r.val(l),l===this.options.selectAllValue&&(n.addClass("multiselect-item multiselect-all"),r.parent().parent().addClass("multiselect-all")),a.attr("title",i.attr("title")),this.$ul.append(n),i.is(":disabled")&&r.attr("disabled","disabled").prop("disabled",!0).closest("a").attr("tabindex","-1").closest("li").addClass("disabled"),r.prop("checked",c),c&&this.options.selectedClass&&r.closest("li").addClass(this.options.selectedClass)},createDivider:function(e){var i=t(this.options.templates.divider);this.$ul.append(i)},createOptgroup:function(e){var i=t(e).prop("label"),s=t(this.options.templates.liGroup);this.options.enableHTML?t("label",s).html(i):t("label",s).text(i),this.options.enableClickableOptGroups&&s.addClass("multiselect-group-clickable"),this.$ul.append(s),t(e).is(":disabled")&&s.addClass("disabled"),t("option",e).each(t.proxy(function(t,e){this.createOptionValue(e)},this))},buildSelectAll:function(){if("number"==typeof this.options.selectAllValue&&(this.options.selectAllValue=this.options.selectAllValue.toString()),!this.hasSelectAll()&&this.options.includeSelectAllOption&&this.options.multiple&&t("option",this.$select).length>this.options.includeSelectAllIfMoreThan){this.options.includeSelectAllDivider&&this.$ul.prepend(t(this.options.templates.divider));var e=t(this.options.templates.li);t("label",e).addClass("checkbox"),this.options.enableHTML?t("label",e).html(" "+this.options.selectAllText):t("label",e).text(" "+this.options.selectAllText),this.options.selectAllName?t("label",e).prepend('<input type="checkbox" name="'+this.options.selectAllName+'" />'):t("label",e).prepend('<input type="checkbox" />');var i=t("input",e);i.val(this.options.selectAllValue),e.addClass("multiselect-item multiselect-all"),i.parent().parent().addClass("multiselect-all"),this.$ul.prepend(e),i.prop("checked",!1)}},buildFilter:function(){if(this.options.enableFiltering||this.options.enableCaseInsensitiveFiltering){var e=Math.max(this.options.enableFiltering,this.options.enableCaseInsensitiveFiltering);if(this.$select.find("option").length>=e){if(this.$filter=t(this.options.templates.filter),t("input",this.$filter).attr("placeholder",this.options.filterPlaceholder),this.options.includeFilterClearBtn){var i=t(this.options.templates.filterClearBtn);i.on("click",t.proxy(function(e){clearTimeout(this.searchTimeout),this.$filter.find(".multiselect-search").val(""),t("li",this.$ul).show().removeClass("filter-hidden"),this.updateSelectAll()},this)),this.$filter.find(".input-group").append(i)}this.$ul.prepend(this.$filter),this.$filter.val(this.query).on("click",function(t){t.stopPropagation()}).on("input keydown",t.proxy(function(e){13===e.which&&e.preventDefault(),clearTimeout(this.searchTimeout),this.searchTimeout=this.asyncFunction(t.proxy(function(){var i,s;this.query!==e.target.value&&(this.query=e.target.value,t.each(t("li",this.$ul),t.proxy(function(e,l){var o=t("input",l).length>0?t("input",l).val():"",n=t("label",l).text(),a="";if("text"===this.options.filterBehavior?a=n:"value"===this.options.filterBehavior?a=o:"both"===this.options.filterBehavior&&(a=n+"\n"+o),o!==this.options.selectAllValue&&n){var r=!1;this.options.enableCaseInsensitiveFiltering&&a.toLowerCase().indexOf(this.query.toLowerCase())>-1?r=!0:a.indexOf(this.query)>-1&&(r=!0),t(l).toggle(r).toggleClass("filter-hidden",!r),t(l).hasClass("multiselect-group")?(i=l,s=r):(r&&t(i).show().removeClass("filter-hidden"),!r&&s&&t(l).show().removeClass("filter-hidden"))}},this)));this.updateSelectAll()},this),300,this)},this))}}},destroy:function(){this.$container.remove(),this.$select.show(),this.$select.data("multiselect",null)},refresh:function(){t("option",this.$select).each(t.proxy(function(e,i){var s=t("li input",this.$ul).filter(function(){return t(this).val()===t(i).val()});t(i).is(":selected")?(s.prop("checked",!0),this.options.selectedClass&&s.closest("li").addClass(this.options.selectedClass)):(s.prop("checked",!1),this.options.selectedClass&&s.closest("li").removeClass(this.options.selectedClass)),t(i).is(":disabled")?s.attr("disabled","disabled").prop("disabled",!0).closest("li").addClass("disabled"):s.prop("disabled",!1).closest("li").removeClass("disabled")},this)),this.updateButtonText(),this.updateSelectAll()},select:function(e,i){t.isArray(e)||(e=[e]);for(var s=0;s<e.length;s++){var l=e[s];if(null!=l){var o=this.getOptionByValue(l),n=this.getInputByValue(l);void 0!==o&&void 0!==n&&(this.options.multiple||this.deselectAll(!1),this.options.selectedClass&&n.closest("li").addClass(this.options.selectedClass),n.prop("checked",!0),o.prop("selected",!0),i&&this.options.onChange(o,!0))}}this.updateButtonText(),this.updateSelectAll()},clearSelection:function(){this.deselectAll(!1),this.updateButtonText(),this.updateSelectAll()},deselect:function(e,i){t.isArray(e)||(e=[e]);for(var s=0;s<e.length;s++){var l=e[s];if(null!=l){var o=this.getOptionByValue(l),n=this.getInputByValue(l);void 0!==o&&void 0!==n&&(this.options.selectedClass&&n.closest("li").removeClass(this.options.selectedClass),n.prop("checked",!1),o.prop("selected",!1),i&&this.options.onChange(o,!1))}}this.updateButtonText(),this.updateSelectAll()},selectAll:function(e,i){e=void 0===e||e;var s=t("li input[type='checkbox']:enabled",this.$ul),l=s.filter(":visible"),o=s.length,n=l.length;if(e?(l.prop("checked",!0),t("li:not(.divider):not(.disabled)",this.$ul).filter(":visible").addClass(this.options.selectedClass)):(s.prop("checked",!0),t("li:not(.divider):not(.disabled)",this.$ul).addClass(this.options.selectedClass)),o===n||!1===e)t("option:enabled",this.$select).prop("selected",!0);else{var a=l.map(function(){return t(this).val()}).get();t("option:enabled",this.$select).filter(function(e){return-1!==t.inArray(t(this).val(),a)}).prop("selected",!0)}i&&this.options.onSelectAll()},deselectAll:function(e){if(e=void 0===e||e){var i=t("li input[type='checkbox']:not(:disabled)",this.$ul).filter(":visible");i.prop("checked",!1);var s=i.map(function(){return t(this).val()}).get();t("option:enabled",this.$select).filter(function(e){return-1!==t.inArray(t(this).val(),s)}).prop("selected",!1),this.options.selectedClass&&t("li:not(.divider):not(.disabled)",this.$ul).filter(":visible").removeClass(this.options.selectedClass)}else t("li input[type='checkbox']:enabled",this.$ul).prop("checked",!1),t("option:enabled",this.$select).prop("selected",!1),this.options.selectedClass&&t("li:not(.divider):not(.disabled)",this.$ul).removeClass(this.options.selectedClass)},rebuild:function(){this.$ul.html(""),this.options.multiple="multiple"===this.$select.attr("multiple"),this.buildSelectAll(),this.buildDropdownOptions(),this.buildFilter(),this.updateButtonText(),this.updateSelectAll(),this.options.disableIfEmpty&&t("option",this.$select).length<=0?this.disable():this.enable(),this.options.dropRight&&this.$ul.addClass("pull-right")},dataprovider:function(e){var i=0,s=this.$select.empty();t.each(e,function(e,l){var o;t.isArray(l.children)?(i++,o=t("<optgroup/>").attr({label:l.label||"Group "+i,disabled:!!l.disabled}),function(t,e){for(var i=0;i<t.length;++i)e(t[i],i)}(l.children,function(e){o.append(t("<option/>").attr({value:e.value,label:e.label||e.value,title:e.title,selected:!!e.selected,disabled:!!e.disabled}))})):o=t("<option/>").attr({value:l.value,label:l.label||l.value,title:l.title,selected:!!l.selected,disabled:!!l.disabled}),s.append(o)}),this.rebuild()},enable:function(){this.$select.prop("disabled",!1),this.$button.prop("disabled",!1).removeClass("disabled")},disable:function(){this.$select.prop("disabled",!0),this.$button.prop("disabled",!0).addClass("disabled")},setOptions:function(t){this.options=this.mergeOptions(t)},mergeOptions:function(e){return t.extend(!0,{},this.defaults,this.options,e)},hasSelectAll:function(){return t("li.multiselect-all",this.$ul).length>0},updateSelectAll:function(){if(this.hasSelectAll()){var e=t("li:not(.multiselect-item):not(.filter-hidden) input:enabled",this.$ul),i=e.length,s=e.filter(":checked").length,l=t("li.multiselect-all",this.$ul),o=l.find("input");s>0&&s===i?(o.prop("checked",!0),l.addClass(this.options.selectedClass),this.options.onSelectAll()):(o.prop("checked",!1),l.removeClass(this.options.selectedClass))}},updateButtonText:function(){var e=this.getSelected();this.options.enableHTML?t(".multiselect .multiselect-selected-text",this.$container).html(this.options.buttonText(e,this.$select)):t(".multiselect .multiselect-selected-text",this.$container).text(this.options.buttonText(e,this.$select)),t(".multiselect",this.$container).attr("title",this.options.buttonTitle(e,this.$select))},getSelected:function(){return t("option",this.$select).filter(":selected")},getOptionByValue:function(e){for(var i=t("option",this.$select),s=e.toString(),l=0;l<i.length;l+=1){var o=i[l];if(o.value===s)return t(o)}},getInputByValue:function(e){for(var i=t("li input",this.$ul),s=e.toString(),l=0;l<i.length;l+=1){var o=i[l];if(o.value===s)return t(o)}},updateOriginalOptions:function(){this.originalOptions=this.$select.clone()[0].options},asyncFunction:function(t,e,i){var s=Array.prototype.slice.call(arguments,3);return setTimeout(function(){t.apply(i||window,s)},e)},setAllSelectedText:function(t){this.options.allSelectedText=t,this.updateButtonText()}},t.fn.multiselect=function(i,s,l){return this.each(function(){var o=t(this).data("multiselect");o||(o=new e(this,"object"==typeof i&&i),t(this).data("multiselect",o)),"string"==typeof i&&(o[i](s,l),"destroy"===i&&t(this).data("multiselect",!1))})},t.fn.multiselect.Constructor=e,t(function(){t("select[data-role=multiselect]").multiselect()})}(t)}).call(this,i("./node_modules/jquery/dist/jquery.js-exposed"))},"./node_modules/css-loader/dist/cjs.js!./node_modules/bootstrap-multiselect/dist/css/bootstrap-multiselect.css":function(t,e,i){(t.exports=i("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([t.i,".multiselect-container{position:absolute;list-style-type:none;margin:0;padding:0}.multiselect-container .input-group{margin:5px}.multiselect-container>li{padding:0}.multiselect-container>li>a.multiselect-all label{font-weight:700}.multiselect-container>li.multiselect-group label{margin:0;padding:3px 20px 3px 20px;height:100%;font-weight:700}.multiselect-container>li.multiselect-group-clickable label{cursor:pointer}.multiselect-container>li>a{padding:0}.multiselect-container>li>a>label{margin:0;height:100%;cursor:pointer;font-weight:400;padding:3px 20px 3px 40px}.multiselect-container>li>a>label.radio,.multiselect-container>li>a>label.checkbox{margin:0}.multiselect-container>li>a>label>input[type=checkbox]{margin-bottom:5px}.btn-group>.btn-group:nth-child(2)>.multiselect.btn{border-top-left-radius:4px;border-bottom-left-radius:4px}.form-inline .multiselect-container label.checkbox,.form-inline .multiselect-container label.radio{padding:3px 20px 3px 40px}.form-inline .multiselect-container li a label.checkbox input[type=checkbox],.form-inline .multiselect-container li a label.radio input[type=radio]{margin-left:-20px;margin-right:0}",""])},"./temboardui/static/js/temboard.settings.group.js":function(t,e,i){"use strict";i.r(e),function(t){var e=i("./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js"),s=i.n(e);i("./node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css"),i("./node_modules/bootstrap-multiselect/dist/js/bootstrap-multiselect.js"),i("./node_modules/bootstrap-multiselect/dist/css/bootstrap-multiselect.css");function l(e,i,s){t.ajax({url:"/json/settings/group/"+i+"/"+s,type:"get",beforeSend:function(i){t("#"+e+"Label").html("Processing, please wait..."),t("#"+e+"Info").html(""),t("#"+e+"Body").html('<div class="row"><div class="col-md-4 col-md-offset-4"><div class="progress"><div class="progress-bar progress-bar-striped" style="width: 100%;">Please wait ...</div></div></div></div>'),t("#"+e+"Footer").html('<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>')},async:!0,contentType:"application/json",dataType:"json",success:function(s){"role"==s.kind?t("#"+e+"Label").html("Update user group properties"):t("#"+e+"Label").html("Update instance group properties");var l="";if(l+='<form id="formUpdateGroup">',l+='  <input type="hidden" id="inputGroupname" value="'+s.name+'" />',l+='  <div class="row">',l+='    <div class="form-group col-sm-6">',l+='      <label for="inputNewGroupname" class="control-label">Group name</label>',l+='      <input type="text" class="form-control" id="inputNewGroupname" placeholder="New group name" value="'+s.name+'" />',l+="    </div>","instance"==i){l+='    <div class="form-group col-sm-6">',l+='      <label for="selectGroups" class="control-label">User groups</label><br />',l+='      <select id="selectGroups" multiple="multiple">';var o={},n="";t.each(s.user_groups,function(t,e){n="",s.in_groups.indexOf(e.name)>-1&&(n="selected"),l+='      <option value="'+e.name+'" '+n+">"+e.name+"</option>",o[e.name]=e.description}),l+="      </select>",l+='      <p class="form-text text-muted">Please select the user groups allowed to view instances from this instance group.</p>',l+="    </div>"}l+="  </div>",l+='  <div class="row">',l+='    <div class="form-group col-sm-12">',l+='      <label for="inputDescription" class="control-label">Description</label>',l+='      <textarea class="form-control" rows="3" placeholder="Description" id="inputDescription">'+s.description+"</textarea>",l+="    </div>",l+="  </div>",l+="</form>";t("#"+e+"Body").html(l),t("#"+e+"Footer").html('<button type="submit" id="submitFormUpdateGroup" class="btn btn-success">Save</button> <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>'),"instance"==i&&(t("#selectGroups").multiselect(),t(".multiselect-container li").not(".filter, .group").tooltip({placement:"right",container:"body",title:function(){var e=t(this).find("input").val();return o[e]}})),t("#submitFormUpdateGroup").click(function(){t("#formUpdateGroup").submit()}),t("#formUpdateGroup").submit(function(i){i.preventDefault(),function(e,i){var s=t("#inputGroupname").val();if("instance"==i)var l=JSON.stringify({new_group_name:t("#inputNewGroupname").val(),description:t("#inputDescription").val(),user_groups:t("#selectGroups").val()});else var l=JSON.stringify({new_group_name:t("#inputNewGroupname").val(),description:t("#inputDescription").val()});t.ajax({url:"/json/settings/group/"+i+"/"+s,type:"post",beforeSend:function(i){t("#"+e+"Label").html("Processing, please wait..."),t("#"+e+"Info").html('<div class="row"><div class="col-md-4 col-md-offset-4"><div class="progress"><div class="progress-bar progress-bar-striped" style="width: 100%;">Please wait ...</div></div></div></div>')},data:l,async:!0,contentType:"application/json",dataType:"json",success:function(i){t("#"+e).modal("hide");var s=window.location.href;window.location.replace(s)},error:function(s){"role"==i?t("#"+e+"Label").html("Update user group properties"):t("#"+e+"Label").html("Update instance group properties"),t("#"+e+"Info").html('<div class="row"><div class="col-md-12"><div class="alert alert-danger" role="alert">ERROR: '+JSON.parse(s.responseText).error+"</div></div></div>")}})}(e,s.kind)})},error:function(s){"role"==i?t("#"+e+"Label").html("Update user group properties"):t("#"+e+"Label").html("Update instance group properties"),t("#"+e+"Body").html('<div class="row"><div class="col-md-12"><div class="alert alert-danger" role="alert">ERROR: '+JSON.parse(s.responseText).error+"</div></div>")}})}function o(e,i,s){t.ajax({url:"/json/settings/group/"+i+"/"+s,type:"get",beforeSend:function(i){t("#"+e+"Label").html("Processing, please wait..."),t("#"+e+"Info").html('<div class="row"><div class="col-md-4 col-md-offset-4"><div class="progress"><div class="progress-bar progress-bar-striped" style="width: 100%;">Please wait ...</div></div></div></div>'),t("#"+e+"Footer").html('<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>')},async:!0,contentType:"application/json",dataType:"json",success:function(s){t("#"+e+"Info").hide(),"role"==i?t("#"+e+"Label").html("Delete user group properties"):t("#"+e+"Label").html("Delete instance group properties");t("#"+e+"Body").html(""),t("#"+e+"Footer").html('<button type="submit" id="buttonDeleteGroup" class="btn btn-danger">Yes, delete this group</button> <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>'),t("#buttonDeleteGroup").click(function(i){i.preventDefault(),function(e,i,s){t.ajax({url:"/json/settings/delete/group/"+i,type:"post",beforeSend:function(i){t("#"+e+"Label").html("Processing, please wait..."),t("#"+e+"Info").html('<div class="row"><div class="col-md-4 col-md-offset-4"><div class="progress"><div class="progress-bar progress-bar-striped" style="width: 100%;">Please wait ...</div></div></div></div>'),t("#"+e+"Body").html("")},async:!0,contentType:"application/json",dataType:"json",data:JSON.stringify({group_name:s}),success:function(i){t("#"+e).modal("hide");var s=window.location.href;window.location.replace(s)},error:function(s){"role"==i?t("#"+e+"Label").html("Delete user group confirmation"):t("#"+e+"Label").html("Delete instance group confirmation"),t("#"+e+"Info").html('<div class="row"><div class="col-md-12"><div class="alert alert-danger" role="alert">ERROR: '+JSON.parse(s.responseText).error+"</div></div></div>"),t("#"+e+"Body").html("")}})}(e,s.kind,s.name)})},error:function(s){"role"==i?t("#"+e+"label").html("Delete user group confirmation"):t("#"+e+"label").html("Delete instance group confirmation"),t("#"+e+"Info").html('<div class="row"><div class="col-md-12"><div class="alert alert-danger" role="alert">ERROR: '+JSON.parse(s.responseText).error+"</div></div></div>"),t("#"+e+"Body").html(""),t("#"+e+"Footer").html('<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>')}})}function n(e,i){if("instance"==i)var s=JSON.stringify({new_group_name:t("#inputNewGroupname").val(),description:t("#inputDescription").val(),user_groups:t("#selectGroups").val()});else s=JSON.stringify({new_group_name:t("#inputNewGroupname").val(),description:t("#inputDescription").val()});t.ajax({url:"/json/settings/group/"+i,type:"post",beforeSend:function(i){t("#"+e+"Label").html("Processing, please wait..."),t("#"+e+"Info").html('<div class="row"><div class="col-md-4 col-md-offset-4"><div class="progress"><div class="progress-bar progress-bar-striped" style="width: 100%;">Please wait ...</div></div></div></div>')},data:s,async:!0,contentType:"application/json",dataType:"json",success:function(i){t("#"+e).modal("hide");var s=window.location.href;window.location.replace(s)},error:function(s){"role"==i?t("#"+e+"Label").html("Add a new user group"):t("#"+e+"Label").html("Add a new instance group"),t("#"+e+"Info").html('<div class="row"><div class="col-md-12"><div class="alert alert-danger" role="alert">ERROR: '+JSON.parse(s.responseText).error+"</div></div></div>")}})}s()(window,t),t(document).ready(function(){t("#tableGroups").DataTable({stateSave:!0}),t("#buttonLoadAddGroupForm").click(function(){var e,i;t("#GroupModal").modal("show"),t("[data-toggle=popover]").popover("hide"),e="GroupModal","role"==(i=groupKind)?(t("#"+e+"Label").html("Add a new user group"),t("#"+e+"Info").html(""),t("#"+e+"Body").html('<form id="formAddGroup">  <div class="row">    <div class="form-group col-sm-12">      <label for="inputNewGroupname" class="control-label">Group name</label>      <input type="text" class="form-control" id="inputNewGroupname" placeholder="Group name" />    </div>  </div>  <div class="row">    <div class="form-group col-sm-12">      <label for="inputDescription" class="control-label">Description</label>      <textarea class="form-control" rows="3" placeholder="Description" id="inputDescription"></textarea>    </div>  </div></form>'),t("#"+e+"Footer").html('<button type="submit" id="submitFormAddGroup" class="btn btn-success">Save</button> <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>'),t("#submitFormAddGroup").click(function(){t("#formAddGroup").submit()}),t("#formAddGroup").submit(function(t){t.preventDefault(),n(e,i)})):t.ajax({url:"/json/settings/all/group/role",type:"get",beforeSend:function(i){t("#"+e+"Label").html("Processing, please wait..."),t("#"+e+"Info").html(""),t("#"+e+"Body").html('<div class="row"><div class="col-md-4 col-md-offset-4"><div class="progress"><div class="progress-bar progress-bar-striped" style="width: 100%;">Please wait ...</div></div></div></div>'),t("#"+e+"Footer").html('<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>')},async:!0,contentType:"application/json",dataType:"json",success:function(s){t("#"+e+"Label").html("Add a new instance group"),t("#"+e+"Info").html("");var l="";l+='<form id="formAddGroup">',l+='  <div class="row">',l+='    <div class="form-group col-sm-6">',l+='      <label for="inputNewGroupname" class="control-label">Group name</label>',l+='      <input type="text" class="form-control" id="inputNewGroupname" placeholder="New group name" />',l+="    </div>",l+='    <div class="form-group col-sm-6">',l+='      <label for="selectGroups" class="control-label">User groups</label><br />',l+='      <select id="selectGroups" multiple="multiple">';var o={};t.each(s.groups,function(t,e){l+='      <option value="'+e.name+'">'+e.name+"</option>",o[e.name]=e.description}),l+="      </select>",l+='      <p class="form-text text-muted">Please select the user groups allowed to view instances from this instance group.</p>',l+="    </div>",l+="  </div>",l+='  <div class="row">',l+='    <div class="form-group col-sm-12">',l+='      <label for="inputDescription" class="control-label">Description</label>',l+='      <textarea class="form-control" rows="3" placeholder="Description" id="inputDescription"></textarea>',l+="    </div>",l+="  </div>",l+="</form>",t("#"+e+"Body").html(l),t("#"+e+"Footer").html('<button type="submit" id="submitFormAddGroup" class="btn btn-success">Save</button> <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>'),t("#selectGroups").multiselect(),t(".multiselect-container li").not(".filter, .group").tooltip({placement:"right",container:"body",title:function(){var e=t(this).find("input").val();return o[e]}}),t("#submitFormAddGroup").click(function(){t("#formAddGroup").submit()}),t("#formAddGroup").submit(function(t){t.preventDefault(),n(e,i)})},error:function(i){t("#"+e+"Label").html("Add a new instance group"),t("#"+e+"Info").html('<div class="row"><div class="col-md-12"><div class="alert alert-danger" role="alert">ERROR: '+escapeHtml(JSON.parse(i.responseText).error)+"</div></div></div>")}})}),t(document).on("click","[data-action=edit]",function(){t("#GroupModal").modal("show"),t("[data-toggle=popover]").popover("hide"),l("GroupModal",groupKind,t(this).data("group_name"))}),t(document).on("click","[data-action=delete]",function(){t("#GroupModal").modal("show"),t("[data-toggle=popover]").popover("hide"),o("GroupModal",groupKind,t(this).data("group_name"))})})}.call(this,i("./node_modules/jquery/dist/jquery.js-exposed"))}},[["./temboardui/static/js/temboard.settings.group.js","runtime","commons","vendors~activity~notifications~settings.group~settings.instance~settings.user"]]]);