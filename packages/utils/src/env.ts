
export default function createEnvSchema<T extends string>(schema: (env: T) => void): T {
    return "hey" as unknown as T;
}
