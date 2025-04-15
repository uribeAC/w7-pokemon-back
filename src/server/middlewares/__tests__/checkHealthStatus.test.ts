import { Request, Response } from "express";
import checkHealthStatus from "../checkHealthStatus.js";

describe("Given the checkHealthStatus middleware", () => {
  describe("When it receives a response", () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    afterEach(() => {
      jest.clearAllMocks();
    });

    test("Then it should call the receives response's method status with 200", () => {
      checkHealthStatus(req, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test("Then it should call the receives response's method json with a 'pong 🏓' message", () => {
      checkHealthStatus(req, res as Response);

      expect(res.json).toHaveBeenCalledWith({ message: "pong 🏓" });
    });
  });
});
