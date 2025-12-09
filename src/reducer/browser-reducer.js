export const browserReducer = (state,payload)=>{
       switch(type){
         case "NAME":
            return {
                ...state,
                name:payload
            }
            default:
                return state
       }
}