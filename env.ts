import { z } from 'zod';

const envSchema = z.object({
  // KINDE
  KINDE_CLIENT_ID: z.string(),
  KINDE_CLIENT_SECRET: z.string(),
  KINDE_ISSUER_URL: z.string(),
  KINDE_SITE_URL: z.string(),
  KINDE_POST_LOGOUT_REDIRECT_URL: z.string(),
  KINDE_POST_LOGIN_REDIRECT_URL: z.string(),

  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
});

function validateEnv() {
  const result = envSchema.safeParse(process.env);

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      const varName = issue.path[0];
      console.error(`\n❌ ${String(varName)} is required`);
    });

    console.error('\n💡 Add missing variables to .env');

    process.exit(1);
  }

  return result.data;
}

export const env = validateEnv();
