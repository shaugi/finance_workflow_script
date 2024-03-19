form = SateraitoWF.getForm(document.getElementsByName('workflow_doc_load_handler'));
total_vat = 0;
total_wht = 0;

//==========FUNCTION=============//
function calculateTotalAmount() {
  var amount1 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount1'));
  var amount2 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount2'));
  var amount3 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount3'));
  var amount4 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount4'));
  var amount5 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount5'));
  var amount6 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount6'));
  var amount7 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount7'));
  var amount8 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount8'));
  var amount9 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount9'));
  var amount10 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount10'));
  var discount = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'invoice_discount'));

  amount1 = parseFloat(amount1) || 0;
  amount2 = parseFloat(amount2) || 0;
  amount3 = parseFloat(amount3) || 0;
  amount4 = parseFloat(amount4) || 0;
  amount5 = parseFloat(amount5) || 0;
  amount6 = parseFloat(amount6) || 0;
  amount7 = parseFloat(amount7) || 0;
  amount8 = parseFloat(amount8) || 0;
  amount9 = parseFloat(amount9) || 0;
  amount10 = parseFloat(amount10) || 0;

  var qty1 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity1'));
  var qty2 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity2'));
  var qty3 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity3'));
  var qty4 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity4'));
  var qty5 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity5'));
  var qty6 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity6'));
  var qty7 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity7'));
  var qty8 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity8'));
  var qty9 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity9'));
  var qty10 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity10'));

  var up1 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price1'));
  var up2 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price2'));
  var up3 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price3'));
  var up4 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price4'));
  var up5 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price5'));
  var up6 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price6'));
  var up7 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price7'));
  var up8 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price8'));
  var up9 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price9'));
  var up10 = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price10'));

  var wht1 = SateraitoWF.getFormValue(form, 'wht1');
  var wht2 = SateraitoWF.getFormValue(form, 'wht2');
  var wht3 = SateraitoWF.getFormValue(form, 'wht3');
  var wht4 = SateraitoWF.getFormValue(form, 'wht4');
  var wht5 = SateraitoWF.getFormValue(form, 'wht5');
  var wht6 = SateraitoWF.getFormValue(form, 'wht6');
  var wht7 = SateraitoWF.getFormValue(form, 'wht7');
  var wht8 = SateraitoWF.getFormValue(form, 'wht8');
  var wht9 = SateraitoWF.getFormValue(form, 'wht9');
  var wht10 = SateraitoWF.getFormValue(form, 'wht10');

  var vat1 = SateraitoWF.getFormValue(form, 'vat1');
  var vat2 = SateraitoWF.getFormValue(form, 'vat2');
  var vat3 = SateraitoWF.getFormValue(form, 'vat3');
  var vat4 = SateraitoWF.getFormValue(form, 'vat4');
  var vat5 = SateraitoWF.getFormValue(form, 'vat5');
  var vat6 = SateraitoWF.getFormValue(form, 'vat6');
  var vat7 = SateraitoWF.getFormValue(form, 'vat7');
  var vat8 = SateraitoWF.getFormValue(form, 'vat8');
  var vat9 = SateraitoWF.getFormValue(form, 'vat9');
  var vat10 = SateraitoWF.getFormValue(form, 'vat10');

  var total_vat1 = qty1 * up1 * (vat1 / 100);
  var total_vat2 = qty2 * up2 * (vat2 / 100);
  var total_vat3 = qty3 * up3 * (vat3 / 100);
  var total_vat4 = qty4 * up4 * (vat4 / 100);
  var total_vat5 = qty5 * up5 * (vat5 / 100);
  var total_vat6 = qty6 * up6 * (vat6 / 100);
  var total_vat7 = qty7 * up7 * (vat7 / 100);
  var total_vat8 = qty8 * up8 * (vat8 / 100);
  var total_vat9 = qty9 * up9 * (vat9 / 100);
  var total_vat10 = qty10 * up10 * (vat10 / 100);

  var total_wht1 = qty1 * up1 * (wht1 / 100);
  var total_wht2 = qty2 * up2 * (wht2 / 100);
  var total_wht3 = qty3 * up3 * (wht3 / 100);
  var total_wht4 = qty4 * up4 * (wht4 / 100);
  var total_wht5 = qty5 * up5 * (wht5 / 100);
  var total_wht6 = qty6 * up6 * (wht6 / 100);
  var total_wht7 = qty7 * up7 * (wht7 / 100);
  var total_wht8 = qty8 * up8 * (wht8 / 100);
  var total_wht9 = qty9 * up9 * (wht9 / 100);
  var total_wht10 = qty10 * up10 * (wht10 / 100);

  // Calculate total VAT

  var calculate_vat =
    total_vat1 + total_vat2 + total_vat3 + total_vat4 + total_vat5 + total_vat6 + total_vat7 + total_vat8 + total_vat9 + total_vat10;
  if (calculate_vat == 0) {
    total_vat = 0;
  } else {
    total_vat_cek =
      total_vat1 +
      total_vat2 +
      total_vat3 +
      total_vat4 +
      total_vat5 +
      total_vat6 +
      total_vat7 +
      total_vat8 +
      total_vat9 +
      total_vat10 -
      discount * 0.11;
    if (discount * 0.11 > total_vat_cek) {
      total_vat = total_vat_cek + discount * 0.11;
    } else {
      total_vat = total_vat_cek;
    }
  }

  var calculate_wht = total_wht1 + total_wht2 + total_wht3 + total_wht4 + total_wht5 + total_wht6 + total_wht7 + total_wht8 + total_wht9 + total_wht10;
  if (calculate_wht == 0) {
    total_wht = 0;
  } else {
    total_wht_cek = total_wht1 + total_wht2 + total_wht3 + total_wht4 + total_wht5 + total_wht6 + total_wht7 + total_wht8 + total_wht9 + total_wht10 - (discount * 0.02);
    if (discount * 0.02 > total_wht_cek) {
      total_wht = total_wht_cek + (discount * 0.02);
    } else {
      total_wht = total_wht_cek;
    }
  }

  var currency = SateraitoWF.getFormValue(form, 'curency');
  if (currency != 'USD') {
    SateraitoWF.setFormValue(form, 'witholding_tax', total_wht = 0 ?  '' : total_wht);
    SateraitoWF.setFormValue(form, 'total_vat', total_vat = 0 ? '' : total_vat);
  } else {
    SateraitoWF.setFormValue(form, 'witholding_tax', total_wht = 0 ? '' : total_wht);
    SateraitoWF.setFormValue(form, 'total_vat', total_vat = 0 ? '' : total_vat);
  }

  var sub_total = amount1 + amount2 + amount3 + amount4 + amount5 + amount6 + amount7 + amount8 + amount9 + amount10 - discount;
  SateraitoWF.setFormValue(form, 'sub_total', sub_total);

  if (currency != 'USD') {
    var grand_total = sub_total + total_vat - total_wht;
  } else {
    var grand_total = sub_total + total_vat - total_wht;
  }

  SateraitoWF.setFormValue(form, 'grand_total', grand_total);
}

