/* global Vue */
$(function() {
  "use strict";

  new Vue({
    el: '#app',
    data: {
      slowQueries: []
    },
    created: function() {
      this.fetchData();
    },
    methods: {
      fetchData: getData,
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
});
