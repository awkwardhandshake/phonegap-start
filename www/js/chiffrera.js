function encrypt(anv,pass){
	var encryptedanv = CryptoJS.AES.encrypt(anv, keyer);
    var encryptedpass = CryptoJS.AES.encrypt(pass, keyer);

localStorage.anv = encryptedanv;
localStorage.pass = encryptedpass;

}

function dehamta(anv,pass){
	    var decryptedanv = CryptoJS.AES.decrypt(anv, keyer);
      var decryptedpass = CryptoJS.AES.decrypt(pass, keyer);
loggain(decryptedanv,decryptedpass);
}