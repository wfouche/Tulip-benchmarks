
var myChart1 = echarts.init(document.getElementById('main'));

var data =  [['2025-11-04T08:34:05', 30.1, 0.0], ['2025-11-04T08:34:35', 29.9, 0.0], ['2025-11-04T08:35:05', 29.9, 0.0], ['2025-11-04T08:35:35', 30.2, 0.0], ['2025-11-04T08:36:05', 29.8, 0.0], ['2025-11-04T08:36:35', 30.0, 0.0], ['2025-11-04T08:37:05', 29.9, 0.0], ['2025-11-04T08:37:35', 30.1, 0.0], ['2025-11-04T08:38:05', 30.0, 0.0]];

var option = {
  legend: {},
  tooltip: {
    trigger: 'axis',
  },
  dataset: {
    source:data,
    dimensions: ['timestamp', 'sensor1', 'sensor2'],
  },
  xAxis: { type: 'time' },
  yAxis: { },
  series: [
  {
     name: 'Actions/s',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor1' // refer sensor 1 value 
     }
  },{
     name: 'Failures/s',
     type: 'line',
     smooth: true,
     encode: {
       x: 'timestamp',
       y: 'sensor2'
  }
}]
};
myChart1.setOption(option);

