"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var book_search_service_1 = require('./book-search.service');
var BookSearchComponent = (function () {
    function BookSearchComponent(bookSearchService, router) {
        this.bookSearchService = bookSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    BookSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    BookSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.books = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return term
            ? _this.bookSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    BookSearchComponent.prototype.gotoDetail = function (book) {
        var link = ['/detail', book.id];
        this.router.navigate(link);
    };
    BookSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'book-search',
            templateUrl: 'book-search.component.html',
            styleUrls: ['book-search.component.css'],
            providers: [book_search_service_1.BookSearchService]
        }), 
        __metadata('design:paramtypes', [book_search_service_1.BookSearchService, router_1.Router])
    ], BookSearchComponent);
    return BookSearchComponent;
}());
exports.BookSearchComponent = BookSearchComponent;
//# sourceMappingURL=book-search.component.js.map