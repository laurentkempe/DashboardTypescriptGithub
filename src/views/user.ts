/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../models/user.ts" />

module Dashboard.Views {
    
    export class User extends Backbone.View<Dashboard.Models.User> {
    
        template: (json, options?) => string;
        
        constructor (options? ) {
            
            this.tagName = 'div';
            this.template = _.template($('#userTemplate').html());
            
            super(options);              
        }
            
        render() : Backbone.View<Dashboard.Models.User> {
            var template = this.template( this.model.toJSON() );
            this.$el.html(template);
            return this;
        }
    }   
}