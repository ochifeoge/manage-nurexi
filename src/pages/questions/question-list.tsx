import { ArrayField, DataTable, DateField } from "@/components/admin";
import { List } from "@/components/admin/list";
import { ReferenceField } from "@/components/admin/reference-field";
import { BooleanField } from "react-admin";

export const QuestionList = () => (
  <List>
    <DataTable>
      <DataTable.Col source="id" />
      <DataTable.Col source="question_text" />
      <DataTable.Col source="question_type" />
      <DataTable.Col source="options" />
      <DataTable.Col source="correct_answer" />
      <DataTable.Col source="explanation" />
      <DataTable.Col source="subject_id">
        <ReferenceField source="subject_id" reference="subjects" />
      </DataTable.Col>
      <DataTable.Col source="year_id">
        <ReferenceField source="year_id" reference="years" />
      </DataTable.Col>
      <DataTable.Col source="topics">
        <ArrayField source="topics" />
      </DataTable.Col>
      <DataTable.Col source="difficulty" />
      <DataTable.Col source="is_active">
        <BooleanField source="is_active" />
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
