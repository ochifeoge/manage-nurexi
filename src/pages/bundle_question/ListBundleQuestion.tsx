import { TextField } from "@/components/admin";
import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";
import { ReferenceField } from "@/components/admin/reference-field";

const ListBundleQuestion = () => (
  <List>
    <DataTable>
      <DataTable.Col source="id" />
      <DataTable.Col source="created_at" />
      <DataTable.Col source="bundle_id">
        <ReferenceField source="bundle_id" reference="bundles">
          <TextField source="name" />
        </ReferenceField>
      </DataTable.Col>
      <DataTable.Col source="exam_session_id">
        <ReferenceField source="exam_session_id" reference="exam_session">
          <TextField source="session_name" />
        </ReferenceField>
      </DataTable.Col>
    </DataTable>
  </List>
);

export default ListBundleQuestion;
