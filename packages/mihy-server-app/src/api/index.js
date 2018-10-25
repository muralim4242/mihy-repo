import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';
import auth from './auth';
import coreWithAuth from './coreWithAuth';
import {verifyToken} from '../lib/util';
// import blood from './blood';



export default ({ config, db }) => {
	let api = Router();

	api.use('/auth', auth({ config, db }));

	// mount the facets resource
	api.use('/facets', facets({ config, db }));


	api.use('/core-with-auth',verifyToken,coreWithAuth({config,db}));


	// api.use('./blood',blood({config,db}));


	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
