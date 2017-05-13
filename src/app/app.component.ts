import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app works!';
  
  mahasiswa  = {
    nama_mhs: '',
    pendidikan: {
      nama_fakultas: '',
      nama_prodi: ''
    }
  };


   onSubmit() {
    console.log("Hasil dari value dari form adalah");
    console.log(this.mahasiswa);
  }
}
