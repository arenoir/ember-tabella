/* eslint-disable ember/no-classic-classes */
/* eslint-disable ember/no-actions-hash */

import { sort } from '@ember/object/computed';
import { A } from '@ember/array';
import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';
import { isEqual } from '@ember/utils';
import ColumnDefinition from 'ember-tabella/models/column';
import { randomNumber, randomDate } from '../utils/random';

export default Controller.extend({
  queryParams: ['_sort', '_desc'],
  _sort: '',
  _desc: false,

  tableColumns: computed(function () {
    return A([
      ColumnDefinition.create({
        id: 'date',
        width: 150,
        textAlign: 'text-align-left',
        headerCellName: 'Date',
        sortProperties: ['date', 'high:desc'],
        getContent: function (row) {
          return row.get('date').toDateString();
        },
      }),
      ColumnDefinition.create({
        id: 'open',
        width: 75,
        headerCellName: 'Open',
        isResizable: true,
        getContent: function (row) {
          return row.get('open').toFixed(2);
        },
      }),
      ColumnDefinition.create({
        id: 'high',
        width: 200,
        headerCellName: 'High',
        sortProperties: ['high'],
        getContent: function (row) {
          return row.get('high').toFixed(2);
        },
      }),
      ColumnDefinition.create({
        id: 'low',
        width: 200,
        headerCellName: 'Low',
        getContent: function (row) {
          return row.get('low').toFixed(2);
        },
      }),
      ColumnDefinition.create({
        id: 'close',
        width: 200,
        headerCellName: 'Close',
        getContent: function (row) {
          return row.get('close').toFixed(2);
        },
      }),
    ]);
  }),

  content: computed(function () {
    const content = A([]);
    let date;
    for (var i = 0; i < 5000; i++) {
      date = randomDate(new Date(2000, 1, 5), new Date());
      content.push(
        EmberObject.create({
          date: date,
          open: randomNumber(100) - 50,
          high: randomNumber(100) - 50,
          low: randomNumber(100) - 50,
          close: randomNumber(100) - 50,
          volume: randomNumber(100) * 1000000,
        })
      );
    }
    return content;
  }),

  sortedColumn: computed('_sort', 'tableColumns.@each.id', function () {
    let sort = this._sort;
    let columns = this.tableColumns;

    return columns.findBy('id', sort);
  }),

  sortProperties: computed('sortedColumn', function () {
    let column = this.sortedColumn;

    if (column) {
      return column.get('sortProperties');
    }

    return [];
  }),

  sorted: sort('content', 'sortProperties'),

  tableContent: computed('sorted.[]', '_desc', function () {
    let sorted = this.sorted;
    let desc = this._desc;

    if (isEqual(desc, false)) {
      return sorted.toArray().reverse();
    }

    return sorted;
  }),

  actions: {
    sort(column, desc) {
      let id = column.get('id');
      if (id) {
        this.transitionToRoute({ queryParams: { _sort: id, _desc: desc } });
      }
    },
  },
});
