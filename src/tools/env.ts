import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

export const validateEnvironmentVariables = <T>(
  cls: ClassConstructor<T>,
  environmentVariables: object,
): T => {
  const environmentVariablesToValidate = plainToInstance(
    cls,
    environmentVariables,
    {
      enableImplicitConversion: true,
    },
  );

  const errors = validateSync(environmentVariablesToValidate as unknown as object, {
    skipMissingProperties: false,
    whitelist: true,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return environmentVariablesToValidate;
};
