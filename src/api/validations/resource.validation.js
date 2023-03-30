const Joi = require("joi");

module.exports = {
  
  // GET /v1/resources
  listResources: {
    query: {
      page: Joi.number().min(1),
      perPage: Joi.number().min(1).max(100),
      name: Joi.string()
    },
  },

  // POST /v1/resources
  createResources: {
    body: {
      name: Joi.string()
    },
  },

  // PUT /v1/users/:userId
  replaceResources: {
    body: {
      name: Joi.string()
    },
    params: {
      resourceId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    },
  },

  // PATCH /v1/resources/:resourceId
  updateResources: {
    body: {
      name: Joi.string()
    },
    params: {
      resourceId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    },
  },
};
