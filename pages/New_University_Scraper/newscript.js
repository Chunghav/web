function checkValidation(element, error) { 
    const errorClass = 'text-danger d-none';
    const errorClassVisible = 'text-danger';

    const errorName = document.getElementById(error);
    if(document.getElementById(element).value === '') {
        errorName.className = errorClassVisible;
    } else {
        errorName.className = errorClass;
    }
}


 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDp6wss0FuZO54he8yRl9ST2XpuiR_BS9A",
    authDomain: "webdb-f8c0c.firebaseapp.com",
    projectId: "webdb-f8c0c",
    storageBucket: "webdb-f8c0c.appspot.com",
    messagingSenderId: "799530796204",
    appId: "1:799530796204:web:c4b4488952ccb517794b09",
    measurementId: "G-9SHHN3PHRC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function register(event) {
     //Prevent Default Form Submission Behavior
     event.preventDefault()

     checkValidation('inputemail','erroremail');
     checkValidation('inputName','errorName');
     checkValidation('inputPhone','errorphone');
     checkValidation('inputpw','errorpw');
     checkValidation('inputpwre','errorpwre');

    var email = document.getElementById('inputemail').value;
    var userName = document.getElementById('inputName').value;
    var phone = document.getElementById('inputPhone').value;
    var password = document.getElementById('inputpwre').value;
   firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    // alert('User Register successfully');
    
    var id=firebase.auth().currentUser.uid;
    firebase.database().ref('Users/'+id).set({
        Email: email,
        UserName: userName,
        PhoneNumber: phone,
        Password: password,
        

    });
    
    


   }).catch(function(error){
    console.log("Data saved")
    //alert
 alert("Your Form Has Been Submitted Successfully")
       location.replace("../New_University_Scraper/login.html");
    var errorcode=error.code;
    var errormsg=error.message;

   });
 

  }//end register

  function login(event){
      //Prevent Default Form Submission Behavior
     event.preventDefault()

     checkValidation('inputemail','erroremail');
     checkValidation('inputpwre','errorpwre');

     var email = document.getElementById('inputemail').value;
     var password = document.getElementById('inputpwre').value;
    
    firebase.auth().signInWithEmailAndPassword(email,password).then(function(){
 
     var id=firebase.auth().currentUser.uid;
     location.replace("../quiz.html");
     localStorage.setItem('id',id);
     console.log("Data true")
      alert("Your Form Has Been log in Successfully")
      
    }).catch(function(error){
 alert("Your email or password are wrong please try again")
     var errorCode=error.code;
     var errorMsg=error.message;
 
    });
   }