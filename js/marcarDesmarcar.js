function marcaDesmarca(caller) {
    var checks = document.querySelectorAll('input[type="checkbox"]');    
    for(let i = 0; i < checks.length; i++) {
      checks[i].checked = checks[i] == caller;   
    }
  }

var check = document.querySelector('.seletor');
check.addEventListener('click',function(){
    var checkSeta = document.querySelector('#seta');
    checkSeta.style.borderColor = '#3EB25E transparent transparent transparent';
  });
