const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
	e.preventDefault();

	email = email.value;
	password = password.value;

	const loginData = JSON.stringify({ email, password });

	fetch("http://localhost:8080/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: loginData,
	})
		.then((response) => {
			return response.json();
		})
		.then((jwt_token) => {
			localStorage.setItem("token", jwt_token.accessToken);
		})
		.then((_) => {
			window.location.href = "/index.html";
		})
		.catch((error) => {
			console.error(`Error message: ${error}`);
		});
});
