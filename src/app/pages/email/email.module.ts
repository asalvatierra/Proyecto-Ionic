import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailPageRoutingModule } from './email-routing.module';

import { EmailPage } from './email.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [EmailPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EmailPageRoutingModule,
        ComponentsModule
    ]
})
export class EmailPageModule {}
