form = SateraitoWF.getForm(document.getElementsByName('workflow_doc_load_handler'));

console.log(" SateraitoWF.getForm(this) : "+ form);
//==========FUNCTION=============//
function service2validator(){
    var description2 = SateraitoWF.getFormValue(form, 'description2');
    var description3 = SateraitoWF.getFormValue(form, 'description3');
    var description4 = SateraitoWF.getFormValue(form, 'description4');
    var description5 = SateraitoWF.getFormValue(form, 'description5');
    var description6 = SateraitoWF.getFormValue(form, 'description6');
    var description7 = SateraitoWF.getFormValue(form, 'description7');
    var description8 = SateraitoWF.getFormValue(form, 'description8');

    console.log(description2);

    if(description2.length > 0){
        SateraitoWF.enableFormElement(form, 'quantity2');
        SateraitoWF.enableFormElement(form, 'unit_price2');
        $(form).find(':input[name=quantity2]').addClass('mandatory');
        $(form).find(':input[name=quantity2]').attr('mandatory_msg','Please insert quantity on number 2');
        $(form).find(':input[name=unit_price2]').addClass('mandatory');
        $(form).find(':input[name=unit_price2]').attr('mandatory_msg','Please insert unit price on number 2');
    }
    if(description3.length > 0){
        SateraitoWF.enableFormElement(form, 'quantity3');
        SateraitoWF.enableFormElement(form, 'unit_price3');
        $(form).find(':input[name=quantity3]').addClass('mandatory');
        $(form).find(':input[name=quantity3]').attr('mandatory_msg','Please insert quantity on number 3');
        $(form).find(':input[name=unit_price3]').addClass('mandatory');
        $(form).find(':input[name=unit_price3]').attr('mandatory_msg','Please insert unit price on number 3');
    }
    if(description4.length > 0){
        SateraitoWF.enableFormElement(form, 'quantity4');
        SateraitoWF.enableFormElement(form, 'unit_price4');
        $(form).find(':input[name=quantity4]').addClass('mandatory');
        $(form).find(':input[name=quantity4]').attr('mandatory_msg','Please insert quantity on number 4');
        $(form).find(':input[name=unit_price4]').addClass('mandatory');
        $(form).find(':input[name=unit_price4]').attr('mandatory_msg','Please insert unit price on number 4');
    }
    if(description5.length > 0){
        SateraitoWF.enableFormElement(form, 'quantity5');
        SateraitoWF.enableFormElement(form, 'unit_price5');
        $(form).find(':input[name=quantity5]').addClass('mandatory');
        $(form).find(':input[name=quantity5]').attr('mandatory_msg','Please insert quantity on number 5');
        $(form).find(':input[name=unit_price5]').addClass('mandatory');
        $(form).find(':input[name=unit_price5]').attr('mandatory_msg','Please insert unit price on number 5');
    }
    if(description6.length > 0){
        SateraitoWF.enableFormElement(form, 'quantity6');
        SateraitoWF.enableFormElement(form, 'unit_price6');
        $(form).find(':input[name=quantity6]').addClass('mandatory');
        $(form).find(':input[name=quantity6]').attr('mandatory_msg','Please insert quantity on number 6');
        $(form).find(':input[name=unit_price6]').addClass('mandatory');
        $(form).find(':input[name=unit_price6]').attr('mandatory_msg','Please insert unit price on number 6');
    }
    if(description7.length > 0){
        SateraitoWF.enableFormElement(form, 'quantity7');
        SateraitoWF.enableFormElement(form, 'unit_price7');
        $(form).find(':input[name=quantity7]').addClass('mandatory');
        $(form).find(':input[name=quantity7]').attr('mandatory_msg','Please insert quantity on number 7');
        $(form).find(':input[name=unit_price7]').addClass('mandatory');
        $(form).find(':input[name=unit_price7]').attr('mandatory_msg','Please insert unit price on number 7');
    }
    if(description8.length > 0){
        SateraitoWF.enableFormElement(form, 'quantity8');
        SateraitoWF.enableFormElement(form, 'unit_price8');
        $(form).find(':input[name=quantity8]').addClass('mandatory');
        $(form).find(':input[name=quantity8]').attr('mandatory_msg','Please insert quantity on number 8');
        $(form).find(':input[name=unit_price8]').addClass('mandatory');
        $(form).find(':input[name=unit_price8]').attr('mandatory_msg','Please insert unit price on number 8');
    }
}

