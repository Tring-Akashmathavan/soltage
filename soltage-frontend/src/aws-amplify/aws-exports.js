export const awsConfig = {
    Auth:{
        Cognito:{
            userPoolClientId : import.meta.env.VITE_USER_POOL_ID,
            identityPoolId : import.meta.env.VITE_IDENTITY_POOL_ID,
            region : import.meta.env.VITE_REGION
        }
    }
}