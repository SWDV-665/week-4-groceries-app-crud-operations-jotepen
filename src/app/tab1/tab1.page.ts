import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { GroceriesServiceProvider} from '../../providers/groceries-service/groceries-service';
import { InputDialogServiceProvider} from '../../providers/input-dialog-service/input-dialog-service'


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery";



  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertController:AlertController, public dataservice: GroceriesServiceProvider, public inputDialogService: InputDialogServiceProvider ) {}

  /** This function removes grocery items from the list */
  
  loadItems(){
    return this.dataservice.getItems();
  }
  
  removeItem(item, index)
  {
  console.log("Removing item...", item, index);
  const toast = this.toastCtrl.create({
    message: 'Removing Item - ' +index+ "...",
    duration: 3000
  });

  this.dataservice.removeItem(index);
  }

  editItem(item, index)
  {
  console.log("Edit item...", item, index);
  const toast = this.toastCtrl.create({
    message: 'Editing Item - ' +index+ "...",
    duration: 3000
  });

  this.inputDialogService.showPrompt(item, index);
  }


 /** This function prompts you to add grocery items to the list */
  addItem()
  {
    console.log("Adding item");
    this.inputDialogService.showPrompt();
  }
 /** This function prompts the user to add the grocery item and quantity */




}



