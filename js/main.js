const $ = classe => document.getElementsByClassName(classe);

// Radio mechanics

let radio = $('radio-row');

const getCurrentRadioState = radio => {
    let stateList = [];
    for(let input of radio) {
        stateList.push(input.children[0].checked);
    }

    return stateList;
}

const getSelectedIndex = radioStateList => {
    for(let item of radioStateList) {
        if(item == true) {
            return radioStateList.indexOf(item);
        }
    }

    return false;
}

for(let element of radio) {
    element.onclick = () => {
        let otherText = $('radio-other-row')[0];
        let radioStateList = getCurrentRadioState(radio);
        let radioIndex = getSelectedIndex(radioStateList);

        if(!(radioIndex === false)) {
            radio[radioIndex].children[0].removeAttribute('checked');
            radio[radioIndex].classList.remove('checked');
        }

        element.children[0].setAttribute('checked', 'checked');
        element.classList.add('checked');
        
        if(radio[5].children[0].hasAttribute('checked')) {
            otherText.classList.remove('hidden');
        } else {
            otherText.classList.add('hidden');
        }
        
    }
}


// Checkbox mechanics

let checkbox = $('check-el');

for(let element of checkbox) {
    element.onclick = () => {
        element.classList.toggle('checked');
        if(element.children[0].checked == false) {
            element.children[0].setAttribute('checked', 'checked'); 
        } else {
            element.children[0].removeAttribute('checked');
        };

        if(element.classList.contains('check-other')) {
            element.parentNode.children[1].classList.toggle('hidden');
            element.parentNode.classList.toggle('unchecked-big');
        }
    };
    
}