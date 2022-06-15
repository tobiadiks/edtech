import { useEffect, useState } from "react";
import { userService } from "services/user/user.service";

const useAuth=()=>{
    const [user, setUser]=useState<{}>({});
    useEffect(()=>{
        setUser(userService.userValue)
    },[])
return user;
}

export default useAuth;