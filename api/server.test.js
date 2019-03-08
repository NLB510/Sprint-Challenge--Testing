const request = require("supertest");

const server = require("./server");

describe("server.js", () => {
  it("should setup testing the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET", () => {
    it("should return status 200 on good request", async () => {
      const res = await request(server).get("/");

      expect(res.status).toBe(200);
    });

    it("should return json as the type", async () => {
      const res = await request(server).get("/");

      expect(res.type).toBe("application/json");
    });

    it("should return the correct message response", async () => {
      const res = await request(server).get("/");

      expect(res.body).toEqual({ api: "up" });
    });
  });

  describe('POST', () => {

    it("should return status 201 on good request", async () => {
      const res = await request(server).post("/");

      expect(res.status).toBe(201);
    });


  })



});
