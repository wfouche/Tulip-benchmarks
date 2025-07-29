
var myChart2 = echarts.init(document.getElementById('main_p'));

var data =  [['2025-07-22T10:44:45', 272.9, 571.7, 907.3, 1085.4, 1252.4, 1465.4], ['2025-07-22T10:45:15', 267.2, 440.5, 563.7, 580.1, 639.5, 858.0], ['2025-07-22T10:45:45', 267.2, 464.1, 596.5, 673.3, 807.4, 1958.4], ['2025-07-22T10:46:15', 264.0, 452.0, 578.0, 611.8, 733.2, 914.7], ['2025-07-22T10:46:45', 269.9, 488.4, 647.2, 702.5, 872.4, 1919.2], ['2025-07-22T10:47:15', 268.7, 466.6, 606.7, 645.1, 804.4, 1230.9], ['2025-07-22T10:47:45', 268.9, 477.2, 637.4, 678.4, 748.0, 974.5], ['2025-07-22T10:48:15', 271.0, 497.1, 665.6, 721.9, 952.8, 1292.5], ['2025-07-22T10:48:45', 270.0, 567.6, 875.0, 1075.2, 1411.1, 2034.4]];

var option = {
  legend: {},
  tooltip: {
    trigger: 'axis',
  },
  dataset: {
    source:data,
    dimensions: ['timestamp', 'sensor1', 'sensor2', 'sensor3', 'sensor4', 'sensor5', 'sensor6'],
  },
  xAxis: { type: 'time' },
  yAxis: { },
  series: [
  {
     name: 'Max',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor6' // refer sensor 1 value
     }
  },{
     name: 'p99',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor5' // refer sensor 1 value
     }
  },{
     name: 'p95',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor4' // refer sensor 1 value
     }

  },{
     name: 'p90',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor3' // refer sensor 1 value
     }

  },{
     name: 'Avg',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor2'
     }
  },{
     name: 'Min',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor1'
  }
}]
};
myChart2.setOption(option);

window.onresize = function() {
  myChart1.resize();
  myChart2.resize();
};

