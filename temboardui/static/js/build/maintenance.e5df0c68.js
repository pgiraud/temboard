(window.webpackJsonp=window.webpackJsonp||[]).push([["maintenance"],{"./temboardui/plugins/maintenance/static/js/temboard.maintenance.js":function(t,e,a){"use strict";a.r(e),function(t){var e=a("./node_modules/lodash/lodash.js"),s=a("./node_modules/vue/dist/vue.esm.js");a("./temboardui/plugins/maintenance/static/js/vue.size-distribution-bar.js");t(function(){new s.a({el:"#app",data:{instance:{},databases:[],sortCriteria:"total_bytes",sortCriterias:{name:["Name"],total_bytes:["Database Size","desc"],tables_bytes:["Tables Size","desc"],tables_bloat_ratio:["Tables Bloat","desc"],indexes_bytes:["Indexes Size","desc"],indexes_bloat_ratio:["Indexes Bloat","desc"],toast_bytes:["Toast Size","desc"]},loading:!0},created:function(){this.fetchData()},computed:{sortOrder:function(){return this.sortCriterias[this.sortCriteria][1]},databasesSorted:function(){return e.orderBy(this.databases,this.sortCriteria,this.sortOrder)}},methods:{fetchData:function(){t.ajax({url:apiUrl,contentType:"application/json",success:function(e){this.instance=e.instance,this.databases=e.databases,this.loading=!1,this.databases.forEach(function(t){t.tables_bloat_ratio=0,t.tables_bytes&&(t.tables_bloat_ratio=parseFloat((t.tables_bloat_bytes/t.tables_bytes*100).toFixed(1))),t.indexes_bloat_ratio=0,t.indexes_bytes&&(t.indexes_bloat_ratio=parseFloat((t.indexes_bloat_bytes/t.indexes_bytes*100).toFixed(1)))}),window.setTimeout(function(){t('[data-toggle="popover"]').popover()}.bind(this),1)}.bind(this)})},sortBy:function(t,e){this.sortCriteria=t,this.sortOrder=e||"asc"}}})})}.call(this,a("./node_modules/jquery/dist/jquery.js-exposed"))},"./temboardui/plugins/maintenance/static/js/vue.size-distribution-bar.js":function(t,e,a){"use strict";(function(t){var e=a("./node_modules/vue/dist/vue.esm.js");t(function(){e.a.component("size-distribution-bar",{props:["height","total","cat1","cat1raw","cat1label","cat1bis","cat1bisraw","cat1bislabel","cat2","cat2raw","cat2label","cat2","cat2bis","cat2bisraw","cat2bislabel","cat3","cat3raw","cat3label"],methods:{toWidthPercent:function(t,e){return"width: "+100*t/e+"%"},popoverContent:function(t){var e=this[t+"label"]+": "+this[t];return this[t+"bis"]&&(e+="<br>",e+='<small class="d-inline-block text-muted">Bloat: '+this[t+"bis"]+"</small>"),e}},template:'  <div class="progress border rounded-0" :style="\'height: \' + height + \';\'">    <div class="progress-bar" role="progressbar" :style="toWidthPercent(cat1raw, total)"         data-toggle="popover" data-trigger="hover" data-placement="bottom" data-html="true" :data-content="popoverContent(\'cat1\')">      <div class="progress rounded-0">        <div class="progress-bar bg-cat1" role="progressbar" :style="toWidthPercent(cat1raw - cat1bisraw, cat1raw)"></div>        <div class="progress-bar bg-cat1 progress-bar-striped-small" role="progressbar" :style="toWidthPercent(cat1bisraw, cat1raw)"></div>      </div>    </div>    <div class="progress-bar" role="progressbar" :style="toWidthPercent(cat2raw, total)"         data-toggle="popover" data-trigger="hover" data-placement="bottom" data-html="true" :data-content="popoverContent(\'cat2\')">      <div class="progress rounded-0">        <div class="progress-bar bg-cat2" role="progressbar" :style="toWidthPercent(cat2raw - cat2bisraw, cat2raw)"></div>        <div class="progress-bar bg-cat2 progress-bar-striped-small" role="progressbar" :style="toWidthPercent(cat2bisraw, cat2raw)"></div>      </div>    </div>    <div class="progress-bar bg-secondary" role="progressbar" :style="toWidthPercent(cat3raw, total)"         data-toggle="popover" data-trigger="hover" data-placement="bottom" :data-content="popoverContent(\'cat3\')">    </div>  </div>'})})}).call(this,a("./node_modules/jquery/dist/jquery.js-exposed"))}},[["./temboardui/plugins/maintenance/static/js/temboard.maintenance.js","runtime","commons","vendors~dashboard~home~maintenance~maintenance.database~maintenance.schema~maintenance.table~monitor~40b06deb"]]]);