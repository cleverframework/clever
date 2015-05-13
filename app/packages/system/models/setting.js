'use strict';

// Module dependencies.
let mongoose = require('mongoose');
let Schema  = mongoose.Schema;
let _ = require('lodash');

// Getter
let escapeProperty = function(value) {
  return _.escape(value);
};

// Schema
let SettingSchema = new Schema({
  key: {
    type: String,
    required: true,
    get: escapeProperty
  },
  value: {}
});

// Methods
SettingSchema.methods = {};

mongoose.model('Setting', SettingSchema);
