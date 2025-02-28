// form validation

function validForm(form) {
// all form fields
	const email = form.email;
	const message = form.message;

	clearErrors(form);

	let isValid = true;

// check email not empty and contains @ and . and no whitepsaces
	if (email.value.trim() === "") {
		showError(email, "*Email address is required");
		isValid = false;
	}
	// else if regular expression to check for non-whitespace,  literal @, literal . characters
	else if (!/\S+@\S+\.\S+/.test(email.value)) {
		showError(email, "*Enter a valid email address");
		isValid = false;
	}

// check message not empty
	if (message.value.trim() === "") {
		showError(message, "*Message is required");
		isValid = false;
	}

	if (!isValid) {
		const firstInvalidField = form.querySelector(".error + input, .error + select, .error + textarea");
		if (firstInvalidField) firstInvalidField.focus();
	}

// confirm box alert for user to review their submission details
	if (isValid) {
		const userConfirm = confirm ("Thanks for your submission. Please confirm the details below are correct:\n\nEmail: " + email.value + "\nPhone number: " + phone.value + "\nEnquiry Type: " + enquiryType.value + "\nMessage: " + message.value);
// upon cancelling submission
		if (!userConfirm) {
			alert("Your submission is cancelled. Please review your details before resubmitting.");
			return false;
		}
	}
	return isValid;
}

// show error message next to a field
function showError(field, message) {
	const errorLabel = document.createElement("span");
	errorLabel.className = "error";
	errorLabel.textContent = message;
	field.insertAdjacentElement("beforebegin", errorLabel); // places error before field
	field.classList.add("error-border");
}

// clear all error messages
function clearErrors(form) {
	// variable to select elements with error class
	const errors = form.querySelectorAll(".error");
	// loop to go through and remove all error classes within the form
	errors.forEach(error => error.remove());
	const field = form.querySelectorAll("input, select, textarea");
	field.forEach(field => field.classList.remove("error-border"));
}