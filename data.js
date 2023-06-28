const nama = "annisa nurul hikmah";
let usia = 21;


function generateBiodata() {
    if (usia > 6 && usia < 11) {
        console.log('Anda anak anak');
    }
    else if(usia > 12 && usia < 19 ) {
        console.log('Anda remaja');
    }
    else if(usia > 20 ){
        console.log('Anda Dewasa Awal')
    }
    else {
        console.log('Anda dewasa');
    }
}

console.log(nama);
console.log(usia);

generateBiodata();