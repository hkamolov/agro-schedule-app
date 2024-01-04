// src/auth/auth.resolver.ts

import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthLoginInput } from './dto/auth-login.input';
import { AuthRegisterInput } from './dto/auth-register.input';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation('login')
  async login(@Args('input') input: AuthLoginInput) {
    const { username, password } = input;
    const user = await this.authService.validateUser(username, password);

    if (!user) {
      throw new Error('Invalid username or password');
    }

    const token = await this.authService.generateToken(user.id, user.username);
    return { user, token };
  }

  @Mutation('register')
  async register(@Args('input') input: AuthRegisterInput) {
    const { username, password } = input;
    const existingUser = await this.authService.findByUsername(username);

    if (existingUser) {
      throw new Error('Username is already taken');
    }

    const newUser = await this.authService.register(username, password);
    const token = await this.authService.generateToken(newUser.id, newUser.username);

    return { user: newUser, token };
  }
}
