import LoginComponent from './LoginComponent/LoginComponent';
import RegisterComponent from './RegisterComponent/RegisterComponent';
import FormComponents  from './FormsComponents';
import TableFormComponent from './TableFormComponent/TableFormComponent';
import SubmitComponent from './SubmitComponent/SubmitComponent';
import NavbarComponent from './NavbarComponent/NavbarComponent';
const Components = {
    LoginComponent,
    RegisterComponent,
    TableFormComponent,
    SubmitComponent,
    NavbarComponent,
    ...FormComponents
};

export default Components;