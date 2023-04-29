const AddRow = (inputFields,setInputFields,counter,setCounter,setModels,  TableFormComponent ) => {
    let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setInputFields((prev)=>{
        return {...prev, [id]: <TableFormComponent setModels={setModels} setCounter={setCounter} id = {id} setInputFields = {setInputFields} />};
    })
    // console.log(inputFields)
}

const RemoveRow = (setInputFields, delId) =>{
    setInputFields((prev)=>{
        let temp = {...prev};
        delete temp[delId];
        return temp;
    })
}
// export default AddRow;
const TableFunctions = {AddRow, RemoveRow};
// export {AddRow, RemoveRow}; 
export default TableFunctions;