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
    
    function animal_image (url) {
        this.url = url,
        this.size = 50,
        this.shrink = () => {
            //need to figure out how to get img img.style = “max-width=50px;”;
        }
    }
    
    function animal(image, name, desc, link) {
        this.image = image,
        this.name = name,
        this.description = desc,
        this.url = link
    }
    
    const lion_image = new animal_image('lion.jpg');    
    const lion = new animal(lion_image,
                            'lion',
                            'king of the jungle',
                            'https://en.wikipedia.org/wiki/Lion');

    const possibleAnimals = ['lion', 'tiger', 'bear', 'roadrunner', 'toto'];
    const animalObjects   = [lion]
    
    const animalSelector = document.getElementById("animals");
    for(let i=0; i<possibleAnimals.length; i++) {
        const animalOption = document.createElement('option');
              animalOption.innerHTML = possibleAnimals[i];
        animalSelector.appendChild(animalOption);
    }    
    
    const animalImg = document.createElement('img');
    document.body.appendChild(animalImg);
    
    const surveyButton = document.getElementById("submit");
        surveyButton.addEventListener("click", () => {
            
            const errorDiv = document.getElementById("error");
            const selectionIndex = animalSelector.selectedIndex;
            
            const selectedAnimalObject = animalObjects[selectionIndex];
            const inputVal = selectedAnimalObject.image.url;
            //console.log(selectionIndex, inputVal);
            //console.log(animalObjects[selectionIndex]);
            
            //show inputVal image in img tag
            animalImg.src = `imgs\\${inputVal}`;
            animalImg.alt = inputVal;
            
            console.log(selectedAnimalObject.description);
            document.getElementById("name").innerHTML = selectedAnimalObject.name;
            document.getElementById("desc").innerHTML = selectedAnimalObject.description;
            document.getElementById("url").innerHTML  = selectedAnimalObject.url;
            document.getElementById("url").href = selectedAnimalObject.url;
            
        });
});
