export const inputUrl = (useStateFunc, event) => { 
    //if enter pressed
    if(event.keyCode == 13) { 
      if(event.target.name == "longUrl") useStateFunc({url: event.target.value});
      else if(event.target.name == "customUrl") useStateFunc(event.target.value);
      event.preventDefault();
    }
    //else take text from shrinkIt function
}

export const shrinkIt = (useStateFunc, idVal) => {
    const inputarea = window.document.getElementById(idVal)
    if(idVal == "url-type") useStateFunc({url: inputarea.value})
    else if(idVal == "url-custom") useStateFunc(inputarea.value);
}

export const disableInputArea = (val, url, isCustom) => {
  if(val){ /*to display output*/
    let btnShorten = ""
    if(url == "longUrl"){
      btnShorten = "btn_shorten"
      window.document.getElementById("url-type").setAttribute('disabled','disabled');
    }
    else if(url == "customUrl"){
      btnShorten = "btn-shorten-2"
      window.document.getElementsByClassName("customise-area")[0].style.display='none'
    }
    window.document.getElementById("outputArea").style.display = 'flex'
    window.document.getElementById(btnShorten).style.display = 'none'
  }
  else {
    if(isCustom) window.document.getElementsByClassName("customise-area")[0].style.display='flex'
    else {
      window.document.getElementById("btn_shorten").style.display = 'inline-block'
      window.document.getElementById("url-type").removeAttribute('disabled')
      window.document.getElementById("url-type").value=''
      window.document.getElementById("outputArea").style.display = 'none'
    }
  }
}

// export default inputTextHandler