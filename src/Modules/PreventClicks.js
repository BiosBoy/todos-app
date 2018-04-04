let preventclicks = (buttonCount) => {
    document.documentElement.onclick = null;

    buttonCount.forEach(button => {
        if (button.done === true) {
            document.documentElement.onclick = (e) => {
                let target = e.target;
                let closest = target.closest('button[name=clicked]');

                if (!closest) {
                    e.preventDefault(); 
                    e.stopPropagation(); 
                    return false
                }
            }
        }
    });
}

export default preventclicks;