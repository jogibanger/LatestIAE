function createContact() {
    var myContact = navigator.contacts.create({"displayName": "Test User"});
    myContact.save(contactSuccess, contactError);
     
    function contactSuccess() {
       alert("Contact is saved!");
    }
     
    function contactError(message) {
       alert('Failed because: ' + message);
    }
     
 }

 document.getElementById("createContact").addEventListener("click", createContact);
document.getElementById("findContact").addEventListener("click", findContact);
document.getElementById("deleteContact").addEventListener("click", deleteContact);

 function findContacts() {
    var options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true;
    fields = ["displayName"];
    navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);
     
    function contactfindSuccess(contacts) {
       for (var i = 0; i < contacts.length; i++) {
          alert("Display Name = " + contacts[i].displayName);
       }
    }
     
    function contactfindError(message) {
       alert('Failed because: ' + message);
    }
     
 }


 function deleteContact() {
    var options = new ContactFindOptions();
    options.filter = "Test User";
    options.multiple = false;
    fields = ["displayName"];
    navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);
 
    function contactfindSuccess(contacts) {
       var contact = contacts[0];
       contact.remove(contactRemoveSuccess, contactRemoveError);
 
       function contactRemoveSuccess(contact) {
          alert("Contact Deleted");
       }
 
       function contactRemoveError(message) {
          alert('Failed because: ' + message);
       }
    }
 
    function contactfindError(message) {
       alert('Failed because: ' + message);
    }
     
 }