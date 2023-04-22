const SidebarComponent = (props) => {
    console.log(props.models)
    return (
        <div className="sidebar">
            <ul className="list">
                <li className="list-item">
                        <i className="fas fa-home"></i>
                        <span>Project Settings</span>
                </li>
                <li className="list-item">
                        <i className="fas fa-info-circle"></i>
                        <span>Database Settings</span>
                </li>
                <li className="list-item">
                        <i className="fas fa-address-book"></i>
                        <span>Models</span>
                        <ul>
                        {
                    props.models&&props.models.length>0&&props.models.map((value,key)=>{
                        if (value.length>0 )
                            return(
                                
                            <li className="list-item">
                                <i className="fas fa-address-book"></i>
                                <span>{value}</span>
                            </li>
                        )
                    })
                }
                </ul>
                </li>
            </ul>
        </div>

    )
}

export default SidebarComponent