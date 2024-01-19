function main(
	workbook: ExcelScript.Workbook,

	description1: string,
	description2: string,
	description3: string,
	description4: string,
	description5: string,
	description6: string,
	description7: string,
	description8: string,
	description9: string,
	description10: string,

	qty1: number,
	qty2: number,
	qty3: number,
	qty4: number,
	qty5: number,
	qty6: number,
	qty7: number,
	qty8: number,
	qty9: number,
	qty10: number,

	unit_price1: number,
	unit_price2: number,
	unit_price3: number,
	unit_price4: number,
	unit_price5: number,
	unit_price6: number,
	unit_price7: number,
	unit_price8: number,
	unit_price9: number,
	unit_price10: number,

	amount1: number,
	amount2: number,
	amount3: number,
	amount4: number,
	amount5: number,
	amount6: number,
	amount7: number,
	amount8: number,
	amount9: number,
	amount10: number,

	vat: number,
	witholdingtax: number,
	discount: number,
	to: string,
	attn: string,
	invoice_date: string,
	payment_due_date: string,
	invoice_number: string,
	note: string,
	currency: string,
	service: string,
	company: string
) {
	let worksheet = workbook.getWorksheet("IDR");

	worksheet.getRange('D5').setValue(to);
	worksheet.getRange('D6').setValues(attn);
	worksheet.getRange('D7').setValues(invoice_date);
	worksheet.getRange('D8').setValues(invoice_number);
	worksheet.getRange("H7").setValue(payment_due_date);

	worksheet.getRange("B14:D29").setValues([
		[description1, description1, description1],
		[description1, description1, description1],
		[description2, description2, description2],
		[description2, description2, description2],
		[description3, description3, description3],
		[description3, description3, description3],
		[description4, description4, description4],
		[description4, description4, description4],
		[description5, description5, description5],
		[description5, description5, description5],
		[description6, description6, description6],
		[description6, description6, description6],
		[description7, description7, description7],
		[description7, description7, description7],
		[description8, description8, description8],
		[description8, description8, description8],
		[description9, description9, description9],
		[description9, description9, description9],
		[description10, description10, description10],
		[description10, description10, description10]]
	);

	worksheet.getRange("F14").setValue(qty1);
	worksheet.getRange("F16").setValue(qty2);
	worksheet.getRange("F18").setValue(qty3);
	worksheet.getRange("F20").setValue(qty4);
	worksheet.getRange("F22").setValue(qty5);
	worksheet.getRange("F24").setValue(qty6);
	worksheet.getRange("F26").setValue(qty7);
	worksheet.getRange("F28").setValue(qty8);
	worksheet.getRange("F30").setValue(qty9);
	worksheet.getRange("F32").setValue(qty10);

	worksheet.getRange("G14").setValue(unit_price1);
	worksheet.getRange("G16").setValue(unit_price2);
	worksheet.getRange("G18").setValue(unit_price3);
	worksheet.getRange("G20").setValue(unit_price4);
	worksheet.getRange("G22").setValue(unit_price5);
	worksheet.getRange("G24").setValue(unit_price6);
	worksheet.getRange("G26").setValue(unit_price7);
	worksheet.getRange("G28").setValue(unit_price8);
	worksheet.getRange("G30").setValue(unit_price9);
	worksheet.getRange("G32").setValue(unit_price10);

	worksheet.getRange("I14").setValue(amount1);
	worksheet.getRange("I16").setValue(amount2);
	worksheet.getRange("I18").setValue(amount3);
	worksheet.getRange("I20").setValue(amount4);
	worksheet.getRange("I22").setValue(amount5);
	worksheet.getRange("I24").setValue(amount6);
	worksheet.getRange("I26").setValue(amount7);
	worksheet.getRange("I28").setValue(amount8);
	worksheet.getRange("I30").setValue(amount9);
	worksheet.getRange("I32").setValue(amount10);

	worksheet.getRange("I35").setValue(discount);
	worksheet.getRange("I37").setValues(vat);
	worksheet.getRange("I38").setValues(witholdingtax * -1);

	worksheet.getRange("D43:E51").setValue(note);
	worksheet.getRange("D12:I13").setValue(service);

	switch (currency) {
		case "IDR":
			worksheet.getRange("I14").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I16").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I18").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I20").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I22").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I24").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I26").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I28").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I30").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I32").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("G14").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("G16").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("G18").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("G20").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("G22").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("G24").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("G26").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("G28").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("G30").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("G32").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I35").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I36").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I37").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I38").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I39").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("D41:J42").setValue(TextIDR(worksheet.getRange("I39").getValue()))
			break;
		case "USD":
			worksheet.getRange("I14").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("I16").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("I18").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("I20").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("I22").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("I24").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("I26").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("I28").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("I30").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("I32").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("G14").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("G16").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("G18").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("G20").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("G22").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("G24").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("G26").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("G28").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("G30").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("G32").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("I35").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("I36").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("I37").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("I38").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("I39").setNumberFormatLocal("_([$USD] * #,##0_);_([$USD] * (#,##0);_([$USD] * \"-\"??_);_(@_)");
			worksheet.getRange("D41:J42").setValue(TextUSD(worksheet.getRange("I39").getValue()))
			break;
		case "JPY":
			worksheet.getRange("I14").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("I16").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("I18").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("I20").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("I22").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("I24").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("I26").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("I28").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("I30").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("I32").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("G14").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("G16").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("G18").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("G20").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("G22").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("G24").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("G26").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("G28").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("G30").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("G32").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("I35").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("I36").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("I37").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("I38").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("I39").setNumberFormatLocal("_([$JPY] * #,##0_);_([$JPY] * (#,##0);_([$JPY] * \"-\"??_);_(@_)");
			worksheet.getRange("D41:J42").setValue(TextYEN(worksheet.getRange("I39").getValue()))
			break;
		default:
			worksheet.getRange("I14").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I16").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I18").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I20").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I22").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I24").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I26").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I28").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I30").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I32").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("G14").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("G16").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("G18").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("G20").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("G22").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("G24").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("G26").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("G28").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("G30").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("G32").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I35").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I36").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I37").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I38").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("I39").setNumberFormatLocal("_([$IDR] * #,##0_);_([$IDR] * (#,##0);_([$IDR] * \"-\"??_);_(@_)");
			worksheet.getRange("D41:J42").setValue(TextIDR(worksheet.getRange("I39").getValue()))
	}
}



