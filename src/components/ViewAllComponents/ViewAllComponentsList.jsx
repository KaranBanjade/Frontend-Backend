import { useState } from "react";
import SingleComponentModel from "./SingleComponentModel";
const ViewAllComponentsList = () => {
    const temp = [
        {
            "connObj": {
              "name": "hackaminer",
              "username": "facproadmin",
              "password": "#facproRDS2022#",
              "host": "database-1.czb0dk8ckwzf.us-east-1.rds.amazonaws.com",
                "port": "3306",
                "type" : "mysql"

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
              },
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
          {
            "connObj": {
              "name": "hackaminer",
              "user": "facproadmin",
              "pass": "#facproRDS2022#",
              "host": "database-1.czb0dk8ckwzf.us-east-1.rds.amazonaws.com"
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
          }
    ]
    const [components, setComponents] = useState(temp);
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
            {components.map((component) => (
                <SingleComponentModel component={component}/>
            ))}
        </div>
        </div>
    );
}

export default ViewAllComponentsList;