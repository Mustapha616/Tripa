import { Role } from './roles';

// Timeouts in milliseconds
export const SESSION_TIMEOUTS: Record<Role, number> = {
  [Role.SUPER_ADMIN]: 5 * 60 * 1000,     // 5 minutes
  [Role.COMPANY_ADMIN]: 10 * 60 * 1000,  // 10 minutes
  [Role.AGENT]: 15 * 60 * 1000,          // 15 minutes
  [Role.SCANNER]: 3 * 60 * 1000,         // 3 minutes
};
