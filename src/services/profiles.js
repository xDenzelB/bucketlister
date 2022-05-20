import { client, parseData } from './client';

export async function getProfile(user_id) {
  const request = await client
    .from('profiles')
    .select()
    .match({ user_id: user_id })
    .single();
  return parseData(request);
}

export async function updateProfile({ name, email, bio, dob }) {
  const request = await client
    .from('profiles')
    .update({ name, bio, dob })
    .match({ email })
    .single();
  return parseData(request);
}

