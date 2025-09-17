export const ITwoFactorMethod = {
  TOTP: 'TOTP',
  SMS: 'SMS',
  EMAIL: 'EMAIL',
} as const;

export type TwoFactorMethod = typeof ITwoFactorMethod[keyof typeof ITwoFactorMethod];

export interface ITwoFactorParams {
  method: TwoFactorMethod;
  value: string;
  code?: string;
}



export interface TwoFAResponset {
  id: string;
  twoFAId: string;
  secret: string;
  success: boolean | null;
  expiresAt: string; // ISO date string
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
