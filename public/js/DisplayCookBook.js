let allNames = $('.allNames');


let previousElement = "";


function DeleteInfo(){
    if(previousElement !== ""){
        const id = document.getElementById(previousElement);
        console.log("id " + id.innerHTML)
        console.log(id.nextElementSibling.children)
        // id.nextElementSibling.children.setAttribute("style","display:none;")
        id.nextElementSibling.children[0].setAttribute("style","display:none;")
        id.nextElementSibling.children[1].setAttribute("style","display:none;")
        id.nextElementSibling.children[2].setAttribute("style","display:none;")

    }
  
}

allNames.on('click','.name', function(){
    DeleteInfo();
    console.log((this));
    console.log("in here");
    previousElement = $(this).parent().attr('id');
    console.log("previouselement " + previousElement);
    console.log(this.id);
    console.log( $(this).parent().siblings());
    $(this).parent().siblings().children().css("display","block");
})

