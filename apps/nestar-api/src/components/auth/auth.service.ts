import { Injectable } from '@nestjs/common';
import * as bcyrpt from 'bcryptjs'

@Injectable()
export class AuthService {
  public async hashPassword(memberPassword: string): Promise<string> {
    const salt = await bcyrpt.genSalt();
    return await bcyrpt.hash(memberPassword, salt);
  }

  public async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
   return await bcyrpt.compare(password, hashedPassword);
  }
}
