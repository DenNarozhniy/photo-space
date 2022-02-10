import { Application } from 'express';
import { ImgController } from './img.controller';

export class ImgRoutes {

  public imgController = new ImgController();

  public routes(app: Application): void {

    app.route('/api/new-folder')
      .post(this.imgController.addNewFolder);

    app.route('/api/delete-item-by-path')
      .delete(this.imgController.deleteItemByPath);

    app.route('/api/rename-directory')
      .put(this.imgController.renameDirectory);

    app.route('/api/upload-photos')
      .post(this.imgController.uploadImages);

    app.route('/api/get-img')
      .get(this.imgController.getImg);

    app.route('/api/img-directories-tree')
      .get(this.imgController.getImgDirectoriesTree);
  }
}
