form = SateraitoWF.getForm(document.getElementsByName("workflow_doc_load_handler"));

console.log("yeah")
//==========FUNCTION=============//
function service2validator(){
    var description2 = SateraitoWF.getFormValue(form, "description2");
    var description3 = SateraitoWF.getFormValue(form, "description3");
    var description4 = SateraitoWF.getFormValue(form, "description4");
    var description5 = SateraitoWF.getFormValue(form, "description5");
    var description6 = SateraitoWF.getFormValue(form, "description6");
    var description7 = SateraitoWF.getFormValue(form, "description7");
    var description8 = SateraitoWF.getFormValue(form, "description8");

}
function calculate_amount(numb){

    var qty = "quantity"+numb;
    var up = "unit_price"+numb;
    var amount = "amount"+numb;
    var quantity = SateraitoWF.getFormValue(form, qty);
    var unit_price = SateraitoWF.getFormValue(form, up);

    var total_amount = (quantity * unit_price);

    SateraitoWF.setFormValue(form, amount, total_amount);
    SateraitoWF.setFormValue(form, "total_amount", "");
}
// console.log("local")

function calculateTotalAmount(){
    var amount1 = SateraitoWF.getFormValue(form, "amount1");
    var amount2 = SateraitoWF.getFormValue(form, "amount2");
    var amount3 = SateraitoWF.getFormValue(form, "amount3");
    var amount4 = SateraitoWF.getFormValue(form, "amount4");
    var amount5 = SateraitoWF.getFormValue(form, "amount5");
    var amount6 = SateraitoWF.getFormValue(form, "amount6");
    var amount7 = SateraitoWF.getFormValue(form, "amount7");
    var amount8 = SateraitoWF.getFormValue(form, "amount8");
    var amount9 = SateraitoWF.getFormValue(form, "amount9");
    var amount10 = SateraitoWF.getFormValue(form, "amount10");

    amount1 =  parseFloat(amount1) || 0;
    amount2 =  parseFloat(amount2) || 0;
    amount3 =  parseFloat(amount3) || 0;
    amount4 =  parseFloat(amount4) || 0;
    amount5 =  parseFloat(amount5) || 0;
    amount6 =  parseFloat(amount6) || 0;
    amount7 =  parseFloat(amount7) || 0;
    amount8 =  parseFloat(amount8) || 0;
    amount9 =  parseFloat(amount9) || 0;
    amount10 =  parseFloat(amount10) || 0;

    var total = (amount1 + amount2 + amount3 + amount4 + amount5 + amount6 + amount7 + amount8 + amount9 + amount10);

    SateraitoWF.setFormValue(form, "sub_total", total);
    SateraitoWF.setFormValue(form, "total_amount", total);
}

