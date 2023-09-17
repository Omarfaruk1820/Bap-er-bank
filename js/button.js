document.getElementById('btn-submit').addEventListener('click',function(){
    //console.log('hello checked');
    const emailField=document.getElementById('user-email');
    const email=emailField.value;
    console.log(email);
    const passwordField=document.getElementById('user-password');
    const password=passwordField.value;
    console.log(password);
    if(email=='nishat@gamil.com'&& password=='omarfaruk'){
        window.location.href='http://127.0.0.1:5500/js/bank.html';
    }
    else{
        alert('tomi password vhule giso now backup');
    }

})