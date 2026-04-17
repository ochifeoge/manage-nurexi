import { BooleanInput } from "@/components/admin/boolean-input";
import { Edit } from "@/components/admin/edit";
import { SimpleForm } from "@/components/admin/simple-form";
import { TextInput } from "@/components/admin/text-input";
const EditExam = () => (
  <Edit>
    {" "}
    <SimpleForm>
      {" "}
      <TextInput source="id" /> <TextInput source="code" />{" "}
      <TextInput source="name" /> <TextInput source="description" />{" "}
      <TextInput source="icon" /> <BooleanInput source="is_active" />{" "}
      <TextInput source="created_at" />{" "}
    </SimpleForm>{" "}
  </Edit>
);

export default EditExam;
