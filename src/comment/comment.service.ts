import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class CommentService {
    constructor(private prisma: PrismaService) {}
  create(  createCommentDto: CreateCommentDto,userId,) {
    return this.prisma.comment.create({
      data: {
        ...createCommentDto,
        userId: userId
      }
    });  
  }

  findAll(id: number) {
    return this.prisma.comment.findMany({ where: { userId: id } }); 
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
