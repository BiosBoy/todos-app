import { saveAs } from 'file-saver'

let TodoSaver = (save) => {
    let makeTxtSave = (save) => {
        let arr = ['This your own todos list on the day, don\'t forgot it! ;)', '\n N Task Status'];
        save.iteams.todos.forEach(todo => {
            arr.push(todo.text + ' ' + todo.status)
        });

        let str = arr.join(', ');
        let regStr = str.replace(/([^y]),/g,"$1\n");
        return regStr;
    }

    let blob = new Blob([
        makeTxtSave(save)], 
        {type: "application/pdf; charset = utf-8"}); 
        saveAs(blob, "todos.doc");
}


export default TodoSaver;