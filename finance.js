
// >>== FORM INPUT CONTROL ==<<

function service2validator(){
    var description2 = document.getElementsByName('description2');
    var qty2 = document.getElementsByName('qty2');
    var unit_price2 = document.getElementsByName('unit_price2');
    var amount2 = document.getElementsByName('amount2');

    if(description2.value !=null){
        console.log("changed not null");
        qty2.class += "mandatory";
        qty2.sateraito_class += "mandatory";
        unit_price2.class += "mandatory";
        unit_price2.sateraito_class += "mandatory";
        amount2.class += "mandatory";
        amount2.sateraito_class += "mandatory";
    }else{
        console.log("changed null");
    }
}
