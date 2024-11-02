document.addEventListener("DOMContentLoaded", function () {
  const joinButton = document.getElementById("JoinUs");
  const modal = document.getElementById("confirmationModal");
  const confirmBtn = document.getElementById("confirmBtn");
  const cancelBtn = document.getElementById("cancelBtn");

  // Show the modal when "Join Us" button is clicked
  joinButton.addEventListener("click", function () {
    modal.classList.remove("hidden");
  });

  // Confirm button action
  confirmBtn.addEventListener("click", function () {
    // Redirect to desired link
    window.location.href = "https://discord.gg/XKtqDy8fYf";
  });

  // Cancel button action
  cancelBtn.addEventListener("click", function () {
    // Close the modal without doing anything
    modal.classList.add("hidden");
  });
});

// Get the footer element
// Get the footer element
const footer = document.querySelector('footer');

// Initialize variables to track scroll direction
let lastScrollTop = 0;
let isHidden = false;

// Add event listener for scroll event
window.addEventListener('scroll', () => {
  // Get current scroll position
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Check scroll direction
  if (currentScrollTop > lastScrollTop && !isHidden) {
    // Scrolling down, hide the footer
    footer.classList.add('hide');
    isHidden = true;
  } else if (currentScrollTop < lastScrollTop && isHidden) {
    // Scrolling up, show the footer
    footer.classList.remove('hide');
    isHidden = false;
  }

  // Update last scroll position
  lastScrollTop = currentScrollTop;
});

// Add CSS transitions to the footer
const style = document.createElement('style');
style.innerHTML = `
  footer {
    transition: transform 0.5s ease;
  }

  footer.hide {
    transform: translateY(100%);
  }
`;
document.head.appendChild(style);