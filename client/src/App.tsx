import StageList from "./components/StageList";
import { StatusEnum } from "./utils/enums";

const test = [
  {
    id: "cool",
    name: "Tets me",
    status: StatusEnum.COMPLETED,
    tasks: [
      {
        id: "1",
        title: "Cool",
        isCompleted: false,
        stageId: "123",
      },
      {
        id: "2",
        title: "Awesome",
        isCompleted: false,
        stageId: "123",
      },
    ],
  },
];

function App() {
  return (
    <main className=" flex flex-row h-screen mx-auto p-16 max-w-3xl">
      <div className="bg-gray-200 p-8">
        <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12 bg-white rounded-lg shadow-md h-full overflow-y-auto ">
          <h1 className="text-4xl font-bold text-slate-900 pt-8">
            My Startup Progress
          </h1>
          <StageList stages={test} />
        </div>
      </div>
    </main>
  );
}

export default App;
