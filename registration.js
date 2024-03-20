function validate() {
    var fn = forrrrm.fname.value;
    for (x in fn) {
        let ch = fn.charCodeAt(x);
        if (ch < 65  || ch > 90 && ch < 97 || ch > 122) {
            alert("Invalid First name!!!")
            return false;
        } 
    }
    var ln = forrrrm.lname.value;
    for (y in ln) {
        let ch = ln.charCodeAt(y);
        if (ch < 65  || ch > 90 && ch < 97 || ch > 122) {
            alert("Invalid Last name!!!")
            return false;
        } 
    }
    var ph = forrrrm.phone.value;
    var lengthPhone = ph.length;
    if (lengthPhone !== 10) {
        alert("Phone number should be consisting of 10 digits");
        return false;
    }
    var pass = forrrrm.password.value;
    var lengthPass = pass.length;
    if (lengthPass <= 8) {
        alert("Password must have atleast 8 characters");
        return false;
    }
    var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    var mail = forrrrm.mail.value;
    if (regexp.test(mail)) {
        alert("Registered Successfully")
    } else {
        alert("Invalid email");
        return false;
    }
    return true;
}