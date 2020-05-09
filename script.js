var input= document.getElementById("input");
var button= document.getElementById("button");
var ul= document.querySelector("ul");
var dltbtn= document.getElementsByClassName("delete");

function removeParent(event) {
	event.target.parentNode.remove();
}

for(i=0;i<dltbtn.length;i++)
{
	dltbtn[i].addEventListener("click", removeParent);
}

ul.onclick= function(event){
	event.target.classList.toggle("done");
}

function createEventList(){
		var remove= document.createElement("button");
	remove.innerHTML= "Delete";
	var li= document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	li.appendChild(remove);
	ul.appendChild(li);
	input.value="";
	remove.addEventListener("click", removeParent);
}

button.addEventListener("click",function(){
	if(input.value.length>0)
	{
		createEventList();
	}
})

input.addEventListener("keypress",function(event){
	if(input.value.length>0 && event.keyCode===13)
	{
		createEventList();
	}
})