//PUSH TO POWERAUTOMATE
function push(){
    var docID = SateraitoWF.getDocId(form)
    var docURL = "https://workflow.nextset.jp/osisg03/Finance/docdetail/"+docID
    var data =
    {
        "month" : SateraitoWF.getFormValue(form, "month"),
        "group" : SateraitoWF.getFormValue(form, "Department"),
        "details_code" : SateraitoWF.getFormValue(form, "invoice_code"),
        "issue_date" : SateraitoWF.getFormValue(form, "invoice_date"),
        "invoice_no" : SateraitoWF.getFormValue(form, "generated_code"),
        "currency" : SateraitoWF.getFormValue(form, "curency"),
        "currency_rate" : SateraitoWF.getFormValue(form, "ex_rate"),
        "subcount" : {
            "subcount_name": SateraitoWF.getFormValue(form, "Subcount_name"),
            "cost_usd" : SateraitoWF.getFormValue(form, "cost_usd"),
            "cost_idr" : SateraitoWF.getFormValue(form, "cost_idr"),
            "cost_jpy" : SateraitoWF.getFormValue(form, "cost_jpy"),
            "cost_sgd" : SateraitoWF.getFormValue(form, "cost_sgd"),
            "subcount_details" : SateraitoWF.getFormValue(form, "subcount_details")
        },
        "receipt_information":{
            "to" : SateraitoWF.getFormValue(form, "To"),
            "attn" : SateraitoWF.getFormValue(form, "attn"),
            "company" : SateraitoWF.getFormValue(form, "company_name")
        },
        "service_details" : [
        {
            "title" : SateraitoWF.getFormValue(form, "description1"),
            "qty" : SateraitoWF.getFormValue(form, "quantity1"),
            "unit_price" : SateraitoWF.getFormValue(form, "unit_price1"),
            "amount" : SateraitoWF.getFormValue(form, "amount1")
        },
        {
            "title" : SateraitoWF.getFormValue(form, "description2"),
            "qty" : SateraitoWF.getFormValue(form, "quantity2"),
            "unit_price" : SateraitoWF.getFormValue(form, "unit_price2"),
            "amount" : SateraitoWF.getFormValue(form, "amount2")
        },
        {
            "title" : SateraitoWF.getFormValue(form, "description3"),
            "qty" : SateraitoWF.getFormValue(form, "quantity3"),
            "unit_price" : SateraitoWF.getFormValue(form, "unit_price3"),
            "amount" : SateraitoWF.getFormValue(form, "amount3")
        },
        {
            "title" : SateraitoWF.getFormValue(form, "description4"),
            "qty" : SateraitoWF.getFormValue(form, "quantity4"),
            "unit_price" : SateraitoWF.getFormValue(form, "unit_price4"),
            "amount" : SateraitoWF.getFormValue(form, "amount4")
        },
        {
            "title" : SateraitoWF.getFormValue(form, "description5"),
            "qty" : SateraitoWF.getFormValue(form, "quantity5"),
            "unit_price" : SateraitoWF.getFormValue(form, "unit_price5"),
            "amount" : SateraitoWF.getFormValue(form, "amount5")
        },
        {
            "title" : SateraitoWF.getFormValue(form, "description6"),
            "qty" : SateraitoWF.getFormValue(form, "quantity6"),
            "unit_price" : SateraitoWF.getFormValue(form, "unit_price6"),
            "amount" : SateraitoWF.getFormValue(form, "amount6")
        },
        {
            "title" : SateraitoWF.getFormValue(form, "description7"),
            "qty" : SateraitoWF.getFormValue(form, "quantity7"),
            "unit_price" : SateraitoWF.getFormValue(form, "unit_price7"),
            "amount" : SateraitoWF.getFormValue(form, "amount7")
        },
        {
            "title" : SateraitoWF.getFormValue(form, "description8"),
            "qty" : SateraitoWF.getFormValue(form, "quantity8"),
            "unit_price" : SateraitoWF.getFormValue(form, "unit_price8"),
            "amount" : SateraitoWF.getFormValue(form, "amount8")
        },
        {
            "title" : SateraitoWF.getFormValue(form, "description9"),
            "qty" : SateraitoWF.getFormValue(form, "quantity9"),
            "unit_price" : SateraitoWF.getFormValue(form, "unit_price9"),
            "amount" : SateraitoWF.getFormValue(form, "amount9")
        },
        {
            "title" : SateraitoWF.getFormValue(form, "description10"),
            "qty" : SateraitoWF.getFormValue(form, "quantity10"),
            "unit_price" : SateraitoWF.getFormValue(form, "unit_price10"),
            "amount" : SateraitoWF.getFormValue(form, "amount10")
        }],
        "vat" : "0",
        "wht" : "0",
        "discount" : SateraitoWF.getFormValue(form, "invoice_discount"),
        "remarks" : SateraitoWF.getFormValue(form, "remaks"),
        "applicant" : SateraitoWF.getFormValue(form, "author_name"),
        "department" : SateraitoWF.getFormValue(form, "Department"),
        "division" : SateraitoWF.getFormValue(form, "Division"),
        "payment_due_date" : SateraitoWF.getFormValue(form, "payment_due_date"),
        "grand_total": SateraitoWF.getFormValue(form, "total_amount"),
        "service" : SateraitoWF.getFormValue(form, "service_dept"),
        "document_location" : docURL,
        "applicant_email" : SateraitoWF.getFormValue(form,"applicant_email"),
        "subtotal" : SateraitoWF.getFormValue(form, "sub_total"),
        "lasInvoiceNumber" : SateraitoWF.getFormValue(form, "invoice_number_view"),
        "detail_invoice" : SateraitoWF.getFormValue(form, "detail_invoice"),
        "not_dpp" : '',
        "kode_faktur" : SateraitoWF.getFormValue(form, "kode_faktur"),
        "rate_faktur_pajak" : SateraitoWF.getFormValue(form, "rate_faktur_pajak")
    }
    console.log(JSON.stringify(data));
    $.ajax({
        type: "POST",
        url: "https://prod-56.southeastasia.logic.azure.com:443/workflows/36e3c5cf01824928aee0481ba914837f/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=eciMcgugcNiX5ONohZmbpvJYu3WUy6GwI6l9RCOANsY",
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

function createInvoice(){
    var data =
    {
        "issue_date" : formatDate(SateraitoWF.getFormValue(form, "invoice_date")),
        "invoice_no" : SateraitoWF.getFormValue(form, "generated_code"),
        "currency_rate" : parseFloat(SateraitoWF.getFormValue(form, "ex_rate")),
        "to" : SateraitoWF.getFormValue(form, "To"),
        "attn" : SateraitoWF.getFormValue(form, "attn"),
        "company" : SateraitoWF.getFormValue(form, "company_name"),
        "title1" : SateraitoWF.getFormValue(form, "description1"),
        "qty1" : parseFloat(SateraitoWF.getFormValue(form, "quantity1")),
        "unit_price1" : parseFloat(SateraitoWF.getFormValue(form, "unit_price1")),
        "amount1" : parseFloat(SateraitoWF.getFormValue(form, "amount1")),
        "title2" : SateraitoWF.getFormValue(form, "description2"),
        "qty2" : parseFloat(SateraitoWF.getFormValue(form, "quantity2")),
        "unit_price2" : parseFloat(SateraitoWF.getFormValue(form, "unit_price2")),
        "amount2" : parseFloat(SateraitoWF.getFormValue(form, "amount2")),
        "title3" : SateraitoWF.getFormValue(form, "description3"),
        "qty3" : parseFloat(SateraitoWF.getFormValue(form, "quantity3")),
        "unit_price3" : parseFloat(SateraitoWF.getFormValue(form, "unit_price3")),
        "amount3" : parseFloat(SateraitoWF.getFormValue(form, "amount3")),
        "title4" : SateraitoWF.getFormValue(form, "description4"),
        "qty4" : parseFloat(SateraitoWF.getFormValue(form, "quantity4")),
        "unit_price4" : parseFloat(SateraitoWF.getFormValue(form, "unit_price4")),
        "amount4" : parseFloat(SateraitoWF.getFormValue(form, "amount4")),
        "title5" : SateraitoWF.getFormValue(form, "description5"),
        "qty5" : parseFloat(SateraitoWF.getFormValue(form, "quantity5")),
        "unit_price5" : parseFloat(SateraitoWF.getFormValue(form, "unit_price5")),
        "amount5" : parseFloat(SateraitoWF.getFormValue(form, "amount5")),
        "title6" : SateraitoWF.getFormValue(form, "description6"),
        "qty6" : parseFloat(SateraitoWF.getFormValue(form, "quantity6")),
        "unit_price6" : parseFloat(SateraitoWF.getFormValue(form, "unit_price6")),
        "amount6" : parseFloat(SateraitoWF.getFormValue(form, "amount6")),
        "title7" : SateraitoWF.getFormValue(form, "description7"),
        "qty7" : parseFloat(SateraitoWF.getFormValue(form, "quantity7")),
        "unit_price7" : parseFloat(SateraitoWF.getFormValue(form, "unit_price7")),
        "amount7" : parseFloat(SateraitoWF.getFormValue(form, "amount7")),
        "title8" : SateraitoWF.getFormValue(form, "description8"),
        "qty8" : parseFloat(SateraitoWF.getFormValue(form, "quantity8")),
        "unit_price8" : parseFloat(SateraitoWF.getFormValue(form, "unit_price8")),
        "amount8" : parseFloat(SateraitoWF.getFormValue(form, "amount8")),
        "title9" : SateraitoWF.getFormValue(form, "description9"),
        "qty9" : parseFloat(SateraitoWF.getFormValue(form, "quantity9")),
        "unit_price9" : parseFloat(SateraitoWF.getFormValue(form, "unit_price9")),
        "amount9" : parseFloat(SateraitoWF.getFormValue(form, "amount9")),
        "title10" : SateraitoWF.getFormValue(form, "description10"),
        "qty10" : parseFloat(SateraitoWF.getFormValue(form, "quantity10")),
        "unit_price10" : parseFloat(SateraitoWF.getFormValue(form, "unit_price10")),
        "amount10" : parseFloat(SateraitoWF.getFormValue(form, "amount10")),
        "vat" : parseFloat(SateraitoWF.getFormValue(form, "vat_percentage")),
        "wht" : parseFloat(SateraitoWF.getFormValue(form, "witholding_tax")),
        "discount" : parseFloat(SateraitoWF.getFormValue(form, "invoice_discount")),
        "remarks" : SateraitoWF.getFormValue(form, "remaks"),
        "payment_due_date" : SateraitoWF.getFormValue(form, "payment_due_date"),
        "grand_total": parseFloat(SateraitoWF.getFormValue(form, "total_amount")),
        "service" : SateraitoWF.getFormValue(form, "service_dept"),
        "currency" : SateraitoWF.getFormValue(form, "curency")
    }
    $.ajax({
        type: "POST",
        url: "https://prod-44.southeastasia.logic.azure.com:443/workflows/b3ad745f018e444b9f77000d03c0aadc/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=zAI12m86rp0cSCMekH1FrZwDq8S27AxTjSDIOMSwEQo",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(data),
        success: function(success){
            console.log(success)
            SateraitoWF.alert("Invoice Generated");
            SateraitoWF.disableFormElement(form, "button_print_invoice");
        ;},
        error: function(errMsg) {
            console.log(errMsg);
        }
    });
}

function formatDate(inputDate) {
    const parts = inputDate.split("-");
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];

    return `${month}/${day}/${year}`;
}

function showLastInvNumber(){

    var data_key = 2;
    SateraitoWF.requestMasterDataRow('finance_invoice_number', data_key, function(aRow){
        if(typeof(aRow) != 'undefined' && typeof(aRow.data_key) != 'undefined'){
            var fixnum = aRow.attribute_1.padStart(5, '0')
            SateraitoWF.setFormValue(form, 'invoice_number_view', fixnum);
        }else{
            SateraitoWF.setFormValue(form, 'invoice_number_view', '');
        }
    });


}

function customRound(number) {
    var integerPart = Math.floor(number);
    var decimalPart = number - integerPart;

    if (decimalPart >= 0.5) {
        return integerPart + 1;
    } else {
        return integerPart;
    }
}

function updateDiscount(){
    SateraitoWF.setFormValue(form, "total_amount", null);
}

function addService(){
    var service = null;
    var detCode = null;
    var code = SateraitoWF.getFormValue(form, "invoice_code")
    switch(code){
        case "EXE":
            detCode = "WC/JP/";
            service = "Recruitment Service";
            break;
        case "JP":
            detCode = "WC/JP/";
            service = "Recruitment Service";
            break;
        case "KOR":
            detCode = "WC/JP/";
            service = "Recruitment Service";
            break;
        case "OS":
            detCode = "WC/OSJP/";
            service = "Recruitment Service";
            break;
        case "LG-TR":
            detCode = "TR";
            service = "Translation Service";
            break;
        case "LG-INT":
            detCode = "INT";
            service = "Interpretation Service";
            break;
        case "ED-JLMC":
            detCode = "JLMC";
            service = "Education";
            break;
        case "ED-LC(JP)":
            detCode = "LC/JP/";
            service = "Language Course";
            break;
        case "AD":
            detCode = "BC/AD/";
            service = "Alih Daya Service";
            break;
        case "ES-RS":
            detCode = "BC/RS/"
            service = "Recruitment Service";
            break;
        case "CEBL":
            detCode = "BS/CEBL/";
            service = "Business License Obtaining Service";
            break;
        case "HRC":
            detCode = "HRC";
            service = "HR Consulting/ Company Regulation/ Employee Agreement";
            break;
        case "HRC-PAY":
            detCode = "PAY";
            service = "Payroll Service";
            break;
        case "HRC-PSY":
            detCode = "PSY"
            service = "Assesment Service";
            break;
        case "HRC-TRN":
            detCode = "TRN"
            service = "Training";
            break;
        case "VISA":
            service = "Business License Obtaining Service";
            detCode = "BS/VISA/";
            break;
        case "GS":
            detCode = "GS";
            service = "GINOJISSHUSEI";
            break;
        case "HT":
            detCode = "HT";
            service = "Kaigo";
            break;
        case "LC(IN)":
            detCode = "LC/IN/";
            service = "Language Course";
            break;
        case "OT":
            detCode = "OT";
            service = "Other";
            break;
        case "ESS":
            detCode = "BC/OS/";
            service = "Essential Service";
            break;
        case "LOC":
            detCode = "WC/JP/";
            service = "Recruitment Service";
            break;
        case "EURO":
            detCode = "EU";
            service = "-";
            break;
        case "RYU":
            detCode = "RYU";
            service = "Education Ryugaku";
        default:
    }


    SateraitoWF.setFormValue(form, "code_invoice", "REIM");
    SateraitoWF.setFormValue(form, "service_dept", "Reimbursement");

}

function checkButtonPrint(invoice_code){
    if( invoice_code != "")
    {
        $.ajax({
            type: "POST",
            url: "https://prod-28.southeastasia.logic.azure.com:443/workflows/6f2a823d99c14a0ba2fb8a12fbc6fd8d/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=_1viquO4KeYu0Nq4hkT5yyFesPrL5UEk4jDd1kf5PUQ",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify({"code" : invoice_code}),
            timeout: 30000,
            success: function(success) {
                if (!success){
                    SateraitoWF.enableFormElement(form, "button_print_invoice");
                }
            },
            error: function(errMsg) {
                console.log(errMsg);
            },
            complete: function() {
                console.log("Request completed, whether successful or not.");
            }
        });
    }
}
//==========DOCUMENT CONTROL=============//
    var date1_str	= SateraitoWF.getFormValue(form, "dummy_date");
    var date_obj	= date1_str.split("-");
    var year_int	= date_obj[0];
    var month_int	= date_obj[1];
    var date_int	= date_obj[2];
    var year_str = year_int.toString();
    SateraitoWF.setFormValue(form, "fsyear", year_str);
    var month_str = month_int.toString();
    if(month_str == "01"){
        SateraitoWF.setFormValue(form, "month", "JAN");
    }else if(month_str == "02"){
        SateraitoWF.setFormValue(form, "month", "FEB");
    }else if(month_str == "03"){
        SateraitoWF.setFormValue(form, "month", "MAR");
    }else if(month_str == "04"){
        SateraitoWF.setFormValue(form, "month", "APR");
    }else if(month_str == "05"){
        SateraitoWF.setFormValue(form, "month", "MAY");
    }else if(month_str == "06"){
        SateraitoWF.setFormValue(form, "month", "JUN");
    }else if(month_str == "07"){
        SateraitoWF.setFormValue(form, "month", "JUL");
    }else if(month_str == "08"){
        SateraitoWF.setFormValue(form, "month", "AUG");
    }else if(month_str == "09"){
        SateraitoWF.setFormValue(form, "month", "SEP");
    }else if(month_str == "10"){
        SateraitoWF.setFormValue(form, "month", "OCT");
    }else if(month_str == "11"){
        SateraitoWF.setFormValue(form, "month", "NOV");
    }else if(month_str == "12"){
        SateraitoWF.setFormValue(form, "month", "DEC");
    }

    SateraitoWF.hideRouteSelection(form);

    var doc_status = SateraitoWF.getDocStatus(form);
    var processInfos = SateraitoWF.getApproveProcessInfo(form);

    if(doc_status != ''){
        if(processInfos[3].status!=""){
            createInvoice();
            console.log("invoice_created");
        }
    }

    console.log(doc_status)
    console.log(processInfos);
    //DOCUMENT STATUS = CREATE NEW
    if(doc_status == ""){
        //SET TO DEFAULT EMPTY
        // SateraitoWF.setFormValue(form, "generated_code", "");
        for(i = 1; i<=10; i++){
            vat = "vat"+i;
            wht = "wht"+i;
            SateraitoWF.disableFormElement(form, vat);
            SateraitoWF.disableFormElement(form, wht);
        }
    }else if(doc_status == "in_process"){
        var processInfos = SateraitoWF.getApproveProcessInfo(form);
        if(processInfos[2].status == "in_process"){
            console.log("Push to PowerAutomate")
            SateraitoWF.enableFormElement(form, "cost_idr");
            SateraitoWF.enableFormElement(form, "cost_usd");
            SateraitoWF.enableFormElement(form, "cost_sgd");
            SateraitoWF.enableFormElement(form, "cost_jpy");
            SateraitoWF.enableFormElement(form, "ex_rate");
            SateraitoWF.enableFormElement(form, "generated_code");
            SateraitoWF.enableFormElement(form, "detail_invoice");
            SateraitoWF.enableFormElement(form, "kode_faktur");
            SateraitoWF.enableFormElement(form, "rate_faktur_pajak");

            //Generate code on finance approval

            var data_key = 2;
            var textnumber = null;
            SateraitoWF.requestMasterDataRow('finance_invoice_number', data_key, function(aRow){
                if(typeof(aRow) != 'undefined' && typeof(aRow.data_key) != 'undefined'){
                    var fixnum = aRow.attribute_1.padStart(5, '0');
                    var invoice_code = SateraitoWF.getFormValue(form, "code_invoice");
                    var year = SateraitoWF.getFormValue(form, "dummy_date");
                    year = year.slice(2,-6);
                    SateraitoWF.setFormValue(form, 'invoice_number_view', fixnum);
                    SateraitoWF.setFormValue(form, "generated_code", invoice_code+year+fixnum+"OSL");
                    console.log(invoice_code+year+fixnum+"OSL");
                }else{
                    SateraitoWF.setFormValue(form, 'invoice_number_view', '');
                }
            });



            var description2 = SateraitoWF.getFormValue(form, "description2");
            var description3 = SateraitoWF.getFormValue(form, "description3");
            var description4 = SateraitoWF.getFormValue(form, "description4");
            var description5 = SateraitoWF.getFormValue(form, "description5");
            var description6 = SateraitoWF.getFormValue(form, "description6");
            var description7 = SateraitoWF.getFormValue(form, "description7");
            var description8 = SateraitoWF.getFormValue(form, "description8");
            var description8 = SateraitoWF.getFormValue(form, "description9");
            var description8 = SateraitoWF.getFormValue(form, "description10");

            for(i = 1; i<=10; i++){
                vat = "vat"+i;
                wht = "wht"+i;
                SateraitoWF.enableFormElement(form, vat);
                SateraitoWF.enableFormElement(form, wht);
            }

            $(form).find(":input[name=total_amount]").attr("mandatory_msg","Please select invoice date");
            $(form).find(":input[name=total_amount]").addClass("mandatory");

            SateraitoWF.enableFormElement(form, "invoice_date");
            $(form).find(":input[name=invoice_date]").blur(function(){
                    var a = SateraitoWF.getFormValue(form, "invoice_date");
                    if (a == null || a == "" ){
                        $(form).find(":input[name=invoice_date]").attr("mandatory_msg","Please select invoice date");
                        $(form).find(":input[name=invoice_date]").addClass("mandatory");
                    }
                });

            $(form).find(":input[name=invoice_date]").attr("mandatory_msg","Please select invoice date");
            $(form).find(":input[name=invoice_date]").addClass("mandatory");

            SateraitoWF.enableFormElement(form, "ex_rate");
            $(form).find(":input[name=ex_rate]").attr("mandatory_msg","Please inser rate ");
            $(form).find(":input[name=ex_rate]").addClass("mandatory");

            SateraitoWF.enableFormElement(form, "vat_percentage");
            $(form).find(":input[name=vat_percentage]").attr("mandatory_msg","Please insert vat percentage");
            $(form).find(":input[name=vat_percentage]").addClass("mandatory");

            SateraitoWF.enableFormElement(form, "witholding_tax");
            $(form).find(":input[name=witholding_tax]").attr("mandatory_msg","Please insert witholding tax");
            $(form).find(":input[name=witholding_tax]").addClass("mandatory");

            SateraitoWF.enableFormElement(form, "discount");
            $(form).find(":input[name=discount]").attr("mandatory_msg","Please insert discount");
            $(form).find(":input[name=discount]").addClass("mandatory");
        }
    }


    //onChange Invoice Code Function
    $(form).find(":input[name=invoice_code]").change(function(){
        addService();
    });

    SateraitoWF.disableFormElement(form, "button_print_invoice");
    $(form).find(":input[name=button_print_invoice]").css("display","none");

    if(SateraitoWF.getViewerUserInfo().email == "muhammad.shaugi@os-selnajaya.com"){
        SateraitoWF.enableFormElement(form, "button_print_invoice");
        $(form).find(":input[name=button_print_invoice]").css("display","block");
    }
    if(SateraitoWF.getViewerUserInfo().email == "ariyani.syahfitri@os-selnajaya.com"){
        SateraitoWF.enableFormElement(form, "button_print_invoice");
        $(form).find(":input[name=button_print_invoice]").css("display","block");
    }
    SateraitoWF.disableFormElement(form, "button_print_invoice");

    var invoice_code = SateraitoWF.getFormValue(form, "generated_code");

    checkButtonPrint(invoice_code);

    //disable invoice detail
    SateraitoWF.disableFormElement(form, "invoice_detail");
    console.log("update 18/1/2024");