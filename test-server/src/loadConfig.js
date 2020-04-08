import appRootDir from 'app-root-dir';
import dotenv from 'dotenv';
import path from 'path';

if (process.env.NODE_ENV !== 'production') {
  const envFile = '.env.development';
  dotenv.config({ path: path.resolve(appRootDir.get(), envFile) });
}
