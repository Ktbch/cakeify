import { TSubmitLogicParams } from "@/types/types"

export const submitLogic = async (submitLogicParams: TSubmitLogicParams) => {

    const { setResponse, setIsLoading, authSettingsParam, data, route, authContext, info } = submitLogicParams
    const { submit, formtype } = authSettingsParam

    setResponse(undefined)
    setIsLoading(true)

    const res = await submit(data, formtype)
    setIsLoading(false)
    console.log(res)
    setResponse(res)

    if (!res.status) return

    if (res?.userData) {
        authContext?.LoginUser(res.userData.authoriazationToken)
        route.push('/Products')
        info?.setinfo({ message: 'Login SuccesFull', type: 'success' })
        setTimeout(() => {
            info?.setinfo(undefined)
        }, 5000)
    }
}