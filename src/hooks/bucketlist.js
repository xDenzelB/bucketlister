import { useContext, useState, useEffect } from "react";
import { BucketListContext } from "../context/BucketListContext";
import { useUser } from "./user";
import { getActivity, createBucketListActivity, updateActivity, removeActivity, getBucketList } from "../services/bucketlist";


export function useBucketList() {
  const context = useContext(BucketListContext);

  if (context === undefined) {
    throw new Error('useBucketList must be used within buckerlistcontext');

  }
  const { activity, dispatch } = context;

  useEffect(() => {
    if (activity) return;

    const load = async () => {
      try {
        const payload = await getBucketList();
        dispatch({ type: 'reset', payload });
      } catch (error) {
        throw error;
      }
    }
    load()
  }, []);

  async function add(activity) {
    try {
      const payload = await createBucketListActivity(activity);
      dispatch({ type: 'create', payload });
      return payload
    } catch (error) {
      throw error;
    }
  };

  return { activity, add };
}

export function useBucketListCount() {
  const context = useContext(BucketListContext);
  if (context === undefined) {
    throw new Error(
      'useBucketListcount must be used within a BucketListcontext'
    );
  }
  return context.activity?.length;
}

export function useActivity(id) {
  const context = useContext(BucketListContext);
  const { profile } = useUser();

  if (context === undefined) {
    throw new Error('useActivity must be used within a BucketlistContext');

  }

  const { activity, dispatch } = context;

  const [activities, setActivity] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const activity = await getActivity(id);
        setActivity(activity);
      } catch (error) {
        throw error;
      }

    };
    load();
  }, [id]);

  async function remove() {
    if (!activities) return;

    try {
      const payload = await removeActivity(activity.id);
      setActivity(null);
      if (activity) dispatch({ type: 'delete', payload });
      return payload;
    } catch (error) {
      throw error;
    }
  };

  async function update(change) {
    if (!activities) return;

    try {
      const updated = await updateActivity({
        ...activities,
        ...change
      });
      const payload = {
        ...updated,
        name: profile.name
      };
      setActivity(payload);
      if (activity) dispatch({ type: 'update', payload });
      return payload;
    } catch (error) {
      throw error;
    }
  };

  return { activities, remove, update };
}