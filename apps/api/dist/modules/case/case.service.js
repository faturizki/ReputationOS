"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseService = void 0;
const common_1 = require("@nestjs/common");
const database_1 = require("@reputation-os/database");
let CaseService = class CaseService {
    async create(data) {
        return database_1.default.case.create({ data });
    }
    async findAll() {
        return database_1.default.case.findMany();
    }
    async findOne(id) {
        return database_1.default.case.findUnique({ where: { id } });
    }
};
exports.CaseService = CaseService;
exports.CaseService = CaseService = __decorate([
    (0, common_1.Injectable)()
], CaseService);
//# sourceMappingURL=case.service.js.map