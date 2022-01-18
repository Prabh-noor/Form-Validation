const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const passwd = document.querySelector("#password");
const passwd2 = document.querySelector("#confirm-passwd");
const submit = document.querySelector(".submit");

submit.addEventListener("click", function (e) {
	e.preventDefault();
	validateInputs(); //Submitting the form after validating the inputs
});

function validateInputs() {
	//get the values from the inputs
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwdValue = passwd.value.trim();
	const passwd2Value = passwd2.value.trim();

	if (usernameValue === "") {
		setError(username, "This field can not be empty");
		//This function shows error message and add error class
	} else {
		setSuccess(username);
	}

	if (emailValue === "") {
		setError(email, "This field can not be empty");
	} else if (!isEmail(emailValue)) {
		setError(email, "Email is not valid");
	} else {
		setSuccess(email);
	}

	if (passwdValue === "") {
		setError(passwd, "This field can not be empty");
	} else if (!isPasswd(passwdValue)) {
		setError(
			passwd,
			"Password should have atleast 8 characters, 1 special character, upper and lower case letters and a number"
		);
	} else {
		setSuccess(passwd);
	}

	if (passwd2Value === "") {
		setError(passwd2, "This field can not be empty");
	} else if (passwdValue !== passwd2Value) {
		setError(passwd2, "Passwords does not match");
	} else {
		setSuccess(passwd2);
	}
}

function setError(input, message) {
	const formField = input.parentElement; //.form-field
	const small = formField.querySelector("small");
	//add error message
	small.innerText = message;
	//add error class
	formField.classList.add("error");
	formField.classList.remove("success");
}

function setSuccess(input) {
	//add success class
	const formField = input.parentElement;
	formField.classList.add("success");
	formField.classList.remove("error");
}

function isEmail(email) {
	var regEx =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regEx.test(email);
}

function isPasswd(passwd) {
	var regEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	return regEx.test(passwd);
}
