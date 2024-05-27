import { TProductType } from "@/types/types"

export type IProductTypeResponse = {
    data: TProductType[] | null
    message?: string
    description?: string
    status: boolean
}


export const getProductsFromDataBase = async () => {
    try {
        const productUrl = process.env.PRODUCT_URL!
        const response = await fetch('http://localhost:5000/api/products')

        const res = await response.json()

        const successResponse: IProductTypeResponse = {
            data: res,
            message: 'success',
            status: true,
        }
        return successResponse
    } catch (error) {
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
            const errorResponse: IProductTypeResponse = {
                data: null,
                message: 'Network Error: Please check Your Internet Connection then Refesh The page',
                description: 'this error will happen if the user cannot connect to server',
                status: false

            }
            return errorResponse
        } else {
            // programing error or server error
            const errorResponse: IProductTypeResponse = {
                data: null,
                message: 'Something went worng',
                description: 'this will mostly occur when there is a programming error',
                status: false
            }
            return errorResponse
        }

    }
}
