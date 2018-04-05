import PreventClicWarning from './PreventClicWarning'

let preventclicks = (buttonCount) => {
    document.documentElement.onclick = null;
    PreventClicWarning().warnRemove();

    buttonCount.forEach(button => {
        if (button.done === true) {
            document.documentElement.onclick = (e) => {
                let target = e.target;
                let closest = target.closest('button[name=clicked]');

                if (!closest) {
                    PreventClicWarning().warnAdd();

                    e.preventDefault(); 
                    e.stopPropagation(); 
                    return false
                }
            }
        }
    });
}

export default preventclicks;