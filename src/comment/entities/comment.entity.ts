import { ApiProperty } from "@nestjs/swagger";
import { Comment } from "@prisma/client";
import { ArticleEntity } from "src/articles/entities/article.entity";
import { UserEntity } from "src/users/entities/user.entity";

export class CommentEntity implements Comment {
  @ApiProperty()
  id: number;

  @ApiProperty()
  comment: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  articleId: number;

  @ApiProperty({ required: false, type:ArticleEntity })
  article: ArticleEntity;

  @ApiProperty({required: false, type: UserEntity })
  user?: UserEntity;

  @ApiProperty({ required: false, nullable: true })
  userId: number;

  constructor({ article, ...data }: Partial<CommentEntity>) {
    Object.assign(this, data);

    if (article) {
      this.article = new ArticleEntity(article);
    }
  }
}
