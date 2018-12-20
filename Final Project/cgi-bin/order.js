

var orderForm = document.getElementById('order-form');

var hintFirstName = document.getElementById('hint-first-name');
var inpFirstName = document.getElementById('first-name');

var hintLastName = document.getElementById('hint-last-name');
var inpLastName = document.getElementById('last-name');

var hintAddr1 = document.getElementById('hint-address-1');
var inpAddr1 = document.getElementById('address-1');

var hintAddr2 = document.getElementById('hint-address-2');
var inpAddr2 = document.getElementById('address-2');

var hintEmail = document.getElementById('hint-email');
var inpEmail = document.getElementById('email');

var hintTel = document.getElementById('hint-tel');
var inpTel = document.getElementById('tel');

var hintCardNo = document.getElementById('hint-card-no');
var inpCardNo = document.getElementById('card-no');


function validateForm() {

    var res = true;

    var firstName = inpFirstName.value;
    console.log('FIRSTNAME', firstName);
    if (firstName == null) {
        hintFirstName.innerText = 'First Name must contain at least 2 characters';
        res = false;
    } else {
        if (firstName.trim().length < 2) {
            hintFirstName.innerText = 'First Name must contain at least 2 characters';
            res = false;
        } else {
            hintFirstName.innerText = '';
        }
    }

    var lastName = inpLastName.value;
    console.log('LASTNAME', lastName);
    if (lastName == null) {
        hintLastName.innerText = 'Last Name must contain at least 2 characters';
        res = false;
    } else {
        if (lastName.trim().length < 2) {
            hintLastName.innerText = 'Last Name must contain at least 2 characters';
            res = false;
        } else {
            hintLastName.innerText = '';
        }
    }

    var addr1 = inpAddr1.value;
    console.log('ADDR1', addr1);
    if (addr1 == null) {
        hintAddr1.innerText = 'Address #1 must contain at least 10 characters';
        res = false;
    } else {
        if (addr1.trim().length < 10) {
            hintAddr1.innerText = 'Address #1 must contain at least 10 characters';
            res = false;
        } else {
            hintAddr1.innerText = '';
        }
    }

    var addr2 = inpAddr2.value;
    console.log('ADDR2', addr2);
    if (addr2 == null) {
        hintAddr2.innerText = 'Address #2 must contain at least 10 characters';
        res = false;
    } else {
        if (addr2.trim().length < 10) {
            hintAddr2.innerText = 'Address #2 must contain at least 10 characters';
            res = false;
        } else {
            hintAddr2.innerText = '';
        }
    }

    var email = inpEmail.value;
    console.log('EMAIL', email);
    if (email == null) {
        hintEmail.innerText = 'Email is not in format of X@X.X';
        res = false;
    } else {
        console.log(/\S+@\S+\.\S+/.test(email.trim()));
        if (/\S+@\S+\.\S+/.test(email.trim())) {
            hintEmail.innerText = '';
        } else {
            hintEmail.innerText = 'Email is not in format of X@X.X';
            res = false;
        }
    }

    var tel = inpTel.value;
    console.log('TEL', tel);
    if (tel == null) {
        hintTel.innerText = 'Tel is not in format of XXX-XXX-XXXX';
        res = false;
    } else {
        if (/\d{3}-\d{3}-\d{4}/.test(tel.trim())) {
            hintTel.innerText = '';
        } else {
            hintTel.innerText = 'Tel is not in format of XXX-XXX-XXXX';
            res = false;
        }
    }

    var cardNo = inpCardNo.value;
    console.log('CARD NO', cardNo);
    if (cardNo == null) {
        hintCardNo.innerText = 'Card No must contain 16 digits';
        res = false;
    } else {
        if (/\d{16}/.test(cardNo.trim())) {
            hintCardNo.innerText = '';
        } else {
            hintCardNo.innerText = 'Card No must contain 16 digits';
            res = false;
        }
    }

    return res;
}