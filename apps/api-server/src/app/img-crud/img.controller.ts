import { Request, Response } from 'express';
import { ServerHelpers } from '../server-helpers';
const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const dirTree = require('directory-tree');
const fsExtra = require('fs-extra')

declare module 'express' {
  interface Request {
    files: any;
  }
}

export class ImgController {
  rootImgFolder = `./assets/photos`;
  serverHelpers: ServerHelpers = new ServerHelpers();

  public getImg = (req: Request, res: Response) => {
    const imgPath = req.query.path;
    res.sendFile( path.join(__dirname, `assets/${imgPath}`));
  };

  public uploadImages = (req: Request, res: Response) => {
    const queryPath = req.query.path;

    if (!queryPath || queryPath[0] !== 'photos') {
      return res.status(500).send(new Error('wrong path.'));
    }

    const uploadPath = `./${queryPath}`;
    this.serverHelpers.ensureDirTree(uploadPath);
    try {
      if (!req.files) {
        res.send({
          status: false,
          message: 'No file uploaded'
        });
      } else {
        const data = [];
        _.forEach(_.keysIn(req.files), (key) => {
          const photo = req.files[key];
          if (Array.isArray(photo)) {
            photo.map(img => {
              img.mv(`${uploadPath}/${img.name}`);
              data.push({
                name: img.name,
                mimetype: img.mimetype,
                size: img.size
              });
            });
          } else {
            photo.mv(`${uploadPath}/${photo.name}`);
            data.push({
              name: photo.name,
              mimetype: photo.mimetype,
              size: photo.size
            });
          }
        });
        res.send({
          status: true,
          message: 'Files are uploaded',
          data
        });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }

  public getImgDirectoriesTree = (req: Request, res: Response) => {
    res.send(dirTree(this.rootImgFolder));
  }

  public addNewFolder = (req: Request, res: Response) => {
    const folderPath = req.body.inRoot ? `${this.rootImgFolder}/${req.body.path}` : req.body.path;
    console.log(req.body)
    console.log(this.rootImgFolder)
    console.log(folderPath)

    if (this.serverHelpers.ensureDirTree(folderPath)) {
      res.status(200).json({message: 'directory where created successfully.'});
    } else {
      res.status(500).send(new Error('create new directory fail.'));
    }
  }

  public renameDirectory = (req: Request, res: Response) => {
    const data = req.body.data;
    console.log(data)

    fs.rename(`./${data.path}/${data.oldName}`, `./${data.path}/${data.newName}`, (err) => {
      if (err) {
        return res.status(500).json({
          error: err
        });
      }
      res.status(200).json({message: 'directory where renamed successfully.'});
    });
  }

  public deleteItemByPath = (req: Request, res: Response) => {
    const folderPath = `./${req.query.path}`;
    fsExtra.remove(folderPath, (err) => {
      if (err) {
        return res.status(500).json({
          error: err
        });
      }
      res.status(200).json({message: 'Item was removed successfully.'});
    });
  }

}
