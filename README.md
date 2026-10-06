# Ember-tabella

Table component for Ember built using ember-collection.

[![Test](https://github.com/arenoir/ember-tabella/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/arenoir/ember-tabella/actions/workflows/test.yml) [![Code Climate](https://codeclimate.com/github/arenoir/ember-tabella/badges/gpa.svg)](https://codeclimate.com/github/arenoir/ember-tabella)

## Demo

[arenoir.github.io/ember-tabella](https://arenoir.github.io/ember-tabella/)

## Features

- Incremental rendering via [ember-collection](https://github.com/emberjs/ember-collection)
- Custom components per cell and per header
- Optional fixed columns for horizontal scrolling
- Resizable columns
- Scroll tracking

## Compatibility

- Ember.js v4.4 or above
- Ember CLI v4.12 or above
- Node.js v18 or above

## Installation

`ember install ember-tabella`

### Styles

The base styles are written in Sass. With
[ember-cli-sass](https://github.com/adopted-ember-addons/ember-cli-sass)
installed, import them in `app/styles/app.scss`:

```scss
@import 'ember-tabella';
```

## Usage

Define your columns with the `Column` model:

```js
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Column from 'ember-tabella/models/column';

export default class ReportController extends Controller {
  @tracked sortedColumn = null;
  @tracked isSortReversed = false;

  columns = [
    Column.create({
      id: 'date',
      headerCellName: 'Date',
      width: 150,
      textAlign: 'text-align-left',
      sortProperties: ['date'],
      getContent(row) {
        return row.date.toDateString();
      },
    }),
    Column.create({
      id: 'close',
      headerCellName: 'Close',
      width: 100,
      contentPath: 'close',
    }),
  ];

  @action
  sort(column, desc) {
    this.sortedColumn = column;
    this.isSortReversed = desc;
    // re-sort this.model here
  }
}
```

Then render the table:

```hbs
<EmberTabella
  @columns={{this.columns}}
  @content={{this.model}}
  @numFixedColumns={{1}}
  @height={{500}}
  @rowHeight={{40}}
  @sortedColumn={{this.sortedColumn}}
  @isSortReversed={{this.isSortReversed}}
  @onColumnSort={{this.sort}}
/>
```

See [`tests/dummy/app`](tests/dummy/app) for a complete example.

### Arguments

| Argument | Description | Default |
| --- | --- | --- |
| `@columns` | Array of `Column` instances (`ember-tabella/models/column`). | `[]` |
| `@content` | Array of rows. Each row is passed to the column's `getContent`. | `[]` |
| `@numFixedColumns` | Number of columns, from the left, that stay fixed while the body scrolls horizontally. | `0` |
| `@height` | Total table height in pixels, including the header. | `400` |
| `@headerHeight` | Header row height in pixels. | `50` |
| `@rowHeight` | Body row height in pixels. | `30` |
| `@sortedColumn` | The `Column` to show as sorted. Only affects the sort indicator — sorting `@content` is up to you. | `null` |
| `@isSortReversed` | Whether `@sortedColumn` is shown as sorted descending. | `false` |
| `@onColumnSort` | Called as `(column, desc)` when a sortable header is clicked. | — |
| `@scrollLeft` | Controlled horizontal scroll position of the body. | `0` |
| `@scrollTop` | Controlled vertical scroll position of the body. | `0` |
| `@onScroll` | Called as `(scrollLeft, scrollTop)` when the body scrolls. When provided, the table no longer tracks scroll position itself, so pass the values back via `@scrollLeft` / `@scrollTop`. | — |

### Column properties

| Property | Description | Default |
| --- | --- | --- |
| `id` | Identifier for your own use (e.g. mapping a column to a sort query param). | — |
| `headerCellName` | Text shown in the header. | — |
| `contentPath` | Property path read from each row when `getContent` isn't overridden. | — |
| `getContent(row)` | Returns the cell value for a row. | reads `contentPath` |
| `width` | Column width in pixels. Updated in place when the column is resized. | `150` |
| `isResizable` | Shows a drag handle on the header to resize the column. | `true` |
| `sortProperties` | Any non-blank value makes the column sortable. | — |
| `textAlign` | CSS class applied to body cells. | `'text-align-right'` |
| `templateName` | Component used to render body cells. | `'ember-tabella/body-column'` |
| `headerTemplateName` | Component used to render the header cell. | `'ember-tabella/header-column'` |

### Custom cells

Set `templateName` (or `headerTemplateName`) to the name of your own
component. Body cell components receive `@column`, `@model`, `@width`,
`@index` and `@scrollLeft`. The simplest approach is to wrap the default cell:

```hbs
{{! app/components/price-cell.hbs }}
<EmberTabella::BodyColumn @column={{@column}} @model={{@model}} @width={{@width}} class="price" />
```

```js
Column.create({ headerCellName: 'Price', contentPath: 'price', templateName: 'price-cell' });
```

## Development

```bash
npm install
npm start              # dummy app at http://localhost:4200
npm run lint           # template and JS linting
npm run test:ember     # run the test suite
npx ember try:one ember-lts-4.4   # test against another Ember version
```

### Continuous integration

- **Test** (`.github/workflows/test.yml`) — lints and runs the tests on Node
  18, 20 and 22, then runs the Ember 4.4 and 4.12 LTS ember-try scenarios, on
  every push and pull request to `main`.
- **Deploy demo** (`.github/workflows/pages.yml`) — builds the dummy app and
  deploys it to GitHub Pages on every push to `main`.
- **Publish** (`.github/workflows/publish.yml`) — publishes `ember-tabella`
  to npm when a GitHub release is published. The package version is taken
  from the release tag (`v2.0.0` → `2.0.0`); pre-release tags such as
  `v2.0.0-beta.3` are published under the `beta` dist-tag. Requires an
  `NPM_TOKEN` repository secret.

## License

[MIT](LICENSE.md)
