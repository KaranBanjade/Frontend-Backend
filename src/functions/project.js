const DownloadProject = (data) =>{
    // const api = "https://scriptsorcerers-backend.adaptable.app/test ";
    const api = "http://localhost:5000/addNewBackend";
  fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(res => res.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "download.zip";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
    );
}
// const DownloadFunctions = {
//   DownloadProject
// }
const DownloadLastProject = (e) =>{
  e.preventDefault();
  // alert("Download Last Project")
  // return;
  const api = "http://localhost:5000/getLastUserBackend";
  const user = localStorage.getItem('user');
  const userId = JSON.parse(user).id;
  const data = {
    userId: userId
  }

  fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
        console.log(data);
        // model data back to the format of the frontend
      //   {
      //     "userId": "6484acf326591053ee351e1a",
      //     "backendObject": {
      //         "connObj": {
      //             "dbname": "database",
      //             "dbtype": "MySQL",
      //             "dbhost": "localhost",
      //             "dbport": "3306",
      //             "dbusername": "admin",
      //             "dbpassword": ""
      //         },
      //         "models": [
      //             {
      //                 "name": "model",
      //                 "fieldsObject": {
      //                     "field": {
      //                         "type": "String",
      //                         "allowNull": false,
      //                         "defaultValue": ""
      //                     }
      //                 }
      //             }
      //         ]
      //     },
      //     "timestamp": "2023-06-10T18:37:16.122Z",
      //     "id": "6484c2dc9ba726a8ccdb5e6d"
      // }
        const modelData = {
          userId: data.userId,
          connObj: data.backendObject.connObj,
          models: data.backendObject.models
        }
        DownloadProject(modelData);
    });
}
const DownloadFunctions = {
  DownloadProject,
  DownloadLastProject
}
export default DownloadFunctions;
