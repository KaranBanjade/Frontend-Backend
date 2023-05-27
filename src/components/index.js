import LoginComponent from './LoginComponent/LoginComponent';
import RegisterComponent from './RegisterComponent/RegisterComponent';
import CommonButtonComponent from './CommonButtonComponent/CommonButtonComponent';
import CreateProjectFormsComponent from './CreateProjectFormsComponent/CreateProjectFormsComponent';
import FormComponents  from './FormsComponents';
import TableFormComponent from './TableFormComponent/TableFormComponent';
import SubmitComponent from './SubmitComponent/SubmitComponent';
const Components = {
    LoginComponent,
    RegisterComponent,
    CommonButtonComponent,
    CreateProjectFormsComponent,
    TableFormComponent,
    SubmitComponent,
    ...FormComponents
};

export default Components;