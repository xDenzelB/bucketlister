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
  }, [])
}