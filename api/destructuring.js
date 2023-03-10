const mahasiswa = {
    nama: "Fauzul",
    nim: "02042111015",
};

//Cara Biasa
const namaMahasiswa = mahasiswa.nama;
console.log(namaMahasiswa);

// Destructuring
const {nama } = mahasiswa;
console.log (nama);