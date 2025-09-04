// 📊 Gráfico
const ctx = document.getElementById('sustentabilidadeChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Europa', 'América', 'Ásia', 'África', 'Oceania'],
    datasets: [
      {
        label: 'Energia Renovável (%)',
        data: [72, 45, 30, 20, 55],
        backgroundColor: '#2e7d32'
      },
      {
        label: 'Reciclagem (%)',
        data: [60, 35, 25, 15, 40],
        backgroundColor: '#66bb6a'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: '%' }
      }
    }
  }
});

// 🌙 Modo Escuro
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  darkModeToggle.textContent = document.body.classList.contains('dark') ? "☀️" : "🌙";
});

// 🔢 Contadores Animados
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 100; 

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 40);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});
