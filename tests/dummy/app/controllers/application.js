/* eslint-disable ember/no-computed-properties-in-native-classes*/
import { sort } from '@ember/object/computed';
import { A } from '@ember/array';
import Controller from '@ember/controller';
import EmberObject from '@ember/object';
import { isEqual } from '@ember/utils';
import ColumnDefinition from 'ember-tabella/models/column';
import { randomNumber, randomDate } from '../utils/random';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MaterialsController extends Controller {
  queryParams = ['_sort', '_desc'];
  @tracked _sort = '';
  @tracked _desc = false;

  tableColumns = A([
    ColumnDefinition.create({
      id: 'date',
      width: 150,
      textAlign: 'text-align-left',
      headerCellName: 'Date',
      sortProperties: ['date', 'high:desc'],
      getContent: function (row) {
        return row.date.toDateString();
      },
    }),
    ColumnDefinition.create({
      id: 'open',
      width: 75,
      headerCellName: 'Open',
      isResizable: true,
      getContent: function (row) {
        return row.open.toFixed(2);
      },
    }),
    ColumnDefinition.create({
      id: 'high',
      width: 200,
      headerCellName: 'High',
      sortProperties: ['high'],
      getContent: function (row) {
        return row.high.toFixed(2);
      },
    }),
    ColumnDefinition.create({
      id: 'low',
      width: 200,
      headerCellName: 'Low',
      getContent: function (row) {
        return row.low.toFixed(2);
      },
    }),
    ColumnDefinition.create({
      id: 'close',
      width: 200,
      headerCellName: 'Close',
      getContent: function (row) {
        return row.close.toFixed(2);
      },
    }),
  ]);

  get content() {
    let content = A([]);
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
  }

  get sortedColumn() {
    return this.tableColumns.findBy('id', this._sort);
  }

  get sortProperties() {
    if (this.sortedColumn) {
      return this.sortedColumn.sortProperties;
    }

    return [];
  }

  @sort('content', 'sortProperties') sorted;

  get tableContent() {
    if (isEqual(this._desc, false)) {
      return this.sorted.toArray().reverse();
    }

    return this.sorted;
  }

  @action
  sort(column, desc) {
    let id = column.get('id');
    if (id) {
      this.transitionToRoute({ queryParams: { _sort: id, _desc: desc } });
    }
  }
}
