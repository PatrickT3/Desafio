let val1 = false;
let val2 = false;

// mantem apenas uma opcao marcada no checkbox
function marcaDesmarca(caller) {
    val1 = true;
    var checks = document.querySelectorAll('input[type="checkbox"]');    
    for(let i = 0; i < checks.length; i++) {
      checks[i].checked = checks[i] == caller;   
    }
  }

//muda a cor da seta do select
var check = document.querySelector('.seletor');
check.addEventListener('click',function(){
    var checkSeta = document.querySelector('#seta');
    checkSeta.style.borderColor = '#3EB25E transparent transparent transparent';
    val2 = true;
  });


// valida se é ou nao possivel avanca tela pag 4
var next = document.querySelector('#btns-2[href="#"]');
next.addEventListener("click",function(){
  if (val2 === true & val1 === true){
    next['href'] = "pag_4.html";
    val1 = false;
    val2 = false;
  }
})

// mudar o conteudo de um botao
var bt = document.querySelector('#btns-3');
bt.addEventListener('mouseover',function(){
  bt.textContent = "Skiep";
});

bt.addEventListener('mouseout',function(){
  bt.textContent = "Skip";
})
