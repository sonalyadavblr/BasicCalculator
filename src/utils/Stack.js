
export default class Stack
{
    //implementation of stack through array
    constructor()
    {
        this.items = [];
    }

    //push() function
    push(elements)
    {
         this.items.push(elements);
    }
    //isEmpty() function
    isEmpty()
    {
        return this.items.length === 0;
    }

    //check isEmpty Before calling this function
    pop()
    {
        return this.items.pop();    
    }

    //check isEmpty Before calling this function
    top()
    {
        return this.items[this.items.length - 1];
    }
}