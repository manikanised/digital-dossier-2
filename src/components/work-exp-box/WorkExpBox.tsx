export default function WorkExpBox() {
  return (
    <div className="flex w-full flex-col h-fit bg-red-600 rounded-2xl">
      <div className="flex w-full h-16 text-white justify-center items-center">
        Work Experience
      </div>
      <div className="flex w-full bg-red-700 h-full text-white rounded-b-2xl pb-4">
        <div className="flex w-full flex-col px-4">
          <div className="flex w-full h-fit justify-between border-b-2 border-white">
            <div className="flex flex-col">
              <span>Accenture</span>
              <span className="text-xs">Advanced App Engineering Analyst</span>
            </div>
            <span className="text-sm">2022-Present</span>
          </div>
          <div className="flex flex-col w-full space-y-4 py-1">
            <div className="flex w-full rounded-md text-xs px-2">
              - Internationalization and improvements of 10 Microfrontends and 3
              Hosts
            </div>
            <div className="flex w-full rounded-md text-xs px-2">
              - Improvements in UI component library under DAB(Digital Asset
              Basket)
            </div>
            <div className="flex w-full rounded-md text-xs px-2">
              - Led creation of code generator for Nestjs based microservices
            </div>
            <div className="flex w-full rounded-md text-xs px-2">
              - Authored a comprehensive SOP on creation and integration of
              microfrontends and hosts
            </div>
            <div className="flex w-full rounded-md text-xs px-2">
              - Several POCs on React native based application features
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
