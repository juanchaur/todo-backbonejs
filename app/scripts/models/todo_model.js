/**
 * Model of the item
 * It has the following attributes: title, order and done
 * Has a toggle function that changes the attribute done of the item
 * @author: Juan Chaur
 * @param  {Module} Backbone
 * @return {Module}          Model of the Todo App
 */
define( ['backbone', 'collections/todo_list'], function (Backbone, Todos) {

    var Todo = Backbone.Model.extend({
        defaults: function () {
            return {
                title: "empty todo...",
                //order: Todos.nextOrder(),
                done: false
            };
        },
        // Ensure that each todo created has `title`.
        initialize: function() {
            if (!this.get("title")) {
                this.set({"title": this.defaults().title});
            }
        },
        toggle: function () {
            this.save( { done: !this.get( 'done' ) } );
        }
    });//Todo <-- Backbone.Model

    return Todo;
} );
