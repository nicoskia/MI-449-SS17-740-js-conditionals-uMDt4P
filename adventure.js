var damage = Math.floor(Math.random() * 10) + 1
var pathChoice = window.prompt('You walk down the trail like you have many times before. However, this time you notice a fork in the road. Do you go left or right?')

// If the user clicks "Cancel" in the prompt
if (pathChoice === null) {
  window.alert('You know what? No adventures for today. Let\'s just go home.')
} else {
  // Normalize the string
  pathChoice = pathChoice.trim().toLowerCase()

  // If the user chooses to walk left
  if (pathChoice === 'left') {
    window.alert('You walk left. After a couple minutes, you come to a cave. It looks pretty dangerous, but your sense of adventure is driving you.')
    var caveChoice = window.prompt('Do you dare enter the cave?')

    if (caveChoice === null) {
      window.alert('You know what? No adventures for today. Let\'s just go home.')
    } else {
      // Normalize the string
      caveChoice = caveChoice.trim().toLowerCase()

      if (caveChoice === 'yes') {
        var caveEnter = window.confirm('Are you sure you want to enter the cave?')

        if (caveEnter) {
          var steps = window.prompt('You enter the cave. It\'s dark, but you continue on. How many steps do you want to take?')

          if (steps === null) {
            window.alert('You know what? No adventures for today. Let\'s just go home.')
          } else {
            // Normalize
            steps = Number(steps.trim())

            if (steps <= 3) {
              window.alert('You take a few paces before realizing that it\'s actually really dangerous to enter a dark cave. You decide to head back home.')
            } else if (steps > 3) {
              window.alert('You pace forward, but you take too many steps and you slip and fall...fall...fall...')
            }
          }
        } else {
          window.alert('Good choice, it seemed scary. Let\'s just go home.')
        }
      } else if (caveChoice === 'no') {
        window.alert('Good choice, it seemed scary. Let\'s just go home.')
      } else {
        window.alert('You space out for a second, then realize it\'s probably best to go home.')
      }
    }
  // If the user chooses to walk right
  } else if (pathChoice === 'right') {
    window.alert('You walk right. You come to an small, open field with a set of weapons in the middle.')
    var toolChoice = window.prompt('There\'s a sword, scissors, and a slingshot. Which one will you choose?')

    if (toolChoice === null) {
      window.alert('You know what? No adventures for today. Let\'s just go home.')
    } else {
      // Normalize the string
      toolChoice = toolChoice.trim().toLowerCase()

      if (toolChoice === 'sword') {
        window.alert('You continue on and encounter a bear. Luckily, you chose a sword and you think you can handle it.')
        window.alert('You deal ' + damage + ' damage!')
        if (damage <= 5) {
          window.alert('You didn\'t kill it on your first strike, and unfortunately the bear kills you.')
        } else {
          window.alert('Yay! You dealt enough damage to kill the bear.')
          var bearChoice = window.prompt('Now that you\'ve killed the bear, do you leave it or do you scavenge for materials?')

          if (bearChoice === null) {
            window.alert('You know what? Why don\'t you just go home.')
          } else {
            // Normalize the string
            bearChoice = bearChoice.trim().toLowerCase()

            if (bearChoice === 'leave') {
              window.alert('You leave the bear and go home. At least you have a cool story to tell!')
            } else if (bearChoice === 'scavenge') {
              window.alert('You use the sword to take the bear\'s head. What an amazing trohpy!')
            } else {
              window.alert('You couldn\'t care less, so you just head home.')
            }
          }
        }
      } else if (toolChoice === 'scissors' || toolChoice === 'slingshot') {
        window.alert('You continue on and encounter a bear. Knowing that your weapon will have no chance of taking it down, you run back home.')
      } else {
        window.alert('No weapon? Okay, let\'s just go home for today.')
      }
    }
  } else {
    window.alert('Unfortunately, you can\'t walk that way.')
  }
}