function calculate_amount(numb){
    var qty = 'quantity'+numb;
    var up = 'unit_price'+numb;
    var amount = 'amount'+numb;
    var quantity = SateraitoWF.getFormValue(form, qty);
    var unit_price = SateraitoWF.getFormValue(form, up);
    SateraitoWF.setFormValue(form, amount, quantity * unit_price);
    SateraitoWF.setFormValue(form, 'total_amount', '');
}

function calculateTotalAmount(){
    var amount1 = SateraitoWF.getFormValue(form, 'amount1');
    var amount2 = SateraitoWF.getFormValue(form, 'amount2');
    var amount3 = SateraitoWF.getFormValue(form, 'amount3');
    var amount4 = SateraitoWF.getFormValue(form, 'amount4');
    var amount5 = SateraitoWF.getFormValue(form, 'amount5');
    var amount6 = SateraitoWF.getFormValue(form, 'amount6');
    var amount7 = SateraitoWF.getFormValue(form, 'amount7');
    var amount8 = SateraitoWF.getFormValue(form, 'amount8');
    var discount = SateraitoWF.getFormValue(form, 'invoice_discount');


    amount1 =  parseInt(amount1) || 0;
    amount2 =  parseInt(amount2) || 0;
    amount3 =  parseInt(amount3) || 0;
    amount4 =  parseInt(amount4) || 0;
    amount5 =  parseInt(amount5) || 0;
    amount6 =  parseInt(amount6) || 0;
    amount7 =  parseInt(amount7) || 0;
    amount8 =  parseInt(amount8) || 0;

    console.log('amount1 :'+ amount1);
    console.log('amount2 :'+ amount2);
    console.log('amount3 :'+ amount3);
    console.log('amount4 :'+ amount4);
    console.log('amount5 :'+ amount5);
    console.log('amount6 :'+ amount6);
    console.log('amount7 :'+ amount7);
    console.log('amount8 :'+ amount8);

    var total = amount1 + amount2 + amount3 + amount4 + amount5 + amount6 + amount7 + amount8 - discount;
    SateraitoWF.setFormValue(form, 'total_amount', total);
}


//GENERATE CODE & APPLICATION NUMBER
function generate_code(invoice_code){
    var year = SateraitoWF.getFormValue(form, 'dummy_date');
    year = year.slice(2,-6);
    SateraitoWF.setFormValue(form, 'generated_code', invoice_code+year+invoice_numer+'OSL');

    // var generate_code_final = SateraitoWF.getFormValue(form, 'generated_code');
    // SateraitoWF.setFormValue(form, 'No', 'OSSI/FINANCE/'+generate_code_final)
}



