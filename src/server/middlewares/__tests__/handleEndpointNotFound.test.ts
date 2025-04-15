import { Request } from "express";
import { Response } from "express";
import handleEndpointNotFound from "../handleEndpointNotFound.js";

describe("Given the handleEndpointNotFound middleware", () => {
  describe("When it receives a response", () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    afterEach(() => {
      jest.clearAllMocks();
    });

    test("Then it should call the received response's method status with 404", () => {
      handleEndpointNotFound(req, res as Response);

      expect(res.status).toHaveBeenCalledWith(404);
    });

    test("Then it should call the receives response's method json with an 'Endpoint not found' error", () => {
      handleEndpointNotFound(req, res as Response);

      expect(res.json).toHaveBeenLastCalledWith({
        error: "Endpoint not found",
      });
    });
  });
});
