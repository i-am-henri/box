import { createEnvSchema } from "utils";

export const env = createEnvSchema<{
    DATABASE: string;
}>({
    schema: (z) => ({
        DATABASE: z.string().url(),
    }),
});