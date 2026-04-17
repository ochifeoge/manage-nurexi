import { DateField } from "@/components/admin/date-field";
import { RecordField } from "@/components/admin/record-field";
import { Show } from "@/components/admin/show";

export const ShowProfiles = () => (
  <Show>
    <div className="flex flex-col gap-4">
      <RecordField source="id" />
      <RecordField source="email" />
      <RecordField source="full_name" />
      <RecordField source="avatar_url" />
      <RecordField source="roles" />
      <RecordField
        source="onboarding_completed"
        render={(record) => (record.onboarding_completed ? "Yes" : "No")}
      />
      <RecordField source="created_at">
        <DateField source="created_at" />
      </RecordField>
      <RecordField source="updated_at">
        <DateField source="updated_at" />
      </RecordField>
    </div>
  </Show>
);

export default ShowProfiles;
