import { BooleanField } from "react-admin";

import {
  List,
  DataTable,
  EmailField,
  ImageField,
  DateField,
  TextField,
  SearchInput,
} from "@/components/admin";

const ProfileList = () => (
  <List
    filters={[
      <SearchInput source="email" />,
      <SearchInput source="full_name" />,
    ]}
  >
    <DataTable>
      <DataTable.Col source="id" />
      <DataTable.Col source="email">
        <EmailField source="email" />
      </DataTable.Col>
      <DataTable.Col source="full_name" />
      <DataTable.Col source="avatar_url">
        <ImageField source="avatar_url" />
      </DataTable.Col>
      <DataTable.Col source="roles">
        <TextField source="roles" />
      </DataTable.Col>
      <DataTable.Col source="onboarding_completed">
        <BooleanField source="onboarding_completed" />
      </DataTable.Col>
      <DataTable.Col source="created_at">
        <DateField source="created_at" />
      </DataTable.Col>
      <DataTable.Col source="updated_at">
        <DateField source="updated_at" />
      </DataTable.Col>
    </DataTable>
  </List>
);

export default ProfileList;
