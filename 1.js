const body = document.querySelector('#body');
const main = document.querySelector('#main');
const myform = document.querySelector('#myform')
const ul = document.querySelector('ul');

const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const btn = document.querySelector('#btn');
const users = document.querySelector('#users');

const fname_error = document.querySelector('#fname-error');
const lname_error = document.querySelector('#lname-error');
const email_error = document.querySelector('#email-error');

const save = document.querySelector('#save');


body.addEventListener('submit' , onsubmit);

function onsubmit(s){
    s.preventDefault();
    if (fname.value === '')
    {
       fname_error.innerHTML = ("Enter you first name!");
       fname_error.classList.add('fname-error');
       setTimeout(() => fname_error.remove(), 1000);  
    }
    else  if (lname.value === '')
    {
       lname_error.innerHTML = ("Enter you last name!");
       lname_error.classList.add('lname-error'); 
       setTimeout(() => lname_error.remove(), 1000);
    }
    else if (email.value === ''){
        email_error.innerHTML = ("Enter you email!");
        email_error.classList.add('email-error');
        setTimeout(() => email_error.remove(), 1000);
    }
    else{
        add();
    }
}


function add(){
    const li = document.createElement('li');
    const close = document.createElement('div');
    const edit = document.createElement('div');
    close.classList.add('close');
    edit.classList.add('edit');
    let data = [fname.value, lname.value, email.value];
    li.appendChild(document.createTextNode(data));

    edit.appendChild(document.createTextNode('Edit'));
    close.appendChild(document.createTextNode('Delete'));
    users.appendChild(li);
    li.appendChild(close);
    li.appendChild(edit);
    fname.value = '';
    lname.value = '';
    email.value = '';

    close.onclick = function(){
        li.remove();
    };
    edit.onclick = function(){
            btn.classList.toggle('btn-remove')
            fname.value = data[0];
            lname.value = data[1];
            email.value = data[2];
            save.classList.toggle('btn');
            save.onclick = function(){
                const newdata = document.createTextNode(`${fname.value},${lname.value},${email.value}`);
                li.replaceChild(newdata,li.childNodes[0]);
                save.classList.toggle('btn')
                fname.value = '';
                lname.value = '';
                email.value = '';   
                btn.classList.toggle('btn-remove');      
            }
    }
}
