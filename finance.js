
// >>== FORM INPUT CONTROL ==<<

function formvalidator(){
    var description2 = document.getElementsByName('description2');
    var qty2 = document.getElementsByName('description2');
    var unit_price2 = document.getElementsByName('description2');
    var amount2 = document.getElementsByName('description2');

    description2.addEventListener('change', function () {
        console.log("changed");
        console.log("add tagg");
        qty2.class += "mandatory";
        qty2.sateraito_class += "mandatory";
        unit_price2.class += "mandatory";
        unit_price2.sateraito_class += "mandatory";
        amount2.class += "mandatory";
        amount2.sateraito_class += "mandatory";
    });
}
