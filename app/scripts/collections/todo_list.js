

define( [
    'backbone',
    'backbone.localstorage',
    'models/todo_model'
], function ( Backbone, Store, Todo ) {

    var TodoList = Backbone.Collection.extend({
        /**
         * Reference to this collection's model
         */
        model: Todo,

        /**
         * Save all the todo items under the "todos-backbone" namespace
         */
        localStorage: new Store( "todos-backbone" ),

        /**
         * Filter down the list of all todo items that are finished
         * @author: Juan Chaur
         */
        done: function () {
            //Where: collection.where
            //Return an array of all the models in a collection that
            //match the passed attributes.
            return this.where( { done: true } );
        },

        /**
         * Filter down the list to only todo items that are still not finished
         * @author: Juan Chaur
         */
        remaining: function () {
            //Without: Underscore function
            //Returns a copy of the array with all instances of the values removed.
            //_.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
            //=> [2, 3, 4]
            return this.without.apply( this, this.done() );
        },

        /**
         * Keep the Todos in sequencial order, despite being saved by unordered
         * GUID in the database. This generates the next order number for the new items
         * @author: Juan Chaur
         * @return {[type]} [description]
         */
        nextOrder: function () {
            if ( !this.length ) {
                return 1;
            }
            return this.last().get('order') + 1;
        },
        comparator: 'order'
    });

    /**
     * Create the global collection of Todos
     */
    var Todos = new TodoList();

    return Todos;

} );
