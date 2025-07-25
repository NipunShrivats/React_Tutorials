import React, { useState } from "react";

import ReactBasic_tut_1 from "./Components/1_Basic/Components_Fragments_1";
import DynamicValues_2 from "./Components/1_Basic/DynamicValues_2";
import ConditionalRendring_3 from "./Components/1_Basic/ConditionalRendring_3";
import ImportExport from "./Components/1_Basic/Import_Export_4/Master";
// -----------------------------------------------------
import NetflixSeries from "./Components/2_map_in_JSX/Main";
// -----------------------------------------------------
import PropsInJSX from "./Components/3.1_Props/Main";
import User from "./Components/3.3_Props/User";
let userObject = {
  name: "Kapil Kumar",
  age: "23",
  email: "kapil69kumar@gmail.com",
};

let collegeList = ["IIT", "GEHU", "DU", "IP", "NIT"];

import User3_2 from "./Components/3.2_props/User";

import Parent from "./Components/3.4_props/Parent";
import Child from "./Components/3.4_props/Child";

import AddUser from "./Components/3.5_LiftingStateUp/AddUser";
import DisplayUser from "./Components/3.5_LiftingStateUp/DisplayUser";

// -----------------------------------------------------
import ConditionalStyling from "./Components/4_Styling/Conditional_styling/Conditional_Styling";
import Module from "./Components/4_Styling/CSS_Modules/Module";
import StyledComponent from "./Components/4_Styling/Styled_Components/Styled_Components";
import Tailwind from "./Components/4_Styling/Tailwind/Tailwind";
// -----------------------------------------------------
import EventHandling from "./Components/5_Event_Handling/EventHandling_1";
import EventsAsProps from "./Components/5_Event_Handling/EventsAsProps_2";
import EventsPropagation from "./Components/5_Event_Handling/EventsPropagation_3";
// -----------------------------------------------------
import ReactState from "./Components/6_UseState_Hook/Main";
import DerivedState from "./Components/6_UseState_Hook/DerivedState";
import LiftingStateUp from "./Components/6_UseState_Hook/LiftingStateUp";
import UseState_Challange from "./Components/6_UseState_Hook//UseState_Challange";
// -----------------------------------------------------
import ToggleSwitch from "./Components/7_MiniProject_ToggleSwitch/ToggleSwitch";
// -----------------------------------------------------
import Todo from "./Components/8_MiniProjecft_TodoApp/Todo";
// -----------------------------------------------------
import SpreadOperator from "./Components/9_Spread_Operator/Main";
// -----------------------------------------------------
import ShotCircuit from "./Components/10_ShotCircuit_Evaluation/ShotCircuit";
// -----------------------------------------------------
import Controlled from "./Components/11_React_Forms/1_Controlled_Uncontrolled/Controlled";
import Uncontrolled from "./Components/11_React_Forms/1_Controlled_Uncontrolled/Uncontrolled";
import HowNotTo from "./Components/11_React_Forms/2_RegistrationForm/HowNotTo";
import HowTo from "./Components/11_React_Forms/2_RegistrationForm/HowTo";
import LoginForm from "./Components/11_React_Forms/3_LoginForm/LoginForm";
import ContactForm1 from "./Components/11_React_Forms/4_ContactForm/ContactForm1";
import ContactForm2 from "./Components/11_React_Forms/4_ContactForm/ContactForm2";

