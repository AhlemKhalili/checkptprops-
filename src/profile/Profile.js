import PropTypes from 'prop-types';
const Profile=({alrt, name ,bio="KJGGGGGGGG",profession,children})=> {
    
    return(<>
        <h3>{name}</h3>
        <p>{bio}</p>
        <h4>{profession}</h4>
        {children}
        <br></br>
        <button onClick={alrt}>
            clickme
        </button>
        
        </>)
        
}

export default Profile