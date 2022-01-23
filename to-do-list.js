var app;
window.onload = () => {

app = new function() {
    this.el = document.getElementById('tasks');
    this.tasks = [];
    this.Count = function(data) {
        var el = document.getElementById('counter');
        var name = 'task';
        if (data) {
            if (data > 1) {
                name = 'tasks';
            }
            el.innerHTML =  data + ' ' + name + ' ❗';
        } else {
            el.innerHTML = 'no ' + name + '✔️';
        }
    };

    this.FetchAll = function() {
        var data = '';
        if (this.tasks.length > 0) {
            for (i = 0; i < this.tasks.length; i++) {
                data += '<tr>';
                data += '<td>' + this.tasks[i] + '</td>';
                data += '<td><button class="btn" onclick="app.Edit(' + i + ')">edit</button></td>';
                data += '<td><button class="btn" onclick="app.Delete(' + i + ')">delete</button></td>';
                data += '</tr>';
            }
        }
        this.Count(this.tasks.length);
        return this.el.innerHTML = data;
    };
    this.Add = function () {
        el = document.getElementById('add-task');
        var task = el.value;
        if (task) {
            this.tasks.push(task.trim());
            el.value = '';
            this.FetchAll();
        }
    };
    this.Edit = function (item) {
        var el = document.getElementById('edit-task');
        el.value = this.tasks[item];
        document.getElementById('vista').style.display = 'block';
        self = this;
        document.getElementById('saveEdit').onsubmit = function() {
            var task = el.value;
            if (task) {
                self.tasks.splice(item, 1, task.trim());
                self.FetchAll();
                CloseInput();
            }
        }
    };
    this.Delete = function (item) {
        this.tasks.splice(item, 1);
        this.FetchAll();
    };

}
app.FetchAll();
function CloseInput() {
document.getElementById('vista').style.display = 'none';

}


}