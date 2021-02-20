class Todos {
    constructor(){
        this.todos = []
    }
    list(){
        return[...this.todos]
    }
    add(title){
        let todo = {
            title: title,
            completed: false,
        }
        this.todos.push(todo)
    }
    complete(title){
        let todoFound = false;
        this.todos.forEach((todo) =>{
            if(todo.title == title){
                todo.completed = true;
                return;
            }
        });
        if(!todoFound){
            throw new Error(`No TODO was found with the title: "${title}"`);
        }
    }
    saveToFile(callback){
        let  fileContents = 'Title,Completed\n';
        this.todos.forEach((todo) => {
            fileContents += `${todo.title}, ${todo.completed}\n`
        });
        false.writeFile("this.todos.csv", fileContents, callback);
    }
}
module.exports = Todos;