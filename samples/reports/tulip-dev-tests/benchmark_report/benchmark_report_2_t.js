
var myChart1 = echarts.init(document.getElementById('main'));

var data =  [['2025-08-08T07:46:11', 1441741.2, 0.0], ['2025-08-08T07:47:11', 1437224.8, 0.0], ['2025-08-08T07:48:11', 1430129.7, 0.0], ['2025-08-08T07:49:11', 1437435.0, 0.0]];

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

