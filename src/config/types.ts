import { z } from 'zod';

export const LogLevelSchema = z.enum(['debug', 'info', 'warning', 'error']);
export type LogLevel = z.infer<typeof LogLevelSchema>;

export interface LoggingConfig {
    level: LogLevel;
    file?: string;
}

export interface BrowserConfigSchema {
    disableSecurity: boolean;
    minimumWaitPageLoadTime: number;
    waitForNetworkIdlePageLoadTime: number;
    maximumWaitPageLoadTime: number;
    headless: boolean;
    cookiesFile?: string;
    extraChromiumArgs?: string[];
    recording?: {
        dir: string;
        size: { width: number; height: number };
    };
    trace?: {
        dir: string;
        screenshots?: boolean;
        snapshots?: boolean;
    };
    viewport?: {
        width: number;
        height: number;
    };
    browserWindowSize?: {
        width: number;
        height: number;
    };
    saveScreenshots?: boolean;
}

export interface ConfigOptions {
    context?: Partial<BrowserConfigSchema>;
    browser?: BrowserConfigSchema;
    logging?: LoggingConfig;
}