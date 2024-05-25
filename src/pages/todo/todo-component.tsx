import { ListComponent } from "./components/list/list-component";
import { TabsComponent } from "./components/list/list-tabs/list-tabs-components";

export const TodoComponent: React.FC = () => (
  <div>
    <TabsComponent />
    <ListComponent />
  </div>
);
