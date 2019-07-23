/* global Vue */
$(function() {
  "use strict";

  Vue.use(VueRouter)

  var refreshTimeoutId;
  var refreshInterval = 60 * 1000;

  var v = new Vue({
    el: '#app',
    router: new VueRouter(),
    data: {
      slowQueries: [],
      plan: null,
      sql: null,
      explainKey: 0,
      from: null,
      to: null,
      fromDate: null,
      toDate: null,
      moment: moment
    },
    components: {
      pev2: pev2
    },
    methods: {
      explain: explain,
      explainAnalyze: explainAnalyze,
      onPickerUpdate: onPickerUpdate
    },
    computed: {
      fromTo: function() {
        return this.from, this.to, new Date();
      }
    },
    watch: {
      fromTo: function() {
        this.$router.replace({ query: _.assign({}, this.$route.query, {
          start: '' + v.from,
          end: '' + v.to
        })});
      },
    }
  });

  /**
   * Parse location to get start and end date
   * If dates are not provided, falls back to the date range corresponding to
   * the last 24 hours.
   */
  var start = v.$route.query.start || 'now-24h';
  var end = v.$route.query.end || 'now';
  start = dateMath.parse(start).isValid() ? start : moment(parseInt(start, 10));
  end = dateMath.parse(end).isValid() ? end : moment(parseInt(end, 10));

  function getData() {
    var startDate = dateMath.parse(this.fromDate);
    var endDate = dateMath.parse(this.toDate, true);

    $.ajax({
      url: apiUrl,
      data: {
        start: timestampToIsoDate(startDate),
        end: timestampToIsoDate(endDate)
      },
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

  function timestampToIsoDate(epochMs) {
    var ndate = new Date(epochMs);
    return ndate.toISOString();
  }

  function postCreated() {
    $('pre code.sql').each(function(i, block) {
      hljs.highlightBlock(block);
    });

    $('[data-toggle="popover"]').popover({
      html: true,
      content: function() {
        return $(this).find('pre').html();
      },
      template: '<div class="popover sql" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    });
  }

  function explain(query) {
    $('#explainModal').modal();
    this.plan = query.plan;
    this.sql = query.query;
    // force rerender of the pgExplain component
    this.explainKey += 1;
  }

  function explainAnalyze(query) {
    $.ajax({
      url: explainUrl,
      type: 'POST',
      data: JSON.stringify({
        sql: query.query,
        format: 'json'
      }),
      contentType: "application/json",
      success: (function (data) {
        $('#explainModal').modal();
        this.plan = data;
        this.sql = query.query;
        // force rerender of the pgExplain component
        this.explainKey += 1;
      }).bind(this),
      error: function(xhr) {
        console.log(xhr);
      }
    })
  }

  function onPickerUpdate(from, to) {
    this.from = from;
    this.to = to;
    refreshDates();
  }

  function refreshDates() {
    v.fromDate = dateMath.parse(v.from);
    v.toDate = dateMath.parse(v.to, true);
    window.clearTimeout(refreshTimeoutId);
    if (v.from.toString().indexOf('now') != -1 ||
        v.to.toString().indexOf('now') != -1) {
      refreshTimeoutId = window.setTimeout(refreshDates, refreshInterval);
    }
    getData.call(v);
  }
  v.from = start;
  v.to = end;
  refreshDates();
});
