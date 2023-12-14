function TextUSD(MyNumber) {

  let Place = [
     "",
     " Thousand ",
     " Million ",
     " Billion ",
     " Trillion "
  ];

  let Dollars = '';
  let Cents = '';
  let DecimalPlace;
  let Temp;
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

function TextIDR(MyNumber) {

  let Place = [
     "",
     " Thousand ",
     " Million ",
     " Billion ",
     " Trillion "
  ];

  let Dollars = '';
  let Cents = '';
  let DecimalPlace;
  let Temp;
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

function TextYEN(MyNumber) {

  let Place = [
     "",
     " Thousand ",
     " Million ",
     " Billion ",
     " Trillion "
  ];

  let Dollars = '';
  let Cents = '';
  let DecimalPlace;
  let Temp;
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

function ConvertHundreds(myNumber) {
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

function ConvertTens(myTens) {
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

function ConvertDigit(myDigit) {
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