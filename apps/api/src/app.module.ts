import { Module } from '@nestjs/common';
import { CaseModule } from './modules/case/case.module';

@Module({
  imports: [CaseModule],
})
export class AppModule {}