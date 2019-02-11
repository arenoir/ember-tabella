# Ember-tabella

Table component for ember built using ember-collection.

[![Build Status](https://travis-ci.org/arenoir/ember-tabella.svg?branch=master)](https://travis-ci.org/arenoir/ember-tabella) [![Code Climate](https://codeclimate.com/github/arenoir/ember-tabella/badges/gpa.svg)](https://codeclimate.com/github/arenoir/ember-tabella)

## Demo

[arenoir.github.io/ember-tabella](http://arenoir.github.io/ember-tabella/)

## Features

- Incremental rendering via [ember-collection](https://github.com/emberjs/ember-collection)
- Custom teplates per cell
- Optional Fixed columns for horizontal scrolling.
- Resizable columns
- Scroll Tracking

## Installation

`ember install ember-tabella`


## Usage


### ember-tabella

```      
{{ember-tabella
  columns=columns
  content=data
  numFixedColumns="2"
  sortedColumn=sortedColumn
  isSortReversed=_desc
  scrollLeft=scrollLeft
  scrollTop=scrollTop
  onColumnSort=(action "sort")
  onCellClick=(action "columnClicked")
}}
```

#### columns

  A array of objects extending from `ember-tabella/models/columns.js`

*Default:* `[]`

#### content

  A array of objects extending from Ember Object. Usually an ember-data model.

*Default:* `[]`

#### numFixedColumns

  The number of columns from the left that should remain fixed.

*Default:* `null`

#### sortedColumn

  The column id that should be shown as sorted.

*Note:* Only used to show content is sorted.
*Default:* `null`

#### isSortReversed

  Is the content ordered in descending order.

*Default:* `null`

#### scollLeft

  The scollLeft postion of the table body.

*Default:* `0`

#### scollTop

  The scollTop postion of the table.

*Default:* `0`


## Dependencies

* ember >= 2.8
* [ember-collection](https://github.com/emberjs/ember-collection)
