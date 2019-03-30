import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { EasingComponent } from "src/components/easing/easing.component";
import { OffsetDelayComponent } from "src/components/offset-delay/offset-delay.component";
import { ParentingComponent } from "src/components/parenting/parenting.component";

const routes: Routes = [
    {
        path: '',
        component: AppComponent
    }, {
        path: 'easing',
        component: EasingComponent
    }, {
        path: 'offset-delay',
        component: OffsetDelayComponent
    }, {
        path: 'parenting',
        component: ParentingComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutesModule {

}