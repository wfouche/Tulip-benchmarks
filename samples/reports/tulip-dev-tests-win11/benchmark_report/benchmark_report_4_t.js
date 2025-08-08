
var myChart1 = echarts.init(document.getElementById('main'));

var data =  [['2025-08-08T09:12:50', 99.4, 0.0], ['2025-08-08T09:13:20', 99.8, 0.0], ['2025-08-08T09:13:50', 99.8, 0.0], ['2025-08-08T09:14:20', 99.9, 0.0]];

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

