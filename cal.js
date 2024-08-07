function age() {
  var d1 = Number(document.getElementById('date').value);
  var m1 = Number(document.getElementById('month').value);
  var y1 = Number(document.getElementById('year').value);

  var date = new Date();
  var d2 = date.getDate();
  var m2 = date.getMonth() + 1;
  var y2 = date.getFullYear();

  if (isNaN(d1) || isNaN(m1) || isNaN(y1)) {
    document.getElementById('age').innerHTML = 'Invalid birthdate: please enter a valid date';
    return;
  }

  if (y1 > y2 || (y1 === y2 && (m1 > m2 || (m1 === m2 && d1 > d2)))) {
    document.getElementById('age').innerHTML = 'Invalid birthdate: cannot be in the future';
    return;
  }

  var ageYears = y2 - y1;
  var ageMonths = m2 - m1;
  var ageDays = d2 - d1;

  if (ageDays < 0) {
    ageMonths--;
    ageDays += getDaysInMonth(y2, m2 - 1);
  }
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  document.getElementById('age').innerHTML = 'Your age is ' + ageYears + ' years ' + ageMonths + ' months ' + ageDays + ' days';
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}