import { client, parseData } from './client';

function mapFrom({ created_at, profile_id, profile, ...rest }) {
  return {
    created: created_at,
    profileId: profile_id,
    name: profile?.name,
    ...rest
  };
}

function mapTo({ created, profileId, name, ...rest }) {
  return rest;
}

export async function getBucketList() {
  const request = await client
    .from('bucketlists')
    .select(`id, title, created_at, profile_id,
  profile(name)`);
  const data = parseData(request)

  return data.map(mapFrom);
}

export async function createBucketListActivity(activity) {
  const request = await client
    .from('bucketlists')
    .insert(mapTo(activity))
    .single();
  const data = parseData(request);
  return mapFrom(data);
}

export async function updateActivity(activity) {
  const request = await client
    .from('bucketlists')
    .update(mapTo(activity))
    .match({ id: activity.id })
    .single();
  const data = parseData(request);
  return mapFrom(data);
}

export async function getActivity(id) {
  const request = await client
    .from('bucketlists')
    .select('*, profile(name)')
    .match({ id })
    .single();
  const data = parseData(request);
  return mapFrom(data);
}

export async function removeActivity(id) {
  const request = await client
    .from('bucketlists')
    .delete()
    .match({ id })
    .single();
  const data = parseData(request);
  return mapFrom(data)

}