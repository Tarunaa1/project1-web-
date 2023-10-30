const form = document.querySelector("form");
let firn = document.querySelector('#first');
let e2 = firn.nextElementSibling;
let lasn = document.querySelector('#last');
let e3 = lasn.nextElementSibling;
let email = document.querySelector('#email');
let e1 = email.nextElementSibling;
let city = document.querySelector('#city');
let e4 = city.nextElementSibling;
let pin = document.querySelector('#pincode');
let e5 = pin.nextElementSibling;
const submit = document.querySelector('#submit');

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const nameRegExp = /^[a-zA-Z ]+$/;
const pinReg = /^\d{6}$/ ;

window.addEventListener("load",()=>{
  const valid_e1 = email.value.length === 0 || emailRegExp.test(email.value);
  const valid_e2 = firn.value.length === 0 || nameRegExp.test(firn.value);
  const valid_e3 = lasn.value.length === 0 || nameRegExp.test(lasn.value);
  const valid_e4 = city.value.length === 0 || nameRegExp.test(city.value);
  const valid_e5 = pin.value.length === 0 || pinReg.test(pin.value);

  e1.style.display = valid_e1 ? "none" : "block";
  e2.style.display = valid_e2 ? "none" : "block";
  e3.style.display = valid_e3 ? "none" : "block";
  e4.style.display = valid_e4 ? "none" : "block";
  e5.style.display = valid_e5 ? "none" : "block";
});

submit.addEventListener("click",(event)=>{
  event.preventDefault();
  const valid_e1 = email.value.length === 0 || emailRegExp.test(email.value);
  const valid_e2 = firn.value.length === 0 || nameRegExp.test(firn.value);
  const valid_e3 = lasn.value.length === 0 || nameRegExp.test(lasn.value);
  const valid_e4 = city.value.length === 0 || nameRegExp.test(city.value);
  const valid_e5 = pin.value.length === 0 || pinReg.test(pin.value);
  let main = document.querySelector(".mainbox");

    if (!valid_e1){
        e1.style.display= "block";
        main.style.height = "580px";

    }
    else{
        e1.style.display= "none";
    }
    if (!valid_e2){
      e2.style.display= "block";
      main.style.height = "580px";
    }
    else{
        e2.style.display= "none";
    }
    if (!valid_e3){
      e3.style.display= "block";
      main.style.height = "580px";
    }
    else{
      e3.style.display= "none";
    }
    if (!valid_e4){
      e4.style.display= "block";
      main.style.height = "580px";
    }
    else{
      e4.style.display= "none";
    }

    if (!valid_e5){
      e5.style.display= "block";
      main.style.height = "580px";
    }
    else{
      e5.style.display= "none";
    }
});
