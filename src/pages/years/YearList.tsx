import { DataTable, DateField, List, ReferenceField } from "@/components/admin";
import { BooleanField } from "react-admin";

const YearList = () => (
  <List>
    <DataTable>
      <DataTable.Col source="id" />
      <DataTable.Col source="exam_id">
        <ReferenceField source="exam_id" reference="exams" />
      </DataTable.Col>

      <DataTable.Col source="exam_name" />
      <DataTable.NumberCol source="year_value" />
      <DataTable.NumberCol source="total_questions" />
      <DataTable.Col source="is_active">
        <BooleanField source="is_active" />
      </DataTable.Col>
      <DataTable.Col source="created_at">
        <DateField source="created_at" />
      </DataTable.Col>
    </DataTable>
  </List>
);

export default YearList;
