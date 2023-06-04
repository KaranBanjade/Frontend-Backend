import LoginComponent from './LoginComponent/LoginComponent';
import RegisterComponent from './RegisterComponent/RegisterComponent';
import FormComponents  from './FormsComponents';
import TableFormComponent from './TableFormComponent/TableFormComponent';
import SubmitComponent from './SubmitComponent/SubmitComponent';
import NavbarComponent from './NavbarComponent/NavbarComponent';
import SecureRoutes from './SecureRoutes';
import ViewAllComponentsList from './ViewAllComponents/ViewAllComponentsList';
const Components = {
    LoginComponent,
    RegisterComponent,
    TableFormComponent,
    SubmitComponent,
    NavbarComponent,
    SecureRoutes,
    ViewAllComponentsList,
    ...FormComponents
};

export default Components;