import FormButtons from "./Components/11_React_Forms/5_FormButtons/FormButtons";
// -----------------------------------------------------
import UseEffectHook from "./Components/12_UseEffect_Hook/UseEffectHook";
import UseEffect_Challenge from "./Components/12_UseEffect_Hook/UseEffect_Challenge";
import Cleanup from "./Components/12_UseEffect_Hook/Cleanup";
// -----------------------------------------------------
import HowNotToFetchAPI from "./Components/13_Fetch_API/HowNotToFetchAPI";
import HowToFetchAPI from "./Components/13_Fetch_API/HowToFetchAPI";
import PokemonDemo from "./Components/13_Fetch_API/PokemonDemo";
import PokemonAPI from "./Components/13_Fetch_API/Pokemon_API/PokemonAPI";
import FetchPractice from "./Components/13_Fetch_API/FetchPractice";
// -----------------------------------------------------
import UseRef_Hook from "./Components/14_UseRef_Hook/UseRef";
// -----------------------------------------------------
import ForwardRef_Hook from "./Components/15_ForwardRef_Hook/ForwardRef";
// -----------------------------------------------------
import UseId_Hook from "./Components/16_UseId_Hook/UseId";
// -----------------------------------------------------
import PropDrilling from "./Components/17_Prop_Drilling/PropDrilling";
// -----------------------------------------------------
// import { BioProvider } from "./Components/18_Context_API/Index";
// import Home from "./Components/18_Context_API/Home";
// import Services from "./Components/18_Context_API/Services";
// -----------------------------------------------------
import { BioProvider } from "./Components/19_Custom_Hooks/Index";
import Home from "./Components/19_Custom_Hooks/Home";
import Services from "./Components/19_Custom_Hooks/Services";
// -----------------------------------------------------
// import { BioProvider } from "./Components/20_Use_API/Index";
// import Home from "./Components/20_Use_API/Home";
// import Services from "./Components/20_Use_API/Services";
// -----------------------------------------------------
import DarkMode from "./Components/21_DarkMode/DarkMode";
import { ThemeProvider } from "./Components/21_DarkMode/Index";
// -----------------------------------------------------
import UseReducer_Hook from "./Components/22_UseReducer_Hook/UseReducer";
// -----------------------------------------------------
import ReactMemo from "./Components/23_Memo/ReactMemo/ReactMemo";
import UseMemo_Hook from "./Components/23_Memo/UseMemo_Hook/UseMemo_Hook";
import Together from "./Components/23_Memo/UsingTogether/ReactMemo";
// -----------------------------------------------------
import UseCallback_Hook from "./Components/24_UseCallBack_Hook/UseCallback";
import UseLayoutEffectHook from "./Components/12_UseEffect_Hook/UseLayoutEffectHook";
import College from "./Components/3.3_Props/College";
import Student from "./Components/3.3_Props/Student";
import Wrapper from "./Components/3.2_props/Wrapper";

// -----------------------------------------------------

