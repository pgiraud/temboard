!function(i){function e(e){for(var t,s,o=e[0],l=e[1],a=e[2],r=0,n=[];r<o.length;r++)s=o[r],d[s]&&n.push(d[s][0]),d[s]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(i[t]=l[t]);for(u&&u(e);n.length;)n.shift()();return p.push.apply(p,a||[]),c()}function c(){for(var e,t=0;t<p.length;t++){for(var s=p[t],o=!0,l=1;l<s.length;l++){var a=s[l];0!==d[a]&&(o=!1)}o&&(p.splice(t--,1),e=r(r.s=s[0]))}return e}var s={},d={5:0},p=[];function r(e){if(s[e])return s[e].exports;var t=s[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=i,r.c=s,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(s,o,function(e){return t[e]}.bind(null,o));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/js/build";var t=window.webpackJsonp=window.webpackJsonp||[],o=t.push.bind(t);t.push=e,t=t.slice();for(var l=0;l<t.length;l++)e(t[l]);var u=o;p.push([11,6]),c()}({11:function(e,t,s){"use strict";s.r(t);var o=s(0),l=s.n(o);s(1);function a(a,e){$.ajax({url:"/json/settings/user/"+e,type:"get",beforeSend:function(e){$("#"+a+"Label").html("Processing, please wait..."),$("#"+a+"Info").html(""),$("#"+a+"Body").html('<div class="row"><div class="col-md-4 col-md-offset-4"><div class="progress"><div class="progress-bar progress-bar-striped" style="width: 100%;">Please wait ...</div></div></div></div>'),$("#"+a+"Footer").html('<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>')},async:!0,contentType:"application/json",dataType:"json",success:function(e){$("#"+a+"Label").html("Update user properties");var t="";t+='<form id="formUpdateUser">',t+='  <input type="hidden" id="inputUsername" value="'+e.role_name+'" />',t+='  <div class="row">',t+='    <div class="form-group col-sm-6">',t+='      <label for="inputNewUsername" class="control-label">Username</label>',t+='      <input type="text" class="form-control" id="inputNewUsername" placeholder="New Username" value="'+e.role_name+'" />',t+="    </div>",t+='    <div class="form-group col-sm-6">',t+='      <label for="inputEmail" class="control-label">Email</label>',t+='      <input type="email" class="form-control" id="inputEmail" placeholder="Email" value="'+(e.role_email||"")+'">',t+='      <span class="form-text text-muted small">Leave blank to prevent user from receiving notifications by email.</span>',t+="    </div>",t+="  </div>",t+='  <div class="row">',t+='    <div class="form-group col-sm-6">',t+='      <label for="inputPassword" class="control-label">Password&#42;</label>',t+='      <input type="password" class="form-control" id="inputPassword" placeholder="Password" />',t+='      <input type="password" class="form-control" id="inputPassword2" placeholder="Confirm password" />',t+='      <p class="form-text text-muted"><small>&#42;: leave this field blank to keep it unchanged.</small></p>',t+="    </div>",t+='    <div class="form-group col-sm-6">',t+='      <label for="selectGroups" class="control-label">Groups</label><br />',t+='      <select id="selectGroups" multiple="multiple">';var s={},o="";for(var l in e.groups)o="",-1<e.in_groups.indexOf(l.name)&&(o="selected"),t+='      <option value="'+l.name+'" '+o+">"+l.name+"</option>",s[l.name]=l.description;t+="      </select><br />",t+='      <label for="selectActive" class="control-label">Active</label><br />',t+='      <select id="selectActive">',t+='        <option value="No">No</options>',sel_active="",e.is_active&&(sel_active="selected"),t+='        <option value="yes" '+sel_active+">Yes</options>",t+="      </select><br />",t+='      <label for="selectAdmin" class="control-label">Administrator</label><br />',t+='      <select id="selectAdmin">',t+='        <option value="No">No</options>',sel_admin="",e.is_admin&&(sel_admin="selected"),t+='        <option value="yes" '+sel_admin+">Yes</options>",t+="      </select>",t+="    </div>",t+="  </div>",t+='  <div class="row">',t+='    <div class="form-group col-sm-6">',t+='      <label for="inputPhone" class="control-label">Phone</label>',t+='      <input type="text" class="form-control" id="inputPhone" placeholder="Phone" value="'+(e.role_phone||"")+'">',t+='      <span class="form-text text-muted small">Leave blank to prevent user from receiving notifications by SMS.</span>',t+="    </div>",t+="  </div>",t+="</form>";$("#"+a+"Body").html(t),$("#"+a+"Footer").html('<button type="submit" id="submitFormUpdateUser" class="btn btn-success">Save</button> <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>'),$("#submitFormUpdateUser").click(function(){$("#formUpdateUser").submit()}),$("#selectGroups").multiselect(),$(".multiselect-container li").not(".filter, .group").tooltip({placement:"right",container:"body",title:function(){var e=$(this).find("input").val();return s[e]}}),$("#selectActive").multiselect(),$("#selectAdmin").multiselect(),$("#formUpdateUser").submit(function(e){e.preventDefault(),function(s){var e=$("#inputUsername").val();$.ajax({url:"/json/settings/user/"+e,type:"post",beforeSend:function(e){$("#"+s+"Label").html("Processing, please wait..."),$("#"+s+"Info").html('<div class="row"><div class="col-md-4 col-md-offset-4"><div class="progress"><div class="progress-bar progress-bar-striped" style="width: 100%;">Please wait ...</div></div></div></div>')},data:JSON.stringify({new_username:$("#inputNewUsername").val(),email:$("#inputEmail").val(),phone:$("#inputPhone").val(),password:$("#inputPassword").val(),password2:$("#inputPassword2").val(),groups:$("#selectGroups").val(),is_active:$("#selectActive").val(),is_admin:$("#selectAdmin").val()}),async:!0,contentType:"application/json",dataType:"json",success:function(e){$("#"+s).modal("hide");var t=window.location.href;window.location.replace(t)},error:function(e){$("#"+s+"Label").html("Update user properties"),$("#"+s+"Info").html('<div class="alert alert-danger" role="alert">ERROR: '+JSON.parse(e.responseText).error+"</div>")}})}(a)})},error:function(e){$("#"+a+"Label").html("Update user properties"),$("#"+a+"Body").html('<div class="alert alert-danger" role="alert">ERROR: '+JSON.parse(e.responseText).error+"</div>")}})}function r(s,e){$.ajax({url:"/json/settings/user/"+e,type:"get",beforeSend:function(e){$("#"+s+"Label").html("Processing, please wait..."),$("#"+s+"Info").html('<div class="row"><div class="col-md-4 col-md-offset-4"><div class="progress"><div class="progress-bar progress-bar-striped" style="width: 100%;">Please wait ...</div></div></div></div>'),$("#"+s+"Body").html(""),$("#"+s+"Footer").html('<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>')},async:!0,contentType:"application/json",dataType:"json",success:function(t){$("#"+s+"Label").html("Delete user confirmation"),$("#"+s+"Body").html(""),$("#"+s+"Footer").html('<button type="submit" id="buttonDeleteUser" class="btn btn-danger">Yes, delete this user</button> <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>'),$("#buttonDeleteUser").click(function(e){e.preventDefault(),function(s,e){$.ajax({url:"/json/settings/delete/user",type:"post",beforeSend:function(e){$("#"+s+"Label").html("Processing, please wait..."),$("#"+s+"Info").html('<div class="row"><div class="col-md-4 col-md-offset-4"><div class="progress"><div class="progress-bar progress-bar-striped" style="width: 100%;">Please wait ...</div></div></div></div>'),$("#"+s+"Body").html("")},async:!0,contentType:"application/json",dataType:"json",data:JSON.stringify({username:e}),success:function(e){$("#"+s).modal("hide");var t=window.location.href;window.location.replace(t)},error:function(e){$("#"+s+"Label").html("Delete user confirmation"),$("#"+s+"Info").html('<div class="alert alert-danger" role="alert">ERROR: '+c(JSON.parse(e.responseText).error)+"</div>"),$("#"+s+"Body").html("")}})}(s,t.role_name)})},error:function(e){$("#"+s+"Label").html("Delete user confirmation"),$("#"+s+"Info").html('<div class="alert alert-danger" role="alert">ERROR: '+c(JSON.parse(e.responseText).error)+"</div>"),$("#"+s+"Body").html(""),$("#"+s+"Footer").html('<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>')}})}function n(l){$.ajax({url:"/json/settings/all/group/role",type:"get",beforeSend:function(e){$("#"+l+"Label").html("Processing, please wait..."),$("#"+l+"Info").html(""),$("#"+l+"Body").html('<div class="row"><div class="col-md-4 col-md-offset-4"><div class="progress"><div class="progress-bar progress-bar-striped" style="width: 100%;">Please wait ...</div></div></div></div>'),$("#"+l+"Footer").html('<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>')},async:!0,contentType:"application/json",dataType:"json",success:function(e){$("#"+l+"Label").html("Add a new user"),$("#"+l+"Info").html("");var t="";t+='<form id="formAddUser">',t+='  <div class="row">',t+='    <div class="form-group col-sm-6">',t+='      <label for="inputNewUsername" class="control-label">Username</label>',t+='      <input type="text" class="form-control" id="inputNewUsername" placeholder="Username" />',t+="    </div>",t+='    <div class="form-group col-sm-6">',t+='      <label for="inputEmail" class="control-label">Email</label>',t+='      <input type="email" class="form-control" id="inputEmail" placeholder="Email" />',t+='      <span class="form-text text-muted small">Leave blank to prevent user from receiving notifications by email.</span>',t+="    </div>",t+="  </div>",t+='  <div class="row">',t+='    <div class="form-group col-sm-6">',t+='      <label for="inputPassword" class="control-label">Password&#42;</label>',t+='      <input type="password" class="form-control" id="inputPassword" placeholder="Password" />',t+='      <input type="password" class="form-control" id="inputPassword2" placeholder="Confirm password" />',t+='      <p class="form-text text-muted"><small>&#42;: leave this field blank to keep it unchanged.</small></p>',t+="    </div>",t+='    <div class="form-group col-sm-6">',t+='      <label for="selectGroups" class="control-label">Groups</label><br />',t+='      <select id="selectGroups" multiple="multiple">';var s={};for(var o in e.groups)t+='      <option value="'+o.name+'">'+o.name+"</option>",s[o.name]=o.description;t+="      </select><br />",t+='      <label for="selectActive" class="control-label">Active</label><br />',t+='      <select id="selectActive">',t+='        <option value="yes" selected>Yes</options>',t+='        <option value="No">No</options>',t+="      </select><br />",t+='      <label for="selectAdmin" class="control-label">Administrator</label><br />',t+='      <select id="selectAdmin">',t+='        <option value="No" selected>No</options>',t+='        <option value="yes">Yes</options>',t+="      </select>",t+="    </div>",t+="  </div>",t+='  <div class="row">',t+='    <div class="form-group col-sm-6">',t+='      <label for="inputPhone" class="control-label">Phone</label>',t+='      <input type="text" class="form-control" id="inputPhone" placeholder="Phone">',t+='      <span class="form-text text-muted small">Leave blank to prevent user from receiving notifications by SMS.</span>',t+="    </div>",t+="  </div>",t+="</form>";$("#"+l+"Body").html(t),$("#"+l+"Footer").html('<button type="submit" id="submitFormAddUser" class="btn btn-success">Save</button> <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>'),$("#submitFormAddUser").click(function(){$("#formAddUser").submit()}),$("#selectGroups").multiselect(),$(".multiselect-container li").not(".filter, .group").tooltip({placement:"right",container:"body",title:function(){var e=$(this).find("input").val();return s[e]}}),$("#selectActive").multiselect(),$("#selectAdmin").multiselect(),$("#formAddUser").submit(function(e){e.preventDefault(),function(s){$.ajax({url:"/json/settings/user",type:"post",beforeSend:function(e){$("#"+s+"Label").html("Processing, please wait..."),$("#"+s+"Info").html('<div class="row"><div class="col-md-4 col-md-offset-4"><div class="progress"><div class="progress-bar progress-bar-striped" style="width: 100%;">Please wait ...</div></div></div></div>')},data:JSON.stringify({new_username:$("#inputNewUsername").val(),email:$("#inputEmail").val(),phone:$("#inputPhone").val(),password:$("#inputPassword").val(),password2:$("#inputPassword2").val(),groups:$("#selectGroups").val(),is_active:$("#selectActive").val(),is_admin:$("#selectAdmin").val()}),async:!0,contentType:"application/json",dataType:"json",success:function(e){$("#"+s).modal("hide");var t=window.location.href;window.location.replace(t)},error:function(e){$("#"+s+"Label").html("Add a new user"),$("#"+s+"Info").html('<div class="row"><div class="col-md-12"><div class="alert alert-danger" role="alert">ERROR: '+c(JSON.parse(e.responseText).error)+"</div></div></div>")}})}(l)})},error:function(e){$("#"+l+"Label").html("Add a new user"),$("#"+l+"Info").html('<div class="row"><div class="col-md-12"><div class="alert alert-danger" role="alert">ERROR: '+c(JSON.parse(e.responseText).error)+"</div></div></div>")}})}l()(window,$);var i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function c(e){return String(e).replace(/[&<>"'\/]/g,function(e){return i[e]})}$(document).ready(function(){$("#tableUsers").DataTable({stateSave:!0})}),$("#buttonLoadAddUserForm").click(function(){$("#UserModal").modal("show"),$("[data-toggle=popover]").popover("hide"),n("UserModal")}),$(document).on("click","[data-action=edit]",function(){$("#UserModal").modal("show"),$("[data-toggle=popover]").popover("hide"),a("UserModal",$(this).data("username"))}),$(document).on("click","[data-action=delete]",function(){$("#UserModal").modal("show"),$("[data-toggle=popover]").popover("hide"),r("UserModal",$(this).data("username"))})}});