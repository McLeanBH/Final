import Ember from "ember";

export default Ember.Object.extend({
  init: function init() {
    this._map = Ember.Object.create();
  },

  get: function get(type, id) {
    var typeArray = this._getType(type);
    if (id) {
      /* SINGLE RECORD */
      return typeArray.findBy("__jsim_meta_id", id);
    } else {
      /* ALL RECORDS */
      return typeArray;
    }
  },

  set: function set(type, id, record) {
    var typeArray = this._getType(type);
    var cached = typeArray.findBy("__jsim_meta_id", id);
    if (cached) {
      cached.setProperties(record);
    } else {
      var v = record instanceof Ember.Object ? record : Ember.Object.create(record);
      v.__jsim_meta_id = id;
      typeArray.addObject(v);
    }
  },

  remove: function remove(type, record) {
    var typeArray = this._getType(type);
    if (typeof record !== "object") {
      // assume it's an id
      record = typeArray.findBy("__jsim_meta_id", record);
    }
    typeArray.removeObject(record);
  },

  clear: function clear(type) {
    var typeArray = this._getType(type);
    typeArray.splice(0, typeArray.length);
  },

  _getType: function _getType(type) {
    var typeArray = this._map.get(type);
    if (!typeArray) {
      this._map.set(type, Ember.A());
      typeArray = this._map.get(type);
    }
    return typeArray;
  }
});