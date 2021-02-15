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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
const typeorm_1 = require("typeorm");
const ListItem_1 = require("./ListItem");
const Need_1 = require("./Need");
let Question = class Question {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Question.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Question.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Question.prototype, "questionText", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Question.prototype, "questionDataType", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Question.prototype, "required", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Question.prototype, "displayOrder", void 0);
__decorate([
    typeorm_1.OneToMany(() => ListItem_1.ListItem, listItem => listItem.question, { cascade: true }),
    __metadata("design:type", Array)
], Question.prototype, "listItems", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Need_1.Need, need => need.questions),
    __metadata("design:type", Need_1.Need)
], Question.prototype, "need", void 0);
Question = __decorate([
    typeorm_1.Entity("questions")
], Question);
exports.Question = Question;
