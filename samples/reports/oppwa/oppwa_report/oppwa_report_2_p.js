
var myChart2 = echarts.init(document.getElementById('main_p'));

var data =  [['2025-11-04T09:29:00', 258.3, 477.4, 663.2, 744.7, 947.6, 1451.8], ['2025-11-04T09:29:30', 257.9, 464.7, 625.5, 665.3, 777.0, 1001.2], ['2025-11-04T09:30:00', 249.3, 445.8, 590.2, 641.7, 799.3, 1295.3], ['2025-11-04T09:30:30', 264.9, 591.1, 959.8, 1258.9, 1582.6, 2503.5], ['2025-11-04T09:31:00', 267.0, 528.5, 730.8, 821.1, 1066.6, 1524.1], ['2025-11-04T09:31:30', 270.3, 529.8, 737.8, 817.5, 1112.6, 1561.6], ['2025-11-04T09:32:00', 249.5, 569.0, 958.3, 1120.8, 1411.6, 1707.1], ['2025-11-04T09:32:30', 261.3, 602.0, 976.3, 1264.9, 1591.0, 2058.5], ['2025-11-04T09:33:00', 251.7, 499.9, 779.0, 948.4, 1182.7, 1366.9]];

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

