const sheet = document.querySelector('link[rel="stylesheet"]')
const btn = document.getElementById("css-toggle")

btn.addEventListener("click", () => {
    sheet.disabled = !sheet.disabled;
    btn.textContent = sheet.disabled ? "Click here to see something cool!" : "Click here to see something cool!";
})