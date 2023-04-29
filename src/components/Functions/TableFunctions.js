const AddRow = (inputFields,setInputFields,counter,setCounter,setModels,  TableFormComponent ) => {
    let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setInputFields((prev)=>{
        return {...prev, [id]: <TableFormComponent setModels={setModels} setCounter={setCounter} id = {id} />};
    })
    console.log(inputFields)
}

export default AddRow;