document.getElementById("year").textContent = new Date().getFullYear();

const items = document.querySelectorAll(".panel");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

items.forEach((item) => {
  item.style.animationPlayState = "paused";
  observer.observe(item);
});
