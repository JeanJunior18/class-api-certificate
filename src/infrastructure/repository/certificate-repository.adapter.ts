import { Injectable, NotFoundException } from '@nestjs/common';
import fs from 'fs';
import { Certificate } from 'src/certificate/entities/certificate.entity';
import { CertificateRepositoryPort } from 'src/infrastructure/repository/certificate-repository.port';

@Injectable()
export class CertificateRepositoryAdapter implements CertificateRepositoryPort {
  private readonly certificates: Certificate[];
  private readonly fileName = 'certificates.json';

  constructor() {
    if (fs.existsSync(this.fileName)) {
      this.certificates = JSON.parse(
        fs.readFileSync(this.fileName, { encoding: 'utf8' }),
      );
    } else {
      this.certificates = [];
      this.updateCertificatesFile();
    }
  }

  private updateCertificatesFile() {
    fs.writeFileSync(this.fileName, JSON.stringify(this.certificates));
  }
  getAll() {
    return this.certificates;
  }
  getById(id: string) {
    const certificate = this.certificates.find((c) => c.id === id);
    if (!certificate) throw new NotFoundException();
    return certificate;
  }
  save(certificate: Certificate) {
    this.certificates.push(certificate);
    this.updateCertificatesFile();
    return this.getById(certificate.id);
  }
  updateById(id: string, data: Partial<Certificate>) {
    const certificateIndex = this.certificates.findIndex((c) => c.id === id);
    if (certificateIndex === -1) throw new NotFoundException();
    this.certificates[certificateIndex] = {
      ...this.certificates[certificateIndex],
      ...data,
    };
    this.updateCertificatesFile();
    return this.getById(id);
  }
  deleteById(id: string) {
    const certificateIndex = this.certificates.findIndex((c) => c.id === id);
    if (certificateIndex === -1) throw new NotFoundException();
    this.certificates.splice(certificateIndex, 1);
    this.updateCertificatesFile();
  }
}