//PUSH TO POWERAUTOMATE
function push() {
  var docID = SateraitoWF.getDocId(form);
  var docURL = 'https://workflow.nextset.jp/osisg03/Finance/docdetail/' + docID;
  var data = {
    month: SateraitoWF.getFormValue(form, 'month'),
    group: SateraitoWF.getFormValue(form, 'Department'),
    details_code: SateraitoWF.getFormValue(form, 'invoice_code'),
    issue_date: SateraitoWF.getFormValue(form, 'invoice_date'),
    invoice_no: SateraitoWF.getFormValue(form, 'generated_code'),
    currency: SateraitoWF.getFormValue(form, 'curency'),
    currency_rate: SateraitoWF.getFormValue(form, 'ex_rate'),
    subcount: {
      subcount_name: SateraitoWF.getFormValue(form, 'Subcount_name'),
      cost_usd: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'cost_usd')),
      cost_idr: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'cost_idr')),
      cost_jpy: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'cost_jpy')),
      cost_sgd: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'cost_sgd')),
      subcount_details: SateraitoWF.getFormValue(form, 'subcount_details'),
    },
    receipt_information: {
      to: SateraitoWF.getFormValue(form, 'To'),
      attn: SateraitoWF.getFormValue(form, 'attn'),
      company: SateraitoWF.getFormValue(form, 'company_name'),
    },
    service_details: [
      {
        title: SateraitoWF.getFormValue(form, 'description1'),
        qty: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity1')),
        unit_price: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price1')),
        amount: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount1')),
      },
      {
        title: SateraitoWF.getFormValue(form, 'description2'),
        qty: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity2')),
        unit_price: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price2')),
        amount: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount2')),
      },
      {
        title: SateraitoWF.getFormValue(form, 'description3'),
        qty: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity3')),
        unit_price: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price3')),
        amount: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount3')),
      },
      {
        title: SateraitoWF.getFormValue(form, 'description4'),
        qty: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity4')),
        unit_price: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price4')),
        amount: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount4')),
      },
      {
        title: SateraitoWF.getFormValue(form, 'description5'),
        qty: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity5')),
        unit_price: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price5')),
        amount: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount5')),
      },
      {
        title: SateraitoWF.getFormValue(form, 'description6'),
        qty: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity6')),
        unit_price: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price6')),
        amount: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount6')),
      },
      {
        title: SateraitoWF.getFormValue(form, 'description7'),
        qty: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity7')),
        unit_price: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price7')),
        amount: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount7')),
      },
      {
        title: SateraitoWF.getFormValue(form, 'description8'),
        qty: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity8')),
        unit_price: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price8')),
        amount: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount8')),
      },
      {
        title: SateraitoWF.getFormValue(form, 'description9'),
        qty: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity9')),
        unit_price: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price9')),
        amount: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount9')),
      },
      {
        title: SateraitoWF.getFormValue(form, 'description10'),
        qty: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity10')),
        unit_price: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price10')),
        amount: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount10')),
      },
    ],
    vat: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'total_vat')),
    wht: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'witholding_tax')),
    discount:SateraitoWF.removeComma( SateraitoWF.getFormValue(form, 'invoice_discount')),
    remarks: SateraitoWF.getFormValue(form, 'remaks'),
    applicant: SateraitoWF.getFormValue(form, 'author_name'),
    department: SateraitoWF.getFormValue(form, 'Department'),
    division: SateraitoWF.getFormValue(form, 'Division'),
    payment_due_date: SateraitoWF.getFormValue(form, 'payment_due_date'),
    grand_total: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'grand_total')),
    service: SateraitoWF.getFormValue(form, 'service_dept'),
    document_location: docURL,
    applicant_email: SateraitoWF.getFormValue(form, 'applicant_email'),
    subtotal: SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'sub_total')),
    lasInvoiceNumber: SateraitoWF.getFormValue(form, 'invoice_number_view'),
    detail_invoice: SateraitoWF.getFormValue(form, 'detail_invoice'),
    not_dpp: calculate_not_dpp(),
    kode_faktur: SateraitoWF.getFormValue(form, 'kode_faktur'),
    rate_faktur_pajak: SateraitoWF.getFormValue(form, 'rate_faktur_pajak'),
  };

  $.ajax({
    type: 'POST',
    url: "https://prod-56.southeastasia.logic.azure.com:443/workflows/36e3c5cf01824928aee0481ba914837f/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=eciMcgugcNiX5ONohZmbpvJYu3WUy6GwI6l9RCOANsY",
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    data: JSON.stringify(data),
    success: function (success) {
      console.log(success);
    },
    error: function (errMsg) {
      console.log(errMsg);
    },
  });

}

