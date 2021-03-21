const mongoose = require("mongoose");
const db = require("./db-handler");
const app = require("./app");
const request = require("supertest");
const noteControllerTest = require("./noteControllerTest");
const data = require("./data"); 

const agent = request.agent(app);

const validNote = {
    title: "test title",
    content: "test content"
};

// Connect to a new in-memory database before running any tests.
beforeAll(async () => await db.connect());

// Clear all test data after every test.
afterAll(async () => await db.clearDatabase());

// Remove and close the db and server.
afterAll(async () => await db.closeDatabase());

describe("POST /notes", () => {
    test("It should store a new note", async () => {
        agent.post("/")
        .send(validNote)
        .expect(201)
        .then(res => {
            expect(res.body._id).toBeTruthy();
        })
    })
})

// Note test suite.
// describe("note", () => {
    // it("POSTS, CREATES, DELETES", async () => {
    //     const response = await request(app).post("/notes").send(validNote);

    //     expect(response.statusCode).toBe(201);
    // })

    // it("can be created", async () => {
        // expect(async () => await noteControllerTest.addNote(validNote)).not.toThrow();
        // const newNote = await noteControllerTest.addNote(validNote);
        // console.log(newNote);
    // });

    // it("can be found", async () => {
    //     expect(async () => await noteControllerTest.getNotes()).not.toThrow();
    // });

    // it("can be deleted", async () => {
    //     expect(async () => await noteControllerTest.deleteNote(validNote)).not.toThrow();
    // });
// });
