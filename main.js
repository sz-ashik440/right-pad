exports.rightPad = function rightPad(str, len, chr){
  if (!chr && chr!=0)
    chr = ' ';
  len = len - str.length;
  for (var i=0;i<len;i++){
    str = str + chr;
  }
  return str;
}

//console.log(rightPad('more',6,'X')+'boom');
