// Get the modal and button elements
const modal = document.getElementById('chartModal');
const btn = document.getElementById('showChartBtn');
const span = document.getElementsByClassName('close')[0];

// Show the modal when the button is clicked
btn.addEventListener('click', function() {
  modal.style.display = 'block';
});

// Close the modal when the close button or outside of modal is clicked
span.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
