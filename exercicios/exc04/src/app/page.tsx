import { students } from "./data/students";

const Page = () => {

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-5">

      <table className="w-3/4 table-auto">
        <thead className="bg-slate-700 text-lg ">
          <tr>
            <th className="text-start p-3">Name</th>
            <th className="text-start">Status</th>
            <th className="text-start">Grade1</th>
            <th className="text-start">Grade2</th>
            <th className="text-start">Final grade</th>
          </tr>
        </thead>
        <tbody className="bg-slate-300 text-black">
          {students.map(student =>
            <tr className="border-b border-gray-400 ">
              <th className="flex items-center justify-start mb-4 gap-2 text-start p-2">
                <img src={student.avatar} alt="" className="rounded-full w-16" />
                <div className="flex flex-col items-start">
                  <span className="font-bold">{student.name}</span>
                  <span className="font-light">{student.email}</span>
                </div>
              </th>
              <th>
                <div className="text-start">
                  {student.active ? <span className="bg-green-600 p-1 rounded text-white">Active</span> :
                    <span className="bg-red-600 p-1 rounded text-white">Inactive</span>}
                </div>
              </th>
              <th className="text-start">
                {student.grade1}
              </th>
              <th className="text-start">
                {student.grade2}
              </th>
              <th className="text-start font-bold">{Math.floor((student.grade1 + student.grade2) / 2) > 6 ?
                Math.floor((student.grade1 + student.grade2) / 2) :
                "--"
              }</th>
            </tr>
          )}
        </tbody>
      </table>

    </div>

  );
}

export default Page;