function updateInvoiceNumber(data_key = SateraitoWF.getViewerUserInfo().email){
  SateraitoWF.requestMasterDataRow('new_invoice_number',  data_key  , function(aRow){
    console.log(aRow.attribute_1);
    var update_data = {
        attribute_1:"1",
        attribute_2:"1"
      };
    var update_option = {};
    update_option['attribute_1'] = ['diff'];
    update_option['attribute_2'] = ['sum'];
    SateraitoWF.updateMasterDataRow(aRow.master_code, aRow.data_key, 'U', update_data, update_option, function(is_ok, error_code, aResultMaster){
      if(!is_ok){
            SateraitoWF.alert('Failed to update invoice number. error_code=' +  error_code );
      }else{
            SateraitoWF.alert('invoice number secured. Next invoice number is = ' + aResultMaster.attribute_1 ) ;
      }
    });
  });
}


function createInvoice() {
  var data = {
    issue_date: formatDate(SateraitoWF.getFormValue(form, 'invoice_date')),
    invoice_no: SateraitoWF.getFormValue(form, 'generated_code'),
    currency_rate: parseFloat(SateraitoWF.getFormValue(form, 'ex_rate')),
    to: SateraitoWF.getFormValue(form, 'To'),
    attn: SateraitoWF.getFormValue(form, 'attn'),
    company: SateraitoWF.getFormValue(form, 'company_name'),
    title1: SateraitoWF.getFormValue(form, 'description1'),
    qty1: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity1'))),
    unit_price1: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price1'))),
    amount1: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount1'))),
    title2: SateraitoWF.getFormValue(form, 'description2'),
    qty2: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity2'))),
    unit_price2: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price2'))),
    amount2: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount2'))),
    title3: SateraitoWF.getFormValue(form, 'description3'),
    qty3: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity3'))),
    unit_price3: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price3'))),
    amount3: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount3'))),
    title4: SateraitoWF.getFormValue(form, 'description4'),
    qty4: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity4'))),
    unit_price4: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price4'))),
    amount4: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount4'))),
    title5: SateraitoWF.getFormValue(form, 'description5'),
    qty5: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity5'))),
    unit_price5: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price5'))),
    amount5: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount5'))),
    title6: SateraitoWF.getFormValue(form, 'description6'),
    qty6: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity6'))),
    unit_price6: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price6'))),
    amount6: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount6'))),
    title7: SateraitoWF.getFormValue(form, 'description7'),
    qty7: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity7'))),
    unit_price7: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price7'))),
    amount7: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount7'))),
    title8: SateraitoWF.getFormValue(form, 'description8'),
    qty8: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity8'))),
    unit_price8: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price8'))),
    amount8: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount8'))),
    title9: SateraitoWF.getFormValue(form, 'description9'),
    qty9: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity9'))),
    unit_price9: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price9'))),
    amount9: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount9'))),
    title10: SateraitoWF.getFormValue(form, 'description10'),
    qty10: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity10'))),
    unit_price10: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price10'))),
    amount10: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount10'))),
    vat: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'total_vat'))),
    wht: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'witholding_tax'))),
    discount: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'invoice_discount'))),
    remarks: SateraitoWF.getFormValue(form, 'remaks'),
    payment_due_date: SateraitoWF.getFormValue(form, 'payment_due_date'),
    grand_total: parseFloat(SateraitoWF.getFormValue(form, 'grand_total')),
    service: SateraitoWF.getFormValue(form, 'service_dept'),
    currency: SateraitoWF.getFormValue(form, 'curency'),
  };
  $.ajax({
    type: 'POST',
    url: "https://prod-44.southeastasia.logic.azure.com:443/workflows/b3ad745f018e444b9f77000d03c0aadc/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=zAI12m86rp0cSCMekH1FrZwDq8S27AxTjSDIOMSwEQo",
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    data: JSON.stringify(data),
    success: function (success) {
      console.log(success);
      SateraitoWF.alert('Invoice Generated');
      SateraitoWF.disableFormElement(form, 'button_print_invoice');
    },
    error: function (errMsg) {
      console.log(errMsg);
    },
  });
}

