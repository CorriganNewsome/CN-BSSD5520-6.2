/*
1. Create a program that allows the user to choose from a selector a
particular animal.
2. The animal should show an image, name, description, and url to wikipedia.
3. Each time you choose an animal from the drop down,
it adds that animal at the top of the page and pushes the previous info down
4. Each animal should have a close button which removes it from screen.
*/


//the below is some code from class it may or may not be useful
'use strict';

document.addEventListener("DOMContentLoaded", () => {
    //in the future this data comes from a website or database
    const possibleAnimals = ['tiger', 'lion', 'bear', 'roadrunner', 'toto'];

    const animalSelector = document.getElementById("animals");
    for(let i=0; i<possibleAnimals.length; i++) {
        const animalOption = document.createElement('option');
              animalOption.innerHTML = possibleAnimals[i];
        animalSelector.appendChild(animalOption);
    }    
    
    const animalImg = document.createElement('img');
    const messageDiv = document.getElementById("message");
          messageDiv.appendChild(animalImg);
    const optionsDiv = document.getElementById("options");
          optionsDiv.innerHTML+= possibleAnimals.join(', ');
    
    const surveyButton = document.getElementById("submit");
        surveyButton.addEventListener("click", () => {
            
            
            const errorDiv = document.getElementById("error");
            const selectionIndex = animalSelector.selectedIndex;
            const inputVal = possibleAnimals[selectionIndex];
            console.log(selectionIndex, inputVal);
            
            //show inputVal image in img tag
            animalImg.src = `imgs\\${inputVal}.jpg`;
            animalImg.alt = inputVal;
        });
});
