import '@testing-library/jest-dom'
import { AuthActions, AuthRepository } from '../authUtil'
import { SendRequest, IRESPONSE } from '@/types/types'
import { sendRequest } from '../requestHandler'
import { createSessions } from '@/app/lib/sessions'



//  creates a mock of my request fuction so it would not send the request multiple times
jest.mock('../requestHandler', () => {
    sendRequest: jest.fn()
})
// 
jest.mock('@/app/lib/sessions', () => {
    createSessions: jest.fn()
})

describe("AuthRepository", () => {
    let authRepository: AuthRepository;
    const mockData: SendRequest = { email: 'kayode@gmail.com', password: 'password' };
    const mockType = "login";

    const setupMockResponse = (response: any) => {
        (sendRequest as jest.Mock).mockResolvedValue(response);
    };

    const setupMockError = (error: Error) => {
        (sendRequest as jest.Mock).mockRejectedValue(error);
    };

    const mockSuccessfulResponse = {
        ok: true,
        json: jest.fn().mockResolvedValue({
            message: "Authentication successful",
            user: { /* user details */ },
        }),
    };

    const mockErrorResponse = {
        ok: false,
        json: jest.fn().mockResolvedValue({
            message: "Invalid credentials",
        }),
    };

    beforeAll(() => {
        authRepository = new AuthRepository();
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it("should authenticate successfully and create a session", async () => {
        // Setup
        setupMockResponse(mockSuccessfulResponse);

        // Execution
        const result = await authRepository.authenticate(mockData, mockType);

        // Assertion
        expect(sendRequest).toHaveBeenCalledWith(mockData, mockType);
        expect(mockSuccessfulResponse.json).toHaveBeenCalled();
        expect(createSessions).toHaveBeenCalledWith(JSON.stringify({
            message: "Authentication successful",
            user: { /* user details */ },
        }));
        expect(result).toEqual({
            status: true,
            message: "Authentication successful",
        });
    });

    it("should handle validation errors", async () => {
        // Setup
        setupMockResponse(mockErrorResponse);

        // Execution
        const result = await authRepository.authenticate(mockData, mockType);

        // Assertion
        expect(sendRequest).toHaveBeenCalledWith(mockData, mockType);
        expect(mockErrorResponse.json).toHaveBeenCalled();
        expect(result).toEqual({
            status: false,
            message: " Validation Error : Invalid credentials",
        });
    });

    it("should handle network errors", async () => {
        // Setup
        setupMockError(new TypeError("fetch failed"));

        // Execution
        const result = await authRepository.authenticate(mockData, mockType);

        // Assertion
        expect(sendRequest).toHaveBeenCalledWith(mockData, mockType);
        expect(result).toEqual({
            status: false,
            message: "Network error: Please check your internet connection",
        });
    });
});

describe("AuthActions", () => {
    let authActions: AuthActions;
    let authRepository: AuthRepository;
    const mockData: SendRequest = {
        email: 'kayode@gmail.com', password: 'password'
    };
    const mockType = "login";

    beforeAll(() => {
        authRepository = new AuthRepository();
        authActions = new AuthActions(authRepository);
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it("should call repository authenticate method", async () => {
        // Setup
        const authenticateSpy = jest.spyOn(authRepository, "authenticate").mockResolvedValue({
            status: true,
            message: "Authentication successful",
        });

        // Execution
        const result = await authActions.authAction(mockData, mockType);

        // Assertion
        expect(authenticateSpy).toHaveBeenCalledWith(mockData, mockType);
        expect(result).toEqual({
            status: true,
            message: "Authentication successful",
        });
    });
});