(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/components/description-gallery/description-gallery.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/components/description-gallery/description-gallery.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let item of data; let i = index;\">\r\n  <div *ngIf=\"currentIndex === i\">\r\n    <h2>\r\n      {{ item.title }}\r\n      <button class=\"prev\" (click)=\"prevSlide($event)\">prev</button>\r\n      <button class=\"next\" (click)=\"nextSlide($event)\">next</button>\r\n    </h2>\r\n    <ng-container *ngIf=\"item.showAll\">\r\n      <p *ngFor=\"let p of item.content\">{{ p }}</p>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!item.showAll\">\r\n      <p *ngFor=\"let p of readMoreData[i].content\">{{ p }}</p>\r\n    </ng-container>\r\n    <a\r\n      href\r\n      class=\"badge badge-pill badge-primary read-more\"\r\n      (click)=\"toggleSize($event, item)\"\r\n      *ngIf=\"readMoreData[i].readMoreActive\"\r\n    >{{ item.showAll ? 'Less' : 'Read more' }}</a>\r\n  </div>\r\n</ng-container>\r\n\r\n<ul>\r\n  <li\r\n    [ngClass]=\"{'active': currentIndex === i}\"\r\n    *ngFor=\"let tem of data; let i = index;\"\r\n    (click)=\"goToSlide(i)\"\r\n  ></li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/dashboard/components/description-gallery/description-gallery.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/components/description-gallery/description-gallery.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  text-align: justify; }\n\nul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  justify-content: center; }\n\nul li {\n    margin: 0 0.3rem;\n    width: 1rem;\n    height: 1rem;\n    border-radius: 50%;\n    background: #363f48;\n    cursor: pointer; }\n\nul li.active {\n      background: #3498db; }\n\n.read-more {\n  cursor: pointer; }\n\nh2 {\n  position: relative;\n  padding-right: 5rem; }\n\nh2 button {\n    position: absolute;\n    right: 0;\n    top: 0.8rem;\n    border-style: solid;\n    border-width: 4px 4px 0 0;\n    border-color: #ccc;\n    overflow: hidden;\n    text-indent: -9999px;\n    padding: 0;\n    background: none;\n    outline: none;\n    width: 1.5rem;\n    height: 1.5rem;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n\nh2 button:hover {\n      border-color: #3498db; }\n\nh2 .prev {\n    right: 2rem;\n    -webkit-transform: rotate(-135deg);\n            transform: rotate(-135deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvZGVzY3JpcHRpb24tZ2FsbGVyeS9DOlxcYXpvbG90YXJldlxcS2F0ZVxcaGVscC1mb3Ita2F0ZS9zcmNcXGFwcFxcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxkZXNjcmlwdGlvbi1nYWxsZXJ5XFxkZXNjcmlwdGlvbi1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QixFQUFBOztBQUx6QjtJQVFJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZSxFQUFBOztBQWJuQjtNQWdCTSxtQkFBbUIsRUFBQTs7QUFLekI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUZyQjtJQUtJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUVULG1CQUFZO0lBQ1oseUJBQWtCO0lBQ2xCLGtCQUFXO0lBRWIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhO0lBQ2IsY0FBYztJQUNkLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQTs7QUFwQjVCO01BdUJNLHFCQUFxQixFQUFBOztBQXZCM0I7SUE0QkksV0FBVztJQUNYLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2Rlc2NyaXB0aW9uLWdhbGxlcnkvZGVzY3JpcHRpb24tZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbnVsIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGxpIHtcclxuICAgIG1hcmdpbjogMCAwLjNyZW07XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGhlaWdodDogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICMzNjNmNDg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnJlYWQtbW9yZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVyZW07XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMC44cmVtO1xyXG4gICAgYm9yZGVyOiB7XHJcbiAgICAgIHN0eWxlOiBzb2xpZDtcclxuICAgICAgd2lkdGg6IDRweCA0cHggMCAwO1xyXG4gICAgICBjb2xvcjogI2NjYztcclxuICAgIH07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzM0OThkYjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcmV2IHtcclxuICAgIHJpZ2h0OiAycmVtO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/description-gallery/description-gallery.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/components/description-gallery/description-gallery.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DescriptionGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionGalleryComponent", function() { return DescriptionGalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DescriptionGalleryComponent = /** @class */ (function () {
    function DescriptionGalleryComponent() {
        this.data = [];
        this.currentIndex = 0;
        this.switchSlide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.readMoreData = [];
        this._maxAllowedCharacters = 300;
    }
    DescriptionGalleryComponent.prototype.ngOnChanges = function () {
        this.defineReadMoreData();
    };
    DescriptionGalleryComponent.prototype.defineReadMoreData = function () {
        this.readMoreData = [];
        for (var i = 0; i < this.data.length; i++) {
            var characterCount = this._maxAllowedCharacters;
            this.readMoreData.push({
                content: []
            });
            for (var _i = 0, _a = this.data[i].content; _i < _a.length; _i++) {
                var text = _a[_i];
                var count = Math.min(characterCount, text.length);
                var cutText = text.substring(0, count);
                characterCount -= count;
                if (characterCount === 0) {
                    if (cutText.length < text.length ||
                        this.readMoreData[i].content.length < this.readMoreData[i].content.length) {
                        this.readMoreData[i].readMoreActive = true;
                    }
                    this.readMoreData[i].content.push(cutText + '...');
                    break;
                }
                else {
                    this.readMoreData[i].content.push(cutText);
                }
            }
        }
    };
    DescriptionGalleryComponent.prototype.toggleSize = function (e, item) {
        e.preventDefault();
        item.showAll = !item.showAll;
    };
    DescriptionGalleryComponent.prototype.nextSlide = function (e) {
        if (e) {
            e.preventDefault();
        }
        this.switchSlide.emit(this.currentIndex < this.data.length - 1 ? this.currentIndex + 1 : 0);
    };
    DescriptionGalleryComponent.prototype.prevSlide = function (e) {
        if (e) {
            e.preventDefault();
        }
        this.switchSlide.emit(this.currentIndex > 0 ? this.currentIndex - 1 : this.data.length - 1);
    };
    DescriptionGalleryComponent.prototype.goToSlide = function (num) {
        if (num !== null && num !== this.currentIndex) {
            num = Math.max(Math.min(num, this.data.length - 1), 0);
            this.switchSlide.emit(num);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DescriptionGalleryComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DescriptionGalleryComponent.prototype, "currentIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DescriptionGalleryComponent.prototype, "switchSlide", void 0);
    DescriptionGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-description-gallery',
            template: __webpack_require__(/*! ./description-gallery.component.html */ "./src/app/dashboard/components/description-gallery/description-gallery.component.html"),
            styles: [__webpack_require__(/*! ./description-gallery.component.scss */ "./src/app/dashboard/components/description-gallery/description-gallery.component.scss")]
        })
    ], DescriptionGalleryComponent);
    return DescriptionGalleryComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/ellipse-gallery/ellipse-gallery.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/components/ellipse-gallery/ellipse-gallery.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  *ngFor=\"let item of data; let i = index\"\r\n  class=\"slide\"\r\n  [style.left.px]=\"slides[i]?.params.left\"\r\n  [style.top.px]=\"slides[i]?.params.top\"\r\n  [style.transform]=\"'scale(' + slides[i]?.params.scaleToAnimate + ')'\"\r\n  (click)=\"goToSlide(i)\"\r\n>\r\n  <div class=\"image-holder\" [ngStyle]=\"{'background-image': 'url(' + data[i].img + ')'}\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/components/ellipse-gallery/ellipse-gallery.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/components/ellipse-gallery/ellipse-gallery.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: relative; }\n\n.slide {\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  font-size: 50px;\n  border-radius: 50%;\n  cursor: pointer; }\n\n.image-holder {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: 50%;\n  border-radius: 50%;\n  transition: -webkit-transform .2s;\n  transition: transform .2s;\n  transition: transform .2s, -webkit-transform .2s; }\n\n.image-holder:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvZWxsaXBzZS1nYWxsZXJ5L0M6XFxhem9sb3RhcmV2XFxLYXRlXFxoZWxwLWZvci1rYXRlL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGNvbXBvbmVudHNcXGVsbGlwc2UtZ2FsbGVyeVxcZWxsaXBzZS1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixpQ0FBeUI7RUFBekIseUJBQXlCO0VBQXpCLGdEQUF5QixFQUFBOztBQU4zQjtJQVNJLDZCQUFxQjtZQUFyQixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2VsbGlwc2UtZ2FsbGVyeS9lbGxpcHNlLWdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2xpZGUge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmltYWdlLWhvbGRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/components/ellipse-gallery/ellipse-gallery.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/components/ellipse-gallery/ellipse-gallery.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EllipseGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipseGalleryComponent", function() { return EllipseGalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EllipseGalleryComponent = /** @class */ (function () {
    function EllipseGalleryComponent(hostElem) {
        this.hostElem = hostElem;
        this.data = [];
        this.slidesToShow = 5;
        this.slidesData = [];
        this.ellipseRatio = 0.5; // height / width
        this.lastSlideScale = 0.3; // from 0 to 1
        this.animDuration = 800; // ms
        this.shearFactor = 0.8; // from 0 to 1
        this.slideSize = 100;
        this.currentIndex = 0; // active slide index
        this.currentIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.slides = [];
        this.ellipse = 2 * Math.PI;
        this.ellipseLength = 0;
        this.ellipseLengthKoef = 0;
        this.direction = 1; // slide direction
        this.isAnimationActive = false;
        this.prevIndex = 0;
        this.galleryHeight = 0;
        this.galleryWidth = 0;
    }
    EllipseGalleryComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.data.length; i++) {
            this.slides.push({ index: i });
        }
        this.onWindowResize();
    };
    EllipseGalleryComponent.prototype.nextSlide = function (e) {
        if (e) {
            e.preventDefault();
        }
        if (!this.isAnimationActive) {
            this.prevIndex = this.currentIndex;
            if (this.currentIndex < this.slides.length - 1) {
                this.currentIndex++;
            }
            else {
                this.currentIndex = 0;
            }
            this.direction = 1;
            this.currentIndexChange.emit(this.currentIndex);
            this.setSlidesPosition(true);
        }
    };
    EllipseGalleryComponent.prototype.prevSlide = function (e) {
        if (e) {
            e.preventDefault();
        }
        if (!this.isAnimationActive) {
            this.prevIndex = this.currentIndex;
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
            else {
                this.currentIndex = this.slides.length - 1;
            }
            this.direction = -1;
            this.currentIndexChange.emit(this.currentIndex);
            this.setSlidesPosition(true);
        }
    };
    EllipseGalleryComponent.prototype.goToSlide = function (num) {
        if (num !== null && num !== this.currentIndex && !this.isAnimationActive) {
            this.prevIndex = this.currentIndex;
            num = Math.max(Math.min(num, this.slides.length - 1), 0);
            this.direction = this.getDirectionByIndex(num);
            this.currentIndex = num;
            this.currentIndexChange.emit(this.currentIndex);
            this.setSlidesPosition(true);
        }
    };
    EllipseGalleryComponent.prototype.getDirectionByIndex = function (i) {
        var arr = this.data.map(function (item, index) { return index; });
        var leftArr = arr.slice();
        var rightArr = arr.slice().reverse();
        arr = leftArr.concat(arr).concat(rightArr);
        var leftIndex = arr.indexOf(i);
        var middleIndex = arr.indexOf(this.currentIndex, leftIndex);
        var rightIndex = arr.indexOf(i, middleIndex);
        return middleIndex - leftIndex > rightIndex - middleIndex ? 1 : -1;
    };
    EllipseGalleryComponent.prototype.defineSlideVisibility = function () {
        var slidesIndexArr = this.getSlidesIndexByNum(this.currentIndex);
        var step = this.ellipse / this.slidesToShow;
        var diff = this.ellipse - step * (this.slidesToShow - 1) * this.shearFactor;
        var hiddenPosition = (this.slidesToShow * step) - diff / 2;
        for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides[i];
            var arrayIndex = slidesIndexArr.indexOf(i);
            var currPosition = step * arrayIndex * this.shearFactor;
            if (arrayIndex !== -1 && arrayIndex !== 0 && arrayIndex !== slidesIndexArr.length - 1) {
                currPosition += this.ellipseLengthKoef * (slidesIndexArr.length - 1 - arrayIndex) * this.slideSize * (1 - this.lastSlideScale) / 5;
            }
            slide.prevPosition = slide.currentPosition;
            slide.currentPosition = arrayIndex !== -1 ? currPosition : hiddenPosition;
            slide.active = arrayIndex !== -1;
            if (typeof slide.prevPosition === 'undefined') {
                slide.prevPosition = slide.currentPosition;
            }
        }
    };
    EllipseGalleryComponent.prototype.getSlidesIndexByNum = function (num) {
        var diff = this.slides.length - (num + this.slidesToShow);
        var indexArr = this.slides.slice(num, num + this.slidesToShow);
        if (diff < 0) {
            indexArr = indexArr.concat(this.slides.slice(0, Math.abs(diff)));
        }
        return indexArr.map(function (_a) {
            var index = _a.index;
            return index;
        });
    };
    EllipseGalleryComponent.prototype.getSlideParams = function (slideItem, progress) {
        if (progress === void 0) { progress = 1; }
        var scaleStep = (1 - this.lastSlideScale) / this.slidesToShow;
        var diff = slideItem.currentPosition - slideItem.prevPosition;
        if (diff * this.direction > 0) {
            diff = (-this.ellipse + Math.abs(diff)) * this.direction;
        }
        var value = Math.PI - slideItem.prevPosition - diff * progress;
        var left = this.galleryWidth / 2 * Math.cos(value) + this.galleryWidth / 2 - this.slideSize / 2;
        var top = this.galleryHeight / 2 * Math.sin(value) + this.galleryHeight / 2 - this.slideSize / 2;
        var scale = slideItem.active ? 1 - scaleStep * slideItem.currentPosition : 0;
        var scaleToAnimate = slideItem.params ? slideItem.params.scale : scale;
        return { left: left, top: top, scale: scale, scaleToAnimate: scaleToAnimate };
    };
    EllipseGalleryComponent.prototype.setSlidesPosition = function (shouldAnimate) {
        var _this = this;
        if (shouldAnimate === void 0) { shouldAnimate = false; }
        if (this.isAnimationActive) {
            return;
        }
        var waitArray = [];
        this.defineSlideVisibility();
        for (var i = 0; i < this.slides.length; i++) {
            var item = this.slides[i];
            if (shouldAnimate) {
                if (item.currentPosition !== item.prevPosition) {
                    waitArray.push(this.animate(item));
                }
            }
            else {
                item.params = this.getSlideParams(item);
            }
        }
        if (shouldAnimate) {
            this.isAnimationActive = true;
            Promise.all(waitArray).then(function () {
                _this.isAnimationActive = false;
            });
        }
    };
    EllipseGalleryComponent.prototype.updateParams = function () {
        this.galleryWidth = this.hostElem.nativeElement.clientWidth;
        this.galleryHeight = this.galleryWidth * this.ellipseRatio;
        this.ellipseLength = Math.PI * (this.galleryWidth + this.galleryHeight) / 2;
        this.ellipseLengthKoef = this.ellipse / this.ellipseLength;
    };
    EllipseGalleryComponent.prototype.animate = function (item) {
        var _this = this;
        item.params = this.getSlideParams(item);
        var prevScale = /*item.slide.getBoundingClientRect().width / item.width*/ item.params.scaleToAnimate;
        var scaleDiff = prevScale - item.params.scale;
        return this.animation({
            duration: this.animDuration,
            draw: function (progress) {
                item.params = _this.getSlideParams(item, progress);
                var _a = item.params, left = _a.left, top = _a.top;
                var scale = prevScale - scaleDiff * progress;
                item.params.scaleToAnimate = scale;
            }
        });
    };
    EllipseGalleryComponent.prototype.animation = function (options) {
        var _this = this;
        return new Promise(function (resolve) {
            var start = performance.now();
            var animate = function (time) {
                var timeFraction = (time - start) / options.duration;
                if (timeFraction > 1 || !_this.isAnimationActive) {
                    timeFraction = 1;
                    resolve();
                }
                var progress = Math.max(Math.pow(timeFraction, 2), 0);
                options.draw(progress);
                if (timeFraction < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        });
    };
    EllipseGalleryComponent.prototype.onWindowResize = function () {
        this.updateParams();
        this.setSlidesPosition();
    };
    Object.defineProperty(EllipseGalleryComponent.prototype, "height", {
        get: function () {
            return this.galleryHeight + "px";
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], EllipseGalleryComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EllipseGalleryComponent.prototype, "slidesToShow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EllipseGalleryComponent.prototype, "slidesData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EllipseGalleryComponent.prototype, "ellipseRatio", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EllipseGalleryComponent.prototype, "lastSlideScale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EllipseGalleryComponent.prototype, "animDuration", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EllipseGalleryComponent.prototype, "shearFactor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EllipseGalleryComponent.prototype, "slideSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EllipseGalleryComponent.prototype, "currentIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], EllipseGalleryComponent.prototype, "currentIndexChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], EllipseGalleryComponent.prototype, "onWindowResize", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EllipseGalleryComponent.prototype, "height", null);
    EllipseGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-ellipse-gallery',
            template: __webpack_require__(/*! ./ellipse-gallery.component.html */ "./src/app/dashboard/components/ellipse-gallery/ellipse-gallery.component.html"),
            styles: [__webpack_require__(/*! ./ellipse-gallery.component.scss */ "./src/app/dashboard/components/ellipse-gallery/ellipse-gallery.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], EllipseGalleryComponent);
    return EllipseGalleryComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");




var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _components_ellipse_gallery_ellipse_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ellipse-gallery/ellipse-gallery.component */ "./src/app/dashboard/components/ellipse-gallery/ellipse-gallery.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_description_gallery_description_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/description-gallery/description-gallery.component */ "./src/app/dashboard/components/description-gallery/description-gallery.component.ts");







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"]
            ],
            declarations: [
                _dashboard_page__WEBPACK_IMPORTED_MODULE_2__["DashboardPage"],
                _components_ellipse_gallery_ellipse_gallery_component__WEBPACK_IMPORTED_MODULE_4__["EllipseGalleryComponent"],
                _components_description_gallery_description_gallery_component__WEBPACK_IMPORTED_MODULE_6__["DescriptionGalleryComponent"]
            ],
            exports: [
                _dashboard_page__WEBPACK_IMPORTED_MODULE_2__["DashboardPage"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.html":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"mb-5\">\r\n  <div class=\"container d-flex justify-content-end\">\r\n    <button (click)=\"logOut()\" class=\"btn btn-primary\">Log Out</button>\r\n  </div>\r\n</header>\r\n<div class=\"container d-flex\">\r\n  <kt-description-gallery\r\n    [data]=\"ellipseGalleryData\"\r\n    [currentIndex]=\"currentIndex\"\r\n    (switchSlide)=\"goToSlide($event)\"\r\n  ></kt-description-gallery>\r\n\r\n  <div class=\"ellipse-gallery-holder\">\r\n    <kt-ellipse-gallery\r\n      [(currentIndex)]=\"currentIndex\"\r\n      [data]=\"ellipseGalleryData\"\r\n    ></kt-ellipse-gallery>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  min-width: 1000px;\n  padding-bottom: 4rem; }\n\nheader {\n  display: block;\n  background: #363f48;\n  padding: 1rem 0; }\n\n.container {\n  max-width: 960px;\n  width: 960px; }\n\n.ellipse-gallery-holder,\nkt-description-gallery {\n  width: 50%; }\n\nkt-description-gallery {\n  padding-right: 3rem; }\n\n.ellipse-gallery-holder {\n  padding: 0 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxhem9sb3RhcmV2XFxLYXRlXFxoZWxwLWZvci1rYXRlL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBR2Q7O0VBRUUsVUFBVSxFQUFBOztBQUdaO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLXdpZHRoOiAxMDAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogIzM2M2Y0ODtcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogOTYwcHg7XHJcbiAgd2lkdGg6IDk2MHB4O1xyXG59XHJcblxyXG4uZWxsaXBzZS1nYWxsZXJ5LWhvbGRlcixcclxua3QtZGVzY3JpcHRpb24tZ2FsbGVyeSB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxua3QtZGVzY3JpcHRpb24tZ2FsbGVyeSB7XHJcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcclxufVxyXG5cclxuLmVsbGlwc2UtZ2FsbGVyeS1ob2xkZXIge1xyXG4gIHBhZGRpbmc6IDAgNTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_ellipse_gallery_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/ellipse-gallery-data */ "./src/app/dashboard/data/ellipse-gallery-data.ts");
/* harmony import */ var _components_ellipse_gallery_ellipse_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ellipse-gallery/ellipse-gallery.component */ "./src/app/dashboard/components/ellipse-gallery/ellipse-gallery.component.ts");
/* harmony import */ var _login_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/services/login.service */ "./src/app/login/services/login.service.ts");





var DashboardPage = /** @class */ (function () {
    function DashboardPage(_loginService) {
        this._loginService = _loginService;
        this.ellipseGalleryData = _data_ellipse_gallery_data__WEBPACK_IMPORTED_MODULE_2__["ellipseGalleryData"];
        this.currentIndex = 0;
    }
    DashboardPage.prototype.goToSlide = function (index) {
        this.ellipseGallery.goToSlide(index);
    };
    DashboardPage.prototype.logOut = function () {
        this._loginService.logOut();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_components_ellipse_gallery_ellipse_gallery_component__WEBPACK_IMPORTED_MODULE_3__["EllipseGalleryComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _components_ellipse_gallery_ellipse_gallery_component__WEBPACK_IMPORTED_MODULE_3__["EllipseGalleryComponent"])
    ], DashboardPage.prototype, "ellipseGallery", void 0);
    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-dashboard-page',
            template: __webpack_require__(/*! ./dashboard.page.html */ "./src/app/dashboard/dashboard.page.html"),
            styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/dashboard/dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ }),

/***/ "./src/app/dashboard/data/ellipse-gallery-data.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/data/ellipse-gallery-data.ts ***!
  \********************************************************/
/*! exports provided: ellipseGalleryData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ellipseGalleryData", function() { return ellipseGalleryData; });
var ellipseGalleryData = [
    {
        img: "http://www.mau.su/porodi/images/Britanskaya_golubaya.jpg",
        title: 'British cat',
        content: [
            "The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively chunky body, dense coat and broad face. The most familiar color variant is the \"British Blue\", a solid blue-gray with copper eyes, medium tail, but the breed has also been developed in a wide range of other colours and patterns, including tabby and colorpoint.",
            "It is one of the most ancient cat breeds known, probably originating from European domestic cats imported into Britain by the invading Romans in the first century AD. In modern times, it remains the most popular pedigreed breed in its native country, as registered by the UK's Governing Council of the Cat Fancy (GCCF).",
            "The breed's good-natured appearance and relatively calm temperament make it a frequent media star, notably as the inspiration for John Tenniel's famous illustration of the Cheshire Cat from Alice in Wonderland. The Cat Fanciers' Association profile reads: \"When gracelessness is observed, the British Shorthair is duly embarrassed, quickly recovering with a 'Cheshire cat smile'\u201D"
        ]
    },
    {
        img: "http://udivitelno.com/images/9/sibirskie-koshki/7-%D0%97%D0%B0%D0%B1%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9%20%D0%BA%D0%BE%D1%82%D0%B5%D0%BD%D0%BE%D0%BA%20-%20%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%20%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%D0%BE%D0%B9%20%D0%BF%D0%BE%D1%80%D0%BE%D0%B4%D1%8B.jpg",
        title: 'Siberian cat',
        content: [
            "The Siberian is a landrace variety of domestic cat, present in Russia for centuries, and more recently developed as a formal breed, with standards promulgated since the late 1980s.",
            "They vary from medium to medium-large in size. A longer name of the formal breed is Siberian Forest Cat, but it is usually referred to as the Siberian or the Siberian cat. Another name for the formal breed is the Moscow Semi-Longhair. The cat is an ancient breed that is now believed to be ancestral to all modern long-haired cats. The cat has similarities with the Norwegian forest cat, to which it is likely closely related. It is a natural breed of Siberia and the national cat of Russia.[citation needed] While it began as a landrace, it is selectively bred and pedigreed today in at least seven major cat fancier and breeder organisations. The colorpoint variant of the breed is called the Neva Masquerade by some registries, including F\u00E9d\u00E9ration Internationale F\u00E9line (FIF\u00E9)."
        ]
    },
    {
        img: "https://aroundpet.ru/wp-content/uploads/aziatskaya-leopardovaya-koshka.jpg",
        title: 'Bengal cat',
        content: [
            "The Bengal cat is a domesticated cat breed created from hybrids of domestic cats and the Asian leopard cat (Prionailurus bengalensis) \u2013 the breed name comes from the taxonomic name. Back-crossing to domestic cats is then done with the goal of creating a healthy, and docile cat with wild-looking, high-contrast coat.",
            "Bengals have a wild appearance and may show spots, rosettes, arrowhead markings, or marbling."
        ]
    },
    {
        img: "http://pitomecdoma.ru/cat/pers/pers.jpg",
        title: 'Persian cat',
        content: [
            "The Persian cat (Persian: \u06AF\u0631\u0628\u0647 \u0627\u06CC\u0631\u0627\u0646\u06CC\u200E, translit. Gorbe Ir\u00E2ni) is a long-haired breed of cat characterized by its round face and short muzzle. It is also known as the \"Persian Longhair\" in the English-speaking countries. In the Middle East region they are widely known as \"Iranian cat\" and in Iran they are known as \"Shirazi cat\". The first documented ancestors of the Persian were imported into Italy from Iran (historically known as Persia) around 1620. The exact history of the Persian cat does seem to be a bit of a mystery but many of these long-haired cats were seen in hieroglyphics. The story has it that these long-haired cats were then imported into Europe as their popularity grew and breeding took place in Italy and France.",
            "The Persian cat was first presented at the world's first organised cat show in 1871 in London, England, before making its way to the United States of America in the early 1900s. The Persian cat breeding standards have always called for a cat with a short face, but it's important to note that the Persian cat originally had a much longer nose than the flat-faced Persians of today. Hereditary polycystic kidney disease is prevalent in the breed, affecting almost half the population in some countries.",
            "In 2015 it was ranked as the 2nd most popular breed in the United States according to the Cat Fanciers' Association. The first is the Exotic breed."
        ]
    },
    {
        img: "http://domikdomovenka.ru/files/products/ru1-min.600x600.jpeg?4793c2fa4cc975cc268e45d983601bc3",
        title: 'Russian Blue',
        content: [
            "The Russian Blue is a cat breed that comes in colors varying from a light shimmering silver to a darker, slate grey. They develop close bonds with their owners and are sought out as pets due to their personalities, beauty and coat. It is their short, dense coat which has been the hallmark of the Russian breed for more than a century. The dense coat stands out from the body and one can draw patterns in the coat that will stay until one smoothes them out again. They are also considered to be hypoallergenic."
        ]
    },
    {
        img: "https://kot-pes.com/wp-content/uploads/2015/07/Egyptian_mau_05.jpg",
        title: 'Egyptian Mau',
        content: [
            "Egyptian Maus are a small- to medium-sized short-haired cat breed. Along with the Bahraini Dilmun cat, they are one of the few naturally spotted breeds of domesticated cat. The spots of the Mau occur on only the tips of the hairs of its coat. It is considered to be a rare breed.",
            "The breed conformation is described as \"a balance between the compactness of a Burmese and the slim elegance of a Siamese. Its medium-length body is muscular, with the hind legs longer than the front, giving the Mau the appearance of standing on tiptoes when upright.\" The Egyptian Mau is the fastest of the domestic cats, with its longer hind legs, and unique flap of skin extending from the flank to the back knee, providing for greater agility and length of stride. Maus have been clocked running more than 48 km/h (30 mph)."
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map