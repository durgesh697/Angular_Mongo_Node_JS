(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }, {
        path: 'product/:id',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]
    },
    {
        path: 'category/:cat',
        component: _category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"]
    },
    {
        path: 'cart',
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n      <app-navbar></app-navbar>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-2 col-sm-12 col-xs-12\">\n      <app-sidebar></app-sidebar>\n    </div>\n    <div id=\"content\" class=\"contentMargin col-md-10 col-sm-12 col-xs-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n\n  <!-- <hr> -->\n  <footer class=\"page-footer font-small blue pt-4 footer_custom\">\n\n    <!-- Footer Links -->\n    <div class=\"container-fluid text-center text-md-left bottom_footer\">\n\n    </div>\n    <div>\n      <div class=\"bottom_logo_div\">\n        <a href=\"http://www.geminisolutions.in\">\n          <img class=\"bottom_logo\" src=\"assets/images/l2.png\" alt=\"bottom_logo\">\n        </a>\n      </div>\n    </div>\n\n    <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\n      <a href=\"http://www.geminisolutions.in\"> Gemini Solutions Pvt. Ltd.</a>\n    </div>\n  </footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contentMargin {\n  margin-top: 90px; }\n\n.footer_custom {\n  margin-top: 100px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'E-store';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _cat_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cat-filter.pipe */ "./src/app/cat-filter.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_9__["CategoryComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"],
                _cat_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["CatFilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart-counter.service.ts":
/*!*****************************************!*\
  !*** ./src/app/cart-counter.service.ts ***!
  \*****************************************/
/*! exports provided: CartCounterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartCounterService", function() { return CartCounterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartCounterService = /** @class */ (function () {
    function CartCounterService(http) {
        this.http = http;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.currentMessage = this.messageSource.asObservable();
        // this.a = this.http.get('/api/cart');
        // this.b= Object.values(this.a).length;
    }
    CartCounterService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    CartCounterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CartCounterService);
    return CartCounterService;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"heading\">Cart</h2>\n<div class=\"row container-fluid cartBlock\">\n  <div class=\"col-md-10 col-sm-12 col-xs-12\">\n    <div *ngFor=\"let product of products\" class=\"col-md-12 product shadow p-3 mb-5 bg-white rounded\">\n      <div class=\"row\">\n        <div class=\"col-md-2 col-sm-2 col-xs-12\">\n          <img class=\"cart_prod_image centerProduct\" src=\"{{product.image_url }}\" alt=\"prod_image\">\n        </div>\n        <div class=\"col-md-10 col-sm-10 col-xs-12 cartDivMargin\">\n          <div class=\"row\">\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"\">{{ product.name }}</div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"cart_prod_price col-md-12 col-sm-12 col-xs-12\">\n              {{ product.price | currency: \"INR\" }}\n            </div>\n          </div>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n              <span class=\"removeButton\" (click)=\"remove(product._id)\">Remove from cart\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr>\n  </div>\n</div>\n<div class=\"col-md-2 col-sm-12 col-xs-12\">\n  <div class=\"total_div\">\n    <span class=\"panel panel-default\">\n      <div class=\"row panel-body\">\n        <div class=\"col-md-12\">\n          <strong class=\"cartSummaryHeading\">Cart summay</strong>\n        </div>\n        <div class=\"col-md-12\">\n          <span class=\"cartSummaryValue\">{{cartTotal | currency: \"INR\"}}</span>\n        </div>\n      </div>\n    </span>\n  </div>\n</div>\n\n<!-- <div class=\"totalPrice\">\n  <p>\n    <h4>Total amount: {{cartTotal | currency: \"Rs. \"}}</h4>\n  </p>\n</div> -->"

/***/ }),

/***/ "./src/app/cart/cart.component.scss":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imageThumb {\n  height: 70px;\n  width: 40px;\n  position: relative;\n  margin: auto; }\n\n.cart_prod_price {\n  font-size: 20px;\n  font-weight: 700; }\n\n.cartBlock {\n  min-height: 480px; }\n\n.centerProduct {\n  margin: 0 auto;\n  display: table; }\n\n.cartDivMargin {\n  margin-top: 20px; }\n\n.cartNamePadding {\n  padding-left: 40px;\n  padding-right: 40px; }\n\n.removeButton {\n  color: red; }\n\n.cartProductQuantity {\n  margin-left: 20px;\n  margin-right: 20px;\n  border: 1px solid #bbb7b7;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  display: table;\n  margin: auto; }\n\n.cart_quantity_text {\n  font-size: 12px;\n  border: 1px solid black;\n  padding: 5px;\n  border-radius: 50%; }\n\n.cartQuantityMargin {\n  margin-top: 20px; }\n\n.cartSummaryHeading {\n  font-size: 20px; }\n\n.cartSummaryValue {\n  font-size: 16px; }\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _cart_counter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart-counter.service */ "./src/app/cart-counter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Observable } from 'rxjs';
var CartComponent = /** @class */ (function () {
    function CartComponent(data, cart) {
        this.data = data;
        this.cart = cart;
        // cartSet: any;
        // cart: any;
        this.cartTotal = 0;
    }
    // productQuant(id):any {
    // }
    CartComponent.prototype.getCartData = function () {
        var _this = this;
        this.data.getCartData().subscribe(function (data) {
            _this.products = data;
            var sum = 0;
            console.log(_this.products[0].quantity);
            _this.products.forEach(function (product) {
                sum += product.price;
            });
            _this.cartTotal = sum;
        });
    };
    CartComponent.prototype.remove = function (id) {
        var _this = this;
        this.data.removeFromCart(id).subscribe(function (res) {
            console.log(res);
        });
        this.getCartData();
        this.cart.currentMessage.subscribe(function (value) { return _this.cartQuant = value; });
        this.cart.changeMessage(this.cartQuant -= 1);
    };
    CartComponent.prototype.ngOnInit = function () {
        this.getCartData();
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/cart/cart.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _cart_counter_service__WEBPACK_IMPORTED_MODULE_2__["CartCounterService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/cat-filter.pipe.ts":
/*!************************************!*\
  !*** ./src/app/cat-filter.pipe.ts ***!
  \************************************/
/*! exports provided: CatFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatFilterPipe", function() { return CatFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CatFilterPipe = /** @class */ (function () {
    function CatFilterPipe() {
    }
    CatFilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return [];
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.toLowerCase().includes(searchText);
        });
    };
    CatFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'catFilter'
        })
    ], CatFilterPipe);
    return CatFilterPipe;
}());



