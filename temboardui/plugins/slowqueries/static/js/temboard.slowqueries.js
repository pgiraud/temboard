/* global Vue */
$(function() {
  "use strict";

  new Vue({
    el: '#app',
    data: {
      slowQueries: [],
      plan: null,
      sql: null,
      explainKey: 0
    },
    components: {
      pgExplain: pgExplain
    },
    created: function() {
      this.fetchData();
    },
    methods: {
      fetchData: getData,
      explain: explain
    }
  });

  function getData() {
    $.ajax({
      url: apiUrl,
      type: 'GET',
      async: true,
      contentType: "application/json",
      success: (function (data) {
        this.slowQueries = data;
        window.setTimeout(postCreated.bind(this), 1);
      }).bind(this),
      error: function(xhr) {
        console.log(xhr);
      }
    });
  }

  function postCreated() {
    $('pre code.sql').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }

  function explain(query) {
    $('#explainModal').modal();
    this.plan = query.plan;
    this.sql = query.query;
    // force rerender of the pgExplain component
    this.explainKey += 1;
  }
});
