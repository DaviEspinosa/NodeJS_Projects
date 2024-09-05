import mongoose from 'mongoose'

const closeConnection = async()=>{
    
    if (mongoose.connection.readyState>0) {
        mongoose.disconnect    
    }

}

export default closeConnection;