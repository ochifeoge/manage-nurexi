import {
  Create,
  SimpleForm,
  ReferenceInput,
  AutocompleteInput,
  NumberInput,
  TextInput,
} from "@/components/admin";
import { required } from "react-admin";
import { useGetIdentity } from "ra-core";

export const ExamSessionCreate = () => {
  const { identity } = useGetIdentity();

  return (
    <Create>
      <SimpleForm defaultValues={{ created_by: identity?.id }}>
        <ReferenceInput source="exam_id" reference="exams">
          <AutocompleteInput optionText="name" validate={required()} />
        </ReferenceInput>
        <NumberInput source="year" validate={required()} />
        <TextInput
          source="session_name"
          label="Session Name (e.g. May)"
          validate={required()}
        />
        {/* Hidden field that gets submitted */}
        <input type="hidden" name="created_by" value={identity?.id} />
      </SimpleForm>
    </Create>
  );
};