function TextUSD(MyNumber: string) {

	let Place = [
		"",
		" Thousand ",
		" Million ",
		" Billion ",
		" Trillion "
	];

	let Dollars = '';
	let Cents = '';
	let DecimalPlace = 0;
	let Temp = '';
	let Count = 0;

	MyNumber = MyNumber.toString()
	MyNumber = MyNumber.trim();
	DecimalPlace = MyNumber.indexOf('.');

	if (DecimalPlace > 0) {
		Temp = (MyNumber.substring(DecimalPlace + 1) + "00").substring(0, 2);
		Cents = ConvertTens(Temp);
		MyNumber = MyNumber.substring(0, DecimalPlace).trim();
	}

	do {
		Temp = ConvertHundreds(MyNumber.slice(-3));
		if (Temp !== '') {
			Dollars = Temp + Place[Count] + Dollars;
		}
		if (MyNumber.length > 3) {
			MyNumber = MyNumber.slice(0, -3);
		} else {
			MyNumber = '';
		}
		Count += 1;
	} while (MyNumber !== '');

	if (Dollars === '') {
		Dollars = 'No Dollars';
	} else if (Dollars === 'One') {
		Dollars = 'One Dollar';
	} else {
		Dollars = Dollars + ' Dollars';
	}

	if (Cents === '') {
		Cents = ' and No Cents';
	} else {
		Cents = ' and ' + Cents + ' Cents';
	}

	return Dollars + Cents;
}

