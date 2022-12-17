document.getElementById("userName").addEventListener('blur',validateUserName)
document.getElementById("email").addEventListener('blur',validateEmail)
document.getElementById("password").addEventListener('blur',validatePassword)
document.getElementById("rePassword").addEventListener('blur',validateRePassword)


    function validateUserName(){
        var valUserName = document.getElementById("userName");
        var regUserName = /^[A-z]{3,} [A-z]{3,}$/

        if(regUserName.test(valUserName.value)){
            valUserName.classList.remove("is-invalid");
            valUserName.classList.add("is-valid");
            return true;
        }else{
            valUserName.classList.add("is-invalid");
            valUserName.classList.remove("is-valid");

            return false;
        }

    }

    function validateEmail(){
        var valEmail = document.getElementById("email");
        var regEmail = /^[A-z][A-z]{2,}[0-9]*@(gmail|yahoo)(.com|.eg|.edu)$/

        if(regEmail.test(valEmail.value))
        {
            valEmail.classList.remove('is-invalid');
            valEmail.classList.add("is-valid");

            return true;
        } else{
            valEmail.classList.add('is-invalid');
            valEmail.classList.remove("is-valid");

            return false;
        }

    }

    function validatePassword(){
        var valPsw = document.getElementById("password");
        var regPsw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"


        if(regPsw.test(valPsw.value))
        {
            valPsw.classList.remove('is-invalid');
            valPsw.classList.add("is-valid");

            return true;
        } else{
            valPsw.classList.add('is-invalid');
            valPsw.classList.remove("is-valid");

            return false;
        }

    }

    function validateRePassword(){
        var valRePsw = document.getElementById("rePassword");
        var valPsw = document.getElementById("password").value;
        console.log(valPsw);
        console.log(valRePsw);

        if(valRePsw.value===valPsw){
            valRePsw.classList.remove('is-invalid');
            valRePsw.classList.add("is-valid");


            return true;
        } else{
            valRePsw.classList.add('is-invalid');
            valRePsw.classList.remove("is-valid");

            return false;
        }

    }


    (function () {
        'use strict'
        const forms = document.querySelectorAll('.requires-validation')
        Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
            if (!form.checkValidity() || !validateEmail()
            || !validatePassword() || !validateRePassword()
            || !validateUserName()
            
            ) {
                event.preventDefault()
                event.stopPropagation()
            }
            else{
            form.classList.add('was-validated')
            }
            }, false)
        })
        })()

