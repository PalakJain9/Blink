export const inputUrl = (useStateFunc, event) => { 
    //if enter pressed
    if(event.keyCode == 13) { 
      useStateFunc({url: event.target.value});
      event.preventDefault();
    }
    //else take text from shrinkIt function
}

export const shrinkIt = (useStateFunc, idVal) => {
    const inputarea = window.document.getElementById(idVal)
    useStateFunc({url: inputarea.value})
}

// export default inputTextHandler