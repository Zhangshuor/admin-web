import {useAxios} from "@/api/index.ts";

export function userListApi(){
    return useAxios.get("/user/list")
}