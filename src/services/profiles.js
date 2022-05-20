import { client, parseData } from './client';

export async function getProfile(user_id) {
  const request = await client
    .from('profiles')
    .select()
    .match({ user_id: user_id })
    .single();
  return parseData(request);
}