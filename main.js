function getData() {
	const token = localStorage.getItem("token");
	if (token == null) return;
	fetch("http://localhost:8080/userInfo", {
		method: "GET",
		contentType: "application/json",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => response.json())
		.then((user) => {
			displayAllData(user);
		})
		.catch((error) => {
			console.error(`Error message: ${error}`);
		});
}

function displayAllData(user) {
	displayFullName(user);
	displayImage(user);
	displayBio(user);
}

function displayFullName(user) {
	let fullName = document.getElementById("fullName");
	fullName.innerHTML = `${user.firstName} ${user.lastName}`;
}
function displayImage(user) {
	let image = document.getElementById("image");
	image.src = user.image;
}
function displayBio(user) {
	let bio = document.getElementById("bio");
	bio.innerHTML = user.bio;
}

getData();
