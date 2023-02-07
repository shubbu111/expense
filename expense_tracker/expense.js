function saveToLocalStorage(event){
    event.preventDefault();

    let userDetails = {
        Add_Expense_Amount : document.getElementById('number').value,
        Description : document.getElementById('description').value,
        Choose_Category : document.getElementById('category').value
    }

    showNewUserOnScreen(userDetails) 
    let userDetails_serialized=JSON.stringify(userDetails)  

    localStorage.setItem(userDetails.My_Expense_Amount , userDetails_serialized)
    document.getElementById('number').value = "";
    document.getElementById('description').value = "";

}


function showNewUserOnScreen (userDetails) {
    const d = document.getElementById('ul')
    const li = `<li id='${userDetails.Add_Expense_Amount}'>'${userDetails.Add_Expense_Amount}','${userDetails.Description}','${userDetails.Choose_Category}'
    <button onclick = "editUser('${ userDetails.Add_Expense_Amount}','${userDetails.Description}','${userDetails.Choose_Category}')"> Edit </button> 
   <button onclick = "deleteUser('${userDetails.Add_Expense_Amount}')"> Delete </button>

    </li>`
    d.innerHTML = d.innerHTML + li;


}

function deleteUser(number) {
    let child = document.getElementById(number);
    let parent = document.getElementById('ul');
    parent.removeChild(child);
    localStorage.removeItem(number)
}

function editUser(number, description, category){
    document.getElementById('number').value = number;
    document.getElementById('description').value = description;
    document.getElementById('category').value = category;
    
    deleteUser(number);
}

