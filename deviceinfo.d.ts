export function getUniqueID(): string;
export function getManufacturer(): string;
export function getBrand(): string;
export function getModel(): string;
export function getDeviceId(): string;
export function getSystemName(): string;
export function getSystemVersion(): string;
export function getBundleId(): string;
export function getBuildNumber(): number;
export function getVersion(): string;
export function getReadableVersion(): string;
export function getDeviceName(): string;
export function getUserAgent(): string;
export function getDeviceLocale(): string;
export function getDeviceCountry(): string;
export function getTimezone(): string;
export function getInstanceID(): string;
export function isEmulator(): boolean;
export function isTablet(): boolean;
export function isPinOrFingerprintSet(cb: (isSet: boolean) => void): void;
export function isEncrypted(): boolean;
export function myName(cb: (name: string) => void): void;