import joi from 'joi';

const commentValidationSchema = joi.object({
  name: joi.string().min(3).max(100).trim().optional().allow(''),
  body: joi.string().min(3).max(1000).trim().required(),
});

export const validateComment = (
  name: string = '',
  body: string,
): string[] | null => {
  const { error } = commentValidationSchema.validate(
    { name, body },
    { abortEarly: false },
  );
  if (error) {
    return error.details.map((err) => err.message);
  }
  return null;
};
