import { defineConfig } from 'drizzle-kit'
export default defineConfig({
 schema: "./src/app/db/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://karthiknadar1204:Fvph9DyfVm2L@ep-restless-credit-a1c7489o.ap-southeast-1.aws.neon.tech/meetmate?sslmode=require',
  },
  verbose: true,
  strict: true,
})
