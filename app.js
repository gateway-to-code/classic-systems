/*
1a) Create an app that manages the class enrollment for a given course. 
The app should collect data regarding  
- student name
- student id
- pay status 

1b) Your app should add students to an enrollment list in the following format
name    student id      paid    
carine  3480239         paid    
marley  0238034         unpaid

The following will be useful
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table

1c) Your app should provide functionality to edit and delete students on the list
name    student id      paid    edit        delete
carine  3480239         paid    edit icon   trash icon
marley  0238034         unpaid  edit icon   trash icon

2a) Limit the class size of your list to 5 students. Students added after 
the class is full should be added to class waitlist

2b) Add a drop down to your form that lets you select a students major. The 
*/

let editRow = null;

submitForm = function (event) {
    event.preventDefault();
    let formData = {};
    console.log('this is the event ', event);
    formData['name'] = document.getElementById('name').value;
    formData['studentId'] = document.getElementById('student_id').value;
    formData['payStatus'] = this.checkPayment(document.getElementsByName('payStatus'));
    console.log('this is the pay status', this.checkPayment(document.getElementsByName('payStatus')));
    if(editRow === null){
        insertData(formData);
    }else{
        updateData(formData);
    }
    reset();

}

checkPayment = function(elements) {
    console.log('this is the pay status', elements)
    for(let i=0; i < elements.length; i++) {
        if(elements[i].checked) {
            elements[i].checked = false;
            return elements[i].value;
        }
    }
}

insertData = function(data) {
    let table = document.getElementById('registration_table');
    let newRow = table.insertRow(0);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerHTML = data.name;
    cell2.innerHTML = data.studentId;
    cell3.innerHTML = data.payStatus;
    cell4.innerHTML = '<a onClick="editField(this)">Edit</a> | <a onClick="deleteField(this)">Delete</a>';


}

editField = function(element) {
    editRow = element.parentElement.parentElement.childNodes;
    console.log('this is the selected element', editRow);
    document.getElementById('name').value = editRow[0].innerText;
    document.getElementById('student_id').value = editRow[1].innerText;
    // document.getElementsByName('payStatus') = checkPayStatus(editRow[2].innerText);
    let payStatusFromTable = editRow[2].innerText
    checkPayStatus(payStatusFromTable);

}

deleteField = (element) => {
    let parent = document.getElementById('registration_table');
    let child = element.parentElement.parentElement;
    console.log('this is the parent', parent.childNodes);
    parent.removeChild(child);
}

checkPayStatus = (txt) => {
    console.log("This is payStatusTxt", txt);
    let formRadio = document.getElementsByName('payStatus');
    for(let i=0; i<formRadio.length; i++){
        console.log('this formRadio text', formRadio[i].value);
        if(txt === formRadio[i].value){
            formRadio[i].checked = true;
        }
    }
}

updateData = (data) => {
    editRow[0].innerHTML = data.name;
    editRow[1].innerHTML = data.studentId;
    editRow[2].innerHTML = data.payStatus;
    editRow = null;
}
reset = function() {
    document.getElementById('name').value = '';
    document.getElementById('student_id').value = '';

}
