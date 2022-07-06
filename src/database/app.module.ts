import { Module } from '@nestjs/common';
import { UniversidadeModule } from '../modules/universidade.module';

@Module({
  imports: [UniversidadeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
