import { Body, Controller, Post, Req } from '@nestjs/common';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
  constructor(private readonly MemberService: MemberService) {}

  @Post('addMember')
  async addMember(@Body() body, @Req() req) {

    const result = await this.MemberService.addMember(
      body.name,
      body.company,
      body.memo
    );

    return result;
  }

  @Post('deleteMember')
  async deleteMember(@Body() body, @Req() req) {

    const result = await this.MemberService.deleteMember(
      Number(body.idx),
    );

    return result;
  }

  @Post('updateMember')
  async updateMember(@Body() body){

    const result = await this.MemberService.updateMember(
      Number(body.idx),
      body.name,
      body.company,
      body.memo,
    );

    return result;
  }
}
