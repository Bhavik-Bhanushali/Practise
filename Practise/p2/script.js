

document.getElementById("myButton").addEventListener("click", () => {
    const username = document.getElementById("username").value || "user"
    alert(`Welcome, ${username}`);
});


let user;
document.getElementById("prompt").addEventListener("click", () => {
    user = prompt("Enter your username","user") || "user"
    alert(`Welcome, ${user}`)
})

document.getElementById("math").addEventListener("click", () => {
    const mathExpression = prompt("Write the mathematical Expression:")
    try {
        alert(`Result= ${math.evaluate(mathExpression)}`)
    } catch (error) {
        alert("Invalid Expression")
    }
})