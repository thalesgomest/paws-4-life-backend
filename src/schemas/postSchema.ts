import Joi from 'joi';

const postBodySchema = Joi.object({
	type: Joi.string().valid('Rescue', 'Lost', 'Other').required(),
	description: Joi.string().required(),
	name: Joi.string().allow(null, ''),
	image: Joi.string().uri().allow(null, ''),
	location: Joi.object()
		.keys({
			latitude: Joi.number().allow(null, ''),
			longitude: Joi.number().allow(null, ''),
		})
		.required(),
}).required();

const postSchema = Joi.object({
	body: postBodySchema,
}).options({ allowUnknown: true });

export { postSchema };
