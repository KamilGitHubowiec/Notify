// import { getNotes } from "../API";
function getNotes() {
  return fetch("/notes")
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(json => json);
}

beforeAll(() => {
  require("whatwg-fetch")
})

describe("Notes API", () => {
  test("it returns an array of users", async () => {
    const expected = [];
    jest.spyOn(window, "axios").mockImplementation(() => {
      const fetchResponse = {
        ok: true,
        json: () => Promise.resolve(expected)
      };
      return Promise.resolve(fetchResponse);
    })

    const json = await getNotes();
    expect(json).toMatchObject(expected);
  })
})










// jest.mock("axios");
// jest.mock("../API");
// , () => ({
  //   __esModule: true,
  //   getNotes: jest.fn(() => "Mocked someFunction!")
  // }));
// import { getNotes } from "../API";
  
// it("Tests the REST API calls", async () => {
  // const mockNote = {
  //   title: "test note",
  //   content: "test note",
  //   version: 0,
  //   createdAt: Date.now(),
  //   updatedAt: new Date(),
  //   history: []
  // }
  // const mockedNotes = [];
  // getNotes.mockResolvedValueOnce(mockedNotes);

  // expect(getNotes).toHaveBeenCalledTimes(1);
  // const data = await axios.get("/notes");
  // const data = await getNotes();
  // expect(data).toBe("Mocked someFunction!")
  // console.log(data);
// })