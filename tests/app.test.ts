import supertest from "supertest";
import app, { init } from "./app";
import { cleanDb } from "./helpers";
import { faker } from '@faker-js/faker';


beforeAll(async () => {
    await init();
    await cleanDb();
  });

const server = supertest(app);

describe("api", () => {
    it("participants", async () => {
     
        const result = (await server.post("/participants")).body({
            name: faker.lorem.word(),
            balance: 3500
        });
        
    
        expect(result.statusCode).toBe(401);

    });
  
});

describe("api", () => {
    it("games", async () => {
     
        const result = (await server.post("/games")).body({
            homeTeamName: faker.lorem.word(),
            awayTeamName: faker.lorem.word()
        });
        
    
        expect(result.statusCode).toBe(201);

    });
  
});

describe("bets", () => {
    it("testing bets with negative value", async () => {
     
        (await server.post("/participants")).body({
            name: faker.lorem.word(),
            balance: 5000
        });

        (await server.post("/game")).body({
            homeTeamName: faker.lorem.word(),
            awayTeamName: faker.lorem.word()
        });

        const result = (await server.post("/game")).body({
            homeTeamScore: 1,
            awayTeamScore: 0, 
            amountBet: -1, 
            gameId: 1,  
            participantId: 1 
        });
        
    
        expect(result.statusCode).toBe(401);
    });
    it("testing bets with zero", async () => {
     
        (await server.post("/participants")).body({
            name: faker.lorem.word(),
            balance: 5000
        });

        (await server.post("/game")).body({
            homeTeamName: faker.lorem.word(),
            awayTeamName: faker.lorem.word()
        });

        const result = (await server.post("/game")).body({
            homeTeamScore: 1,
            awayTeamScore: 0, 
            amountBet: 0, 
            gameId: 1,  
            participantId: 1 
        });
        
    
        expect(result.statusCode).toBe(401);
    });
    it("testing bets value major than balance", async () => {
     
        (await server.post("/participants")).body({
            name: faker.lorem.word(),
            balance: 5000
        });

        (await server.post("/game")).body({
            homeTeamName: faker.lorem.word(),
            awayTeamName: faker.lorem.word()
        });

        const result = (await server.post("/game")).body({
            homeTeamScore: 1,
            awayTeamScore: 0, 
            amountBet: 10000, 
            gameId: 1,  
            participantId: 1 
        });
        
    
        expect(result.statusCode).toBe(401);
    });
  
});