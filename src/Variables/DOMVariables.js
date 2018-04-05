let DOMVariables = (variable) => {
    return {
        input: document.querySelector('input'),
        closestEdit: () => variable.previousElementSibling.previousElementSibling.previousElementSibling,
        closestEditTime: () => variable.previousElementSibling.previousElementSibling,
        closestEditText: () => variable.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling,
        closestEditTextarea: () => variable.previousElementSibling.previousElementSibling.previousElementSibling,
        closestEditParent: () => variable.parentNode,
        closestDeleteIndex: () => variable.parentNode.getAttribute('index'),
        closestEditIndex: () => variable.parentNode.getAttribute('index'),
        closestEditStatus: () => variable.parentNode.getAttribute('status'),
        closestStatusIndex: () => variable.parentNode.getAttribute('index'),
        closestStatusStatus: () => variable.parentNode.getAttribute('status')

    }
};

export default DOMVariables;