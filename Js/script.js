// image objects
var imgObj1 = {
    name : "Apple",
    age  : "3 years old",

 };

 var imgObj2 = {
    name : "Bunion",
    age  : "6 years old"
 };

 var imgObj3 = {
    name : "Caramel",
    age  : "1 years old"

 };

 var imgObj4 = {
    name : "Dots",
    age  : "1 years old"

 };

var imgObj5 = {
    name : "Billu",
    age  : "2 years old"

 };

 var imgObj6 = {
    name : "Meow",
    age  : "5 years old"

 };

 var imgObj7 = {
    name : "Honey",
    age  : "2 years old"

 };

 var imgObj8 = {
   name : "Kriple",
   age  : "4 years old"

};

var imgObj9 = {
   name : "Bablu",
   age  : "6 years old"

};

var imgObj10 = {
   name : "Herku",
   age  : "5 years old"

};

var imgObj11 = {
   name : "Sona",
   age  : "2 years old"

};

var imgObj12 = {
   name : "Mona",
   age  : "4 years old"

};

var imgArray = [imgObj1, imgObj2, imgObj3, imgObj4, imgObj5, imgObj6, imgObj7, imgObj8, imgObj9, imgObj10, imgObj11, imgObj12];






// for (var x=0; x < imgArray.length; x++) { 
//     document.querySelectorAll(".x").innerHTML = imgArray[x].name;
// document.querySelectorAll(".x").innerHTML = imgArray[x].age;
//  }

 document.getElementById("demo").innerHTML = imgArray[0].name;
document.getElementById("demo1").innerHTML = imgArray[0].age;

document.getElementById("demo2").innerHTML = imgArray[1].name;
document.getElementById("demo3").innerHTML = imgArray[1].age;

document.getElementById("demo4").innerHTML = imgArray[2].name;
document.getElementById("demo5").innerHTML = imgArray[2].age;

document.getElementById("demo6").innerHTML = imgArray[3].name;
document.getElementById("demo7").innerHTML = imgArray[3].age;

document.getElementById("demo8").innerHTML = imgArray[4].name;
document.getElementById("demo9").innerHTML = imgArray[4].age;

document.getElementById("demo10").innerHTML = imgArray[5].name;
document.getElementById("demo11").innerHTML = imgArray[5].age;

document.getElementById("demo12").innerHTML = imgArray[6].name;
document.getElementById("demo13").innerHTML = imgArray[6].age;

document.getElementById("demo14").innerHTML = imgArray[7].name;
document.getElementById("demo15").innerHTML = imgArray[7].age;

document.getElementById("demo16").innerHTML = imgArray[8].name;
document.getElementById("demo17").innerHTML = imgArray[8].age;

document.getElementById("demo18").innerHTML = imgArray[9].name;
document.getElementById("demo19").innerHTML = imgArray[9].age;

document.getElementById("demo20").innerHTML = imgArray[10].name;
document.getElementById("demo21").innerHTML = imgArray[10].age;

document.getElementById("demo22").innerHTML = imgArray[11].name;
document.getElementById("demo23").innerHTML = imgArray[11].age;


//applying functionalities
// function showMore() {
//    document.getElementById("content2").style.display = "grid";
//    document.getElementById("content1").style.display = "none";
//    document.getElementById("content3").style.display = "none";
   
// }



var cnt=0;
function showMore(){
 cnt=parseInt(cnt)+parseInt(1);
 var divData=document.getElementById("center_new");
//  divData.innerHTML= cnt ;//this part has been edited

 if(cnt == 1 || cnt == 4 || cnt == 7 || cnt == 10) {
      document.getElementById("content2").style.display = "grid";
      document.getElementById("content1").style.display = "none";
      document.getElementById("content3").style.display = "none";
 } else if (cnt == 2 || cnt == 5 || cnt == 8 || cnt == 11) {
   document.getElementById("content2").style.display = "none";
   document.getElementById("content1").style.display = "none";
   document.getElementById("content3").style.display = "grid";
 } else if (cnt == 3 || cnt == 6 || cnt == 9 || cnt == 12) {
   document.getElementById("content2").style.display = "none";
   document.getElementById("content1").style.display = "grid";
   document.getElementById("content3").style.display = "none";
 }


//  if(cnt%3 == 1) {
//    document.getElementById("content2").style.display = "grid";
//    document.getElementById("content1").style.display = "none";
//    document.getElementById("content3").style.display = "none";
// } else if (cnt%3 == 2) {
// document.getElementById("content2").style.display = "none";
// document.getElementById("content1").style.display = "none";
// document.getElementById("content3").style.display = "grid";
// } else if (cnt%3 == 0) {
// document.getElementById("content2").style.display = "none";
// document.getElementById("content1").style.display = "grid";
// document.getElementById("content3").style.display = "none";
// }


}