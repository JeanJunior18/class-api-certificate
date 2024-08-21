import { Module } from '@nestjs/common';
import { CertificateRepositoryAdapter } from 'src/infrastructure/repository/certificate-repository.adapter';
import { CertificateRepositoryPort } from 'src/infrastructure/repository/certificate-repository.port';

@Module({
  providers: [
    {
      provide: CertificateRepositoryPort,
      useClass: CertificateRepositoryAdapter,
    },
  ],
  exports: [CertificateRepositoryPort],
})
export class CertificateRepositoryModule {}
