import { IsEnum } from 'class-validator';
import { AppEnv } from 'src/enums';

export class PublicEnvironmentVariables {
  @IsEnum(AppEnv)
    VITE_APP_ENV!: AppEnv;
}
