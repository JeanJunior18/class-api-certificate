import { Module } from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { CertificateController } from './certificate.controller';
import { CertificateRepositoryModule } from 'src/infrastructure/repository/certificate-repository.module';

@Module({
  imports: [CertificateRepositoryModule],
  controllers: [CertificateController],
  providers: [CertificateService],
})
export class CertificateModule {}
