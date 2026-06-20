const roles = [
  "AI/ML Developer",
  "Computer Vision Learner",
  "Frontend Developer",
  "Python Problem Solver"
];

const roleTarget = document.querySelector(".typing");
let roleIndex = 0;

if (roleTarget) {
  roleTarget.textContent = roles[roleIndex];

  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleTarget.classList.add("is-switching");

    setTimeout(() => {
      roleTarget.textContent = roles[roleIndex];
      roleTarget.classList.remove("is-switching");
    }, 180);
  }, 2600);
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
