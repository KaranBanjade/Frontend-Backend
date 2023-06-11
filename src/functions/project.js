const DownloadProject = async (data) => {
  console.log("download function data\n", data);
  const api = "http://localhost:5000/addNewBackend";
  try {
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // the response will be either blob or json
    // if blob then we will download the file
    // if json then we will show the error
    const jsonData = await response.json();
    console.log(jsonData);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "download.zip";
    document.body.appendChild(a);
    a.click();
    a.remove();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const DownloadLastProject = async (e) => {
  e.preventDefault();
  const api = "http://localhost:5000/getLastUserBackend";
  const user = localStorage.getItem('user');
  const userId = JSON.parse(user).id;
  const data = {
    userId: userId
  };

  try {
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jsonData = await response.json();
    // console.log(jsonData);
    const modelData = {
      userId: jsonData.userId,
      connObj: jsonData.backendObject.connObj,
      models: jsonData.backendObject.models
    };
    console.log("Model Data",modelData)
    await DownloadProject(modelData);
  } catch (error) {
    console.log(error);
  }
};

const GetAllUserProjects = async (setComponents) => {
  const api = "http://localhost:5000/getAllUserBackends";
  const user = localStorage.getItem('user');
  const userId = JSON.parse(user).id;
  const data = {
    userId: userId
  };

  try {
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jsonData = await response.json();
    setComponents(jsonData);
    return jsonData;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const DownloadFunctions = {
  DownloadProject,
  DownloadLastProject,
  GetAllUserProjects
};

export default DownloadFunctions;
