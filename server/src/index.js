import express from 'express';
import morgan from 'morgan';

class App {
  static connect(port) {
    const app = new App();
    app.listen(port);
  }

  constructor() {
    this.app = express();

    this.initMiddlewares();
  }

  initMiddlewares() {
    this.app.use(morgan);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  initRouters() {
    this.app.use('/api');
  }

  listen(port) {
    this.app.listen(port, () => console.log('server on'))
      .on('error', (error) => console.log(error));
  }
}

export default App;
