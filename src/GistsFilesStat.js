var Highcharts = require('highcharts'),
addFunnel = require('highcharts/modules/funnel');
var gistsFileChart;
var now = new Date();
var filesEnd = now.setSeconds(now.getSeconds() - 5);;
var filesStart = new Date().getTime();;
var data = [];
var fileData = [];

function loadGistsFilesData(start, end) {
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
        var filesCount = 0;
        for (var i = 0; i < gists.length; i++) {
            let createdAt = new Date(gists[i].created_at).getTime();
            if (createdAt >= end && createdAt <= start && gists[i].files) {
                filesCount += getGistsFileCount(gists[i]);
            }
        }
        fileData.push({
            x: start,
            y: filesCount
        });
        renderGistsFilesChart(start, end, fileData);
      })
      .catch(error => console.error(error));
}

function getGistsFileCount(gist) {
    let count = 0;
    for (let i in gist.files) {
        if (gist.files[i]) {
            count++;
        }
    }
    return count;
}

function getGistsFiles() {
    if (gistsFileChart) {
        let dateObj = getNexStartEnd(filesStart, filesEnd);
        filesStart = dateObj.start;
        filesEnd = dateObj.end;
    }
    loadGistsFilesData(filesStart, filesEnd);
}

function renderGistsFilesChart(start, end, data) {
    if (!gistsFileChart) {
        gistsFileChart = Highcharts.chart('filesContainer', {
            title: {
                text: 'Files per Gist'
            },
            yAxis: {
                title: {
                    text: 'Files per Gist'
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

            plotOptions: {
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
        gistsFileChart.series[0].setData(data);
        gistsFileChart.reflow();
    }
}

function getNexStartEnd(start, end) {
    start = end;
    end = new Date(end);
    end = end.setSeconds(end.getSeconds() - 5);
    return { start: start, end: end};
}