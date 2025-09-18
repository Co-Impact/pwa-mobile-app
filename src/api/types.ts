interface LoginHistory {
    id: string;
    userId: string;
    loginAt: string;
    methodUsed: 'EMAIL' | 'SMS'; // Adjust according to the possible login methods
    code: string | null;
    ipAddress: string;
    userAgentId: string;
    location: string;
    success: boolean;
    createdAt: string;
}

interface TwoFactorAuth {
    id: string;
    userId: string;
    method: 'EMAIL' | 'SMS'; // Adjust according to the possible methods
    value: string;
    isEnabled: boolean;
    isPrimary: boolean;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface User {
    id: string;
    email: string;
    username: string;
    phone: string;
    isBusiness: boolean;
    twoFAEnabled: boolean;
    twoFASecret: string | null;
    isActive: boolean;
    backupCodes: string[];
    lockedUntil: string | null;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    LoginHistory: LoginHistory[];
    TwoFactorAuth: TwoFactorAuth[];
}