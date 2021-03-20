const mongoose = require("mongoose");
const dbHandler = require("./db-handler");

// const noteSchemaTest = require("../models/noteModelTest");
const noteControllerTest = require("../controllers/noteControllerTest");

// Connect to a new in-memory database before running any tests.
beforeAll(async () => await dbHandler.connect());

// Clear all test data after every test.
afterEach(async () => await dbHandler.clearDatabase());

// Remove and close the db and server.
afterAll(async () => await dbHandler.closeDatabase());

// Note test suite.
describe("note", () => {
    // Tests that a valid note can be created through the addNote without throwing any errors.
    it("can be created", async () => {
        expect(async () => await noteControllerTest.create(validNote)).not.toThrow();
    });

    it("can be found", async () => {
        expect(async () => await noteControllerTest.get(validNote)).not.toThrow();
    });

    it("can be deleted", async () => {
        expect(async () => await noteControllerTest.delete(validNote)).not.toThrow();
    });
});

// Complete product example.
const validNote = {
    title: "test title",
    content: "test content",
};