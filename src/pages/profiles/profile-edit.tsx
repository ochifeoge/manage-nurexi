import { DateTimeInput } from "@/components/admin";
import { BooleanInput } from "@/components/admin/boolean-input";
import { Edit } from "@/components/admin/edit";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";
import { useRecordContext } from "ra-core";

const ProfileTitle = () => {
  const record = useRecordContext();
  return <span>Edit Profile {record?.full_name}</span>;
};

export const ProfileEdit = () => (
  <Edit title={<ProfileTitle />}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput disabled source="email" />
      <TextInput source="full_name" />
      <TextInput source="roles" />
      <TextInput disabled source="avatar_url" />
      <BooleanInput source="onboarding_completed" />
      <DateTimeInput disabled source="created_at" />
      <DateTimeInput source="updated_at" />
    </SimpleForm>
  </Edit>
);
