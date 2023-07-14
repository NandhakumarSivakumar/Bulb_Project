function change()
{
    var img=document.getElementById("bulb");
    if(img.src.match("1"))
    {
        img.src="./assets/2.jpg";
    }
    else{
        img.src="./assets/1.jpg";
    }
}