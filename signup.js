//alert("Welcome To Sign-up Page!");
document.getElementById("trial").onclick = function(){
    alert("Congratulation! You have signed in.");
}

const button = document.getElementById("trial");
const demo = document.getElementById("demo");
 button.addEventListener("click", function() {
    demo.innerHTML = " Congrats, you have signed up!";
 });