function createInvoiceV2() {
  var data = {
    issue_date: formatDate(SateraitoWF.getFormValue(form, 'invoice_date')),
    invoice_no: SateraitoWF.getFormValue(form, 'generated_code'),
    currency_rate: parseFloat(SateraitoWF.getFormValue(form, 'ex_rate')),
    to: SateraitoWF.getFormValue(form, 'To'),
    attn: SateraitoWF.getFormValue(form, 'attn'),
    company: SateraitoWF.getFormValue(form, 'company_name'),
    title1: SateraitoWF.getFormValue(form, 'description1'),
    qty1: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity1'))),
    unit_price1: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price1'))),
    amount1: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount1'))),
    title2: SateraitoWF.getFormValue(form, 'description2'),
    qty2: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity2'))),
    unit_price2: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price2'))),
    amount2: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount2'))),
    title3: SateraitoWF.getFormValue(form, 'description3'),
    qty3: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity3'))),
    unit_price3: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price3'))),
    amount3: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount3'))),
    title4: SateraitoWF.getFormValue(form, 'description4'),
    qty4: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity4'))),
    unit_price4: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price4'))),
    amount4: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount4'))),
    title5: SateraitoWF.getFormValue(form, 'description5'),
    qty5: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity5'))),
    unit_price5: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price5'))),
    amount5: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount5'))),
    title6: SateraitoWF.getFormValue(form, 'description6'),
    qty6: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity6'))),
    unit_price6: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price6'))),
    amount6: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount6'))),
    title7: SateraitoWF.getFormValue(form, 'description7'),
    qty7: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity7'))),
    unit_price7: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price7'))),
    amount7: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount7'))),
    title8: SateraitoWF.getFormValue(form, 'description8'),
    qty8: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity8'))),
    unit_price8: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price8'))),
    amount8: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount8'))),
    title9: SateraitoWF.getFormValue(form, 'description9'),
    qty9: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity9'))),
    unit_price9: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price9'))),
    amount9: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount9'))),
    title10: SateraitoWF.getFormValue(form, 'description10'),
    qty10: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'quantity10'))),
    unit_price10: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'unit_price10'))),
    amount10: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount10'))),
    vat: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'total_vat'))),
    wht: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'witholding_tax'))),
    discount: parseFloat(SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'invoice_discount'))),
    remarks: SateraitoWF.getFormValue(form, 'remaks'),
    payment_due_date: SateraitoWF.getFormValue(form, 'payment_due_date'),
    grand_total: parseFloat(SateraitoWF.getFormValue(form, 'grand_total')),
    service: SateraitoWF.getFormValue(form, 'service_dept'),
    currency: SateraitoWF.getFormValue(form, 'curency'),
    conversion: SateraitoWF.getFormValue(form, 'covert_to'),
    conversion_rate: SateraitoWF.getFormValue(form, 'ex_rate'),
  };
  $.ajax({
    type: 'POST',
    url: 'https://prod-19.southeastasia.logic.azure.com:443/workflows/e881666399aa410f9bb8bd14a3116edd/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=vlUU3VvIGs0PpNG7bVTp-NaNWMuu6WeklOHZ4Uot4F8',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    data: JSON.stringify(data),
    success: function (success) {
      console.log(success);
      SateraitoWF.alert('Invoice Generated');
      SateraitoWF.disableFormElement(form, 'button_print_invoice');
    },
    error: function (errMsg) {
      console.log(errMsg);
    },
  });
}

