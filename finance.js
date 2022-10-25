let form = SateraitoWF.getForm(document.getElementsByName('workflow_doc_load_handler'));

console.log(" SateraitoWF.getForm(this) : "+ form);
//==========FUNCTION=============//
function service2validator(){
    var description2 = SateraitoWF.getFormValue(form, 'description2');
    var qty2 = document.getElementsByName('qty2');
    var unit_price2 = document.getElementsByName('unit_price2');
    var amount2 = document.getElementsByName('amount2');


    if(description2.value != null){
        console.log('changed not null');
        qty2.class += 'mandatory';
        qty2.sateraito_class += 'mandatory';
        unit_price2.class += 'mandatory';
        unit_price2.sateraito_class += 'mandatory';
        amount2.class += 'mandatory';
        amount2.sateraito_class += 'mandatory';
    }else{
        console.log('changed null');
    }
}

function calculateTotalAmount(){

    var qty1 = SateraitoWF.getFormValue(form, 'quantity1');
    var qty2 = SateraitoWF.getFormValue(form, 'quantity2');
    var qty3 = SateraitoWF.getFormValue(form, 'quantity3');
    var qty4 = SateraitoWF.getFormValue(form, 'quantity4');
    var qty5 = SateraitoWF.getFormValue(form, 'quantity5');
    var qty6 = SateraitoWF.getFormValue(form, 'quantity6');
    var qty7 = SateraitoWF.getFormValue(form, 'quantity7');
    var qty8 = SateraitoWF.getFormValue(form, 'quantity8');
    var unit_price1 = SateraitoWF.getFormValue(form, 'unit_price1');
    var unit_price2 = SateraitoWF.getFormValue(form, 'unit_price2');
    var unit_price3 = SateraitoWF.getFormValue(form, 'unit_price3');
    var unit_price4 = SateraitoWF.getFormValue(form, 'unit_price4');
    var unit_price5 = SateraitoWF.getFormValue(form, 'unit_price5');
    var unit_price6 = SateraitoWF.getFormValue(form, 'unit_price6');
    var unit_price7 = SateraitoWF.getFormValue(form, 'unit_price7');
    var unit_price8 = SateraitoWF.getFormValue(form, 'unit_price8');

    var amount1 = SateraitoWF.setFormValue(form, 'amount1', qty1 * unit_price1);
    var amount2 = SateraitoWF.setFormValue(form, 'amount2', qty2 * unit_price2);
    var amount3 = SateraitoWF.setFormValue(form, 'amount3', qty3 * unit_price3);
    var amount4 = SateraitoWF.setFormValue(form, 'amount4', qty4 * unit_price4);
    var amount5 = SateraitoWF.setFormValue(form, 'amount5', qty5 * unit_price5);
    var amount6 = SateraitoWF.setFormValue(form, 'amount6', qty6 * unit_price6);
    var amount7 = SateraitoWF.setFormValue(form, 'amount7', qty7 * unit_price7);
    var amount8 = SateraitoWF.setFormValue(form, 'amount8', qty8 * unit_price8);

    var total = (qty1 * unit_price1) + (qty2 * unit_price2) + (qty3 * unit_price3) + (qty4 * unit_price4) + (qty5 * unit_price5) + (qty6 * unit_price6) + (qty7 * unit_price7) + (qty8 * unit_price8)
    SateraitoWF.setFormValue(form, 'total_amount', total);
}


//GENERATE CODE & APPLICATION NUMBER
function generate_code(invoice_code){
    var year = SateraitoWF.getFormValue(form, 'dummy_date');
    year = year.slice(2,-6);
    SateraitoWF.setFormValue(form, 'generated_code', invoice_code+year+invoice_numer+'OSL');

    var generate_code_final = SateraitoWF.getFormValue(form, 'generated_code');
    SateraitoWF.setFormValue(form, 'No', 'OSSI/FINANCE/'+generate_code_final)
}

//==========DOCUMENT CONTROL=============//

    SateraitoWF.hideRouteSelection(form);

    //GET INVOICE NUMBER
    var results =  SateraitoWF.getMasterData('finance_invoice_number') ;
    Ext.each(results, function(){
        console.log('number : '+ this.attribute_1)
        var fixnum = String(this.attribute_1).padStart(4, '0')
        SateraitoWF.setFormValue(form, 'invoice_number', fixnum);
    });

    let invoice_numer = SateraitoWF.getFormValue(form, 'invoice_number');



    // DOCUMENT STATUS CONTROL
    var doc_status = SateraitoWF.getDocStatus(form);
    console.log('doc_status : '+ doc_status);
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

    $(form).find(':input[name=invoice_code]').change(function(){
        var invoice_code = SateraitoWF.getFormValue(form, 'invoice_code');
        SateraitoWF.setFormValue(form, 'code_invoice', invoice_code);
        generate_code(invoice_code);
    });
