let btn = document.querySelector('.btn');
let alert_box = document.querySelector('.alert')
let alert_box1 = document.querySelector('.alert1')
let count = 0;


btn.onclick = function () {
    let value = document.querySelector('.context input').value;
    let h3 = document.createElement('h3');
    let div = document.createElement('div');
    let button = document.createElement('button');
    h3.innerHTML = value
    button.innerHTML = 'Delete'
    button.className = 'btn btn-danger'

   div.append(h3,button)
    div.className = 'box d-flex justify-content-between'

    document.querySelector('#list').appendChild(div);
    count++;
    
    if(count>0){
        document.querySelector('.count').innerHTML = `${count} TASK-iz var`
       
    }
   


    alert_box.classList.remove('d-none');
    

    setTimeout(() => {
        alert_box.classList.add('d-none');
    }, 1000);

   
button.onclick = function(){
document.querySelector('#list').removeChild(div)
count--;
if(count>=0){
    document.querySelector('.count').innerHTML = `${count} TASK-iz var`
   
}

alert_box1.classList.remove('d-none');
setTimeout(() => {
    alert_box1.classList.add('d-none');
}, 2000);

}

}