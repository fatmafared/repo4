//hide all elmnts with class row
function openPage(pageName,elmnt,color){
    var i,row,btn;
    row=document.getElementsByClassName("row");
    for(var i=0;i<row.length;i++){
        row[i].style.display="none";
        
    }
    
}
//remove the background color of all btn/buttons
btn=document.getElementsByClassName("btn");
for(var i=0;i<btn.length;i++){
    btn[i].style.backgroundColor= "";
}
//show the specific tab content
document.getElementById(pageName).style.display="block";
elmnt.style.backgroundColor=color;
}
document.getElementById("defaultOpen").click();