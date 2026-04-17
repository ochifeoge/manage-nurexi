import {
  DateField,
  RecordField,
  ReferenceField,
  TextField,
} from "@/components/admin";
import { AutocompleteInput } from "@/components/admin/autocomplete-input";
import { BooleanInput } from "@/components/admin/boolean-input";
import { Edit } from "@/components/admin/edit";
import { ReferenceInput } from "@/components/admin/reference-input";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";
const ExamSessionEdit = () => (
  <Edit>
    <SimpleForm>
      <DateField source="created_at" />
      <ReferenceInput source="exam_id" reference="exams">
        <AutocompleteInput />
      </ReferenceInput>
      <TextInput source="year" />
      <TextInput source="session_name" />
      <RecordField source="created_by">
        <ReferenceField source="created_by" reference="profiles">
          <TextField source="full_name" />
        </ReferenceField>
      </RecordField>
      <BooleanInput source="is_active" />
    </SimpleForm>
  </Edit>
);

export default ExamSessionEdit;
