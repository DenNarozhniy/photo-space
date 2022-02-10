import { ContactInfoController } from './contact-info.controller';
import { Application } from 'express';


export class ContactInfoRoutes {

  public contactInfoController = new ContactInfoController();

  public routes(app: Application): void {

    app.get('/api/contact-info', this.contactInfoController.getContactInfo);

    app.post('/api/contact-info', this.contactInfoController.addContactInfo);

    app.post('/api/phone-numbers', this.contactInfoController.addPhoneNumber);

    app.post('/api/instagram-photos', this.contactInfoController.addInstagramPhoto);

    app.put('/api/contact-info', this.contactInfoController.updateContactInfo);

    app.put('/api/phone-numbers', this.contactInfoController.updatePhoneNumber);

    app.put('/api/instagram-photos', this.contactInfoController.updateInstagramPhoto);

    app.delete('/api/contact-info/:id', this.contactInfoController.deleteContactInfo);

    app.delete('/api/phone-numbers/:contactInfoId/:id', this.contactInfoController.deletePhoneNumber);

    app.delete('/api/instagram-photos/:contactInfoId/:id', this.contactInfoController.deleteInstaPhoto);
  }

}
