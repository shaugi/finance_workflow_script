form = SateraitoWF.getForm(document.getElementsByName('workflow_doc_load_handler'));

var doc_status = SateraitoWF.getDocStatus(form);
var processInfos = SateraitoWF.getApproveProcessInfo(form);
//PUSH TO POWERAUTOMATE
function push() {
  var docID = SateraitoWF.getDocId(form);
  var docURL = 'https://workflow.nextset.jp/osisg03/Finance/docdetail/' + docID;


  function getType(code) {
    let type = "";

    if (code.startsWith("REIM")) {
      type = "REIM";
    } else {
      type = "other";
    }

    return type;
  }


  var data = {
    invoice_number    : SateraitoWF.getFormValue(form, 'generated_code'),
    type : getType(SateraitoWF.getFormValue(form, 'generated_code')),
    url : docURL,
    reason : SateraitoWF.getFormValue(form, 'reason'),
  };

  $.ajax({
    type: 'POST',
    url: 'https://prod-62.southeastasia.logic.azure.com:443/workflows/9789069547364b1bbf2909a986721d8a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wGUdggX7iaFirZVps9vsLngWn5ZqppDrH_GSFEv-jw0',
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

