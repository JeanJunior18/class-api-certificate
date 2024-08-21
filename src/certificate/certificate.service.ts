import { Injectable } from '@nestjs/common';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { Certificate } from 'src/certificate/entities/certificate.entity';
import { CertificateRepositoryPort } from 'src/infrastructure/repository/certificate-repository.port';

@Injectable()
export class CertificateService {
  constructor(
    private readonly certificateRepository: CertificateRepositoryPort,
  ) {}

  create(createCertificateDto: CreateCertificateDto) {
    const certificate = new Certificate(createCertificateDto);
    this.certificateRepository.save(certificate);
    return certificate;
  }

  findAll() {
    return this.certificateRepository.getAll();
  }

  findOne(id: string) {
    return this.certificateRepository.getById(id);
  }

  update(id: string, updateCertificateDto: UpdateCertificateDto) {
    return this.certificateRepository.updateById(id, updateCertificateDto);
  }

  remove(id: string) {
    return this.certificateRepository.deleteById(id);
  }
}
