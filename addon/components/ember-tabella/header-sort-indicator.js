import Component from '@glimmer/component';

export default class EmberTabellaSortIndicator extends Component {
  get sortClass() {
    let sort = this.args.sort;

    if (sort) {
      return `ember-tabella__header-sort-indicator--${sort}`;
    } else {
      return '';
    }
  }

  get content() {
    let sort = this.args.sort;

    switch (sort) {
      case 'desc':
        return '↓';
      case 'asc':
        return '↑';
      default:
        return '↕';
    }
  }
}
