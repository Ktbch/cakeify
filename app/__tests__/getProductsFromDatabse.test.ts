import '@testing-library/jest-dom'
import { getProductsFromDataBase, IProductTypeResponse } from '../(Products)/Products/utils/getProductsFromDatabse'
// first create a mock request so it wount request two times

jest.mock('../(Products)/Products/utils/getProductsFromDatabse', () => {
    getProductsFromDataBase: jest.fn()
})



describe('getProductsFromDatabse', () => {


}
)
