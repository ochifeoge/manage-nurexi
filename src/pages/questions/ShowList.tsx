import { DataTable, EmailField, TextField } from "@/components/admin";
import { DateField } from "@/components/admin/date-field";
import { NumberField } from "@/components/admin/number-field";
import { RecordField } from "@/components/admin/record-field";
import { ReferenceField } from "@/components/admin/reference-field";
import { Show } from "@/components/admin/show";
export const QuestionShow = () => (
  <Show>
    <div className="flex flex-col gap-4">
      <RecordField source="id">
        <NumberField source="id" />
      </RecordField>
      <RecordField source="created_at">
        <DateField source="created_at" />
      </RecordField>
      <RecordField label="Exam Session">
        <ReferenceField source="exam_session_id" reference="exam_session">
          <TextField source="session_name" />
        </ReferenceField>
      </RecordField>
      <RecordField source="subject_id">
        <ReferenceField source="subject_id" reference="subjects" />
      </RecordField>
      <RecordField source="question_text" />
      <RecordField source="question_type" />
      <RecordField source="correct_answer" />
      <RecordField source="explanation" />
      <RecordField source="difficulty" />
      <RecordField
        source="is_active"
        render={(record) => (record.is_active ? "Yes" : "No")}
      />
      <RecordField source="options" />
      <RecordField source="topics" />
      <RecordField source="created_by">
        <ReferenceField source="created_by" reference="profiles">
          <TextField source="full_name" />
        </ReferenceField>
      </RecordField>
    </div>
  </Show>
);
