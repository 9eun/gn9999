import { Injectable } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export class ServiceCore  {
    protected readonly prisma: PrismaClient = prisma;
}