export default function App() {
  // for part 3.1 props
  const [student, setStudent] = useState();

  // for part 3.4
  const [user, setUser] = useState("");
  return (
    <>
      {/* ---------------------- 1. Basic ---------------------- */}
      {/* <ReactBasic_tut_1 /> */}
      {/* <DynamicValues_2 /> */}
      {/* <ConditionalRendring_3 /> */}
      {/* <ImportExport /> */}

      {/* ---------------------- 2. React looping - map() method ---------------------- */}
      {/* <NetflixSeries /> */}

      {/* ---------------------- 3. Props ---------------------- */}
      {/* <PropsInJSX /> */}

      {/* part1 */}
      {/* <User name={"Anil Sidhu"} age={"22"} /> */}

      {/* part2 - passing props in object */}
      {/* <User userDetails={userObject} />
      <College collegeName={collegeList} />

      {student && <Student stuName={student} />}
      <button
        onClick={() => setStudent("Monkey Kapoor")}
        style={{ border: "2px solid red" }}
      >
        click to add
      </button>

      <button onClick={() => setStudent()} style={{ border: "2px solid red" }}>
        click to remove
      </button> */}

      {/* part3 - passing props in object */}
      {/* <User3_2 name={"Anil Sidhu"} />
      <User3_2 name={"Sam"} />
      <User3_2 />

      <Wrapper color={"orange"}>
        <h1>yeh kamal ka tha!</h1>
      </Wrapper> */}

      {/* part 4 -child to parent */}

      {/* <Parent /> */}

      {/* part 5 - lifting state up */}
      {/* <AddUser user={user} setUser={setUser} /> */}
      {/* <DisplayUser user={user} setUser={setUser} /> */}

      {/* ---------------------- 4. Conditional Styling ---------------------- */}
      {/* <ConditionalStyling /> */}
      {/* <Module /> */}
      {/* <StyledComponent /> */}
      {/* <Tailwind /> */}

      {/* ---------------------- 5. EventHandling ---------------------- */}
      {/* <EventHandling /> */}
      {/* <EventsAsProps /> */}
      {/* <EventsPropagation /> */}

      {/* ---------------------- 6. UseState Hook ---------------------- */}
      {/* <ReactState /> */}
      {/* <SiblingComponent /> */}
      {/* <DerivedState /> */}
      {/* <LiftingStateUp /> */}
      {/* <UseState_Challange /> */}

      {/* ---------------------- 7. Mini Project - ToggleSwitch ---------------------- */}
      {/* <ToggleSwitch /> */}

      {/* ---------------------- 8. MiniProjecft_TodoApp ---------------------- */}
      {/* <Todo /> */}
      {/* <SpreadOperator /> */}

      {/* ---------------------- 10. ShotCircuit_Evaluation ---------------------- */}
      {/* <ShotCircuit /> */}

      {/* ---------------------- 11. Forms ---------------------- */}
      {/* ---------- a. Controlled_Uncontrolled ----------*/}
      {/* <Controlled /> */}
      {/* <Uncontrolled /> */}
      {/* ---------- b. Registration form ----------*/}
      {/* <HowNotTo /> */}
      {/* <HowTo /> */}
      {/* ---------- c. Login form ----------*/}
      {/* <LoginForm /> */}
      {/* ---------- d. Contact Form ----------*/}
      {/* <ContactForm1 /> */}
      {/* <ContactForm2 /> */}
      {/* <FormButtons /> */}

      {/* ---------- 12. UseEffect Hook ----------*/}
      {/* <UseEffectHook /> */}
      {/* <UseEffect_Challenge /> */}
      {/* <Cleanup /> */}
      {/* <UseLayoutEffectHook /> */}

      {/* ---------- 13. Fetching API ----------*/}
      {/* <HowNotToFetchAPI /> */}
      {/* <HowToFetchAPI /> */}
      {/* <PokemonDemo /> */}
      {/* <PokemonAPI /> */}
      <FetchPractice />

      {/* ---------- 14. useRef Hook ----------*/}
      {/* <UseRef_Hook /> */}

      {/* ---------- 15. forwardRef Hook ----------*/}
      {/* <ForwardRef_Hook /> */}

      {/* ---------- 16. useId Hook ----------*/}
      {/* <UseId_Hook /> */}

      {/* ---------- 17. Prop Drilling ----------*/}
      {/* <PropDrilling /> */}

      {/* ---------- 18. Context API ----------*/}
      {/* <BioProvider>
        <Home />
        <Services />
      </BioProvider> */}

      {/* ---------- 19. Custom Hooks ----------*/}

      {/* <BioProvider>
        <Home />
        <Services />
      </BioProvider> */}

      {/* ---------- 20. use API/Hook ----------*/}
      {/* <BioProvider>
        <Home />
        <Services />
      </BioProvider> */}

      {/* ---------- 21. DarkMode - LightMode ----------*/}
      {/* <ThemeProvider>
        <DarkMode />
      </ThemeProvider> */}

      {/* ---------- 22. useReducer Hook ----------*/}
      {/* <UseReducer_Hook /> */}

      {/* ---------- 23. ReactMemo & useMemo Hook ----------*/}
      {/* <ReactMemo /> */}
      {/* <UseMemo_Hook /> */}
      {/* <Together /> */}

      {/* ----------  24. useCallback Hook ----------*/}
      {/* <UseCallback_Hook /> */}
    </>
  );
}

// function SiblingComponent() {
//   console.log("Sibling Component rendered");
//   return <div>Sibling Component</div>;
// }
