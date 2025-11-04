
var myChart2 = echarts.init(document.getElementById('main_p'));

var data =  [['2025-11-04T08:39:20', 239.2, 383.8, 478.3, 523.3, 567.9, 814.2], ['2025-11-04T08:39:50', 240.9, 364.2, 439.1, 472.3, 626.7, 1025.1], ['2025-11-04T08:40:20', 242.8, 386.4, 490.3, 567.7, 784.1, 865.7], ['2025-11-04T08:40:50', 239.1, 375.4, 472.7, 525.3, 672.7, 855.4], ['2025-11-04T08:41:20', 240.3, 373.0, 467.3, 501.1, 611.7, 964.9], ['2025-11-04T08:41:50', 239.5, 360.1, 443.5, 465.1, 566.0, 699.6], ['2025-11-04T08:42:20', 241.6, 384.2, 486.0, 518.4, 615.6, 732.9], ['2025-11-04T08:42:50', 240.5, 372.7, 458.5, 490.2, 571.4, 1031.0], ['2025-11-04T08:43:20', 239.2, 381.9, 474.3, 514.3, 606.3, 784.7]];

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

