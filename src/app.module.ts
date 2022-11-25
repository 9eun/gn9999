import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MemberModule } from './member/member.module';

@Module({
    imports: [
      MemberModule
    ]
})
export class AppModule {}
