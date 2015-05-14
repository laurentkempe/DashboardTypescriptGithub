/// <reference path="../../typings/tsd.d.ts" />

module Dashboard.Models {
    
    export class User extends Backbone.Model {
    
       constructor (options? ){
           super(options);
           this.url = "https://api.github.com/users/" + this.get('username');
       }
       
       username : string;
    
        joinedDate() {
            return new Date(this.get('created_at')).toDateString();
        }
    }
}