import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";
import { ReferenceField } from "@/components/admin/reference-field";
export const ExamSessionList = () => (
  <List>
    <DataTable>
      <DataTable.Col source="id" /> <DataTable.Col source="created_at" />
      <DataTable.Col source="exam_id">
        <ReferenceField source="exam_id" reference="exams" />
      </DataTable.Col>
      <DataTable.Col source="year" />
      <DataTable.Col source="session_name" />
    </DataTable>
  </List>
);
