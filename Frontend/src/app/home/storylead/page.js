export default function lead(){
    const data =[
        {
           createdOn:'16-08-24',
           leadStatus:'cold lead',
           name:'Anil Kumar',
           phone:'95504515130',
           stack:'lifeSkills',
           class:'BLR Class Room'
        },
        {
            createdOn:'17-08-24',
            leadStatus:'cold lead',
            name:'Anil Kumar',
            phone:'9587451263',
            stack:'FullStack-Python',
            class:'Online'
         },
         {
            createdOn:'18-08-24',
            leadStatus:'cold lead',
            name:'Anil Kumar',
            phone:'95504515130',
            stack:'lifeSkills',
            class:'BLR Class Room'
        },
    ];
    return(
     <main>
        <div className="constainer-lg border shadow-lg mt-5 p-5">
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="flex flex-col lg:flex-row lg:items-center gap-2 mb-4 lg:mb-0">
                <button className="text-2xl">456</button>
                <select className="text-2xl text-blue-400 border rounded">
                    <option value={""} className="text-lg text-black ">All Leads</option>
                    <option value={"hari"} className="text-lg text-black">Hari</option>
                    <option value={"Krishna"} className="text-lg text-black">Krishna</option>
                    <option value={"Jayanth"} className="text-lg text-black">Jayanth</option>
                </select>
                </div>
                <div className="flex flex-col lg:flex-row gap-2">
                   <select className=" hover:bg-blue-500 hover:text-white border rounded p-1">
                    <option className="">Create Lead</option>
                    <option className="">Create Lead</option>
                   </select>
                   <select className=" lg:hover:bg-blue-500 lg:hover:text-white  rounded p-1">
                    <option className="">Create Lead</option>
                    <option className="">Create Lead</option>
                   </select>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2 mt-4">
                <input type="text" placeholder="Search...." className="border rounded p-1 w-3/12 mt-2"/>
                <p className="flex gap-5 border rounded ">
                    <button className="hover:bg-blue-500 hover:text-white text-xl border-none rounded p-2 ">Table</button>
                    <button className="hover:bg-blue-500 hover:text-white text-xl  border-none rounded p-2 ">Kanban</button>
                </p>
            </div>
           
            <div className="overflow-x-auto pt-5">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-400">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"><input type="checkbox"/>Created on</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Lead Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Phone</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Stack</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">classMode</th>
     
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        {data.map(dataAt=>(
            <tr>
            <td className="px-6 py-4 whitespace-nowrap"><input type="checkbox"/>{dataAt.createdOn}</td>
            <td className="px-6 py-4 whitespace-nowrap">{dataAt.leadStatus}</td>
            <td className="px-6 py-4 whitespace-nowrap">{dataAt.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{dataAt.phone}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-orange-500 text-black">{dataAt.stack}</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-rose-500 text-black">{dataAt.class}</span>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
        </div>
     </main>
    )
}