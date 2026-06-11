import { Redis } from "@upstash/redis";

// Upstash Redis client
// Vercel stelt automatisch KV_REST_API_URL en KV_REST_API_TOKEN in
export const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

// Helper functies
export async function kv_get(key: string) {
  try {
    return await redis.get(key);
  } catch {
    return null;
  }
}

export async function kv_set(key: string, value: unknown) {
  try {
    await redis.set(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export async function kv_exists(key: string) {
  try {
    const val = await redis.exists(key);
    return val === 1;
  } catch {
    return false;
  }
}

export async function kv_keys(pattern: string) {
  try {
    return await redis.keys(pattern);
  } catch {
    return [];
  }
}

export async function kv_sadd(key: string, member: string) {
  try {
    await redis.sadd(key, member);
    return true;
  } catch {
    return false;
  }
}

export async function kv_smembers(key: string): Promise<string[]> {
  try {
    const members = await redis.smembers(key);
    return members as string[];
  } catch {
    return [];
  }
}
