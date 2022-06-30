import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommandeService } from '../services/commande.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  form: FormGroup;

  constructor(private fb:FormBuilder, private cmd: CommandeService, private router: Router) { 
    this.form = this.fb.group({
      model: ["", Validators.required],
      username: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      comment: [""],
    })
  }

  ngOnInit(): void { 
  }

  async sendCommande(){
    try{
      const res = await this.cmd.sendCommande(this.form.value).toPromise();
      this.eraseAll();
      //const a = document.createElement("a");
      //a.href = "https://www.postman.com/downloads/";
      //a.target = "_blank";
      //a.click();
      window.open("https://www.jumia.com.tn/bako-avance-de-250dt-sur-achat-dun-vehicule-dune-valeur-de-15-000-dt-ht-autonomie-autonomie-de-150-km-4000-w-garantie-5-ans-504647.html", "blank")
    }
    catch(e){
      console.log(e);
    }
  }

  eraseAll(){
    this.form.reset();
  }

}
