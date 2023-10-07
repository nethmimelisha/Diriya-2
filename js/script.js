//script.jis

function SendMail(){
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        body : document.getElementById("body").value
    };
  
    const serviceID = "service_zao9d57";
    const templateID = "template_zgonjly"

    

    emailjs
    .send(serviceID,templateID,params)
    .then((res) => {
        document.getElementById("name").value = "" ;
        document.getElementById("email").value = "" ;
        document.getElementById("subject").value = "" ;
        document.getElementById("body").value = "" ;
        console.log(res);
        alert ("Your Message Sent Successfully");
    })
    .catch((err) => console.log(err));
}    
