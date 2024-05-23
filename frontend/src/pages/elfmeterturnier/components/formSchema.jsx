import { z } from "zod";

export const formSchema = z.object({
  teamname: z.string().min(2, {
    message: "",
  }),
  hostName: z.string().min(2, {
    message: "",
  }),
  hostEmail: z.string().min(2, {
    message: "",
  }),
  payment: z.boolean(),
  gender: z.enum(["man", "woman", "none"], {
    required_error: "",
  }),
  acceptAGB: z.boolean().refine((value) => value === true, {
    message: "",
  }),
});
