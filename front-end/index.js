// Underline of a link slowly grows
function underlineGrow(){
    const underline = document.querySelectorAll(".nav-item");
    underline.array.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.style.setProperty("--underline-width", "150%");
            element.addEventListener("mouseout", () => {
                element.style.setProperty("--underline-width", "100%");
              });
        });

    });
}
// Detect scroll event
window.addEventListener('scroll', function() {
    fadeInAnimation();
});

// Detect load event
window.addEventListener('load', function(){LEDLettersAnimation();});
function LEDLettersAnimation(){
    const introElements = this.document.querySelectorAll('.intro');

    introElements.forEach(function(element){
        // Retrieve the viewport coordinates
        const currentView = element.getBoundingClientRect();
          // If in the viewport then perform animation
        if (currentView.top < window.innerHeight && currentView.bottom > 0) {
            const paragraph = element.querySelector('p');
            //Split the texts into letters
            const letters = paragraph.textContent.split('').map(letter => `<span class="letter">${letter}</span>`).join('');
            // Make span element for each letter
            paragraph.innerHTML = letters;
      
            const letterElements = paragraph.querySelectorAll('.letter');
            letterElements.forEach(function(letter, index) {
            // Add drop-letters animation for each letter to simulate dropping letters
              letter.style.animation = `fade-letters 1.7s infinite ease-in-out forwards ${index * 0.1}s`;
            });
            paragraph.classList.add('fade-in'); // Add the fade-in class
          }
    });
  }
function fadeInAnimation(){
    // Make texts slowly appear
    const fadeInElements = document.querySelectorAll('.fade-in-text');

    // Loop through each fade-in element
    fadeInElements.forEach(function(element) {
    const currentView = element.getBoundingClientRect();
    
    // Check if the element is within the viewport
    if (currentView.top < window.innerHeight && currentView.bottom > 0) {
        element.classList.add('fade-in'); // Add the fade-in class
    } else {
        element.classList.remove('fade-in'); // Remove the fade-in class
    }
    });
  }
  
  // Image movements when scrolling down