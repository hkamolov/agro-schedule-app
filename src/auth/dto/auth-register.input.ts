// src/auth/dto/auth-register.input.ts

import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AuthRegisterInput {
  @Field()
  username: string;

  @Field()
  password: string;
}
