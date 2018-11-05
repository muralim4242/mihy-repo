import { Router } from 'express';
import bloodGrps from './bloodGrps';

export default ({ config, db }) => {
	let api = Router();
	api.use('/common', bloodGrps({ config, db }));
	return api;
}
