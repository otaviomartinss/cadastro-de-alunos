import { Module } from '@nestjs/common';
import { UniversidadeModule } from '../modules/universidade/universidade.module';

@Module({
  imports: [UniversidadeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
