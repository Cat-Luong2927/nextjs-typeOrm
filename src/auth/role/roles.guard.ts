/* eslint-disable prettier/prettier */
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator'
import { Role } from './role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const { user, params } = request;

    // Allow if the user has the required role
    if (requiredRoles.some((role) => user.roles?.includes(role))) {
      return true;
    }

    // Allow if the user is trying to access their own information
    if (params.id && user.sub === Number(params.id)) {
      return true;
    }

    // Otherwise, deny access
    return false;
  }
}