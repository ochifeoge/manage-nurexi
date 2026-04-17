import { DataTable } from "@/components/admin/data-table";
import { List } from "@/components/admin/list";

const ListBundles = () => (
  <List>
    <DataTable>
      <DataTable.Col source="id" />
      <DataTable.Col source="created_at" />
      <DataTable.Col source="name" />
      <DataTable.Col source="description" />
      <DataTable.Col source="price" />
      <DataTable.Col source="is_active" />
      <DataTable.Col source="is_free" />
      <DataTable.Col source="update_at" />
    </DataTable>
  </List>
);

export default ListBundles;
