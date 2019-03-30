import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RoutesModule } from './app.routes';
import { EasingComponent } from 'src/components/easing/easing.component';
import { CloningComponent } from 'src/components/cloning/cloning.component';
import { DimensionalityComponent } from 'src/components/dimensionality/dimensionality.component';
import { DollyAndZoomComponent } from 'src/components/dolly-and-zoom/dolly-and-zoom.component';
import { MaskingComponent } from 'src/components/masking/masking.component';
import { OffsetDelayComponent } from 'src/components/offset-delay/offset-delay.component';
import { ParallaxComponent } from 'src/components/parallax/parallax.component';
import { ParentingComponent } from 'src/components/parenting/parenting.component';
import { TransformationComponent } from 'src/components/transformation/transformation.component';
import { ValueChangeComponent } from 'src/components/value-change/value-change.component';
import { ObscurationComponent } from 'src/components/obscuration/obscuration.component';
import { OverlayComponent } from 'src/components/overlay/overlay.component';

@NgModule({
  declarations: [
    AppComponent, OverlayComponent, EasingComponent, ObscurationComponent, CloningComponent, DimensionalityComponent,
    DollyAndZoomComponent, MaskingComponent, OffsetDelayComponent, ParallaxComponent, ParentingComponent, TransformationComponent, ValueChangeComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatCardModule, RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
