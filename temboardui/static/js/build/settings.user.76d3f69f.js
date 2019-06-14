(window.webpackJsonp=window.webpackJsonp||[]).push([["settings.user"],{"./temboardui/static/js/temboard.settings.user.js":function(e,t,s){"use strict";s.r(t);var o=s("./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js"),l=s.n(o);s("./node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css");function a(e,t){$.ajax({url:"/json/settings/user/"+t,type:"get",beforeSend:function(t){$("#"+e+"Label").html("Processing, please wait..."),$("#"+e+"Info").html(""),$("#"+e+"Body").html('<div class="row"><div class="col-md-4 col-md-offset-4"><div class="progress"><div class="progress-bar progress-bar-striped" style="width: 100%;">Please wait ...</div></div></div></div>'),$("#"+e+"Footer").html('<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>')},async:!0,contentType:"application/json",dataType:"json",success:function(t){$("#"+e+"Label").html("Update user properties");var s="";s+='<form id="formUpdateUser">',s+='  <input type="hidden" id="inputUsername" value="'+t.role_name+'" />',s+='  <div class="row">',s+='    <div class="form-group col-sm-6">',s+='      <label for="inputNewUsername" class="control-label">Username</label>',s+='      <input type="text" class="form-control" id="inputNewUsername" placeholder="New Username" value="'+t.role_name+'" />',s+="    </div>",s+='    <div class="form-group col-sm-6">',s+='      <label for="inputEmail" class="control-label">Email</label>',s+='      <input type="email" class="form-control" id="inputEmail" placeholder="Email" value="'+(t.role_email||"")+'">',s+='      <span class="form-text text-muted small">Leave blank to prevent user from receiving notifications by email.</span>',s+="    </div>",s+="  </div>",s+='  <div class="row">',s+='    <div class="form-group col-sm-6">',s+='      <label for="inputPassword" class="control-label">Password&#42;</label>',s+='      <input type="password" class="form-control" id="inputPassword" placeholder="Password" />',s+='      <input type="password" class="form-control" id="inputPassword2" placeholder="Confirm password" />',s+='      <p class="form-text text-muted"><small>&#42;: leave this field blank to keep it unchanged.</small></p>',s+="    </div>",s+='    <div class="form-group col-sm-6">',s+='      <label for="selectGroups" class="control-label">Groups</label><br />',s+='      <select id="selectGroups" multiple="multiple">';var o={},l="";for(var a in t.groups)l="",t.in_groups.indexOf(a.name)>-1&&(l="selected"),s+='      <option value="'+a.name+'" '+l+">"+a.name+"</option>",o[a.name]=a.description;s+="      </select><br />",s+='      <label for="selectActive" class="control-label">Active</label><br />',s+='      <select id="selectActive">',s+='        <option value="No">No</options>',sel_active="",t.is_active&&(sel_active="selected"),s+='        <option value="yes" '+sel_active+">Yes</options>",s+="      </select><br />",s+='      <label for="selectAdmin" class="control-label">Administrator</label><br />',s+='      <select id="selectAdmin">',s+='        <option value="No">No</options>',sel_admin="",t.is_admin&&(sel_admin="selected"),s+='        <option value="yes" '+sel_admin+">Yes</options>",s+="      </select>",s+="    </div>",s+="  </div>",s+='  <div class="row">',s+='    <div class="form-group col-sm-6">',s+='      <label for="inputPhone" class="control-label">Phone</label>',s+='      <input type="text" class="form-control" id="inputPhone" placeholder="Phone" value="'+(t.role_phone||"")+'">',s+='      <span class="form-text text-muted small">Leave blank to prevent user from receiving notifications by SMS.</span>',s+="    </div>",s+="  </div>",s+="</form>";$("#"+e+"Body").html(s),$("#"+e+"Footer").html('<button type="submit" id="submitFormUpdateUser" class="btn btn-success">Save</button> <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>'),$("#submitFormUpdateUser").click(function(){$("#formUpdateUser").submit()}),$("#selectGroups").multiselect(),$(".multiselect-container li").not(".filter, .group").tooltip({placement:"right",container:"body",title:function(){var e=$(this).find("input").val();return o[e]}}),$("#selectActive").multiselect(),$("#selectAdmin").multiselect(),$("#formUpdateUser").submit(function(t){t.preventDefault(),function(e){var t=$("#inputUsername").val();$.ajax({url:"/json/settings/user/"+t,type:"post",beforeSend:function(t){$("#"+e+"Label").html("Processing, please wait..."),$("#"+e+"Info").html('<div class="row"><div class="col-md-4 col-md-offset-4"><div class="progress"><div class="progress-bar progress-bar-striped" style="width: 100%;">Please wait ...</div></div></div></div>')},data:JSON.stringify({new_username:$("#inputNewUsername").val(),email:$("#inputEmail").val(),phone:$("#inputPhone").val(),password:$("#inputPassword").val(),password2:$("#inputPassword2").val(),groups:$("#selectGroups").val(),is_active:$("#selectActive").val(),is_admin:$("#selectAdmin").val()}),async:!0,contentType:"application/json",dataType:"json",success:function(t){$("#"+e).modal("hide");var s=window.location.href;window.location.replace(s)},error:function(t){$("#"+e+"Label").html("Update user properties"),$("#"+e+"Info").html('<div class="alert alert-danger" role="alert">ERROR: '+JSON.parse(t.responseText).error+"</div>")}})}(e)})},error:function(t){$("#"+e+"Label").html("Update user properties"),$("#"+e+"Body").html('<div class="alert alert-danger" role="alert">ERROR: '+JSON.parse(t.responseText).error+"</div>")}})}function n(e,t){$.ajax({url:"/json/settings/user/"+t,type:"get",beforeSend:function(t){$("#"+e+"Label").html("Processing, please wait..."),$("#"+e+"Info").html('<div class="row"><div class="col-md-4 col-md-offset-4"><div class="progress"><div class="progress-bar progress-bar-striped" style="width: 100%;">Please wait ...</div></div></div></div>'),$("#"+e+"Body").html(""),$("#"+e+"Footer").html('<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>')},async:!0,contentType:"application/json",dataType:"json",success:function(t){$("#"+e+"Label").html("Delete user confirmation"),$("#"+e+"Body").html(""),$("#"+e+"Footer").html('<button type="submit" id="buttonDeleteUser" class="btn btn-danger">Yes, delete this user</button> <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>'),$("#buttonDeleteUser").click(function(s){s.preventDefault(),function(e,t){$.ajax({url:"/json/settings/delete/user",type:"post",beforeSend:function(t){$("#"+e+"Label").html("Processing, please wait..."),$("#"+e+"Info").html('<div class="row"><div class="col-md-4 col-md-offset-4"><div class="progress"><div class="progress-bar progress-bar-striped" style="width: 100%;">Please wait ...</div></div></div></div>'),$("#"+e+"Body").html("")},async:!0,contentType:"application/json",dataType:"json",data:JSON.stringify({username:t}),success:function(t){$("#"+e).modal("hide");var s=window.location.href;window.location.replace(s)},error:function(t){$("#"+e+"Label").html("Delete user confirmation"),$("#"+e+"Info").html('<div class="alert alert-danger" role="alert">ERROR: '+d(JSON.parse(t.responseText).error)+"</div>"),$("#"+e+"Body").html("")}})}(e,t.role_name)})},error:function(t){$("#"+e+"Label").html("Delete user confirmation"),$("#"+e+"Info").html('<div class="alert alert-danger" role="alert">ERROR: '+d(JSON.parse(t.responseText).error)+"</div>"),$("#"+e+"Body").html(""),$("#"+e+"Footer").html('<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>')}})}function i(e){$.ajax({url:"/json/settings/all/group/role",type:"get",beforeSend:function(t){$("#"+e+"Label").html("Processing, please wait..."),$("#"+e+"Info").html(""),$("#"+e+"Body").html('<div class="row"><div class="col-md-4 col-md-offset-4"><div class="progress"><div class="progress-bar progress-bar-striped" style="width: 100%;">Please wait ...</div></div></div></div>'),$("#"+e+"Footer").html('<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>')},async:!0,contentType:"application/json",dataType:"json",success:function(t){$("#"+e+"Label").html("Add a new user"),$("#"+e+"Info").html("");var s="";s+='<form id="formAddUser">',s+='  <div class="row">',s+='    <div class="form-group col-sm-6">',s+='      <label for="inputNewUsername" class="control-label">Username</label>',s+='      <input type="text" class="form-control" id="inputNewUsername" placeholder="Username" />',s+="    </div>",s+='    <div class="form-group col-sm-6">',s+='      <label for="inputEmail" class="control-label">Email</label>',s+='      <input type="email" class="form-control" id="inputEmail" placeholder="Email" />',s+='      <span class="form-text text-muted small">Leave blank to prevent user from receiving notifications by email.</span>',s+="    </div>",s+="  </div>",s+='  <div class="row">',s+='    <div class="form-group col-sm-6">',s+='      <label for="inputPassword" class="control-label">Password&#42;</label>',s+='      <input type="password" class="form-control" id="inputPassword" placeholder="Password" />',s+='      <input type="password" class="form-control" id="inputPassword2" placeholder="Confirm password" />',s+='      <p class="form-text text-muted"><small>&#42;: leave this field blank to keep it unchanged.</small></p>',s+="    </div>",s+='    <div class="form-group col-sm-6">',s+='      <label for="selectGroups" class="control-label">Groups</label><br />',s+='      <select id="selectGroups" multiple="multiple">';var o={};for(var l in t.groups)s+='      <option value="'+l.name+'">'+l.name+"</option>",o[l.name]=l.description;s+="      </select><br />",s+='      <label for="selectActive" class="control-label">Active</label><br />',s+='      <select id="selectActive">',s+='        <option value="yes" selected>Yes</options>',s+='        <option value="No">No</options>',s+="      </select><br />",s+='      <label for="selectAdmin" class="control-label">Administrator</label><br />',s+='      <select id="selectAdmin">',s+='        <option value="No" selected>No</options>',s+='        <option value="yes">Yes</options>',s+="      </select>",s+="    </div>",s+="  </div>",s+='  <div class="row">',s+='    <div class="form-group col-sm-6">',s+='      <label for="inputPhone" class="control-label">Phone</label>',s+='      <input type="text" class="form-control" id="inputPhone" placeholder="Phone">',s+='      <span class="form-text text-muted small">Leave blank to prevent user from receiving notifications by SMS.</span>',s+="    </div>",s+="  </div>",s+="</form>";$("#"+e+"Body").html(s),$("#"+e+"Footer").html('<button type="submit" id="submitFormAddUser" class="btn btn-success">Save</button> <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>'),$("#submitFormAddUser").click(function(){$("#formAddUser").submit()}),$("#selectGroups").multiselect(),$(".multiselect-container li").not(".filter, .group").tooltip({placement:"right",container:"body",title:function(){var e=$(this).find("input").val();return o[e]}}),$("#selectActive").multiselect(),$("#selectAdmin").multiselect(),$("#formAddUser").submit(function(t){t.preventDefault(),function(e){$.ajax({url:"/json/settings/user",type:"post",beforeSend:function(t){$("#"+e+"Label").html("Processing, please wait..."),$("#"+e+"Info").html('<div class="row"><div class="col-md-4 col-md-offset-4"><div class="progress"><div class="progress-bar progress-bar-striped" style="width: 100%;">Please wait ...</div></div></div></div>')},data:JSON.stringify({new_username:$("#inputNewUsername").val(),email:$("#inputEmail").val(),phone:$("#inputPhone").val(),password:$("#inputPassword").val(),password2:$("#inputPassword2").val(),groups:$("#selectGroups").val(),is_active:$("#selectActive").val(),is_admin:$("#selectAdmin").val()}),async:!0,contentType:"application/json",dataType:"json",success:function(t){$("#"+e).modal("hide");var s=window.location.href;window.location.replace(s)},error:function(t){$("#"+e+"Label").html("Add a new user"),$("#"+e+"Info").html('<div class="row"><div class="col-md-12"><div class="alert alert-danger" role="alert">ERROR: '+d(JSON.parse(t.responseText).error)+"</div></div></div>")}})}(e)})},error:function(t){$("#"+e+"Label").html("Add a new user"),$("#"+e+"Info").html('<div class="row"><div class="col-md-12"><div class="alert alert-danger" role="alert">ERROR: '+d(JSON.parse(t.responseText).error)+"</div></div></div>")}})}l()(window,$);var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function d(e){return String(e).replace(/[&<>"'\/]/g,function(e){return r[e]})}$(document).ready(function(){$("#tableUsers").DataTable({stateSave:!0}),$("#buttonLoadAddUserForm").click(function(){$("#UserModal").modal("show"),$("[data-toggle=popover]").popover("hide"),i("UserModal")}),$(document).on("click","[data-action=edit]",function(){$("#UserModal").modal("show"),$("[data-toggle=popover]").popover("hide"),a("UserModal",$(this).data("username"))}),$(document).on("click","[data-action=delete]",function(){$("#UserModal").modal("show"),$("[data-toggle=popover]").popover("hide"),n("UserModal",$(this).data("username"))})})}},[["./temboardui/static/js/temboard.settings.user.js","runtime","vendors~activity~notifications~settings.group~settings.instance~settings.user"]]]);