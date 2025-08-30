// 🌙 زر تبديل الوضع
const toggleBtn = document.getElementById("modeToggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// زر الرجوع للأعلى
let topBtn = document.createElement("button");
topBtn.innerText = "⬆️";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

const btnStyle = `
  #topBtn {
    position: fixed;
    bottom: 20px;
    left: 20px;
    background: #004aad;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 12px 16px;
    font-size: 18px;
    cursor: pointer;
    display: none;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    transition: 0.3s;
  }
  #topBtn:hover { background: #0077cc; transform: scale(1.1); }
`;
let styleSheet = document.createElement("style");
styleSheet.innerText = btnStyle;
document.head.appendChild(styleSheet);

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};
topBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// سموث سكرول
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