/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 col-sm-12 col-xs-12\">\n    <h2>{{ category }}</h2></div>\n</div>\n<!-- <input type=\"text\" [ngModel]=\"searchText\" placeholder=\"search\"> -->\n<div class=\"row container inner_div_margin\">\n  <ng-container *ngFor=\"let p of products\">\n    <div class=\"col-lg-3 col-md-6 col-sm-12\">\n      <a [routerLink]=\"['/product', p._id]\">\n        <div class=\"prod\">\n          <div class=\"prod_image\">\n            <img src=\"{{ p.image_url }}\" alt=\"{{ p.name }}\">\n          </div>\n          <div class=\"prod_name\">\n            {{ p.name }}\n          </div>\n          <div class=\"prod_price\">\n            {{ p.price | currency: \"Rs. \" }}\n          </div>\n        </div>\n      </a>\n    </div>\n  </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/category/category.component.scss":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryComponent = /** @class */ (function () {
    // i: any = 0;
    function CategoryComponent(data, route) {
        this.data = data;
        this.route = route;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.products = [];
        this.route.params.subscribe(function (params) {
            _this.category = params['cat'];
            console.log(_this.category);
            _this.data.getProductByCategory(_this.category).subscribe(function (data) {
                _this.products = data;
            });
        });
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/category/category.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"div_margin shadow p-3 mb-5 bg-white rounded\" *ngFor=\"let cate of categories\">\n  <div class=\"product\">\n    <h2 class=\"category_title\"> {{ cate }}\n      <a [routerLink]=\"['category', cate]\">\n        <button class=\"btn btn-primary view_all_btn\" type=\"button\" name=\"button\">View All</button>\n      </a>\n    </h2>\n    <div class=\"row container inner_div_margin\">\n      <ng-container *ngFor=\"let p of products\">\n        <div class=\"col-lg-3 col-md-6 col-sm-12\" *ngIf=\"p.category === cate\">\n          <a [routerLink]=\"['product', p._id]\">\n            <div class=\"prod row\">\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                <img class=\"prod_image\" src=\"{{ p.image_url }}\" alt=\"{{ p.name }}\">\n              </div>\n              <div class=\"prod_name col-md-12 col-sm-12 col-xs-12\">\n                {{ p.name }}\n              </div>\n              <div class=\"prod_price col-md-12 col-sm-12 col-xs-12\">\n                {{ p.price | currency: \"Rs. \" }}\n              </div>\n            </div>\n          </a>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(data) {
        this.data = data;
        this.i = 0;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getData().subscribe(function (data) {
            _this.products = data;
        });
        this.data.getCategories().subscribe(function (data) {
            _this.categories = data;
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Pipe, PipeTransform} from '@angular/core';
// import { Observable } from 'rxjs';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getData = function () {
        return this.http.get("/api");
    };
    DataService.prototype.getCartData = function () {
        return this.http.get("/api/cart");
    };
    DataService.prototype.addToCart = function (product) {
        console.log(product);
        // const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('/api/cart', {
            _id: product._id,
            category: product.category,
            image_url: product.image_url,
            name: product.name,
            price: product.price
        });
    };
    DataService.prototype.removeFromCart = function (id) {
        return this.http.delete('/api/cart/' + id);
    };
    DataService.prototype.getCategories = function () {
        return this.http.get('/api/categories');
    };
    DataService.prototype.getProductByCategory = function (cat) {
        return this.http.get('/api/categories/' + cat);
    };
    DataService.prototype.getCartCount = function () {
        return this.http.get('/api/cart/count');
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm p-3 mb-5 bg-white rounded container-fluid\" id=\"na\">\n  <div class=\"container-fluid row\">\n    <div class=\"col-md-11 col-sm-12 col-xs-12\">\n      <!-- <div class=\"centerAlign\"> -->\n        <a class=\"navbar-brand\" href=\"#!/\">\n          <img src=\"http://geminisolutions.in/wp-content/uploads/2013/10/GeminiLogo-NoTagline-1-1.png\" style=\"height:70%; width:70%;\">\n        </a>\n      <!-- </div> -->\n    </div>\n    <div class=\"col-md-1 col-sm-12 col-xs-12\">\n      <a routerLink=\"/cart\">\n        <span class=\"\">\n          <i class=\"fas fa-shopping-cart shopping_cart\"> Cart<span class=\"lblCartCount\">{{ cartCounter }}</span></i>\n\n        </span>\n      </a>\n    </div>\n  </div>\n</nav>\n<!-- <app-sidebar></app-sidebar> -->"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lblCartCount {\n  font-size: 12px !important;\n  background: #ff0000 !important;\n  color: #fff !important;\n  padding: 0 5px !important;\n  vertical-align: top !important;\n  position: fixed;\n  border-radius: 30%; }\n\n.centerAlign {\n  display: table; }\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_counter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart-counter.service */ "./src/app/cart-counter.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { DataService } from '../data.service';


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(cart, data) {
        this.cart = cart;
        this.data = data;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // this.cartCounter = localStorage.getItem('data').length;
        // this.data.currentValue.subscribe(value => this.cartCounter = value)
        // this.data.getValue().subscribe(
        //   data => {
        //   this.cartCounter = data;
        // }
        // );
        var _this = this;
        this.data.getCartData().subscribe(function (data) {
            var a = Object.values(data).length;
            _this.cart.changeMessage(a);
        });
        this.cart.currentMessage.subscribe(function (message) { return _this.cartCounter = message; });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_cart_counter_service__WEBPACK_IMPORTED_MODULE_1__["CartCounterService"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- <div class=\"col-md-1 thumbBar\">\n    <div class=\"row thumbMargin\">\n      <div class=\"col-md-12\">\n        <img src=\"{{product.image_url}}\" class=\"imageThumb\" (mouseenter)=\"changeI(0)\">\n      </div>\n    </div>\n    <!-- <div class=\"row thumbMargin\">\n      <div class=\"col-md-12\">\n        <img src=\"{{product.image_url[1]}}\" class=\"imageThumb\" (mouseenter)=\"changeI(1)\">\n      </div>\n    </div>\n  </div>-->\n  <!-- <div class=\"col-md-12\"> -->\n  <div class=\"row\">\n    <div class=\"col-md-4 col-sm-12 col-xs-12 center\">\n      <div class=\"centerDiv\">\n        <img class=\"prod_page_image\" src=\"{{product.image_url}}\" alt=\"prod_image\">\n      </div>\n    </div>\n    <div class=\"col-md-8 col-sm-12 col-xs-12 product_description\">\n      <div class=\"row\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12 product_name\">\n          <strong>\n            {{ product.name }}\n          </strong>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n          <span><strong>Description</strong></span>\n        </div>\n      </div>\n      <div class=\"row\">\n        <ul>\n          <div class=\" col-md-12 col-sm-12 col-xs-12 product_description\" *ngFor=\"let des of product.description\">\n            <li class=\"desText\">{{des}}</li>\n          </div>\n        </ul>\n      </div>\n      <div class=\"row priceDiv\">\n        <div class=\" col-md-12 col-sm-12 col-xs-12 product_price\">\n          <span class=\"prouductPriceText\">{{ product.price | currency: 'INR'}}</span>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6 col-sm-12 col-xs-12 buttonDiv\">\n          <button class=\"btn btn-primary add_to_cart_button\" type=\"button\" name=\"button\" (click)=\"add_to_cart()\">Add to cart</button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n          <span id=\"add_to_cart_span\" class=\"errSpan\">{{ errMsg }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- </div> -->\n</div>"

/***/ }),

/***/ "./src/app/product/product.component.scss":
/*!************************************************!*\
  !*** ./src/app/product/product.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".errSpan {\n  color: red;\n  font-size: 14px; }\n\n.imageThumb {\n  height: 70px;\n  width: 40px;\n  position: relative;\n  margin: auto; }\n\n.thumbMargin {\n  margin-top: 10px; }\n\n.thumbBar {\n  margin-top: 20px; }\n\n.prod_page_image {\n  height: 70%;\n  width: 70%;\n  display: table; }\n\n.priceDiv {\n  margin-top: 40px; }\n\n.desText {\n  font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_counter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart-counter.service */ "./src/app/cart-counter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = /** @class */ (function () {
    function ProductComponent(data, route, cart) {
        this.data = data;
        this.route = route;
        this.cart = cart;
        this.errMsg = " ";
        this.i = 0;
    }
    ProductComponent.prototype.add_to_cart = function (product) {
        var _this = this;
        if (this.check_in_cart(this.product)) {
            ;
        }
        else {
            this.data.addToCart(this.product).subscribe(function (res) {
            });
            this.errMsg = 'Product added to cart';
            this.cart.currentMessage.subscribe(function (message) { return _this.cartCounter = message; });
            this.cart.changeMessage(this.cartCounter += 1);
        }
    };
    ProductComponent.prototype.check_in_cart = function (product) {
        var _this = this;
        this.data.getCartData().subscribe(function (data) {
            data.forEach(function (pro) {
                if (pro._id == product._id) {
                    _this.errMsg = 'This product is already in your cart.';
                }
                else {
                    // this.errMsg = '';
                }
            });
        });
    };
    ProductComponent.prototype.changeI = function (i) {
        this.i = i;
    };
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getData().subscribe(function (data) {
            _this.products = data;
            _this.route.params.subscribe(function (params) {
                _this.productId = params['id'];
                console.log(_this.productId);
                for (var i = 0; i < _this.products.length; i++) {
                    if (_this.productId == _this.products[i]._id) {
                        _this.product = _this.products[i];
                        if (_this.check_in_cart(_this.product)) {
                            _this.errMsg = "This product is already in your cart.";
                        }
                    }
                }
            });
        });
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _cart_counter_service__WEBPACK_IMPORTED_MODULE_3__["CartCounterService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav\">\n  <a *ngFor=\"let category of categories\" [routerLink]=\"['category', category]\">\n    <span class=\"sidebar-category-text\">{{ category }}</span>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\n  margin-top: 90px;\n  margin-right: 20px;\n  width: 160px;\n  /* Set the width of the sidebar */\n  z-index: 1;\n  /* Stay on top */\n  top: 0;\n  /* Stay at the top */\n  left: 0;\n  background-color: #ffffff;\n  /* Black */\n  overflow-x: hidden;\n  /* Disable horizontal scroll */\n  padding-top: 20px; }\n\n/* The navigation menu links */\n\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block; }\n\n/* When you mouse over the navigation links, change their color */\n\n.sidenav a:hover {\n  color: #110101; }\n\n.sidebar-category-text {\n  font-size: 20px; }\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(data) {
        this.data = data;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getCategories().subscribe(function (data) {
            _this.categories = data;
        });
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/az.ahmad/Documents/project/E-store/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map