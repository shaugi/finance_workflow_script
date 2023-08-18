form = SateraitoWF.getForm(document.getElementsByName('workflow_doc_load_handler'));
let invoice_number_view = SateraitoWF.getFormValue(form, 'invoice_number_view');
let total_vat = 0;
let total_wht = 0;

//==========FUNCTION=============//
function service2validator(){
    var description2 = SateraitoWF.getFormValue(form, 'description2');
    var description3 = SateraitoWF.getFormValue(form, 'description3');
    var description4 = SateraitoWF.getFormValue(form, 'description4');
    var description5 = SateraitoWF.getFormValue(form, 'description5');
    var description6 = SateraitoWF.getFormValue(form, 'description6');
    var description7 = SateraitoWF.getFormValue(form, 'description7');
    var description8 = SateraitoWF.getFormValue(form, 'description8');


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

function calculate_vat(numb){
    var prev = 0;

    var qty = 'quantity'+numb;
    var up = 'unit_price'+numb;
    var quantity = SateraitoWF.getFormValue(form, qty);
    var unit_price = SateraitoWF.getFormValue(form, up);

    var vat = 'vat'+numb;
    var vate = SateraitoWF.getFormValue(form, vat);


    if(vat != null){
        current_vat = ((quantity * unit_price) * (vate / 100));
        if(current_vat >= prev){
            prev = current_vat
            current_vat = 0;
            total_vat += prev
        }
    }
    // SateraitoWF.setFormValue(form, 'vat_percentage', total_vat);
}

function calculate_wht(numb){
    var prev = 0;

    var qty = 'quantity'+numb;
    var up = 'unit_price'+numb;
    var quantity = SateraitoWF.getFormValue(form, qty);
    var unit_price = SateraitoWF.getFormValue(form, up);

    var wht = 'wht'+numb;
    var whit = SateraitoWF.getFormValue(form, wht);


    if(wht != null){
        current_wht = ((quantity * unit_price) * (whit / 100));
        if(current_wht >= prev){
            prev = current_wht
            current_wht = 0;
            total_wht += prev
        }
    }
    // SateraitoWF.setFormValue(form, 'witholding_tax', total_wht);
}
function calculate_amount(numb){

    var qty = 'quantity'+numb;
    var up = 'unit_price'+numb;
    var amount = 'amount'+numb;
    var vat = 'vat'+numb;
    var wht = 'wht'+numb;
    var quantity = SateraitoWF.getFormValue(form, qty);
    var unit_price = SateraitoWF.getFormValue(form, up);
    var vate = SateraitoWF.getFormValue(form, vat);
    var whit = SateraitoWF.getFormValue(form, wht)

    var total_amount = (quantity * unit_price) + ((quantity * unit_price) * (vate / 100)) - ((quantity * unit_price) * (whit / 100)) ;

    SateraitoWF.setFormValue(form, amount, total_amount);
    SateraitoWF.setFormValue(form, 'total_amount', '');
}

// function calculateTotalAmount(){
//     var amount1 = SateraitoWF.getFormValue(form, 'amount1');
//     var amount2 = SateraitoWF.getFormValue(form, 'amount2');
//     var amount3 = SateraitoWF.getFormValue(form, 'amount3');
//     var amount4 = SateraitoWF.getFormValue(form, 'amount4');
//     var amount5 = SateraitoWF.getFormValue(form, 'amount5');
//     var amount6 = SateraitoWF.getFormValue(form, 'amount6');
//     var amount7 = SateraitoWF.getFormValue(form, 'amount7');
//     var amount8 = SateraitoWF.getFormValue(form, 'amount8');
//     var discount = SateraitoWF.getFormValue(form, 'invoice_discount');


//     amount1 =  parseInt(amount1) || 0;
//     amount2 =  parseInt(amount2) || 0;
//     amount3 =  parseInt(amount3) || 0;
//     amount4 =  parseInt(amount4) || 0;
//     amount5 =  parseInt(amount5) || 0;
//     amount6 =  parseInt(amount6) || 0;
//     amount7 =  parseInt(amount7) || 0;
//     amount8 =  parseInt(amount8) || 0;

//     var qty1 = SateraitoWF.getFormValue(form, 'quantity1');
//     var qty2 = SateraitoWF.getFormValue(form, 'quantity2');
//     var qty3 = SateraitoWF.getFormValue(form, 'quantity3');
//     var qty4 = SateraitoWF.getFormValue(form, 'quantity4');
//     var qty5 = SateraitoWF.getFormValue(form, 'quantity5');
//     var qty6 = SateraitoWF.getFormValue(form, 'quantity6');
//     var qty7 = SateraitoWF.getFormValue(form, 'quantity7');
//     var qty8 = SateraitoWF.getFormValue(form, 'quantity8');

//     var up1 = SateraitoWF.getFormValue(form,'unit_price1');
//     var up2 = SateraitoWF.getFormValue(form,'unit_price2');
//     var up3 = SateraitoWF.getFormValue(form,'unit_price3');
//     var up4 = SateraitoWF.getFormValue(form,'unit_price4');
//     var up5 = SateraitoWF.getFormValue(form,'unit_price5');
//     var up6 = SateraitoWF.getFormValue(form,'unit_price6');
//     var up7 = SateraitoWF.getFormValue(form,'unit_price7');
//     var up8 = SateraitoWF.getFormValue(form,'unit_price8');

//     var wht1 = SateraitoWF.getFormValue(form, 'wht1');
//     var wht2 = SateraitoWF.getFormValue(form, 'wht2');
//     var wht3 = SateraitoWF.getFormValue(form, 'wht3');
//     var wht4 = SateraitoWF.getFormValue(form, 'wht4');
//     var wht5 = SateraitoWF.getFormValue(form, 'wht5');
//     var wht6 = SateraitoWF.getFormValue(form, 'wht6');
//     var wht7 = SateraitoWF.getFormValue(form, 'wht7');
//     var wht8 = SateraitoWF.getFormValue(form, 'wht8');

//     var vat1 = SateraitoWF.getFormValue(form, 'vat1');
//     var vat2 = SateraitoWF.getFormValue(form, 'vat2');
//     var vat3 = SateraitoWF.getFormValue(form, 'vat3');
//     var vat4 = SateraitoWF.getFormValue(form, 'vat4');
//     var vat5 = SateraitoWF.getFormValue(form, 'vat5');
//     var vat6 = SateraitoWF.getFormValue(form, 'vat6');
//     var vat7 = SateraitoWF.getFormValue(form, 'vat7');
//     var vat8 = SateraitoWF.getFormValue(form, 'vat8');


//     var total_vat1 = ((qty1 * up1) * (vat1 / 100));
//     var total_vat2 = ((qty2 * up2) * (vat2 / 100));
//     var total_vat3 = ((qty3 * up3) * (vat3 / 100));
//     var total_vat4 = ((qty4 * up4) * (vat4 / 100));
//     var total_vat5 = ((qty5 * up5) * (vat5 / 100));
//     var total_vat6 = ((qty6 * up6) * (vat6 / 100));
//     var total_vat7 = ((qty7 * up7) * (vat7 / 100));
//     var total_vat8 = ((qty8 * up8) * (vat8 / 100));

//     var total_wht1 = ((qty1 * up1) * (wht1 / 100));
//     var total_wht2 = ((qty2 * up2) * (wht2 / 100));
//     var total_wht3 = ((qty3 * up3) * (wht3 / 100));
//     var total_wht4 = ((qty4 * up4) * (wht4 / 100));
//     var total_wht5 = ((qty5 * up5) * (wht5 / 100));
//     var total_wht6 = ((qty6 * up6) * (wht6 / 100));
//     var total_wht7 = ((qty7 * up7) * (wht7 / 100));
//     var total_wht8 = ((qty8 * up8) * (wht8 / 100));


//     // Calculate total VAT
//     total_vat = total_vat1 + total_vat2 + total_vat3 + total_vat4 + total_vat5 + total_vat6 + total_vat7 + total_vat8 ;
//     total_wht = total_wht1 + total_wht2 + total_wht3 + total_wht4 + total_wht5 + total_wht6 + total_wht7 + total_wht8 ;

//     console.log(qty1)
//     console.log(up1)
//     console.log(total_vat)
//     console.log(total_vat1);
//     SateraitoWF.setFormValue(form, 'witholding_tax', total_wht);
//     SateraitoWF.setFormValue(form, 'vat_percentage', total_vat);

//     var total = amount1 + amount2 + amount3 + amount4 + amount5 + amount6 + amount7 + amount8 - discount;
//     SateraitoWF.setFormValue(form, 'total_amount', total);
// }

function calculateTotalAmount() {
    var amounts = [];
    var qtys = [];
    var unitPrices = [];
    var whts = [];
    var vats = [];

    var total_vat = 0;
    var total_wht = 0;

    // Populate arrays with form values
    for (var i = 1; i <= 8; i++) {
        amounts.push(parseInt(SateraitoWF.getFormValue(form, 'amount' + i)) || 0);
        qtys.push(parseInt(SateraitoWF.getFormValue(form, 'quantity' + i)) || 0);
        unitPrices.push(SateraitoWF.getFormValue(form, 'unit_price' + i));
        whts.push(parseFloat(SateraitoWF.getFormValue(form, 'wht' + i)) || 0);
        vats.push(parseFloat(SateraitoWF.getFormValue(form, 'vat' + i)) || 0);
    }

    var discount = parseInt(SateraitoWF.getFormValue(form, 'invoice_discount')) || 0;

    // Calculate total VAT and WHT
    for (var i = 0; i < 8; i++) {
        total_vat += (qtys[i] * unitPrices[i] * vats[i] / 100);
        total_wht += (qtys[i] * unitPrices[i] * whts[i] / 100);
    }

    // Set the calculated totals
    SateraitoWF.setFormValue(form, 'witholding_tax', total_wht);
    SateraitoWF.setFormValue(form, 'vat_percentage', total_vat);

    // Calculate and set the total amount
    var total = amounts.reduce(function (acc, cur) {
        return acc + cur;
    }, 0) - discount;

    SateraitoWF.setFormValue(form, 'total_amount', total);
}


//GENERATE CODE & APPLICATION NUMBER
function generate_code(invoice_code){
    var year = SateraitoWF.getFormValue(form, 'dummy_date');
    year = year.slice(2,-6);
    SateraitoWF.setFormValue(form, 'generated_code', invoice_code+year+invoice_number_view+'OSL');
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
    // console.log(data)
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

function showLastInvNumber(){
    var results =  SateraitoWF.getMasterData('finance_invoice_number');
    let fix_number = '';
    Ext.each(results, function(){
        var fixnum = String(this.attribute_1).padStart(4, '0')
        fix_number = fixnum;
    });
    SateraitoWF.setFormValue(form, 'invoice_number_view', fix_number)

}

function addService(){
    console.log("tes")
    var service = null;
    var code = SateraitoWF.getFormValue(form, 'invoice_code')
    switch(code){
        case "BS/VISA":
            service = "Business License Obtaining Service";
            break;
        case "HRC":
            service = "HR Consulting/ Company Regulation/ Employee Agreement";
            break;
        case "PSY":
            service = "Assesment Service";
            break;
        case "TR":
            service = "Translation Service";
            break;
        case "INT":
            service = "Interpretation Service";
            break;
        case "TRN":
            service = "Training";
            break;
        case "PAY":
            service = "Payroll Service";
            break;
        case "LC/IN/":
            service = "Language Course";
            break;
        case "WC/OSJP/":
            service = "Recruitment Service";
            break;
        case "WC/JP/":
            service = "Recruitment Service";
            break;
        case "BC/AD/":
            service = "Alih Daya Service";
            break;
        case "BC/OS/":
            service = "Essential Service";
            break;
        case "BC/RS/":
            service = "Recruitment Service";
            break;
        case "KG":
            service = "Kaigo";
            break;
        case "JLMC":
            service = "Education";
            break;
        case "GJ":
            service = "GINOJISSHUSEI";
            break;
        case "OT":
            service = "Other";
            break;
        case "RYU":
            service = "Education Ryugaku";
        case "LC/JP/":
            service = "Language Course";
            break;
        case "BS/CEBL/":
            service = "Business License Obtaining Service";
            break;
        case "BS/VISA/":
            service ="Business License Obtaining Service";
            break;
        case "EU":
            service = "-";
            break;
        default:


    }


    SateraitoWF.setFormValue(form, 'service_dept', service);
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

    var doc_status = SateraitoWF.getDocStatus(form);
    var processInfos = SateraitoWF.getApproveProcessInfo(form);


    //DOCUMENT STATUS = CREATE NEW
    if(doc_status == ''){
        //SET TO DEFAULT EMPTY
        SateraitoWF.setFormValue(form, 'generated_code', '');
        for(i = 1; i<=8; i++){
            vat = 'vat'+i;
            wht = 'wht'+i;
            console.log(vat);
            SateraitoWF.enableFormElement(form, vat);
            SateraitoWF.enableFormElement(form, wht);
        }
    }else if(doc_status == 'in_process'){
        var processInfos = SateraitoWF.getApproveProcessInfo(form);
        if(processInfos[2].status == 'in_process'){
            //Generate code on finance approval
            var invoice_code = SateraitoWF.getFormValue(form, 'invoice_code');
            generate_code(invoice_code);

            var description2 = SateraitoWF.getFormValue(form, 'description2');
            var description3 = SateraitoWF.getFormValue(form, 'description3');
            var description4 = SateraitoWF.getFormValue(form, 'description4');
            var description5 = SateraitoWF.getFormValue(form, 'description5');
            var description6 = SateraitoWF.getFormValue(form, 'description6');
            var description7 = SateraitoWF.getFormValue(form, 'description7');
            var description8 = SateraitoWF.getFormValue(form, 'description8');

            for(i = 1; i<=8; i++){
                vat = 'vat'+i;
                wht = 'wht'+i;
                SateraitoWF.enableFormElement(form, vat);
                SateraitoWF.enableFormElement(form, wht);
            }

            $(form).find(':input[name=total_amount]').attr('mandatory_msg','Please select invoice date');
            $(form).find(':input[name=total_amount]').addClass('mandatory');

            SateraitoWF.enableFormElement(form, 'invoice_date');
            $(form).find(':input[name=invoice_date]').blur(function(){
                    var a = SateraitoWF.getFormValue(form, 'invoice_date');
                    if (a == null || a == '' ){
                        $(form).find(':input[name=invoice_date]').attr('mandatory_msg','Please select invoice date');
                        $(form).find(':input[name=invoice_date]').addClass('mandatory');
                    }
                });

            $(form).find(':input[name=invoice_date]').attr('mandatory_msg','Please select invoice date');
            $(form).find(':input[name=invoice_date]').addClass('mandatory');

            SateraitoWF.enableFormElement(form, 'ex_rate');
            $(form).find(':input[name=ex_rate]').attr('mandatory_msg','Please inser rate ');
            $(form).find(':input[name=ex_rate]').addClass('mandatory');

            SateraitoWF.enableFormElement(form, 'vat_percentage');
            $(form).find(':input[name=vat_percentage]').attr('mandatory_msg','Please insert vat percentage');
            $(form).find(':input[name=vat_percentage]').addClass('mandatory');

            SateraitoWF.enableFormElement(form, 'witholding_tax');
            $(form).find(':input[name=witholding_tax]').attr('mandatory_msg','Please insert witholding tax');
            $(form).find(':input[name=witholding_tax]').addClass('mandatory');

            SateraitoWF.enableFormElement(form, 'discount');
            $(form).find(':input[name=discount]').attr('mandatory_msg','Please insert discount');
            $(form).find(':input[name=discount]').addClass('mandatory');
        }
    }
    if(doc_status == 'final_approved'){
        push();
        $(form).find('.finance_only').css('display','block');
    }

    $(form).find(':input[name=invoice_date]').blur(function(){
        var a = SateraitoWF.getFormValue(form, 'invoice_date');
        if (a == null || a == '' ){
            $(form).find(':input[name=invoice_date]').attr('mandatory_msg','Please select invoice date');
            $(form).find(':input[name=invoice_date]').addClass('mandatory');
            SateraitoWF.alert('Before you approve, make sure you include the invoice date.')
        }
    });

    //onChange Invoice Code Function
    $(form).find(':input[name=invoice_code]').change(function(){
        SateraitoWF.setFormValue(form, 'generated_code', '');

        var invoice_code = SateraitoWF.getFormValue(form, 'invoice_code');
        SateraitoWF.setFormValue(form, 'code_invoice', invoice_code);

        // var results =  SateraitoWF.getMasterData('finance_invoice_number');
        // Ext.each(results, function(){

        //     var year = SateraitoWF.getFormValue(form, 'dummy_date');
        //     year = year.slice(2,-6);
        //     var numberNow = SateraitoWF.getFormValue(form, 'invoice_number_view');
        //     SateraitoWF.setFormValue(form, 'generated_code', invoice_code+year+numberNow+'OSL');
        // });
    });

    //set default
    // var invoice_code = SateraitoWF.getFormValue(form, 'invoice_code');
    // SateraitoWF.setFormValue(form, 'code_invoice', invoice_code);
    // generate_code(invoice_code);
    showLastInvNumber();
