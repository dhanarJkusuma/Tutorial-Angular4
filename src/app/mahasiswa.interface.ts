export interface Mahasiswa{ //FormGroup
    nama_mhs: string; //FormControl
    pendidikan: { //FormGroup
        nama_fakultas: string; //FormControl
        nama_prodi: string; //FormControl
    }
}