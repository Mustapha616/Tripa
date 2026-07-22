export enum Role {
  SUPER_ADMIN = 'super_admin', // Level 1
  COMPANY_ADMIN = 'company_admin', // Level 2
  AGENT = 'agent', // Level 3
  SCANNER = 'scanner', // Level 4
}

export const ROLE_HIERARCHY: Record<Role, number> = {
  [Role.SUPER_ADMIN]: 1,
  [Role.COMPANY_ADMIN]: 2,
  [Role.AGENT]: 3,
  [Role.SCANNER]: 4,
};

export const isValidRole = (role: string | null): role is Role => {
  return Object.values(Role).includes(role as Role);
};
