//Beginning of the Registration form

//Menu-toggle button

$(document).ready(function () {
	$(".menu-icon").on("click", function () {
		$("nav ul").toggleClass("showing");
	});
});

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const address = document.getElementById('address');
const creditCard = document.getElementById('ccn');
const type = document.getElementsByName('ccard');
const check = document.getElementById('mycheck');

function getNumbers() {
	str = creditCard.value;
	str = str.replace(/.(?=.{4})/g, 'x');
	return str;
};

form.addEventListener('submit', e => {
	e.preventDefault();

	// alert(checkInputs());

	if (checkInputs() >= 5) {
		alert("hi " + username.value + " thanks for purchasing our product using your " + displayRadioValue() + " credit card no. "
			+ getNumbers() + " We will email your receipt on " + email.value + " and send the product to " + address.value);
	}
});

function displayRadioValue() {
	var ele = document.getElementsByName('ccard');

	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked)
			return ele[i].value;
	}
}

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const addressValue = address.value.trim();
	const creditCardValue = creditCard.value;
	let i = 0;

	if (usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
		i += 1;
	}

	if (addressValue === '') {
		setErrorFor(address, 'Address cannot be blank');
	} else {
		setSuccessFor(address);
		i += 1;
	}

	if (!creditCardValue.match(/^[0-9]+$/) || creditCardValue.length < 16) {
		setErrorFor(creditCard, 'Credit Card cannot be less than 16 and must contain only numbers');
	} else {
		setSuccessFor(creditCard);
		i += 1;
	}

	if (emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
		i += 1;
	}

	if (!check.checked) {
		setErrorFor(check, 'Accept the terms and conditions to continue');
	} else {
		setSuccessFor(check);
		i += 1;
	}
	return i;

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
//End of the registration Form