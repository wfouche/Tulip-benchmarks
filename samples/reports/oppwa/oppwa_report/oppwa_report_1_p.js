
var myChart2 = echarts.init(document.getElementById('main_p'));

var data =  [['2025-11-04T08:34:05', 246.8, 393.0, 492.4, 548.3, 764.8, 988.8], ['2025-11-04T08:34:35', 244.6, 376.6, 467.8, 503.8, 661.6, 939.3], ['2025-11-04T08:35:05', 246.8, 402.2, 522.2, 571.6, 697.3, 841.9], ['2025-11-04T08:35:35', 241.7, 381.0, 478.9, 515.6, 626.3, 761.6], ['2025-11-04T08:36:05', 241.3, 379.8, 481.1, 509.5, 571.6, 710.8], ['2025-11-04T08:36:35', 242.8, 379.3, 481.6, 522.4, 641.0, 887.2], ['2025-11-04T08:37:05', 241.5, 375.4, 474.0, 519.9, 771.3, 1047.9], ['2025-11-04T08:37:35', 240.6, 382.8, 480.7, 533.3, 842.5, 1265.3], ['2025-11-04T08:38:05', 243.9, 389.6, 492.5, 522.2, 578.7, 678.4]];

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

