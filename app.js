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



submitForm = function (event) {
    console.log('this is the this', this);
    event.preventDefault();
    let formData = {}
    console.log('this is the event ', event);
    formData['name'] = document.getElementById('name').value;
    formData['studentId'] = document.getElementById('student_id').value
    formData['payStatus'] = this.checkPayment(document.getElementsByName('payStatus'));
    console.log('this is the name', formData);
    insertData(formData);

}

checkPayment = function(element) {
    console.log()
    for(let i=0; i <= element.length; i++) {
        if(element[i].checked) {
            return element[i].value;
        }
    }
}

insertData = function(data) {
    let table = document.getElementById('registration_table');
    console.log('this is the table ', table);
    let newRow = table.insertRow(0);
    console.log('new Row', newRow, table);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);


    // Add some text to the new cells:
    cell1.innerHTML = data.name;
    cell2.innerHTML = data.studentId;
    cell3.innerHTML = data.payStatus;

}
