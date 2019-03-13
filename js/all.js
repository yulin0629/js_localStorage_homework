// assign dom
var todo_jobs = JSON.parse(localStorage.getItem('todo_jobs')) || [];
var btn_add = document.getElementById('add-button');
var list = document.getElementById('list');

// regist event listener
btn_add.addEventListener('click', addData);
list.addEventListener('click', removeData);

// update list
updateList();

function addData(e) {
    var inputStr = document.getElementById('todo').value;
    if(!inputStr) {
        return;
    }
    e.preventDefault();
    todo_jobs.push(inputStr);
    updateList();
    localStorage.setItem('todo_jobs', JSON.stringify(todo_jobs));
}

function removeData(e) {
    if (e.target.nodeName != 'A') return;
    e.preventDefault();

    var index = e.target.getAttribute('data-index');
    todo_jobs.splice(index, 1);
    localStorage.setItem('todo_jobs', JSON.stringify(todo_jobs));
    updateList();
}

function updateList() {
    list.innerHTML = '';
    var length = todo_jobs.length;
    for (var i = 0; i < length; i++) {
        var a = document.createElement('a');
        var t = document.createTextNode(' ' + todo_jobs[i]);
        a.setAttribute('href', '');
        a.setAttribute('data-index', i);
        a.textContent = '刪除';

        var li = document.createElement('li');
        li.appendChild(a);
        li.appendChild(t);
        

        list.appendChild(li);
    }
}