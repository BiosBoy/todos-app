let PreventClicWarning = () => {
    return {
        warnAdd: () => {
            let warn = document.createElement('div');
            warn.className = 'warn';
            let warnText = document.createElement('p');
            warnText.innerHTML = 'You must save your edit firstly.';
            warn.append(warnText);

            let button = document.querySelector('button[name=clicked]');
            let buttonCoordLeft = button.getBoundingClientRect().left 
                                    - button.getBoundingClientRect().width;

            let buttonCoodsTop = button.getBoundingClientRect().top 
                                    + (button.getBoundingClientRect().top 
                                    - button.getBoundingClientRect().bottom)*2;
                                    
            warn.style.left = buttonCoordLeft + 'px';
            warn.style.top =  buttonCoodsTop + 'px';
            let buttonParent = button.parentNode;

            if (!document.querySelector('.warn')) {
                document.body.append(warn);
            }
        },
        warnRemove: () => {
            if (document.querySelector('.warn')) {
                document.querySelector('.warn').parentNode
                    .removeChild(document.querySelector('.warn'));
            }
        }
    }
}

export default PreventClicWarning;