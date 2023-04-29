import LoginComponent from './LoginComponent/LoginComponent';
import RegisterComponent from './RegisterComponent/RegisterComponent';
import CommonButtonComponent from './CommonButtonComponent/CommonButtonComponent';
import CreateProjectFormsComponent from './CreateProjectFormsComponent/CreateProjectFormsComponent';
import FormComponents  from './FormsComponents';
import TableFormComponent from './TableFormComponent/TableFormComponent';
const Components = {
    LoginComponent,
    RegisterComponent,
    CommonButtonComponent,
    CreateProjectFormsComponent,
    TableFormComponent,
    ...FormComponents
};

export default Components;