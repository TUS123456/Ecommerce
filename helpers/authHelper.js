import bcrypt from 'bcrypt';

export const hashPassword=async(password)=>{
    try{
        const saltRound=10;
        const hashedvalue=await bcrypt.hash(password,saltRound);
        return hashedvalue;
    }catch(err){
        console.log(err);
    }
};

export const comparePassword=async(password,hashedvalue)=>{
    return bcrypt.compare(password,hashedvalue);
}

