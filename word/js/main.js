function myfun(){
    var taille=document.querySelector(".taille");
    var font=document.querySelector(".font");
    var color=document.querySelector(".color");  
    var texte=document.querySelector(".texte");
   texte.style.fontFamily=font.value;
   texte.style.color=color.value;
   texte.style.fontSize=taille.value+"px";

}