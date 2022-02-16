
$(document).ready(function () {

    var nomRegex = /^[a-zA-Z_-]{4,16}$/;
    var prenomRegex = /^[a-zA-Z_-]{4,16}$/;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



    // fonction changement de couleur pour  l'input si nom prenom non valide-;    
    $("#nom").keyup(function () {
        this.value = this.value.toUpperCase();
        if ($("#nom").val().match(nomRegex)) {
            $("#nom").css("background-color", "green");
            $("#nom").css("border", "2px solid green");
        } else { $("#nom").css("background-color", "red");
        $("#nom").css("border", "2px solid red"); };
    });


    $("#prenom").keyup(function () {
        this.value = this.value.charAt(0).toUpperCase() + this.value.substr(1);
        let VAL = this.value;
        if (prenomRegex.test(VAL)) {
            $("#prenom").css("background-color", "green");
            $("#prenom").css("border", "2px solid green");
        } else { $("#prenom").css("background-color", "red");
        $("#prenom").css("border", "2px solid red");};
    })
    $("#email").keyup(function () {
        this.value = this.value.charAt(0).toUpperCase() + this.value.substr(1);
        let VAL = this.value;
        if (emailRegex.test(VAL)) {
            $("#prenom").css("background-color", "green");
            $("#prenom").css("border", "2px solid green");
        } else { $("#prenom").css("background-color", "red");
        $("#prenom").css("border", "2px solid red");};
    })

    $("#prenom").keyup(function () {
        this.value = this.value.charAt(0).toUpperCase() + this.value.substr(1);
        let VAL = this.value;
        if (prenomRegex.test(VAL)) {
            $("#prenom").css("background-color", "green");
            $("#prenom").css("border", "2px solid green");
        } else { $("#prenom").css("background-color", "red");
        $("#prenom").css("border", "2px solid red");};
    })





  
    var patternMail = /^[a-z0-9\-_.]+@[a-z0-9\-_.]+\.[a-z]{2,3}$/i;
    let flag1 = false;
    let flag2 = false;
    let flag3 = false;

// fonction pour la soumition erreur 
    $("#envoyer").on("click", function (e) {

        if ($("#nom").val() == "") {
           
            e.preventDefault();
            $("#nomerror").show();
            $("#nomerror").html("<b> vous devez rentrez un nom !!!</b>;") .css("color","red"); ;


        } else{ flag1 = true;
            $("error").hide();

        }if 
            
          ($("#prenom").val() === "") {
         
            e.preventDefault();
            $("#prenomerror").show();
            $("#prenomerror").html("<b> vous devez rentrez un prenom !!!</b>;") .css("color","red");  ;



        }else{ flag2 = true;
            $("error").hide();}

        
        
        if (!$("#email").val().match(patternMail)) {

           
            e.preventDefault();
            $("#emailerror").show();
            $("#emailerror").html("<b> vous devez rentrez un adress mail !!!</b>;").css("color","red");


        }else{ flag3 = true;
            $("error").hide();}


    });

});