import { Module } from '@nestjs/common';
import { UniversidadeService } from './universidade.service';
import { UniversidadeController } from './universidade.controller';
import { PrismaService } from 'src/database/PrismaService';


@Module({
  controllers: [UniversidadeController],
  providers: [UniversidadeService, PrismaService]
})
export class UniversidadeModule {}
