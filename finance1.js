// >>== DOCUMENT NUMBER FUNCTION ==<<
var date1_str	= SateraitoWF.getFormValue(form, 'dummy_date');
var date_obj	= date1_str.split('-');
var year_int	= date_obj[0];
var month_int	= date_obj[1];
var date_int	= date_obj[2];
var year_str = year_int.toString();
SateraitoWF.setFormValue(form, 'fsyear', year_str);
var month_str = month_int.toString();

if(month_str == '01'){
    SateraitoWF.setFormValue(form, 'month', 'JAN');
}else if(month_str == '02'){
    SateraitoWF.setFormValue(form, 'month', 'FEB');
}else if(month_str == '03'){
    SateraitoWF.setFormValue(form, 'month', 'MAR');
}else if(month_str == '04'){
    SateraitoWF.setFormValue(form, 'month', 'APR');
}else if(month_str == '05'){
    SateraitoWF.setFormValue(form, 'month', 'MAY');
}else if(month_str == '06'){
    SateraitoWF.setFormValue(form, 'month', 'JUN');
}else if(month_str == '07'){
    SateraitoWF.setFormValue(form, 'month', 'JUL');
}else if(month_str == '08'){
    SateraitoWF.setFormValue(form, 'month', 'AUG');
}else if(month_str == '09'){
    SateraitoWF.setFormValue(form, 'month', 'SEP');
}else if(month_str == '10'){
    SateraitoWF.setFormValue(form, 'month', 'OCT');
}else if(month_str == '11'){
    SateraitoWF.setFormValue(form, 'month', 'NOV');
}else if(month_str == '12'){
    SateraitoWF.setFormValue(form, 'month', 'DEC');
}



//>>==DOCUMENT STATUS CONTRO==<<

// var doc_status = SateraitoWF.getDocStatus(form);

//     if(doc_status == 'final_approved'){
// 		SateraitoWF.enableFormElement(form, 'btn2');
// 	}else{
// 		SateraitoWF.disableFormElement(form, 'btn2');
// 	}


// if(doc_status != '' && doc_status != 'draft' && doc_status != 'remanded'){
// 	return;
// }

SateraitoWF.hideRouteSelection(form);



// >>== FORM INPUT CONTROL ==<<
    //2
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