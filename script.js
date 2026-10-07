const btn=document.getElementById('lang');let lang='en';
btn.addEventListener('click',()=>{lang=lang==='en'?'es':'en';document.documentElement.lang=lang;document.querySelectorAll('[data-en]').forEach(el=>el.textContent=el.dataset[lang]);});
document.getElementById('year').textContent=new Date().getFullYear();
