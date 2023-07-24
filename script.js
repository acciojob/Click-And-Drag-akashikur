 const items = document.querySelectorAll('.item');

    // Variables to store the initial mouse position and the item's position
    let initialX = 0;
    let initialY = 0;
    let offsetX = 0;
    let offsetY = 0;

    // Function to handle mouse down event
    function handleMouseDown(event) {
      const item = event.target;
      // Calculate the initial mouse position relative to the item's top-left corner
      initialX = event.clientX;
      initialY = event.clientY;
      // Get the current position of the item
      const rect = item.getBoundingClientRect();
      offsetX = initialX - rect.left;
      offsetY = initialY - rect.top;

      // Add event listeners for mousemove and mouseup events
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    // Function to handle mouse move event
    function handleMouseMove(event) {
      const item = event.target;
      // Calculate the new position of the item based on the mouse movement and the initial offset
      const newX = event.clientX - offsetX;
      const newY = event.clientY - offsetY;

      // Move the item to the new position
      item.style.left = newX + 'px';
      item.style.top = newY + 'px';
    }

    // Function to handle mouse up event
    function handleMouseUp() {
      // Remove event listeners for mousemove and mouseup events
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    // Add event listeners for mousedown events on each item
    items.forEach(item => {
      item.addEventListener('mousedown', handleMouseDown);
    });