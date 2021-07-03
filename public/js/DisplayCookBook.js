let allNames = $('.allNames');
console.log("hert");

let previousElement = "";

let deleteButton = $('.Delete');

let deleteCurrentInfo = true
deleteButton.on('click','.id',async function(){
    console.log("in here")
    deleteCurrentInfo = false
    $(this).parent().parent().parent().empty();
   
    const id = $(this).attr('id');

    const response = await fetch(`/api/projects/${id}`, {
    method: 'DELETE',
    });  
})
function DeleteInfo(){
    if(previousElement !== ""){
        const id = document.getElementById(previousElement);
        console.log("id " + id.innerHTML)
        console.log(id.nextElementSibling.children)
        id.nextElementSibling.children[0].setAttribute("style","display:none;")
        id.nextElementSibling.children[1].setAttribute("style","display:none;")
        id.nextElementSibling.children[2].setAttribute("style","display:none;")
        id.nextElementSibling.children[3].setAttribute("style","display:none;")
   

    }
  
}

allNames.on('click','.name', function(){
    if(deleteCurrentInfo === true){
        DeleteInfo();
    }
    deleteCurrentInfo = true;
    console.log((this));
    console.log("in here");
    previousElement = $(this).parent().attr('id');
    console.log("previouselement " + previousElement);
    console.log(this.id);
    console.log( $(this).parent().siblings());
    $(this).parent().siblings().children().css("display","block");
    
})


