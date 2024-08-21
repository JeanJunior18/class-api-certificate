import { ApiProperty } from '@nestjs/swagger';

export class CreateCertificateDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  course: string;
  @ApiProperty()
  date: Date;
}
