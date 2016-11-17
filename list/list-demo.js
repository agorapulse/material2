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
var ListDemo = (function () {
    function ListDemo() {
        this.items = [
            'Pepper',
            'Salt',
            'Paprika'
        ];
        this.contacts = [
            { name: 'Nancy', headline: 'Software engineer' },
            { name: 'Mary', headline: 'TPM' },
            { name: 'Bobby', headline: 'UX designer' }
        ];
        this.messages = [
            {
                from: 'Nancy',
                subject: 'Brunch?',
                message: 'Did you want to go on Sunday? I was thinking that might work.',
                image: 'https://angular.io/resources/images/bios/julie-ralph.jpg'
            },
            {
                from: 'Mary',
                subject: 'Summer BBQ',
                message: 'Wish I could come, but I have some prior obligations.',
                image: 'https://angular.io/resources/images/bios/juleskremer.jpg'
            },
            {
                from: 'Bobby',
                subject: 'Oui oui',
                message: 'Do you have Paris reservations for the 15th? I just booked!',
                image: 'https://angular.io/resources/images/bios/jelbourn.jpg'
            }
        ];
        this.links = [
            { name: 'Inbox' },
            { name: 'Outbox' },
            { name: 'Spam' },
            { name: 'Trash' }
        ];
        this.thirdLine = false;
        this.infoClicked = false;
    }
    ListDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'list-demo',
            templateUrl: 'list-demo.html',
            styleUrls: ['list-demo.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], ListDemo);
    return ListDemo;
}());
exports.ListDemo = ListDemo;

//# sourceMappingURL=list-demo.js.map
