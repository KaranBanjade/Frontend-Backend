import LoginComponent from './LoginComponent/LoginComponent';
import RegisterComponent from './RegisterComponent/RegisterComponent';
import CommonButtonComponent from './CommonButtonComponent/CommonButtonComponent';
import CreateProjectFormsComponent from './CreateProjectFormsComponent/CreateProjectFormsComponent';
import FormComponents  from './FormsComponents';
const Components = {
    LoginComponent,
    RegisterComponent,
    CommonButtonComponent,
    CreateProjectFormsComponent,
    ...FormComponents
};

export default Components;