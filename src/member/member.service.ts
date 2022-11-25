import { Injectable } from '@nestjs/common';
import { Prisma } from '.prisma/client';
import { ServiceCore } from '../core/service.core';

@Injectable()
export class MemberService extends ServiceCore{

  //추가
  async addMember(
    name : string,
    company : string,
    memo : string,
  ){
    
    

    const result = await this.prisma.member.create({
      data : {
        name : name,
        company : company,
        memo : memo,
      },
    });

    return result;
  }

  //삭제
  async deleteMember(
    idx : number,
  ){
    const result = await this.prisma.member.delete({
      where : {
        idx : idx,
      },
    });
    return result;
  }


  async updateMember(
    idx: number,
    name : string,
    company : string,
    memo : string,
  ){
    
    const reulst = await this.prisma.member.update({
      where : {
        idx : idx,
      },
      data: {
        name :name,
        company :company,
        memo : memo,
      }
    })
  }
}
