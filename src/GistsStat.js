var Highcharts = require('highcharts'),
addFunnel = require('highcharts/modules/funnel');
var gistsChart;
var now = new Date();
var gistsEnd = now.setSeconds(now.getSeconds() - 5);
var gistsStart = new Date().getTime();
var data = [];

function loadGistsData(start, end) {
    const requestOpts = {
        method: 'GET',
        cache: 'no-cache', 
        credentials: 'same-origin',
        referrerPolicy: 'no-referrer',
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        }
    };
    fetch('https://api.github.com/gists?per_page=100&since=' + (new Date(end)).toISOString(), requestOpts)
      .then(response => {
         const contentType = response.headers.get('content-type');
         if (!contentType || !contentType.includes('application/json')) {
           throw new TypeError("Invalid JSON");
         }
         return response.json();
      })
      .then(gists => {
        var count = 0;
        for (var i = 0; i < gists.length; i++) {
            let createdAt = new Date(gists[i].created_at).getTime();
            if (createdAt >= end && createdAt <= start) {
                count++;
            }
        }
        data.push({
            x: start,
            y: count
        });
        renderGistsChart(start, end, data);
      })
      .catch(error => console.error(error));
}

function getGists() {
    if (gistsChart) {
        let dateObj = getNexStartEnd(gistsStart, gistsEnd);
        gistsStart = dateObj.start;
        gistsEnd = dateObj.end;
    }
    loadGistsData(gistsStart, gistsEnd);
}

function renderGistsChart(start, end, data) {
    if (!gistsChart) {
        gistsChart = Highcharts.chart('gistsContainer', {
            title: {
                text: 'Latest Gist Count'
            },
            yAxis: {
                title: {
                    text: 'Count of Gits'
                }
            },
            xAxis: {
                type : 'datetime',
                dateTimeLabelFormats: {
                    millisecond: ['%A, %b %e, %I:%M:%S %p', '%A, %b %e, %I:%M:%S %p', '-%I:%M:%S %p'],
                    second: ['%A, %b %e, %I:%M:%S %p', '%A, %b %e, %I:%M:%S %p', '-%r'],
                    minute: ['%A, %b %e, %I:%M %p', '%A, %b %e, %I:%M %p', '-%I:%M %p'],
                    hour: ['%A, %b %e, %I:%M %p', '%A, %b %e, %I:%M %p', '-%I:%M %p'],
                    day: ['%A, %b %e, %Y', '%A, %b %e', '-%A, %b %e, %Y'],
                    week: ['Week from %A, %b %e, %Y', '%A, %b %e', '-%A, %b %e, %Y'],
                    month: ['%b %Y', '%b', '-%b %Y'],
                    year: ['%Y', '%Y', '-%Y']
                }
            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            series: [{
                name: 'Gists',
                type: 'line',
                data: data
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 1024
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        });
    } else {
        gistsChart.series[0].setData(data);
        gistsChart.reflow();
    }
    
}

function getNexStartEnd(start, end) {
    start = end;
    end = new Date(end);
    end = end.setSeconds(end.getSeconds() - 5);
    return { start: start, end: end};
}