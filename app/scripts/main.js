/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        //Updated localstorage > bower install backbone.localstorage#1.1.7
        'backbone.localstorage': '../bower_components/backbone.localstorage/backbone.localStorage',
        'text': '../bower_components/requirejs-text/text'
    }
});

require([
    'jquery', 'views/todo_app_view'
], function ( $, TodoApp ) {
    $( function () {
        new TodoApp;
    });
    //Backbone.history.start();
});
