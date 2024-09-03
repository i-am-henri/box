import { ZodDefault, ZodType, z } from "zod";

/**
 * Create an env schema from a function to use typesafe environment variables.
 * 
 * ### Example:
 * ```ts
 * import { createEnvSchema } from "box/utils";
 * 
 * export const env = createEnvSchema<{
 *     DATABASE: string;
 * }>({
 *     schema: (z) => ({
 *         DATABASE: z.string().url(),
 *     }),
 * });
 * 
 * // use it in your code now
 * import { env } from "./env";
 * 
 * const db = new Database(env.DATABASE || env("DATABASE"));
 * ```
 * 
 * ---
 * 
 * @param schema 
 * @returns 
 */
export function createEnvSchema<T extends object & { NODE_ENV?: string }>({
    name,
    schema,
}: {
    /**Name of the package for better development experience */
    name?: string,
    schema: (zod: typeof z) => { [K in keyof T]: ZodType<T[K], any, any> | ZodDefault<ZodType<T[K], any, any>> };
}): { [K in keyof T]: T[K] } {

    const envSchema = schema(z);

    const env: Partial<{ [K in keyof T]: T[K] }> = {};

    for (const key in envSchema) {
        if (Object.prototype.hasOwnProperty.call(envSchema, key)) {
            env[key as keyof T] = envSchema[key as keyof T].parse(process.env[key])
            if (!env[key as keyof T]) {
                throw new Error(`Missing environment variable ${key} ${name ? `in ${name}.` : "."}`);
            }
        }
    }


    return { ...env, NODE_ENV: process.env.NODE_ENV } as { [K in keyof T]: T[K] } & { NODE_ENV: T["NODE_ENV"] };
}
