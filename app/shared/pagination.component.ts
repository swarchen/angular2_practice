import {Component, Input, Output, OnChanges, EventEmitter} from 'angular2/core';
@Component({
    selector: 'pagination',
    templateUrl: 'app/shared/pagination.template.html'
})

export class PaginationComponent implements OnChanges{
    @Input() items = []; 
    @Input('page-size') pageSize= 10;
    @Output('page-changed') pageChanged = new EventEmitter(); 
    pages=[];
    currentPage;
    constructor(){
    }

    ngOnChanges(){
        this.currentPage = 1;

        this.pages=[];
        var pagesCount = this.items.length / this.pageSize;
        for (var i = 0; i < pagesCount; i ++){
            this.pages.push(i+1);
        }
    }

    changePage(page){
        this.currentPage = page;
        this.pageChanged.emit(page);
    }

    next(){
        if(this.currentPage == this.pages.length)
            return ;
        this.currentPage ++;
        this.pageChanged.emit(this.currentPage);
    }

    previous(){
        if(this.currentPage == 1)
            return ;
        this.currentPage --;
        this.pageChanged.emit(this.currentPage);
    }

}