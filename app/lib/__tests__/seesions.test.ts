import '@testing-library/jest-dom'
import { createSessions } from '../sessions'


jest.mock('../sessions', () => {
    createSessions: jest.fn
})

describe('sessions actions tests', () => {
    const createSessionsTest = createSessions('a test token')
    it('should return true', () => {
        expect(createSessionsTest).toBe(true)
    })
})
