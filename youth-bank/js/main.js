document.addEventListener('DOMContentLoaded', function(){
  // Chat modal
  const chatBtn = document.getElementById('chat-btn');
  const modal = document.getElementById('chat-modal');
  const closeBtn = document.getElementById('chat-close');
  if(chatBtn && modal){
    chatBtn.addEventListener('click', ()=> modal.style.display='flex');
  }
  if(closeBtn && modal){ closeBtn.addEventListener('click', ()=> modal.style.display='none'); }
  // Close on backdrop click
  const backdrop = document.getElementById('chat-modal');
  if(backdrop){
    backdrop.addEventListener('click', (e)=>{ if(e.target===backdrop) backdrop.style.display='none'; });
  }

  // Cashback calculator (tarify.html)
  const calcForm = document.getElementById('cashback-form');
  if(calcForm){
    calcForm.addEventListener('submit', function(e){
      e.preventDefault();
      const monthly = parseFloat(document.getElementById('monthly-spend').value || 0);
      const cashbackRate = parseFloat(document.getElementById('cashback-rate').value || 0);
      const months = parseInt(document.getElementById('months').value || 12, 10);
      if(isNaN(monthly) || isNaN(cashbackRate) || isNaN(months)){
        alert('Пожалуйста, введите корректные числа.');
        return;
      }
      const totalSpend = monthly * months;
      const cashback = totalSpend * (cashbackRate/100);
      const result = document.getElementById('cashback-result');
      result.innerHTML = `<strong>Примерный кэшбэк за ${months} мес:</strong> ${cashback.toLocaleString('ru-RU', {maximumFractionDigits:0})} ₽`;
    });
  }

  // Smooth links for same-site anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({behavior:'smooth'});
      }
    });
  });
});