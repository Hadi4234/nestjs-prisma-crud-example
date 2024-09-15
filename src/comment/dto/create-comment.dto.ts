import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MinLength, IsNumber } from "class-validator";

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  comment: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  articleId: number;
}
