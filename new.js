document.forms[0].addEventListener("click",function(e){
  var inputFieldsContainer = document.querySelector(".inputFields");
  if(inputFieldsContainer == null){
    console.log("null")
  }
  if(e.target.classList.contains("material-symbols-outlined")){
    e.preventDefault();
    var select = document.getElementById("menu");
    var set = document.getElementById("set");
    var field = document.createElement("table");
    field.classList.add("inputField");
    var num = select.selectedIndex;
    var selectname = select.options[num].innerText;
    // set.innerText = selectname;
    field.classList.add("new-table")
    field.innerHTML = `
    <table class="inputField"><tr>
    <tr><th id = "set" class="subcap" colspan="2">`+selectname+`</th></tr>
    <tr><td><textarea name="content[]"></textarea></td><td><button class="deleteFieldBtn">delete</button></td></tr>
    </tr></table>
    `;
    var clone = field.cloneNode(true);
    inputFieldsContainer.appendChild(clone);
  }
  else if(e.target.classList.contains("deleteFieldBtn")) {
    e.preventDefault();
    var deleteFieldBtns = document.querySelectorAll(".deleteFieldBtn");
    if(deleteFieldBtns.length == 1){
      alert("削除できません");
      return;
    }
    else{
      var field = e.target.parentNode.parentNode.parentNode;
      field.remove();
    }
  }
});
