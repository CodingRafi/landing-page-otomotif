let absen = [];
let kelompok = [];

for(let i = 1;i <= 4; i++){
    console.log(`Kelompok ${i}`);

    for(let z = 0; kelompok.length != 11; z++){
        let angka = Math.round(Math.random() * 40);
        if(kelompok.length == 0){
            if(absen.includes(angka)){
                // console.log('udah ada')
                // continue
            }else{
                kelompok.push(angka)
                absen.push(angka)
            }
        }else{
            kelompok.forEach(e => {
                if(absen.includes(angka) && kelompok.includes(angka)){
                    // console.log('udah ada')
                    // continue
                }else{
                    kelompok.push(angka)
                    absen.push(angka)
                }
            })
        }
        // console.log(z)
    }

    
    kelompok = [];
    console.log(absen.sort())
}
// kelompok.forEach(e => {
//     console.log(e)
// })