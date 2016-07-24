import Ember from 'ember';

export default Ember.Component.extend({
  datumLine: [{
    values: [
      {x: 2010, y: 1079.24},
      {x: 2011, y: 1002.82},
      {x: 2012, y: 947.16},
      {x: 2013, y: 845.25},
      {x: 2014, y: 1050.25}
    ]
  }],

  options: {
    chart: {
      width: 982,
      height: 387,
      color: ['#428bca'],
      title: 'Gasto por habitante'
    },
    yAxis: {
      tickFormat: typeof FastBoot === 'undefined' ? d3.format(',s') : null,
      showMaxMin: false
    },
    tooltip: {
      gravity: 's',
      snapDistance: 10
    },
  }

});
