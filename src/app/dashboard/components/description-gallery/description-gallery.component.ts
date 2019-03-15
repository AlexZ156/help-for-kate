import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'kt-description-gallery',
  templateUrl: './description-gallery.component.html',
  styleUrls: ['./description-gallery.component.scss']
})

export class DescriptionGalleryComponent {
  @Input() data: any[] = [];
  @Input() currentIndex = 0;
  @Output() switchSlide: EventEmitter<number> = new EventEmitter();

  nextSlide(e: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }

    this.switchSlide.emit(this.currentIndex < this.data.length - 1 ? this.currentIndex + 1 : 0);
  }

  prevSlide(e): void {
    if (e) {
      e.preventDefault();
    }
    this.switchSlide.emit(this.currentIndex > 0 ? this.currentIndex - 1 : this.data.length - 1);
  }

  goToSlide(num): void {
    if (num !== null && num !== this.currentIndex) {
      num = Math.max(Math.min(num, this.data.length - 1), 0);
      this.switchSlide.emit(num);
    }
  }
}
