export default function WorkExpBox() {
  return (
    <div className="flex w-full flex-col h-80 bg-red-600 mt-12 rounded-t-2xl">
      <div className="flex w-full h-20 text-white justify-center items-center">
        Work Experience
      </div>
      <div className="flex w-full bg-red-700 h-full p-4">
        <div className="flex w-full flex-col">
          <div className="flex w-full h-fit justify-between border-b-2 border-white">
            <div className="flex flex-col">
              <span>Accenture</span>
              <span className="text-xs">Advanced App Engineering Analyst</span>
            </div>
            <span className="text-sm">2022-Present</span>
          </div>
          <div className="flex flex-col w-full space-y-2 py-1">
            <div className="flex w-full bg-red-800 rounded-md text-xs px-2 py-2">
              - Internationalization and improvements of 10 Microfrontends and 3
              Hosts
            </div>
            <div className="flex w-full bg-red-800 rounded-md text-xs px-2 py-2">
              - Improvements in UI component library under DAB(Digital Asset
              Basket)
            </div>
            <div className="flex w-full bg-red-800 rounded-md text-xs px-2 py-2">
              - Led creation of code generator for Nestjs based microservices
            </div>
            <div className="flex w-full bg-red-800 rounded-md text-xs px-2 py-2">
              - Authored a comprehensive SOP on creation and integration of
              microfrontends and hosts
            </div>
            <div className="flex w-full bg-red-800 rounded-md text-xs px-2 py-2">
              - Several POCs on React native based application features
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
