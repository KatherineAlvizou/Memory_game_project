# Memory Game Project

**Overview**_: This project is part of the Google-Udacity Nanodegree program FEND track.
              
 The *challenge* is to play the game and complete it with less moves in less time.

**How the Game Works**
The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match!

Each turn:

The player flips one card over to reveal its underlying symbol.
The player then turns over a second card, trying to find the corresponding card with the same symbol.
If the cards match, both cards stay flipped over.
If the cards do not match, both cards are flipped face down.
The game ends once all cards have been correctly matched.

**Game Functionality**
The real-life game, players flip over cards to locate the pairs that match. The goal is to recreate this effect in this project. There are a couple of interactions to be handled:

- Flipping cards.
- What happens when cards match.
- What happens when cards do not match.
- When the game finishes.

_**PROJECT DEVELOPMENT**_: 

**1. Start by building a grid of cards**
    
    Issues to address:
    
   - How many total pairs of cards are needed.

   -  Which data structure to use to store these individual cards.

   - How to iterate over this data structure.

   - Are the cards randomply placed to the grid?

   - Figure out HTML needed to represent a card.

 **2. Add functionality to handle click events**

 This should reveal the "hidden" side of each card. Clicking on the first card should turn it over, show the symbol, and remain turned over. Clicking on a different card must also turn it over and show the symbol.

    Issues to address:

    How the click event affects CSS. Pay attention to the `class` values on open/show cards, matched cards and the rest of the cards.
    Which `classlist` methods could I use to change the value of an element's `class` upon that event happening.

**3. Work on the matching logic**

   At this point, the user can flip over cards on the grid. Now the question is: how does the game "know" if a player guesses correctly or incorrectly.
    
    Issues to address:

   - How can I temporarily store opened cards. After all, one card turned over needs to be compared to another card turned over. Which data structure would be great to temporarily hold these turned-over cards? 
   
   - How can I prevent the user from selecting the same card twice.

   - When comparing two different cards for a match consider that If the two cards match, they stay turned over. If the two cards do not match,they turn back.

**4. Create the winning condition.**

   - The game must know if a player has won.

    - The user should see a modal when game ends.

    - The modal should show some information about the user's performance.

**5.Implement additional functionality**

   - Move counter. The game should display the number of moves the player has made.

    - Timer. This timer should start when the player starts a game, and end when the player wins the game.

    - Star rating. The player should begin with a certain number of stars displayed on the screen. The number of moves made during the game should visually decrease this star rating.

    - Reset button. This should allow the player to reset the entire grid as well as all the above.

**Technologies used**

 - HTML5
 - CSS 
 - JAVASCRIPT

 **Code Quality**

The code must follow Udacity's Frontend Nanodegree style guide concerning HTML,CSS and JAVASCRIPT Formatting and style rules as well as General meta rules and General Formatting rules.Find the guide here: http://udacity.github.io/frontend-nanodegree-styleguide/

 **Future Improvements**

 Add animation when the cards flip (i.e. Use `transform` css property to apply tranformation -rotate, scale, move etc.- to card elements.).

 Consider refactoring my code. 

   
  
 This project was created by **Aikaterini Alvizou** for the Google Udacity Nanodegree program FEND track.