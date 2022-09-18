import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reponse } from './models/reponse';
import { CandidatService } from './services/candidat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email!:string;
  date!:Date;
  urlGithub!:string;
  message!:string;
  reponse!:Reponse;
  

  constructor(public candidatService:CandidatService,public router:Router){}

  _submit():void{
    let data = {
      "cle":"CLE-TEST-IOT",
          "donnees": {
              "id": this.email,
              "date":this.date,
              "urlRelais":this.urlGithub,
              "message": this.message
          }
   }
    this.candidatService.sendData(data).subscribe(
      (resp:Response)=>{
        this.reponse=resp;
        console.log(resp)},
      (err:HttpErrorResponse)=>{console.log(err)}
    )
   
  }
}