function formatDate(inputDate) {
  const parts = inputDate.split('-');
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];

  return `${month}/${day}/${year}`;
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


$(form).find(':input[name=invoice_discount]').change(function(){
  SateraitoWF.setFormValue(form, 'grand_total', null);
  SateraitoWF.setFormValue(form, 'sub_total', null);
  SateraitoWF.setFormValue(form, 'total_vat', null);
  SateraitoWF.setFormValue(form, 'witholding_tax', null);

});

function addService() {
  var service = null;
  var detCode = null;
  var code = SateraitoWF.getFormValue(form, 'invoice_code');
  console.log(code);
  switch (code) {
    case 'EXE':
      detCode = 'WC/JP/';
      service = 'Recruitment Service';
      break;
    case 'JP':
      detCode = 'WC/JP/';
      service = 'Recruitment Service';
      break;
    case 'KOR':
      detCode = 'WC/JP/';
      service = 'Recruitment Service';
      break;
    case 'OS':
      detCode = 'WC/OSJP/';
      service = 'Recruitment Service';
      break;
    case 'LG-TR':
      detCode = 'TR';
      service = 'Translation Service';
      break;
    case 'LG-INT':
      detCode = 'INT';
      service = 'Interpretation Service';
      break;
    case 'ED-JLMC':
      detCode = 'JLMC';
      service = 'Education';
      break;
    case 'ED-LC(JP)':
      detCode = 'LC/JP/';
      service = 'Language Course';
      break;
    case 'AD':
      detCode = 'BC/AD/';
      service = 'Alih Daya Service';
      break;
    case 'ES-RS':
      detCode = 'BC/RS/';
      service = 'Recruitment Service';
      break;
    case 'CEBL':
      detCode = 'BS/CEBL/';
      service = 'Business License Obtaining Service';
      break;
    case 'HRC':
      detCode = 'HRC';
      service = 'HR Consulting/ Company Regulation/ Employee Agreement';
      break;
    case 'HRC-PAY':
      detCode = 'PAY';
      service = 'Payroll Service';
      break;
    case 'HRC-PSY':
      detCode = 'PSY';
      service = 'Assesment Service';
      break;
    case 'HRC-TRN':
      detCode = 'TRN';
      service = 'Training';
      break;
    case 'VISA':
      service = 'Business License Obtaining Service';
      detCode = 'BS/VISA/';
      break;
    case 'GS':
      detCode = 'GS';
      service = 'GINOJISSHUSEI';
      break;
    case 'HT':
      detCode = 'HT';
      service = 'Kaigo';
      break;
    case 'LC/IN/':
      detCode = 'LC/IN/';
      service = 'Language Course';
      break;
    case 'OT':
      detCode = 'OT';
      service = 'Other';
      break;
    case 'ESS':
      detCode = 'BC/OS/';
      service = 'Essential Service';
      break;
    case 'LOC':
      detCode = 'WC/JP/';
      service = 'Recruitment Service';
      break;
    case 'EURO':
      detCode = 'EU';
      service = '-';
      break;
    case 'RYU':
      detCode = 'RYU';
      service = 'Education Ryugaku';
    default:
  }
  console.log(detCode);
  console.log(service);


  SateraitoWF.setFormValue(form, "code_invoice", "REIM");
  SateraitoWF.setFormValue(form, "service_dept", "Reimbursement");
}

