import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Mahasiswa } from './mahasiswa.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app works!';
  mahasiswa : FormGroup;

  constructor(private mhs : FormBuilder){
    this.createForm();
  }

  createForm(){
    this.mahasiswa = this.mhs.group({
      nama_mhs: '',
      pendidikan : this.mhs.group({
        nama_fakultas: '',
        nama_prodi: ''
      })
    })
  }

   onSubmit(f : FormGroup) {
    console.log("Hasil dari value dari form adalah");
    console.log(f.value);
  }
}
