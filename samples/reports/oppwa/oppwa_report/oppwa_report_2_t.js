
var myChart1 = echarts.init(document.getElementById('main'));

var data =  [['2025-11-04T09:29:00', 89.9, 0.0], ['2025-11-04T09:29:30', 90.2, 0.0], ['2025-11-04T09:30:00', 89.7, 0.0], ['2025-11-04T09:30:30', 99.1, 0.0], ['2025-11-04T09:31:00', 100.0, 0.0], ['2025-11-04T09:31:30', 100.5, 0.0], ['2025-11-04T09:32:00', 109.5, 0.0], ['2025-11-04T09:32:30', 109.9, 0.0], ['2025-11-04T09:33:00', 109.9, 0.0]];

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

