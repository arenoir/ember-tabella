// BEGIN-SNIPPET simple-controller
import Ember from 'ember';
import ColumnDefinition from 'ember-tabella/models/column';
import {randomNumber, randomDate} from '../utils/random';

const {computed, isEqual} = Ember;

export default Ember.Controller.extend({
  queryParams: ['_sort', '_desc'],
  _sort: '',
  _desc: false,
  
  tableColumns: Ember.computed(function() {
    var dateColumn = ColumnDefinition.create({
      id: 'date',
      width: 150,
      textAlign: 'text-align-left',
      headerCellName: 'Date',
      sortProperties:['date', 'high:desc'],
      getContent: function(row) {
        return row.get('date').toDateString();
      }
    });
    var openColumn = ColumnDefinition.create({
      id: 'open',
      width: 75,
      headerCellName: 'Open',
      isResizable: true,
      getContent: function(row) {
        return row.get('open').toFixed(2);
      }
    });
    var highColumn = ColumnDefinition.create({
      id: 'high',
      width: 200,
      headerCellName: 'High',
      sortProperties:['high'],
      getContent: function(row) {
        return row.get('high').toFixed(2);
      }
    });
    var lowColumn = ColumnDefinition.create({
      id: 'low',
      width: 200,
      headerCellName: 'Low',
      getContent: function(row) {
        return row.get('low').toFixed(2);
      }
    });
    var closeColumn = ColumnDefinition.create({
      id: 'close',
      width: 200,
      headerCellName: 'Close',
      getContent: function(row) {
        return row.get('close').toFixed(2);
      }
    });
    return Ember.A([dateColumn, openColumn, highColumn, lowColumn, closeColumn]);
  }),

  content: computed(function() {
    var content = Ember.A([]);
    var date;
    for (var i = 0; i < 5000; i++) {
      date = randomDate(new Date(2000, 1, 5), new Date(2012, 2, 2));
      content.push(Ember.Object.create({
        date: date,
        open: randomNumber(100) - 50,
        high: randomNumber(100) - 50,
        low: randomNumber(100) - 50,
        close: randomNumber(100) - 50,
        volume: randomNumber(100) * 1000000
      }));
    }
    return content;
  }),

  sortedColumn: computed('_sort', 'tableColumns.@each.id', function() { 
    let sort    = this.get('_sort');
    let columns = this.get('tableColumns');
    
    return columns.findBy('id', sort);
  }),

  sortProperties: computed('sortedColumn', function() { 
    let column = this.get('sortedColumn');

    if (column) {
      return column.get('sortProperties');
    }

    return [];
  }),

  sorted: computed.sort('content', 'sortProperties'),

  tableContent: computed('sorted.[]', '_desc', function() {
    let sorted = this.get('sorted');
    let desc   = this.get('_desc');

    if (isEqual(desc, false)) {
      return sorted.toArray().reverse();
    }

    return sorted;
  }),


  actions: {
    sort(column, desc) {
      let id = column.get('id');

      if (id) {
        this.transitionToRoute({ queryParams: { _sort: id, _desc: desc }});
      }
    }
  }
});