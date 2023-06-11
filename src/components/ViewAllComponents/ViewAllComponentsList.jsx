import { useState,useEffect } from "react";
import SingleComponentModel from "./SingleComponentModel";
import DownloadFunctions from "../../functions/project";
const ViewAllComponentsList = () => {
    let temp = [
      { 
        "userId": "6484acf326591053ee351e1a",
        "backendObject": {
          "connObj": {
            "name": "hackaminer",
            "user": "facproadmin",
            "pass": "#facproRDS2022#",
            "host": "database-1.czb0dk8ckwzf.us"
          },
          "models": [
            {
              "name": "Hospital",
              "fieldsObject": {
                "id": {
                  "type": "UUID",
                  "allowNull": "false",
                  "primaryKey": "true",
                  "defaultValue": "UUIDV4"
                },
                "name": {
                  "type": "STRING",
                  "allowNull": "false",
                  "primaryKey": "false",
                  "defaultValue": ""
                },
                "latitude": {
                  "type": "DOUBLE",
                  "allowNull": "false",
                  "primaryKey": "false",
                  "defaultValue": ""
                },
                "longitude": {
                  "type": "DOUBLE",
                  "allowNull": "false",
                  "primaryKey": "false",
                  "defaultValue": ""
                },
                "city": {
                  "type": "STRING",
                  "allowNull": "false",
                  "primaryKey": "false",
                  "defaultValue": ""
                },
                "zipCode": {
                  "type": "STRING",
                  "allowNull": "false",
                  "primaryKey": "false",
                  "defaultValue": ""
                },
                "region": {
                  "type": "STRING",
                  "allowNull": "false",
                  "primaryKey": "false",
                  "defaultValue": ""
                },
                "country": {
                  "type": "STRING",
                  "allowNull": "false",
                  "primaryKey": "false",
                  "defaultValue": ""
                },
                "address": {
                  "type": "STRING",
                  "allowNull": "false",
                  "primaryKey": "false",
                  "defaultValue": ""
                },
                "landmark": {
                  "type": "STRING",
                  "allowNull": "false",
                  "primaryKey": "false",
                  "defaultValue": ""
                },
                "url": {
                  "type": "STRING",
                  "allowNull": "false",
                  "primaryKey": "false",
                  "defaultValue": ""
                },
                "NumberOfDoctors": {
                  "type": "INTEGER",
                  "allowNull": "false",
                  "primaryKey": "false",
                  "defaultValue": ""
                },
                "NumberOfICU": {
                  "type": "INTEGER",
                  "allowNull": "false",
                  "primaryKey": "false",
                  "defaultValue": ""
                },
                "totalRooms": {
                  "type": "INTEGER",
                  "allowNull": "false",
                  "primaryKey": "false",
                  "defaultValue": ""
                }
              }
            }
          ]
        },
        "timestamp": "2023-06-10T18:09:00.700Z",
        "id": "6484bc3cff76ed913b55e2c1"
      },
      {
        "userId": "6484acf326591053ee351e1a",
        "backendObject": {
          "connObj": {
            "dbname": "database",
            "dbtype": "MySQL",
            "dbhost": "localhost",
            "dbport": "3306",
            "dbusername": "admin",
            "dbpassword": ""
          },
          "models": [
            {
              "name": "model",
              "fieldsObject": {
                "field": {
                  "type": "String",
                  "allowNull": false,
                  "defaultValue": ""
                }
              }
            }
          ]
        },
        "timestamp": "2023-06-10T18:11:09.877Z",
        "id": "6484bcbd45c631e5964388b4"
      },
      {
        "userId": "6484acf326591053ee351e1a",
        "backendObject": {
          "connObj": {
            "dbname": "database",
            "dbtype": "MySQL",
            "dbhost": "localhost",
            "dbport": "3306",
            "dbusername": "admin",
            "dbpassword": ""
          },
          "models": [
            {
              "name": "model",
              "fieldsObject": {
                "field": {
                  "type": "String",
                  "allowNull": false,
                  "defaultValue": ""
                }
              }
            }
          ]
        },
        "timestamp": "2023-06-10T18:13:54.867Z",
        "id": "6484bd62d1c7c98f60690330"
      },
      {
        "userId": "6484acf326591053ee351e1a",
        "backendObject": {
          "connObj": {
            "dbname": "database",
            "dbtype": "MySQL",
            "dbhost": "localhost",
            "dbport": "3306",
            "dbusername": "admin",
            "dbpassword": ""
          },
          "models": [
            {
              "name": "model",
              "fieldsObject": {
                "field": {
                  "type": "String",
                  "allowNull": false,
                  "defaultValue": ""
                }
              }
            }
          ]
        },
        "timestamp": "2023-06-10T18:14:12.806Z",
        "id": "6484bd74d9a2f92e3fcdbe7a"
      },
      {
        "userId": "6484acf326591053ee351e1a",
        "backendObject": {
          "connObj": {
            "dbname": "database",
            "dbtype": "MySQL",
            "dbhost": "localhost",
            "dbport": "3306",
            "dbusername": "admin",
            "dbpassword": ""
          },
          "models": [
            {
              "name": "model",
              "fieldsObject": {
                "field": {
                  "type": "String",
                  "allowNull": false,
                  "defaultValue": ""
                }
              }
            }
          ]
        },
        "timestamp": "2023-06-10T18:23:06.709Z",
        "id": "6484bf8a8958f9b14264b717"
      },
      {
        "userId": "6484acf326591053ee351e1a",
        "backendObject": {
          "connObj": {
            "dbname": "database",
            "dbtype": "MySQL",
            "dbhost": "localhost",
            "dbport": "3306",
            "dbusername": "admin",
            "dbpassword": ""
          },
          "models": [
            {
              "name": "model",
              "fieldsObject": {
                "field": {
                  "type": "String",
                  "allowNull": false,
                  "defaultValue": ""
                }
              }
            }
          ]
        },
        "timestamp": "2023-06-10T18:37:16.122Z",
        "id": "6484c2dc9ba726a8ccdb5e6d"
      },
      {
        "userId": "6484acf326591053ee351e1a",
        "backendObject": {
          "connObj": {
            "dbname": "database",
            "dbtype": "MySQL",
            "dbhost": "localhost",
            "dbport": "3306",
            "dbusername": "admin",
            "dbpassword": ""
          },
          "models": [
            {
              "name": "model",
              "fieldsObject": {
                "field": {
                  "type": "String",
                  "allowNull": false,
                  "defaultValue": ""
                }
              }
            }
          ]
        },
        "timestamp": "2023-06-10T18:44:23.172Z",
        "id": "6484c48726e689032e0b93d2"
      },
      {
        "userId": "6484acf326591053ee351e1a",
        "backendObject": {
          "connObj": {
            "dbname": "database",
            "dbtype": "MySQL",
            "dbhost": "localhost",
            "dbport": "3306",
            "dbusername": "admin",
            "dbpassword": ""
          },
          "models": [
            {
              "name": "model",
              "fieldsObject": {
                "field": {
                  "type": "String",
                  "allowNull": false,
                  "defaultValue": ""
                }
              }
            }
          ]
        },
        "timestamp": "2023-06-10T18:45:17.014Z",
        "id": "6484c4bd728119f9a85ebb43"
      },
      {
        "userId": "6484acf326591053ee351e1a",
        "backendObject": {
          "connObj": {
            "dbname": "database",
            "dbtype": "MySQL",
            "dbhost": "localhost",
            "dbport": "3306",
            "dbusername": "admin",
            "dbpassword": ""
          },
          "models": [
            {
              "name": "model",
              "fieldsObject": {
                "field": {
                  "type": "String",
                  "allowNull": false,
                  "defaultValue": ""
                }
              }
            }
          ]
        },
        "timestamp": "2023-06-10T18:46:29.027Z",
        "id": "6484c505e0a72dc0ce56243d"
      }
    ]
    const [components, setComponents] = useState([]);
    useEffect(() => {
      DownloadFunctions.GetAllUserProjects(setComponents);
    },[])
    useEffect(() => {}, [components]);
    return (
        <div>
        <h1>ViewAllComponentsList</h1>
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f5f5f5",
        }}>
            {components&&components.map((component) => (
                <SingleComponentModel component={component}/>
            ))}
        </div>
        </div>
    );
}

export default ViewAllComponentsList;