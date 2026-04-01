// 🌗 Dark Mode Toggle
function toggleMode() {
document.body.classList.toggle("light-mode");
}

// ✅ Email validation + tick
document.getElementById("email").addEventListener("input", function () {
let pattern = /^[^ ]+@[^ ]+.[a-z]{2,3}$/;
document.getElementById("tick").style.display =
pattern.test(this.value) ? "block" : "none";
});

// 🔐 Password Strength
document.getElementById("password").addEventListener("input", function () {
let pass = this.value;
let fill = document.getElementById("strengthFill");
let text = document.getElementById("strengthText");

if (pass.length > 8 && /[A-Z]/.test(pass) && /[0-9]/.test(pass)) {
fill.style.width = "100%";
fill.style.background = "green";
text.innerText = "Strong Password";
}
else if (pass.length > 5) {
fill.style.width = "60%";
fill.style.background = "orange";
text.innerText = "Medium Password";
}
else {
fill.style.width = "30%";
fill.style.background = "red";
text.innerText = "Weak Password";
}
});

// 🚀 Submit
function submitForm() {
alert("Form submitted successfully 🚀");
}

// 🌌 THREE.JS BACKGROUND
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

let renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Particles
let geometry = new THREE.BufferGeometry();
let vertices = [];

for (let i = 0; i < 1000; i++) {
vertices.push(
(Math.random() - 0.5) * 10,
(Math.random() - 0.5) * 10,
(Math.random() - 0.5) * 10
);
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

let material = new THREE.PointsMaterial({
color: 0x00ffff,
size: 0.02
});

let particles = new THREE.Points(geometry, material);
scene.add(particles);

camera.position.z = 3;

// Animation
function animate() {
requestAnimationFrame(animate);
particles.rotation.x += 0.0005;
particles.rotation.y += 0.001;
renderer.render(scene, camera);
}
animate();

// Resize fix
window.addEventListener("resize", () => {
renderer.setSize(window.innerWidth, window.innerHeight);
camera.aspect = window.innerWidth/window.innerHeight;
camera.updateProjectionMatrix();
});
