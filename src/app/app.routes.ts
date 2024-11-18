import { Routes } from '@angular/router';
import { StructureDirectiveComponent } from './Directive/structure-directive/structure-directive.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AttributeDirectivesComponent } from './Directive/attribute-directives/attribute-directives.component';
import { FlowControlComponent } from './Flow_Control/flow-control/flow-control.component';

export const routes: Routes = [

    {
        path:"structure_directive",
        component: StructureDirectiveComponent,

    },
    {
        path:"attribute_directive",
        component: AttributeDirectivesComponent,

    },
    {
        path:"data_binding",
        component: DataBindingComponent,

    },
    {
        path:"flow_control",
        component:FlowControlComponent,
    }


];
