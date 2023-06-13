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
  const user = localStorage.getItem("user");
  const userId = JSON.parse(user).id;
  const data = {
    userId: userId,
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
    const modelData = {
      userId: jsonData.userId,
      connObj: jsonData.backendObject.connObj,
      models: jsonData.backendObject.models,
    };
    return DownloadProject(modelData);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to download last project");
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
