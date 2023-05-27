const SidebarComponent = (props) => {
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
                        
                    </ul>
                </li>
            </ul>
        </div>

    )
}

export default SidebarComponent