function checkButtonPrint(invoice_code) {
  if (invoice_code != '') {
    $.ajax({
      type: 'POST',
      url: 'https://prod-28.southeastasia.logic.azure.com:443/workflows/6f2a823d99c14a0ba2fb8a12fbc6fd8d/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=_1viquO4KeYu0Nq4hkT5yyFesPrL5UEk4jDd1kf5PUQ',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      data: JSON.stringify({ code: invoice_code }),
      timeout: 30000,
      success: function (success) {
        if (!success) {
          SateraitoWF.enableFormElement(form, 'button_print_invoice');
        }
      },
      error: function (errMsg) {
        console.log(errMsg);
      },
      complete: function () {
        console.log('Request completed, whether successful or not.');
      },
    });
  }
}

function calculate_not_dpp() {
  var a = 0;

  function isBothEmpty(wht, vat) {
    return wht === '' && vat === '';
  }

  function isAmountNotEmpty(amount) {
    return amount !== '';
  }

  if (isBothEmpty(SateraitoWF.getFormValue(form, 'wht1'), SateraitoWF.getFormValue(form, 'vat1'))) {
    var amount = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount1'));
    if (isAmountNotEmpty(amount)) {
      a += parseFloat(amount);
    }
  }

  if (isBothEmpty(SateraitoWF.getFormValue(form, 'wht2'), SateraitoWF.getFormValue(form, 'vat2'))) {
    var amount = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount2'));
    if (isAmountNotEmpty(amount)) {
      a += parseFloat(amount);
    }
  }

  if (isBothEmpty(SateraitoWF.getFormValue(form, 'wht3'), SateraitoWF.getFormValue(form, 'vat3'))) {
    var amount = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount3'));
    if (isAmountNotEmpty(amount)) {
      a += parseFloat(amount);
    }
  }

  if (isBothEmpty(SateraitoWF.getFormValue(form, 'wht4'), SateraitoWF.getFormValue(form, 'vat4'))) {
    var amount = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount4'));
    if (isAmountNotEmpty(amount)) {
      a += parseFloat(amount);
    }
  }

  if (isBothEmpty(SateraitoWF.getFormValue(form, 'wht5'), SateraitoWF.getFormValue(form, 'vat5'))) {
    var amount = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount5'));
    if (isAmountNotEmpty(amount)) {
      a += parseFloat(amount);
    }
  }

  if (isBothEmpty(SateraitoWF.getFormValue(form, 'wht6'), SateraitoWF.getFormValue(form, 'vat6'))) {
    var amount = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount6'));
    if (isAmountNotEmpty(amount)) {
      a += parseFloat(amount);
    }
  }

  if (isBothEmpty(SateraitoWF.getFormValue(form, 'wht7'), SateraitoWF.getFormValue(form, 'vat7'))) {
    var amount = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount7'));
    if (isAmountNotEmpty(amount)) {
      a += parseFloat(amount);
    }
  }

  if (isBothEmpty(SateraitoWF.getFormValue(form, 'wht8'), SateraitoWF.getFormValue(form, 'vat8'))) {
    var amount = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount8'));
    if (isAmountNotEmpty(amount)) {
      a += parseFloat(amount);
    }
  }

  if (isBothEmpty(SateraitoWF.getFormValue(form, 'wht9'), SateraitoWF.getFormValue(form, 'vat9'))) {
    var amount = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount9'));
    if (isAmountNotEmpty(amount)) {
      a += parseFloat(amount);
    }
  }

  if (isBothEmpty(SateraitoWF.getFormValue(form, 'wht10'), SateraitoWF.getFormValue(form, 'vat10'))) {
    var amount = SateraitoWF.removeComma(SateraitoWF.getFormValue(form, 'amount10'));
    if (isAmountNotEmpty(amount)) {
      a += parseFloat(amount);
    }
  }

  return a;
}

