define('ember-cli-jquery-ui/components/jqui-accordion/component', ['exports', 'ember', 'ember-cli-jquery-ui/mixins/jqui-widget'], function (exports, Ember, jquiWidget) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend(jquiWidget['default'], {
        uiType: 'accordion',
        uiOptions: ['active', 'animate', 'collapsible', 'disabled', 'event', 'header', 'heightStyle', 'icons'],
        uiEvents: ['activate', 'beforeActivate', 'create']
    });

});