//PUSH TO POWERAUTOMATE
function push(){
    var data =
    {
        "invoice_number": SateraitoWF.getFormValue(form, 'generated_code'),
        "invoice_to": SateraitoWF.getFormValue(form, 'To'),
        "invoice_attn" : SateraitoWF.getFormValue(form, 'attn'),
        "invoice_date": SateraitoWF.getFormValue(form, 'invoice_date'),
        "payment_due_date": SateraitoWF.getFormValue(form, 'payment_due_date'),
        "wf_document" : SateraitoWF.getFormValue(form, 'payment_due_date'),
        "currency": SateraitoWF.getFormValue(form, 'URL_Application'),
        "VAT_percentage" : SateraitoWF.getFormValue(form, 'vat_percentage'), //1
        "witholding_tax" : SateraitoWF.getFormValue(form, 'witholding_tax'), //2
        "invoice_discount" : SateraitoWF.getFormValue(form, 'invoice_discount'), //3
        "grand_total": SateraitoWF.getFormValue(form, 'total_amount'),
        "currency" : SateraitoWF.getFormValue(form, 'curency'),
        "service_details" : [
            {
                "title" : SateraitoWF.getFormValue(form, 'description1'),
                "invoice_number" : SateraitoWF.getFormValue(form, 'generated_code'),
                "qty" : SateraitoWF.getFormValue(form, 'quantity1'),
                "unit_price" : SateraitoWF.getFormValue(form, 'unit_price1'),
                "amount" : SateraitoWF.getFormValue(form, 'amount1')
            },
            {
                "title" : SateraitoWF.getFormValue(form, 'description2'),
                "invoice_number" : SateraitoWF.getFormValue(form, 'generated_code'),
                "qty" : SateraitoWF.getFormValue(form, 'quantity2'),
                "unit_price" : SateraitoWF.getFormValue(form, 'unit_price2'),
                "amount" : SateraitoWF.getFormValue(form, 'amount2')
            },
            {
                "title" : SateraitoWF.getFormValue(form, 'description3'),
                "invoice_number" : SateraitoWF.getFormValue(form, 'generated_code'),
                "qty" : SateraitoWF.getFormValue(form, 'quantity3'),
                "unit_price" : SateraitoWF.getFormValue(form, 'unit_price3'),
                "amount" : SateraitoWF.getFormValue(form, 'amount3')
            },
            {
                "title" : SateraitoWF.getFormValue(form, 'description4'),
                "invoice_number" : SateraitoWF.getFormValue(form, 'generated_code'),
                "qty" : SateraitoWF.getFormValue(form, 'quantity4'),
                "unit_price" : SateraitoWF.getFormValue(form, 'unit_price4'),
                "amount" : SateraitoWF.getFormValue(form, 'amount4')
            },
            {
                "title" : SateraitoWF.getFormValue(form, 'description5'),
                "invoice_number" : SateraitoWF.getFormValue(form, 'generated_code'),
                "qty" : SateraitoWF.getFormValue(form, 'quantity5'),
                "unit_price" : SateraitoWF.getFormValue(form, 'unit_price5'),
                "amount" : SateraitoWF.getFormValue(form, 'amount5')
            },
            {
                "title" : SateraitoWF.getFormValue(form, 'description6'),
                "invoice_number" : SateraitoWF.getFormValue(form, 'generated_code'),
                "qty" : SateraitoWF.getFormValue(form, 'quantity6'),
                "unit_price" : SateraitoWF.getFormValue(form, 'unit_price6'),
                "amount" : SateraitoWF.getFormValue(form, 'amount6')
            },
            {
                "title" : SateraitoWF.getFormValue(form, 'description7'),
                "invoice_number" : SateraitoWF.getFormValue(form, 'generated_code'),
                "qty" : SateraitoWF.getFormValue(form, 'quantity7'),
                "unit_price" : SateraitoWF.getFormValue(form, 'unit_price7'),
                "amount" : SateraitoWF.getFormValue(form, 'amount7')
            },
            {
                "title" : SateraitoWF.getFormValue(form, 'description8'),
                "invoice_number" : SateraitoWF.getFormValue(form, 'generated_code'),
                "qty" : SateraitoWF.getFormValue(form, 'quantity8'),
                "unit_price" : SateraitoWF.getFormValue(form, 'unit_price8'),
                "amount" : SateraitoWF.getFormValue(form, 'amount8')
            }
        ],
        "remarks": SateraitoWF.getFormValue(form, 'remaks'),
        "invoice_cervice" : SateraitoWF.getFormValue(form, 'service_dept'),
    }
    console.log(data)
    $.ajax({
        type: 'POST',
        url: 'https://prod-01.southeastasia.logic.azure.com:443/workflows/ba98eb5945514b869a6384fba395ee40/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=BrIlnvoEN1z0mksa2l146eRMrF05zr0CYrPKW5IX4Ks',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(data),
        success: function(success){
            console.log(success);},
        error: function(errMsg) {
            console.log(errMsg);
        }
    });
}

