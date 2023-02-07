var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var editList = document.getElementById('items');


// form submit event 
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);
// //edit event
// editList.addEventListener('click', editItem);

// Add Item

function addItem(e){
    e.preventDefault();
    
    // Get input value
    var newItem = document.getElementById('number').value;
    var newdescription = document.getElementById('description'). value;
    var chooseCategory = document.getElementById('category').value

    //create new li element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem + ' : ' + newdescription + ' : ' + chooseCategory));

    // create edit button element
    var editbtn = document.createElement('button');
    // add classes to edit button
    editbtn.className = 'btn btn-primary btn-sm float-sm-end edit';
    // append text node
    editbtn.appendChild(document.createTextNode('Edit'));
    //append button to li
    li.appendChild(editbtn);
    //append li to list
    itemList.appendChild(li);

    function edituser (newItem , newdescription, chooseCategory) {
        newItem = document.getElementById('number').value;
        newdescription = document.getElementById('description').value;

    }


    // Create del button element
    var deletebtn = document.createElement('button');
    // add classes to del button
    deletebtn.className = 'btn btn-danger btn-sm float-sm-end delete';
    // append text node
    deletebtn.appendChild(document.createTextNode('Delete'));
    //append button to li
    li.appendChild(deletebtn);
    //append li to list
    itemList.appendChild(li);
}

function removeItem(e){
    // e.target.classList.contains('delete') we want to check what we click contains class delete
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
