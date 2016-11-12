var contactForm = document.getElementById('contactForm');

try {
  contactForm.addEventListener('submit', sendContact, false);
}catch(e){
  //do nothing if no contactForm
}

function sendContact(e){
  e.preventDefault();
  var inputCont = contactForm.querySelector('.contactInputs');
  var inputs = inputCont.querySelectorAll('input, textarea');
  var button = inputCont.querySelector('button');

  var req = new XMLHttpRequest();
  req.open('POST','//formspree.io/aftrama@gmail.com', true );
  req.setRequestHeader('accept', 'application/json');
  //req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  var data = new FormData();

  for (let i = 0; i<inputs.length; i++) {
    let inp = inputs[i];
    //e.g. ('name', 'bob')
    data.append(inp.attributes.id.nodeValue, inp.value);
  }

  req.onreadystatechange = function(){
    var resText;
    var contactErr = document.getElementById('contactErr');

    if(req.readyState === 4){
      if(req.status === 200){
        contactForm.classList.add('formSent');
        contactForm.classList.remove('hasError');
        button.setAttribute('disabled', true);
        button.textContent = 'Sent!';
      }else{
        resText = (JSON.parse(req.responseText)).error;
        contactErr.textContent = 'Sorry, but there\'s an error. ' + resText;
        contactForm.classList.add('hasError');
      }
    }
  };
  req.send(data);
}
