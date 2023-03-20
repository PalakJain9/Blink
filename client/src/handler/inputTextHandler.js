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

export const disableInputArea = (val) => {
  if(val){
    document.getElementById("outputArea").style.display = 'flex'
    document.getElementById("btn_shorten").style.display = 'none'
    document.getElementById("url-type").setAttribute('disabled','disabled');
  }
  else {
    document.getElementById("outputArea").style.display = 'none'
    document.getElementById("btn_shorten").style.display = 'inline-block'
    document.getElementById("url-type").removeAttribute('disabled')
    document.getElementById("url-type").value=''
  }
}

// export default inputTextHandler