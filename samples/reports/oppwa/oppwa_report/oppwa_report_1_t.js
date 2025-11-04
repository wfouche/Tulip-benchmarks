
var myChart1 = echarts.init(document.getElementById('main'));

var data =  [['2025-11-04T09:23:44', 100.0, 0.0], ['2025-11-04T09:24:14', 99.2, 0.0], ['2025-11-04T09:24:44', 100.1, 0.0], ['2025-11-04T09:25:14', 98.8, 0.0], ['2025-11-04T09:25:44', 101.9, 0.0], ['2025-11-04T09:26:14', 99.8, 0.0], ['2025-11-04T09:26:44', 99.8, 0.0], ['2025-11-04T09:27:14', 99.9, 0.0], ['2025-11-04T09:27:44', 100.2, 0.0]];

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

