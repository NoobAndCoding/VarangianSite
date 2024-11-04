document.addEventListener("DOMContentLoaded", function () {
  // Create a custom console object
  const customConsole = {
    log: function () {
      console.log('Custom log called'); // Debugging statement
      const args = Array.prototype.slice.call(arguments);
      console.log.apply(console, args);
      displayCustomLog(args, 'black');
    },
    warn: function () {
      const args = Array.prototype.slice.call(arguments);
      console.warn.apply(console, args);
      displayCustomLog(args, 'orange');
    },
    error: function () {
      const args = Array.prototype.slice.call(arguments);
      console.error.apply(console, args);
      displayCustomLog(args, 'red');
    },
    info: function () {
      const args = Array.prototype.slice.call(arguments);
      console.info.apply(console, args);
      displayCustomLog(args, 'blue');
    },
    // Add more console methods if needed
  };

  // Replace the global console object with the custom console
  window.console = customConsole;

  // Function to display custom log messages in the console element
  // Function to display custom log messages in the console element
  function displayCustomLog(args, color) {
    const message = Array.prototype.join.call(args, ' ');
  
    // Check if the message has already been logged
    if (!loggedMessages.includes(message)) {
      const logElement = document.createElement('div');
      logElement.textContent = message;
      logElement.style.color = color; // Set the text color
  
      // Check if the newConsoleElement exists before appending the log element
      if (newConsoleElement) {
        newConsoleElement.appendChild(logElement);
      }
  
      // Add the message to the loggedMessages array
      loggedMessages.push(message);
    }
  }

  // Add a button to show the console
  const showConsoleButton = document.createElement('button');
  showConsoleButton.textContent = 'Show Console';
  showConsoleButton.style.position = 'fixed';
  showConsoleButton.style.bottom = '0';
  showConsoleButton.style.right = '0';
  showConsoleButton.style.zIndex = '9999';
  showConsoleButton.addEventListener('click', function () {
    const password = prompt('Enter the password to show the console:');
    if (password === '2451') { // Replace 'your_password' with your desired password
      const consoleElement = document.querySelector('#console');
      if (consoleElement) {
        consoleElement.style.display = consoleElement.style.display === 'none' ? 'block' : 'none';
      } else {
        // Create a new console element with CSS style
        const newConsoleElement = document.createElement('div');
        newConsoleElement.id = 'console';
        newConsoleElement.style.position = 'fixed';
        newConsoleElement.style.bottom = '0';
        newConsoleElement.style.right = '0';
        newConsoleElement.style.zIndex = '9999';
        newConsoleElement.style.backgroundColor = '#f1f1f1';
        newConsoleElement.style.padding = '10px';
        newConsoleElement.style.width = '300px';
        newConsoleElement.style.height = '200px';
        newConsoleElement.style.overflow = 'auto';
        newConsoleElement.style.display = 'block';
        document.body.appendChild(newConsoleElement);

        // Redirect console.log, console.warn, etc. to the new console element
        const originalConsoleLog = console.log;
        console.log = function () {
          console.log('Redirected log called'); // Debugging statement
          const message = Array.prototype.join.call(arguments, ' ');
          const logElement = document.createElement('div');
          logElement.textContent = message;
          newConsoleElement.appendChild(logElement);
          originalConsoleLog.apply(console, arguments);
        };

        // Add a close button to the console
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '5px';
        closeButton.style.right = '5px';
        closeButton.addEventListener('click', function () {
          newConsoleElement.style.display = 'none';
        });
        newConsoleElement.appendChild(closeButton);
      }
    } else {
      alert('Incorrect password');
    }
  });
  document.body.appendChild(showConsoleButton);
});

function myFunction231() {
  console.log('This is a custom log message');
  console.warn('This is a custom warning message');
  console.error('This is a custom error message');
  console.info('This is a custom info message');
}

myFunction231();

