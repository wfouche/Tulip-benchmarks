
var myChart1 = echarts.init(document.getElementById('main'));

var data =  [['2025-11-04T08:39:20', 10.0, 0.0], ['2025-11-04T08:39:50', 10.0, 0.0], ['2025-11-04T08:40:20', 10.0, 0.0], ['2025-11-04T08:40:50', 19.7, 0.0], ['2025-11-04T08:41:20', 20.1, 0.0], ['2025-11-04T08:41:50', 20.0, 0.0], ['2025-11-04T08:42:20', 29.9, 0.0], ['2025-11-04T08:42:50', 29.9, 0.0], ['2025-11-04T08:43:20', 30.1, 0.0]];

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

