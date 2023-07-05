import EmailPasswordNode from "supertokens-node/recipe/emailpassword"
import SessionNode from "supertokens-node/recipe/session"
import { appInfo } from "./appInfo"
import { TypeInput } from "supertokens-node/types"

export const backendConfig = (): TypeInput => {
    return {
        framework: "express",
        supertokens: {
            connectionURI: process.env.CONNECTION_URI,
            apiKey: process.env.APIKEY,
        },
        appInfo,
        recipeList: [EmailPasswordNode.init(), SessionNode.init()],
        isInServerlessEnv: true,
    }
}
