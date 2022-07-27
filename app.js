let count = 0;
document.getElementById('add').addEventListener('click', function () {
    count++;
    document.getElementById('count').innerText = count;
})


document.getElementById('minus').addEventListener('click', function () {
    if (count > 0) {
        count--;
        document.getElementById('count').innerText = count;
    }
});

// make to do list 

function addMore() {
    document.getElementById('error').innerHTML = '';

    let name = document.getElementById('name').value;

    if (name == '') {
        document.getElementById('error').innerHTML = 'please enter value';
    }
    else {
        let box = document.getElementById('box');
        let li = document.createElement('li');
        li.textContent = name;
        box.appendChild(li);

    }
    document.getElementById('name').value = '';
}