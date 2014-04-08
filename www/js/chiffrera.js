function encrypt(anv,pass){
	var encryptedanv = CryptoJS.AES.encrypt(anv, keyer);
    var encryptedpass = CryptoJS.AES.encrypt(pass, keyer);

localStorage.anv = encryptedanv;
localStorage.pass = encryptedpass;
console.log(localStorage.anv + " : " + localStorage.pass);

}

function dehamta(anv,pass){
	    var decryptedanv = CryptoJS.AES.decrypt(anv, keyer);
		var decryptedpass = CryptoJS.AES.decrypt(pass, keyer);

console.log(decryptedanv.toString(CryptoJS.enc.Utf8));
console.log(decryptedpass.toString(CryptoJS.enc.Utf8));
hamta(decryptedanv,decryptedpass);
}