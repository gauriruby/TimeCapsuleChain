function saveCapsule() {
    const message = document.getElementById("message").value;
    const unlockDate = new Date(document.getElementById("unlockDate").value).getTime();

    if (!message || !unlockDate) {
        alert("Please enter both message and unlock date.");
        return;
    }

    localStorage.setItem("capsuleMessage", message);
    localStorage.setItem("capsuleUnlockTime", unlockDate);
    alert("Capsule saved! Come back later to unlock.");
}

function retrieveCapsule() {
    const message = localStorage.getItem("capsuleMessage");
    const unlockTime = localStorage.getItem("capsuleUnlockTime");

    if (!message || !unlockTime) {
        alert("No capsule found!");
        return;
    }

    const currentTime = new Date().getTime();
    if (currentTime >= unlockTime) {
        document.getElementById("output").innerText = "Your message: " + message;
    } else {
        alert("Capsule is still locked!");
    }
}
