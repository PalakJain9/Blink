export const btnLoaderDisplay = (value, btn) => {
  let btnLoader
  if(btn == "btn_shorten") btnLoader = "btn-loader"
  else btnLoader = "btn-loader-2"
  if(value){
    //display loader button
    document.getElementById(btn).style.display = 'none';
    document.getElementById(btnLoader).style.display = 'flex';
  }
  else {
    //display shorten button
    document.getElementById(btn).style.display = 'flex';
    document.getElementById(btnLoader).style.display = 'none';
  }
}