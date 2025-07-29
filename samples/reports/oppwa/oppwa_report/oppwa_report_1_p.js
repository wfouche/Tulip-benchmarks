
var myChart2 = echarts.init(document.getElementById('main_p'));

var data =  [['2025-07-22T10:39:44', 270.5, 556.5, 838.1, 939.0, 1132.5, 1367.3], ['2025-07-22T10:40:14', 269.9, 505.1, 698.9, 800.8, 1024.0, 1373.3], ['2025-07-22T10:40:44', 271.4, 489.5, 651.3, 695.8, 789.5, 1139.2], ['2025-07-22T10:41:14', 269.5, 489.1, 650.8, 688.1, 837.1, 1607.6], ['2025-07-22T10:41:44', 271.1, 505.2, 710.1, 820.7, 1044.5, 1647.6], ['2025-07-22T10:42:14', 272.0, 504.5, 691.2, 748.0, 889.3, 1384.7], ['2025-07-22T10:42:44', 270.0, 487.0, 643.1, 677.9, 771.6, 920.5], ['2025-07-22T10:43:14', 266.1, 549.5, 839.2, 948.7, 1340.4, 2173.7], ['2025-07-22T10:43:44', 270.9, 509.4, 715.8, 776.7, 977.4, 1259.8]];

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

