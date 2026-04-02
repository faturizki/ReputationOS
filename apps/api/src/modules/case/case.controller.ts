import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CaseService } from './case.service';
import { Case } from '@reputation-os/types';

@Controller('cases')
export class CaseController {
  constructor(private readonly caseService: CaseService) {}

  @Post()
  async create(@Body() createCaseDto: Omit<Case, 'id' | 'created_at'>) {
    return this.caseService.create(createCaseDto);
  }

  @Get()
  async findAll() {
    return this.caseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.caseService.findOne(id);
  }
}