
function toShow(cls){
  let tag='div#'+cls;
document.querySelector(tag).removeAttribute('hidden');
document.querySelector("div.container").setAttribute("hidden",true);
}

function loadDoc(className){
  let fl=className+"Recipe.txt";
  var data=new XMLHttpRequest();
  data.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
      document.getElementById("details").innerHTML=this.responseText;
      document.getElementById("details").scrollIntoView();
    }
  }
  data.open("GET",fl);
  data.send();
}

