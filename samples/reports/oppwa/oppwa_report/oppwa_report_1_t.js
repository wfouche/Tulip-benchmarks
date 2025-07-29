
var myChart1 = echarts.init(document.getElementById('main'));

var data =  [['2025-07-22T10:39:44', 100.0, 0.0], ['2025-07-22T10:40:14', 100.0, 0.0], ['2025-07-22T10:40:44', 100.0, 0.0], ['2025-07-22T10:41:14', 100.0, 0.0], ['2025-07-22T10:41:44', 100.0, 0.0], ['2025-07-22T10:42:14', 100.0, 0.0], ['2025-07-22T10:42:44', 100.0, 0.0], ['2025-07-22T10:43:14', 100.0, 0.0], ['2025-07-22T10:43:44', 100.0, 0.0]];

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

