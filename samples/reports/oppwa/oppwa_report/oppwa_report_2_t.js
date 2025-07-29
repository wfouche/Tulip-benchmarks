
var myChart1 = echarts.init(document.getElementById('main'));

var data =  [['2025-07-22T10:44:45', 30.0, 0.0], ['2025-07-22T10:45:15', 30.0, 0.0], ['2025-07-22T10:45:45', 30.0, 0.0], ['2025-07-22T10:46:15', 70.0, 0.0], ['2025-07-22T10:46:45', 70.0, 0.0], ['2025-07-22T10:47:15', 70.0, 0.0], ['2025-07-22T10:47:45', 110.0, 0.067], ['2025-07-22T10:48:15', 110.0, 0.0], ['2025-07-22T10:48:45', 110.0, 0.0]];

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