//==========DOCUMENT CONTROL=============//
var date1_str = SateraitoWF.getFormValue(form, 'dummy_date');
var date_obj = date1_str.split('-');
var year_int = date_obj[0];
var month_int = date_obj[1];
var date_int = date_obj[2];
var year_str = year_int.toString();
SateraitoWF.setFormValue(form, 'fsyear', year_str);
var month_str = month_int.toString();
if (month_str == '01') {
  SateraitoWF.setFormValue(form, 'month', 'JAN');
} else if (month_str == '02') {
  SateraitoWF.setFormValue(form, 'month', 'FEB');
} else if (month_str == '03') {
  SateraitoWF.setFormValue(form, 'month', 'MAR');
} else if (month_str == '04') {
  SateraitoWF.setFormValue(form, 'month', 'APR');
} else if (month_str == '05') {
  SateraitoWF.setFormValue(form, 'month', 'MAY');
} else if (month_str == '06') {
  SateraitoWF.setFormValue(form, 'month', 'JUN');
} else if (month_str == '07') {
  SateraitoWF.setFormValue(form, 'month', 'JUL');
} else if (month_str == '08') {
  SateraitoWF.setFormValue(form, 'month', 'AUG');
} else if (month_str == '09') {
  SateraitoWF.setFormValue(form, 'month', 'SEP');
} else if (month_str == '10') {
  SateraitoWF.setFormValue(form, 'month', 'OCT');
} else if (month_str == '11') {
  SateraitoWF.setFormValue(form, 'month', 'NOV');
} else if (month_str == '12') {
  SateraitoWF.setFormValue(form, 'month', 'DEC');
}

SateraitoWF.hideRouteSelection(form);

var doc_status = SateraitoWF.getDocStatus(form);
var processInfos = SateraitoWF.getApproveProcessInfo(form);

