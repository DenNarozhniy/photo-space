const fse = require('fs-extra');

export class ServerHelpers {

  public ensureDirTree = async (tree) => {

    let status = false;

    await fse.ensureDir(tree)
      .then(() => {
        status = true;
      })
      .catch(err => {
         status = false;
      });
    return status;
  }
}
