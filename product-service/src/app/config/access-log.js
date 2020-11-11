import morgan from 'morgan';

const configure = (app) => {
    app.use(morgan('combined'))
}

export default configure;