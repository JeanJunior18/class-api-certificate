import { Injectable } from '@nestjs/common';
import { Certificate } from 'src/certificate/entities/certificate.entity';

@Injectable()
export abstract class CertificateRepositoryPort {
  save: (certificate: Certificate) => Certificate;
  getById: (id: string) => Certificate;
  getAll: () => Certificate[];
  updateById: (id: string, data: Partial<Certificate>) => Certificate;
  deleteById: (id: string) => void;
}
