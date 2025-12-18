// Initialize Date
const dateDisplay = document.getElementById('dateDisplay');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateDisplay.textContent = new Date().toLocaleDateString('en-US', options);

// Chart Configuration Defaults
Chart.defaults.color = '#a0a0b0';
Chart.defaults.font.family = "'Outfit', sans-serif";

// Modal Logic
// data-testid="modal-logic"
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('addItemModal');
    const btn = document.getElementById('addItemBtn');
    const closeSpan = document.querySelector('.close-modal');
    const optionCards = document.querySelectorAll('.option-card');

    if (btn && modal && closeSpan) {
        btn.onclick = function () {
            modal.style.display = "flex";
        }

        closeSpan.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        optionCards.forEach(card => {
            card.onclick = function () {
                const type = this.querySelector('h3').innerText;
                alert(`Add ${type} functionality coming soon!`);
                modal.style.display = "none";
            }
        });
    }
});

// Resource Usage Chart
const ctxResource = document.getElementById('resourceChart').getContext('2d');
const resourceChart = new Chart(ctxResource, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Documents (MB)',
            data: [120, 150, 180, 240, 300, 380],
            borderColor: '#6c5ce7',
            backgroundColor: 'rgba(108, 92, 231, 0.1)',
            tension: 0.4,
            fill: true
        }, {
            label: 'ID Scans (MB)',
            data: [80, 85, 90, 110, 130, 145],
            borderColor: '#00cec9',
            backgroundColor: 'rgba(0, 206, 201, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: 'rgba(255, 255, 255, 0.05)' }
            },
            x: {
                grid: { display: false }
            }
        }
    }
});

// Efficiency Chart
const ctxEfficiency = document.getElementById('efficiencyChart').getContext('2d');
const efficiencyChart = new Chart(ctxEfficiency, {
    type: 'doughnut',
    data: {
        labels: ['PDFs', 'Images', 'Notes'],
        datasets: [{
            data: [55, 30, 15],
            backgroundColor: [
                '#6c5ce7',
                '#00cec9',
                '#2d3436'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        cutout: '70%',
        plugins: {
            legend: { position: 'bottom' }
        }
    }
});

// Activity Log Simulation
const activityList = document.getElementById('activityList');
const activities = [
    { text: 'Passport access authorized for TravelCheck', time: '2 mins ago' },
    { text: 'Resume PDF downloaded', time: '15 mins ago' },
    { text: 'Digital ID verification successful', time: '1 hour ago' },
    { text: 'New credential added: Library Card', time: '2 hours ago' }
];

activities.forEach(item => {
    const li = document.createElement('li');
    li.className = 'activity-item';
    li.innerHTML = `
        <span>${item.text}</span>
        <span class="activity-time">${item.time}</span>
    `;
    activityList.appendChild(li);
});