//==========DOCUMENT CONTROL=============//
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

    SateraitoWF.hideRouteSelection(form);

    //GET INVOICE NUMBER
    var results =  SateraitoWF.getMasterData('finance_invoice_number');
    Ext.each(results, function(){
        console.log('number : '+ this.attribute_1)
        var fixnum = String(this.attribute_1).padStart(4, '0')
        SateraitoWF.setFormValue(form, 'invoice_number', fixnum);
    });

    let invoice_numer = SateraitoWF.getFormValue(form, 'invoice_number');


    // DOCUMENT STATUS CONTROL
    var doc_status = SateraitoWF.getDocStatus(form);
    console.log('doc_status : '+ doc_status);
    //default disable invoice date&invoice due date
    console.log('status = empty');
    $('.finance_only').css('display','none');

    
    if(doc_status == 'in_process'){
        console.log('status = in_process')
        var processInfos = SateraitoWF.getApproveProcessInfo(form);
        console.log('processInfos : ' + processInfos[2]);
        console.log('processInfos status : ' + processInfos[2].status);
        SateraitoWF.disableFormElement(form,'button_calculate');
        $(form).find(':input[name=button_calculate]').css('display','none');

        var statusProcess = processInfos[2].status;
        if(processInfos[2].status == 'in_process' || statusProcess == 'final_approved'){
            //enable invoice date field
            $(form).find('.finance_only').css('display','block');

            SateraitoWF.enableFormElement(form, 'invoice_date');
            $(form).find(':input[name=invoice_date]').attr('mandatory_msg','Please select invoice date');
            $(form).find(':input[name=invoice_date]').addClass('mandatory');

            SateraitoWF.enableFormElement(form, 'payment_due_date');
            $(form).find(':input[name=payment_due_date]').attr('mandatory_msg','Please select payment due date');
            $(form).find(':input[name=payment_due_date]').addClass('mandatory');

            SateraitoWF.enableFormElement(form, 'vat_percentage');
            $(form).find(':input[name=vat_percentage]').attr('mandatory_msg','Please insert vat percentage');
            $(form).find(':input[name=vat_percentage]').addClass('mandatory');

            SateraitoWF.enableFormElement(form, 'witholding_tax');
            $(form).find(':input[name=witholding_tax]').attr('mandatory_msg','Please insert witholding tax');
            $(form).find(':input[name=witholding_tax]').addClass('mandatory');

            SateraitoWF.enableFormElement(form, 'discount');
            $(form).find(':input[name=discount]').attr('mandatory_msg','Please insert discount');
            $(form).find(':input[name=discount]').addClass('mandatory');

        }else if(processInfos[3].status == 'in_process' || statusProcess == 'final_approved'){
            $(form).find(':input[name=button_calculate]').css('display','none');

            console.log('pushed');
            push();
        }else{
            $(form).find('.finance_only').css('display','none');
        }
    }
    if(doc_status == 'final_approved'){
        $(form).find('.finance_only').css('display','block');
    }



    SateraitoWF.disableFormElement(form, 'quantity2');
    SateraitoWF.disableFormElement(form, 'quantity3');
    SateraitoWF.disableFormElement(form, 'quantity4');
    SateraitoWF.disableFormElement(form, 'quantity5');
    SateraitoWF.disableFormElement(form, 'quantity6');
    SateraitoWF.disableFormElement(form, 'quantity7');
    SateraitoWF.disableFormElement(form, 'quantity8');
    SateraitoWF.disableFormElement(form, 'unit_price2');
    SateraitoWF.disableFormElement(form, 'unit_price3');
    SateraitoWF.disableFormElement(form, 'unit_price4');
    SateraitoWF.disableFormElement(form, 'unit_price5');
    SateraitoWF.disableFormElement(form, 'unit_price6');
    SateraitoWF.disableFormElement(form, 'unit_price7');
    SateraitoWF.disableFormElement(form, 'unit_price8');
    //     if(doc_status == 'final_approved'){
    // 		SateraitoWF.enableFormElement(form, 'btn2');
    // 	}else{
    // 		SateraitoWF.disableFormElement(form, 'btn2');
    // 	}

    //SET INVOICE CODE - display select
    var dept =  SateraitoWF.getFormValue(form, 'Department');

    switch(dept) {
        case 'BS-Language (Translation-Interpreter)':
            SateraitoWF.enableFormElement(form, 'invoice_code');
            $(form).find('.invoice_code_es').remove();
            $(form).find('.invoice_code_gs').remove();
            $(form).find('.invoice_code_ts').remove();
            console.log('BS-Language (Translation-Interpreter)');
        break;
        case 'Employment Strategy':
            SateraitoWF.enableFormElement(form, 'invoice_code');
            $(form).find('.invoice_code_bs').remove();
            $(form).find('.invoice_code_gs').remove();
            $(form).find('.invoice_code_ts').remove();
            console.log('Employment Strategy');
        break;
        case 'GS-Education':
            SateraitoWF.enableFormElement(form, 'invoice_code');
            $(form).find('.invoice_code_bs').remove();
            $(form).find('.invoice_code_es').remove();
            $(form).find('.invoice_code_ts').remove();
            console.log('GS-Education');
        break;
        case 'Talent Strategy':
            SateraitoWF.enableFormElement(form, 'invoice_code');
            $(form).find('.invoice_code_bs').remove();
            $(form).find('.invoice_code_es').remove();
            $(form).find('.invoice_code_gs').remove();
            console.log('Talent Strategy');
        break;
        case 'BS-CEBL':
            SateraitoWF.disableFormElement(form, 'invoice_code');
            SateraitoWF.setFormValue(form, 'code_invoice', 'BS/CEBL/');
            $(form).find('.invoice_code_ts').remove();
            $(form).find('.invoice_code_bs').remove();
            $(form).find('.invoice_code_es').remove();
            $(form).find('.invoice_code_gs').remove();
            generate_code('BS/CEBL/');
            console.log('BS-CEBL');
        break;
        case 'BS-HRC':
            SateraitoWF.disableFormElement(form, 'invoice_code');
            SateraitoWF.setFormValue(form, 'code_invoice', 'HRC');
            $(form).find('.invoice_code_ts').remove();
            $(form).find('.invoice_code_bs').remove();
            $(form).find('.invoice_code_es').remove();
            $(form).find('.invoice_code_gs').remove();
            generate_code('HRC');
            console.log('BS-HRC');
        break;
        case 'BS-HRC-PAY':
            SateraitoWF.disableFormElement(form, 'invoice_code');
            SateraitoWF.setFormValue(form, 'code_invoice', 'PAY');
            $(form).find('.invoice_code_ts').remove();
            $(form).find('.invoice_code_bs').remove();
            $(form).find('.invoice_code_es').remove();
            $(form).find('.invoice_code_gs').remove();
            generate_code('PAY');
            console.log('BS-HRC-PAY');
        break;
        case 'BS-HRC-PSY':
            SateraitoWF.disableFormElement(form, 'invoice_code');
            SateraitoWF.setFormValue(form, 'code_invoice', 'PSY');
            $(form).find('.invoice_code_ts').remove();
            $(form).find('.invoice_code_bs').remove();
            $(form).find('.invoice_code_es').remove();
            $(form).find('.invoice_code_gs').remove();
            generate_code('PSY');
            console.log('BS-HRC-PSY');
        break;
        case 'BS-HRC-TRN':
            SateraitoWF.disableFormElement(form, 'invoice_code');
            SateraitoWF.setFormValue(form, 'code_invoice', 'TRN');
            $(form).find('.invoice_code_ts').remove();
            $(form).find('.invoice_code_bs').remove();
            $(form).find('.invoice_code_es').remove();
            $(form).find('.invoice_code_gs').remove();
            generate_code('TR');
            console.log('BS-HRC-TRN');
        break;
        case 'BS-Visa':
            SateraitoWF.disableFormElement(form, 'invoice_code');
            SateraitoWF.setFormValue(form, 'code_invoice', 'BS/VISA');
            $(form).find('.invoice_code_ts').remove();
            $(form).find('.invoice_code_bs').remove();
            $(form).find('.invoice_code_es').remove();
            $(form).find('.invoice_code_gs').remove();
            generate_code('BS/VISA/');
            console.log('BS-Visa');
        break;
        case 'GS-Ginojishuusei':
            SateraitoWF.disableFormElement(form, 'invoice_code');
            SateraitoWF.setFormValue(form, 'code_invoice', 'GJ');
            $(form).find('.invoice_code_ts').remove();
            $(form).find('.invoice_code_bs').remove();
            $(form).find('.invoice_code_es').remove();
            $(form).find('.invoice_code_gs').remove();
            generate_code('GJ');
            console.log('GS-Ginojishuusei');
        break;
        case 'GS-Kaigo':
            SateraitoWF.disableFormElement(form, 'invoice_code');
            SateraitoWF.setFormValue(form, 'code_invoice', 'KG');
            $(form).find('.invoice_code_ts').remove();
            $(form).find('.invoice_code_bs').remove();
            $(form).find('.invoice_code_es').remove();
            $(form).find('.invoice_code_gs').remove();
            generate_code('KG');
            console.log('GS-Kaigo');
        break;
        case 'Language Course':
            SateraitoWF.disableFormElement(form, 'invoice_code');
            var invoice_code = SateraitoWF.setFormValue(form, 'code_invoice', 'LC/IN');
            $(form).find('.invoice_code_ts').remove();
            $(form).find('.invoice_code_bs').remove();
            $(form).find('.invoice_code_es').remove();
            $(form).find('.invoice_code_gs').remove();
            generate_code('LC/IN/');
            console.log('Language Course');
        break;
        default:
            $(form).find('.invoice_code_ts').remove();
            $(form).find('.invoice_code_bs').remove();
            $(form).find('.invoice_code_es').remove();
            $(form).find('.invoice_code_gs').remove();
            console.log('divisi kosong');
    }

    //onchange function
    $(form).find(':input[name=invoice_code]').change(function(){
        var invoice_code = SateraitoWF.getFormValue(form, 'invoice_code');
        SateraitoWF.setFormValue(form, 'code_invoice', invoice_code);
        generate_code(invoice_code);
    });
    //set default
    var invoice_code = SateraitoWF.getFormValue(form, 'invoice_code');
    SateraitoWF.setFormValue(form, 'code_invoice', invoice_code);
    generate_code(invoice_code);
