// src/auth/auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service'; // Assuming you have a UsersService

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService, // Assuming you have a UsersService
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);

    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async findByUsername(username: string): Promise<any> {
    return this.usersService.findByUsername(username);
  }

  async register(username: string, password: string): Promise<any> {
    // Add logic to create a new user in your database
    const newUser = await this.usersService.createUser(username, password);
    
    // Optionally, you may generate and return a token here if needed
    // const token = await this.generateToken(newUser.id, newUser.username);
    // return { user: newUser, token };
    
    return newUser;
  }

  async generateToken(userId: number, username: string): Promise<string> {
    const payload = { sub: userId, username };
    return this.jwtService.sign(payload);
  }
}