function TextIDR(MyNumber: string) {

	let Place = [
		"",
		" Thousand ",
		" Million ",
		" Billion ",
		" Trillion "
	];

	let Dollars = '';
	let Cents = '';
	let DecimalPlace = 0;
	let Temp = '';
	let Count = 0;

	MyNumber = MyNumber.toString()
	MyNumber = MyNumber.trim();
	DecimalPlace = MyNumber.indexOf('.');

	if (DecimalPlace > 0) {
		Temp = (MyNumber.substring(DecimalPlace + 1) + "00").substring(0, 2);
		Cents = ConvertTens(Temp);
		MyNumber = MyNumber.substring(0, DecimalPlace).trim();
	}

	do {
		Temp = ConvertHundreds(MyNumber.slice(-3));
		if (Temp !== '') {
			Dollars = Temp + Place[Count] + Dollars;
		}
		if (MyNumber.length > 3) {
			MyNumber = MyNumber.slice(0, -3);
		} else {
			MyNumber = '';
		}
		Count += 1;
	} while (MyNumber !== '');

	if (Dollars === '') {
		Dollars = 'No Rupiah';
	} else if (Dollars === 'One') {
		Dollars = 'One Rupiah';
	} else {
		Dollars = Dollars + ' Rupiah';
	}

	if (Cents === '') {
		Cents = ' ';
	} else {
		Cents = ' ';
	}

	return Dollars + Cents;
}

function TextYEN(MyNumber: string) {

	let Place = [
		"",
		" Thousand ",
		" Million ",
		" Billion ",
		" Trillion "
	];

	let Dollars = '';
	let Cents = '';
	let DecimalPlace = 0;
	let Temp = '';
	let Count = 0;

	MyNumber = MyNumber.toString()
	MyNumber = MyNumber.trim();
	DecimalPlace = MyNumber.indexOf('.');

	if (DecimalPlace > 0) {
		Temp = (MyNumber.substring(DecimalPlace + 1) + "00").substring(0, 2);
		Cents = ConvertTens(Temp);
		MyNumber = MyNumber.substring(0, DecimalPlace).trim();
	}

	do {
		Temp = ConvertHundreds(MyNumber.slice(-3));
		if (Temp !== '') {
			Dollars = Temp + Place[Count] + Dollars;
		}
		if (MyNumber.length > 3) {
			MyNumber = MyNumber.slice(0, -3);
		} else {
			MyNumber = '';
		}
		Count += 1;
	} while (MyNumber !== '');

	if (Dollars === '') {
		Dollars = 'No Yen';
	} else if (Dollars === 'One') {
		Dollars = 'One Yen';
	} else {
		Dollars = Dollars + ' Yen';
	}

	if (Cents === '') {
		Cents = ' ';
	} else {
		Cents = ' ';
	}

	return Dollars + Cents;
}

function ConvertHundreds(myNumber: string) {
	let result = "";

	if (parseInt(myNumber) === 0) {
		return result;
	}

	myNumber = ("000" + myNumber).slice(-3);

	if (myNumber.charAt(0) !== "0") {
		result = ConvertDigit(myNumber.charAt(0)) + " Hundred ";
	}

	if (myNumber.charAt(1) !== "0") {
		result += ConvertTens(myNumber.substring(1));
	} else {
		result += ConvertDigit(myNumber.charAt(2));
	}

	return result.trim();
}

function ConvertTens(myTens: string) {
	let result = "";

	if (parseInt(myTens.charAt(0)) === 1) {
		switch (parseInt(myTens)) {
			case 10: result = "Ten"; break;
			case 11: result = "Eleven"; break;
			case 12: result = "Twelve"; break;
			case 13: result = "Thirteen"; break;
			case 14: result = "Fourteen"; break;
			case 15: result = "Fifteen"; break;
			case 16: result = "Sixteen"; break;
			case 17: result = "Seventeen"; break;
			case 18: result = "Eighteen"; break;
			case 19: result = "Nineteen"; break;
			default: break;
		}
	} else {
		switch (parseInt(myTens.charAt(0))) {
			case 2: result = "Twenty "; break;
			case 3: result = "Thirty "; break;
			case 4: result = "Forty "; break;
			case 5: result = "Fifty "; break;
			case 6: result = "Sixty "; break;
			case 7: result = "Seventy "; break;
			case 8: result = "Eighty "; break;
			case 9: result = "Ninety "; break;
			default: break;
		}
		result += ConvertDigit(myTens.charAt(1));
	}

	return result;
}

function ConvertDigit(myDigit: string) {
	switch (parseInt(myDigit)) {
		case 1: return "One";
		case 2: return "Two";
		case 3: return "Three";
		case 4: return "Four";
		case 5: return "Five";
		case 6: return "Six";
		case 7: return "Seven";
		case 8: return "Eight";
		case 9: return "Nine";
		default: return "";
	}
}
