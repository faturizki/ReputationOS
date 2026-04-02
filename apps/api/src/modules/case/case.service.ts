import { Injectable } from '@nestjs/common';
import prisma from '@reputation-os/database';
import { Case } from '@reputation-os/types';

@Injectable()
export class CaseService {
  async create(data: Omit<Case, 'id' | 'created_at'>) {
    return prisma.case.create({ data });
  }

  async findAll() {
    return prisma.case.findMany();
  }

  async findOne(id: string) {
    return prisma.case.findUnique({ where: { id } });
  }
}