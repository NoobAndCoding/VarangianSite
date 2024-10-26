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