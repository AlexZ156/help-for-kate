import { Component, ViewChild } from '@angular/core';
import { ellipseGalleryData } from './data/ellipse-gallery-data';
import { EllipseGalleryComponent } from './components/ellipse-gallery/ellipse-gallery.component';

@Component({
  selector: 'kt-dashboard-page',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})

export class DashboardPage {
  public ellipseGalleryData = ellipseGalleryData;

  public currentIndex = 0;

  @ViewChild(EllipseGalleryComponent) ellipseGallery: EllipseGalleryComponent;

  goToSlide(index: number) {
    this.ellipseGallery.goToSlide(index);
  }
}
