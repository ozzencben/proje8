const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("click", () => {

        labels.forEach((label) => {
            let text = label.textContent;
            let letters = text.split("");
            let html = letters.map((letter, index) => `<span style="transition-delay:${index * 100}ms">${letter}</span>`).join("");
            label.innerHTML = html;

            setTimeout(() => {
                label.querySelectorAll('span').forEach(span => span.classList.add('show'));
            }, 100);
        });
    })
})
