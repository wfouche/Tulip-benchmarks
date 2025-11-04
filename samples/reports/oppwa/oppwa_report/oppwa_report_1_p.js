
var myChart2 = echarts.init(document.getElementById('main_p'));

var data =  [['2025-11-04T09:23:44', 252.8, 429.6, 569.6, 617.3, 720.6, 990.9], ['2025-11-04T09:24:14', 256.7, 512.6, 757.2, 963.4, 1346.9, 1671.9], ['2025-11-04T09:24:44', 243.1, 559.0, 1057.6, 1210.5, 1595.0, 4340.7], ['2025-11-04T09:25:14', 248.0, 572.4, 966.4, 1246.0, 2115.8, 2602.8], ['2025-11-04T09:25:44', 249.2, 541.6, 825.5, 1210.2, 1812.2, 2257.4], ['2025-11-04T09:26:14', 249.2, 497.3, 689.1, 751.4, 903.3, 2042.3], ['2025-11-04T09:26:44', 257.8, 477.4, 664.6, 745.2, 901.8, 1219.8], ['2025-11-04T09:27:14', 257.6, 516.0, 757.0, 912.2, 1119.8, 1415.9], ['2025-11-04T09:27:44', 259.6, 480.8, 652.0, 746.2, 1156.9, 1576.6]];

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

