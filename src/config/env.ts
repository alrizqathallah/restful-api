import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(process.cwd(), ".env.local"),
});

class EnvConfig {
  public readonly NODE_ENV: string;
  public readonly PORT: number | string;
  public readonly DB_URI: string;
  public readonly DB_NAME: string;

  constructor() {
    this.NODE_ENV = this.getEnv("NODE_ENV", "development");
    this.PORT = parseInt(this.getEnv("PORT", "5000"), 10);
    this.DB_URI = this.getEnv("DB_URI");
    this.DB_NAME = this.getEnv("DB_NAME");
  }

  private getEnv(key: string, defaultValue?: string): string {
    const value = process.env[key];
    if (!value && defaultValue) {
      throw new Error(`Missing required environment variables: ${key}`);
    }
    return value || defaultValue!;
  }
}

const Env = new EnvConfig();

export default Env;
