let points = 120;

function completeTask(button, reward) {
    // Егер тапсырма бұрын орындалса
    if (button.classList.contains("completed")) {
        return;
    }

    // Ұпай қосу
    points += reward;

    // Экобаллды өзгерту
    document.getElementById("points").textContent = points;

    // Progress өзгерту
    let progress = Math.min((points % 200) / 2, 100);
    document.getElementById("progressBar").style.width = progress + "%";

    // Батырманы өзгерту
    button.textContent = "✓ Орындалды";
    button.classList.add("completed");

    // Хабарлама
    alert(`Жарайсың! +${reward} экобалл жинадың 🌱`);
}

function scrollToTasks() {
    document.getElementById("tasks").scrollIntoView({
        behavior: "smooth"
    });
}