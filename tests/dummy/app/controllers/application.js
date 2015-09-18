// BEGIN-SNIPPET simple-controller
import Ember from 'ember';
import ColumnDefinition from 'ember-tabella/models/column';
import {randomNumber, randomDate} from '../utils/random';

export default Ember.Controller.extend({
  tableColumns: Ember.computed(function() {
    var dateColumn = ColumnDefinition.create({
      width: 150,
      textAlign: 'text-align-left',
      headerCellName: 'Date',
      getContent: function(row) {
        return row.get('date').toDateString();
      }
    });
    var openColumn = ColumnDefinition.create({
      width: 75,
      headerCellName: 'Open',
      isResizable: true,
      getContent: function(row) {
        return row.get('open').toFixed(2);
      }
    });
    var highColumn = ColumnDefinition.create({
      width: 200,
      headerCellName: 'High',
      getContent: function(row) {
        return row.get('high').toFixed(2);
      }
    });
    var lowColumn = ColumnDefinition.create({
      width: 200,
      headerCellName: 'Low',
      getContent: function(row) {
        return row.get('low').toFixed(2);
      }
    });
    var closeColumn = ColumnDefinition.create({
      width: 200,
      headerCellName: 'Close',
      getContent: function(row) {
        return row.get('close').toFixed(2);
      }
    });
    return [dateColumn, openColumn, highColumn, lowColumn, closeColumn];
  }),

  tableContent: Ember.computed(function() {
    var content = [];
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
    // return new Ember.RSVP.Promise(function(resolve){
    //   setTimeout(function(){ 
    //     resolve(content);
    //   }, 500); // 3 second delay, wooh, your server is slow!!!
    // });
  })
});