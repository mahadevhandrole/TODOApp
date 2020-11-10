export class Model{

    user;
    items;

    constructor()
    {
        this.user="mahadev";
        this.items=[ new ToDoItem("Buy Flowers",false),
                     new ToDoItem("Get Shows",false),
                     new ToDoItem("Collect Tickets",false),
                     new ToDoItem("call jeo",false)];

    }
}

export class ToDoItem{

    action;
    done;

    constructor(action,done){
        this.action=action;
        this.done=done;

    }



}