//DOCUMENT STATUS = CREATE NEW
if (doc_status == '') {
    //SET TO DEFAULT EMPTY
    // SateraitoWF.setFormValue(form, "generated_code", "");
    for (i = 1; i <= 10; i++) {
      vat = 'vat' + i;
      wht = 'wht' + i;
      SateraitoWF.disableFormElement(form, vat);
      SateraitoWF.disableFormElement(form, wht);
    }
  }else if (doc_status == 'in_process') {
  var processInfos = SateraitoWF.getApproveProcessInfo(form);


  if (processInfos[2].status == 'in_process') {
    for (i = 1; i <= 10; i++) {
      vat = 'vat' + i;
      wht = 'wht' + i;
      amount = 'amount' + i;
      SateraitoWF.enableFormElement(form, vat);
      SateraitoWF.enableFormElement(form, wht);
      SateraitoWF.enableFormElement(form, amount);
    }

    SateraitoWF.enableFormElement(form, 'cost_idr');
    SateraitoWF.enableFormElement(form, 'cost_usd');
    SateraitoWF.enableFormElement(form, 'cost_sgd');
    SateraitoWF.enableFormElement(form, 'cost_jpy');
    SateraitoWF.enableFormElement(form, 'ex_rate');
    SateraitoWF.enableFormElement(form, 'generated_code');
    SateraitoWF.enableFormElement(form, 'detail_invoice');
    SateraitoWF.enableFormElement(form, 'kode_faktur');
    SateraitoWF.enableFormElement(form, 'rate_faktur_pajak');

    $(form).find(':input[name=grand_total]').attr('mandatory_msg', 'Please calculate');
    $(form).find(':input[name=grand_total]').addClass('mandatory');

    SateraitoWF.enableFormElement(form, 'invoice_date');
    $(form)
      .find(':input[name=invoice_date]')
      .blur(function () {
        var a = SateraitoWF.getFormValue(form, 'invoice_date');
        if (a == null || a == '') {
          $(form).find(':input[name=invoice_date]').attr('mandatory_msg', 'Please select invoice date');
          $(form).find(':input[name=invoice_date]').addClass('mandatory');
        }
    });

    $(form).find(':input[name=invoice_date]').attr('mandatory_msg', 'Please select invoice date');
    $(form).find(':input[name=invoice_date]').addClass('mandatory');

    SateraitoWF.enableFormElement(form, 'ex_rate');
    $(form).find(':input[name=ex_rate]').attr('mandatory_msg', 'Please inser rate ');
    $(form).find(':input[name=ex_rate]').addClass('mandatory');

    SateraitoWF.enableFormElement(form, 'total_vat');
    $(form).find(':input[name=total_vat]').attr('mandatory_msg', 'Please insert vat percentage');
    $(form).find(':input[name=total_vat]').addClass('mandatory');

    SateraitoWF.enableFormElement(form, 'witholding_tax');
    $(form).find(':input[name=witholding_tax]').attr('mandatory_msg', 'Please insert witholding tax');
    $(form).find(':input[name=witholding_tax]').addClass('mandatory');

    SateraitoWF.enableFormElement(form, 'discount');
    $(form).find(':input[name=discount]').attr('mandatory_msg', 'Please insert discount');
    $(form).find(':input[name=discount]').addClass('mandatory');

    // Generate code on finance approval
    var master_data_owner = SateraitoWF.getViewerUserInfo().email;
    createInvoiceNumber(master_data_owner);
  }
}

function createInvoiceNumber(id){
  SateraitoWF.requestMasterDataRow('new_reim_number', id, function (aRow) {
      if (typeof aRow != 'undefined' && typeof aRow.data_key != 'undefined') {
        var fixnum = aRow.attribute_2.padStart(5, '0');
        var invoice_code = SateraitoWF.getFormValue(form, 'code_invoice');
        var year = SateraitoWF.getFormValue(form, 'dummy_date');
        year = year.slice(2, -6);
        SateraitoWF.alert('Quota : ' +  aRow.attribute_1 );

        if(aRow.attribute_1 >= 1){
          SateraitoWF.setFormValue(form, 'invoice_number_view', fixnum);
          SateraitoWF.setFormValue(form, 'generated_code', invoice_code + year + fixnum + 'OSL');
        }else{
          SateraitoWF.alert('your quota is exceeded, please update master data');
          $(form).find(':input[name=generated_code]').attr('mandatory_msg', 'Update quota before approve to generate invoice number');
          $(form).find(':input[name=generated_code]').addClass('mandatory');
        }
      } else {
        SateraitoWF.setFormValue(form, 'invoice_number_view', '');
      }
    });
}

//onChange Invoice Code Function
$(form)
  .find(':input[name=invoice_code]')
  .change(function () {
    addService();
  });


  if (SateraitoWF.getViewerUserInfo().email == 'muhammad.shaugi@os-selnajaya.com') {
    SateraitoWF.enableFormElement(form, 'button_print_invoice');
    $(form).find(':input[name=button_print_invoice]').css('display', 'block');
  }
  if (SateraitoWF.getViewerUserInfo().email == 'ariyani.syahfitri@os-selnajaya.com') {
    SateraitoWF.enableFormElement(form, 'button_print_invoice');
    $(form).find(':input[name=button_print_invoice]').css('display', 'block');
  }
SateraitoWF.disableFormElement(form, 'button_print_invoice');
$(form).find(':input[name=button_print_invoice]').css('display', 'none');

SateraitoWF.disableFormElement(form, 'button_print_invoice');

var invoice_code = SateraitoWF.getFormValue(form, 'generated_code');

checkButtonPrint(invoice_code);

SateraitoWF.disableFormElement(form, 'invoice_detail');

calculateTotalAmount();
