document.getElementById('dog').addEventListener('click', function(event) {
    document.getElementById('message').style.display = 'none'; // Hide the "Hello" message
    var dogRect = document.getElementById('dog').getBoundingClientRect();
    var dialogBoxTop = dogRect.bottom + 10; // Adjust the value (10px) as needed
    var dialogBoxLeft = dogRect.left; // Positioning it aligned with the left edge of the dog
    showDialogBox(dialogBoxLeft, dialogBoxTop, "I love you!");
});

function showDialogBox(left, top, message) {
    var dialogBox = document.createElement('div');
    dialogBox.className = 'dialog-box';
    
    // Position the dialog box
    dialogBox.style.left = left + 'px';
    dialogBox.style.top = top + 'px';
    
    dialogBox.innerHTML = '<p>' + message + '</p><button id="close-dialog">Close</button>';
    document.body.appendChild(dialogBox);

    // Add event listener to the close button
    dialogBox.querySelector('#close-dialog').addEventListener('click', function() {
        document.body.removeChild(dialogBox);
    });
}



