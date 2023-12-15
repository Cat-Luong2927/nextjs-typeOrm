/* eslint-disable prettier/prettier */
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.salt' });
export const jwtConstants = {
  secret: process.env.JWT_SECRET,
};
