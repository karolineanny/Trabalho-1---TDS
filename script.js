document.addEventListener('DOMContentLoaded', function() {
  const statusBtn = document.getElementById('status-btn');

  // Definição dos horários de funcionamento
  const businessHours = {
    0: { 
      open: '15:00',
      close: '20:00'
    },
    1: { 
      open: '08:00',
      close: '18:00'
    },
    2: { 
      open: '08:00',
      close: '18:00'
    },
    3: { 
      open: '08:00',
      close: '18:00'
    },
    4: { 
      open: '08:00',
      close: '18:00'
    },
    5: { 
      open: '08:00',
      close: '19:00'
    },
    6: { 
      open: '09:00',
      close: '20:00'
    }
  };

  function updateStatus() {
    const now = new Date();
    const currentDay = now.getDay(); 
    const currentTime = now.getHours() * 60 + now.getMinutes(); 

    const todayHours = businessHours[currentDay];
    if (!todayHours.open || !todayHours.close) {
      statusBtn.innerHTML = '<i class="fas fa-times-circle me-2"></i>Estamos Fechados';
      statusBtn.classList.remove('btn-success');
      statusBtn.classList.add('btn-danger');
      statusBtn.title = 'A cafeteria está fechada no momento.';
      return;
    }

    const [openHour, openMinute] = todayHours.open.split(':').map(Number);
    const [closeHour, closeMinute] = todayHours.close.split(':').map(Number);
    const openTime = openHour * 60 + openMinute;
    const closeTime = closeHour * 60 + closeMinute;

    if (currentTime >= openTime && currentTime < closeTime) {
      statusBtn.innerHTML = '<i class="fas fa-check-circle me-2"></i>Estamos Abertos';
      statusBtn.classList.remove('btn-danger');
      statusBtn.classList.add('btn-success');
      statusBtn.title = 'A cafeteria está aberta agora.';
    } else {
      statusBtn.innerHTML = '<i class="fas fa-times-circle me-2"></i>Estamos Fechados';
      statusBtn.classList.remove('btn-success');
      statusBtn.classList.add('btn-danger');
      statusBtn.title = 'A cafeteria está fechada no momento.';
    }
  }

  updateStatus();

  setInterval(updateStatus, 60000);
});