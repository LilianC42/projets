document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("myAudio");
audio.play();
audio.volume = 0.05;
});

function toggleDropdown() {
    var dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
  }

  function scrollToBordure() {
    // Utilisez JavaScript pour faire défiler la page vers l'élément avec la classe "bordure"
    document.querySelector('.bordure').scrollIntoView({ behavior: 'smooth' });
  }