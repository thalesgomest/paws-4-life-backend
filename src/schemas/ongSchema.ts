import Joi from 'joi';

const regexTelephone =
	/\(?\b([0-9]{2,3}|0((x|[0-9]){2,3}[0-9]{2}))\)?\s*[0-9]{4,5}[- ]*[0-9]{4}\b/;

const ongBodySchema = Joi.object({
	name: Joi.string().required(),
	telephone: Joi.string().regex(regexTelephone).required(),
	address: Joi.string().required(),
	email: Joi.string().email().required(),
	site: Joi.string().required(),
}).required();

const ongSchema = Joi.object({
	body: ongBodySchema,
}).options({ allowUnknown: true });

export { ongSchema };
