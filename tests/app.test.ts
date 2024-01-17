import supertest from "supertest";
import app from "./app";

const server = supertest(app);

describe("api", () => {
    it("health", async () => {
     
        const result = await server.post("/participants")
    
        
    });
  
});