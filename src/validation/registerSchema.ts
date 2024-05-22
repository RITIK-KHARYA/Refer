import vine from "@vinejs/vine";

export const registerSchema = vine.object({
  name: vine.string().minLength(3).maxLength(50),
  username: vine.string().minLength(3).maxLength(50),
  email: vine.string().email(),
  password: vine.string().minLength(6).maxLength(50).confirmed(),
});
