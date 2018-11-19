// import { Robo } from "./cRobo";
// import * as React from "react";
// import { shallow } from "enzyme";

// let wrapper;
// beforeEach(() => {
//   const mockProps = {
//     onRequestRobots: jest.fn(),
//     robots: [
//       {
//         id: 1,
//         name: "Leanne Graham",
//         username: "Bret",
//         email: "Sincere@april.biz"
//       }
//     ],
//     searchField: "",
//     isPending: false
//   };

//   wrapper = shallow(<Robo {...mockProps} />);
// });

// describe("Robo container", () => {
//   it("renders mainpage without crashing", () => {
//     expect().toMatchSnapshot();
//   });

// //   it("filter robots EMPTY LIST correctly", () => {
// //     expect(wrapper.instance().filterRobots()).toEqual([]);
// //   });
//   it("filter robots 1 USER correctly", () => {
//     expect(wrapper.instance().filterRobots()).toEqual([
//       {
//         id: 1,
//         name: "Leanne Graham",
//         username: "Bret",
//         email: "Sincere@april.biz"
//       }
//     ]);
//   });
// });
