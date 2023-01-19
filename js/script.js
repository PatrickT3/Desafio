var varl = document.querySelector('.rigth-texto .btn-ld');
console.log(varl);

varl.addEventListener("mouseout",function(){
    varl.textContent = "Let's go";
});

varl.addEventListener("mouseover",function(){
    varl.textContent = "Just Go Ahead";
});
