import { Component, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  @ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;
  compType= this.fb.group({
    componentName: ['']
  });

  constructor(private fb: FormBuilder){}
  
  addComponent(){
    this.container.clear();
    const componentType = this.getComponentType(this.compType.get('componentName').value);
    this.container.createComponent(componentType);
  }

  getComponentType(name): Type<any> {
    let type: Type<any>;
    switch(name) {
      case 'admin': {
        type = AdminComponent;
        break;
      }
      case 'user': {
        type = UserComponent;
        break;
      }
      case 'home': {
        type = HomeComponent;
        break;
      }
      case 'customer': {
        type = CustomerComponent;
        break;
      }
    }
    return type;
  }
}
