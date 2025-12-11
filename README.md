**Number Guessing Game**

This is a simple browser-based Number Guessing Game built using HTML, CSS, and JavaScript. 
The player must guess a number between 1 and 100 before the timer runs out.
The game includes input validation, hints, a timer, and a complete win/lose flow.

**Overview**

This project demonstrates essential JavaScript concepts such as:

  - DOM manipulation
  
  - Event handling
  
  - Timer functionality using (setInterval)
  
  - Game state management
  
  - Input validation
  
  - Dynamic UI updates

The user starts the game using the Start button, enters guesses through an input box, and receives feedback in real time.
The game tracks the number of attempts and ends when the number is guessed or the timer reaches zero.

**Features**
1. Random Number Generation

      A random number between 1 and 100 is generated at the start of the game.

2. Countdown Timer

    The player has 30 seconds to guess the number. The timer color changes when time is low.

3. Input Validation

    The game checks for:

       Empty input
      
       Values outside 1–100
      
       Submissions before starting the game

4. Attempts Tracking

    Displays the total number of attempts.

5. Game Over Conditions

    The game ends when:

        The player guesses correctly
   
        The timer reaches zero

After game over:

        Input field is disabled
        
        Submit button is disabled
        
        Reset button becomes visible
        
6. Clean UI

      A simple centered layout styled using CSS.

**Technologies Used**

      HTML5
      
      CSS3
      
      JavaScript (Vanilla JS)

No external libraries or frameworks are used.

**How to Run**

Option 1: Open Directly

    Download the folder.

    Open index.html in a browser.

Option 2: Live Server (Recommended)

    Install Live Server in VS Code.

    Right-click index.html.

    Select “Open with Live Server”.

**Game Logic (Detailed)**

**Start Phase**

      Start button hides.
      
      Timer begins counting down.
      
      Input and Submit remain enabled.
      
**Guess Checking**

    Each Submit action:

        Checks for empty input
        
        Validates number range
        
        Compares guess with the random number
        
        Shows hints (“Too high” / “Too low”)
        
**Winning Condition**
        
        Displays success message
        
        Shows total attempts

        Disables input and submit button
        
        Shows Reset button
        
        Stops timer
        
**Losing Condition**
        
        Displays loss message

        Shows Reset button
        
        Stops timer
        
**Reset Phase**
        
        Generates a new random number
        
        Clears messages

        Resets timer and attempts
        
        Shows Start button
        
        Hides Reset button
        
        Re-enables input and submit

        Clears timer interval

**Possible Future Enhancements**

        Difficulty levels
        
        UI improvements
        
        Sound effects
        
        Mobile responsiveness
        
        High score system
        
        Animations

**License**

        This project is free to use and modify for personal or educational purposes.
