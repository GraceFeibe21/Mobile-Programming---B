class orang {
    constructor(nama,umur) {
        this.nama=nama;
        this.umur=umur;
    }

    bekerja(){
        console.log(`${this.nama} sedang bekerja seperti biasa`);
    }
    tidur(){
        console.log(`${this.name} sedang tidur`);
    }
    makan(){
        console.log(`${this.nama} sedang makan`);
    }
}

const user1 = new orang("Grace","21");
user1.bekerja();


class pelajar extends orang{
    constructor(nama,umur,namaSekolah){
        super(nama,umur);
        this.namaSekolah=namaSekolah;
    }

    belajar(){
        console.log(`${this.nama} belajar di ${this.namaSekolah}`);
    }
}

const user = new pelajar ("John", 17, "Unklab");
console.log(user);

