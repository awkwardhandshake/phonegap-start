function encrypt(anv,pass){
	var encryptedanv = CryptoJS.AES.encrypt(anv, keyer);
  var encryptedpass = CryptoJS.AES.encrypt(pass, keyer);
  
localStorage.anv = encryptedanv;
localStorage.pass = encryptedpass;

}

function dehamta(anv,pass){
      var dehamta = true;
	    var decryptedanv = CryptoJS.AES.decrypt(anv, keyer);
      var decryptedpass = CryptoJS.AES.decrypt(pass, keyer);
      decryptedanv = decryptedanv.toString(CryptoJS.enc.Utf8);
      decryptedpass = decryptedpass.toString(CryptoJS.enc.Utf8);
      console.log('dehamta ' + decryptedanv +' : '+ decryptedpass);
loggain(decryptedanv,decryptedpass,dehamta);
}