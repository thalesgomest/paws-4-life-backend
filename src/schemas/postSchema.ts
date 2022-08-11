import Joi from 'joi';

const postBodySchema = Joi.object({
	type: Joi.string().valid('rescue', 'lost', 'other').required(),
	description: Joi.string().required(),
	image: Joi.string().required(),
	location: Joi.object()
		.keys({
			latitude: Joi.number().required(),
			longitude: Joi.number().required(),
		})
		.required(),
}).required();

const postSchema = Joi.object({
	body: postBodySchema,
}).options({ allowUnknown: true });

export { postSchema };
