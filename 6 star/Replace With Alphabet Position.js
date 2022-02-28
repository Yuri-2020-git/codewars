function changer(str) {
  var strNew = "";
  for (i = 0; i < str.length; i++) {
    var c = str.charAt(i).toLowerCase();
    var code = c.charCodeAt(0);
    if (code >= 97 && code <= 122) strNew += ((code - 97 + 1) + " ")
  }
  return strNew;
}

console.log(changer("The sunset sets at twelve o' clock."));
