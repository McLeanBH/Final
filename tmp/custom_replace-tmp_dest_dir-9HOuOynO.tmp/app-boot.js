/* jshint ignore:start */

define('final/config/environment', ['ember'], function(Ember) {
  var prefix = 'final';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("final/tests/test-helper");
} else {
  require("final/app")["default"].create({"filepickerKey":"A4kxhmkh4TVYjc7Kv3IGQz","name":"final","version":"0.0.0.e79cb5cd"});
}

/* jshint ignore:end */