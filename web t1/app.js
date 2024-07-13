
function toShow(cls){
  let tag='div#'+cls;
document.querySelector(tag).removeAttribute('hidden');
document.querySelector("div.container").setAttribute("hidden",true);
}

//function loadDoc(className){
//  let fl=className+"Recipe.txt";
//  var data=new XMLHttpRequest();
//  data.onreadystatechange=function(){
//    if(this.readyState==4 && this.status==200){
//      document.getElementById("details").innerHTML=this.responseText;
//      document.getElementById("details").scrollIntoView();
//    }
//  }
//  data.open("GET",fl);
//  data.send();
//}

function loadDoc(className) {
  var dic={"gobi65":"g","methiMushroom":"m","paneerTikka":"p","paneerButterMasala":"p",
    "palakPaneer":"p","gobiParata":"g","gobiManchurian":"g","mushroomMasala":"m",
    "mushroomBiryani":"m","alooTikka":"po","frenchFries":"po","dahiAloo":"po",
    "eggMasalaGravy":"e","eggOmelette":"e","eggBhurji":"e","babycornFry":"b",
    "babycornChilli":"b","babycornManchurian":"b","cornCutlet":"s",
    "butterSweetcorn":"s","crispyCorn":"s"};
  const recipeFile = className + "Recipe.txt";

  fetch(recipeFile)
    .then(response => response.text()) // Parse response as text
    .then(data => {
      document.getElementById(dic[className]).innerHTML = data;
      document.getElementById("dic[className]").scrollIntoView(); 
    })
    .catch(error => {
      console.error("Error loading recipe:", error);
    });
}

