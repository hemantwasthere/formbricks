import "server-only";
import path from "path";
import { env } from "@/env.mjs";

export const IS_FORMBRICKS_CLOUD = env.IS_FORMBRICKS_CLOUD === "1";
export const REVALIDATION_INTERVAL = 0; //TODO: find a good way to cache and revalidate data when it changes
export const SERVICES_REVALIDATION_INTERVAL = 60 * 30; // 30 minutes
export const MAU_LIMIT = IS_FORMBRICKS_CLOUD ? 6000 : 1000000;

// URLs
export const WEBAPP_URL =
  env.WEBAPP_URL || (env.VERCEL_URL ? `https://${env.VERCEL_URL}` : false) || "http://localhost:3000";

export const SURVEY_BASE_URL = env.SURVEY_BASE_URL ? env.SURVEY_BASE_URL + "/" : `${WEBAPP_URL}/s/`;

export const SHORT_SURVEY_BASE_URL = env.SHORT_SURVEY_BASE_URL
  ? env.SHORT_SURVEY_BASE_URL + "/"
  : `${WEBAPP_URL}/i/`;

// encryption keys
export const FORMBRICKS_ENCRYPTION_KEY = env.FORMBRICKS_ENCRYPTION_KEY || undefined;
export const ENCRYPTION_KEY = env.ENCRYPTION_KEY;

// Other
export const INTERNAL_SECRET = process.env.INTERNAL_SECRET || "";
export const CRON_SECRET = env.CRON_SECRET;
export const DEFAULT_BRAND_COLOR = "#64748b";

export const PRIVACY_URL = env.PRIVACY_URL;
export const TERMS_URL = env.TERMS_URL;
export const IMPRINT_URL = env.IMPRINT_URL;

export const PASSWORD_RESET_DISABLED = env.PASSWORD_RESET_DISABLED === "1";
export const EMAIL_VERIFICATION_DISABLED = env.EMAIL_VERIFICATION_DISABLED === "1";
export const GOOGLE_OAUTH_ENABLED = env.GOOGLE_AUTH_ENABLED === "1";
export const GITHUB_OAUTH_ENABLED = env.GITHUB_AUTH_ENABLED === "1";
export const AZURE_OAUTH_ENABLED = env.AZUREAD_AUTH_ENABLED === "1";

export const GITHUB_ID = env.GITHUB_ID;
export const GITHUB_SECRET = env.GITHUB_SECRET;
export const GOOGLE_CLIENT_ID = env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = env.GOOGLE_CLIENT_SECRET;

export const SIGNUP_ENABLED = env.SIGNUP_DISABLED !== "1";
export const INVITE_DISABLED = env.INVITE_DISABLED === "1";

export const GOOGLE_SHEETS_CLIENT_ID = env.GOOGLE_SHEETS_CLIENT_ID;
export const GOOGLE_SHEETS_CLIENT_SECRET = env.GOOGLE_SHEETS_CLIENT_SECRET;
export const GOOGLE_SHEETS_REDIRECT_URL = env.GOOGLE_SHEETS_REDIRECT_URL;

export const AIR_TABLE_CLIENT_ID = env.AIR_TABLE_CLIENT_ID;

export const SMTP_HOST = env.SMTP_HOST;
export const SMTP_PORT = env.SMTP_PORT;
export const SMTP_SECURE_ENABLED = env.SMTP_SECURE_ENABLED === "1";
export const SMTP_USER = env.SMTP_USER;
export const SMTP_PASSWORD = env.SMTP_PASSWORD;
export const MAIL_FROM = env.MAIL_FROM;

export const NEXTAUTH_SECRET = env.NEXTAUTH_SECRET;
export const NEXTAUTH_URL = env.NEXTAUTH_URL;
export const ITEMS_PER_PAGE = 50;
export const RESPONSES_PER_PAGE = 10;
export const OPEN_TEXT_RESPONSES_PER_PAGE = 5;

// Storage constants
export const UPLOADS_DIR = path.resolve("./uploads");
export const MAX_SIZES = {
  public: 1024 * 1024 * 10, // 10MB
  free: 1024 * 1024 * 10, // 10MB
  pro: 1024 * 1024 * 1024, // 1GB
} as const;
