import { useState } from "react";
import { useForm } from "../hooks/useForm";

export default function BucketListForm({
  activities = {},
  onSubmit,
}) {
  const { title = '', activity = '' } = activities;
  const { formState, handleChange } = useForm({ title, activity });
  const [saved, setSaved] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setSaved(true);
      await onSubmit(formState);
    } catch (error) {
      setSaved(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <label htmlFor="name">Title of the Activity</label>
        <input
          id="title"
          name="title"
          type='text'
          value={formState.title}
          onChange={handleChange}
        />
      </section>
      <section>
        <label htmlFor="name">Activity:</label>
        <textarea
          id="activity"
          name="activity"
          type='text'
          value={formState.activity}
          onChange={handleChange}
          rows={10}
        />
      </section>
      <button type="submit" disabled={saved}>
        {saved ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
}