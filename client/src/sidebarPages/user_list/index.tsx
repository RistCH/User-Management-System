import Sidebar from "../../components/sidebar/index.tsx";

type Props = {}

const UserList = (props: Props) => {;
  return (
    <div className="flex bg-indigo-dye">
      <Sidebar />
        <div className="flex
          flex-col
          px-4
          py-3
          container-fluid">
            <div className="text-4xl 
            text-white 
            pl-4 
            px-3 
            font-bold">User List</div>

            <div className="flex flex-row my-5">
              <div className="bg-white-10 
              w-7/8
              h-90
              my-2
              mx-3
              px-4
              rounded-md
              drop-shadow-xl">
                  <table className="grid 
                  grid-cols-1
                  border-2
                  border-indigo-dye
                  rounded-md
                  mt-4
                  table-auto">
                    <thead className="border-b-2
                    border-indigo-dye
                    p-3">
                      <tr className="grid 
                      grid-cols-6
                      gap-x-4
                      text-oxford-blue
                      text-sm">
                        <th>Name</th>
                        <th>Username</th>
                        <th>Contact Number</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Operations</th>
                      </tr>
                    </thead>

                    <tbody className="p-3">
                      <tr className="grid 
                      grid-cols-6
                      gap-x-4
                      text-center
                      text-oxford-blue
                      p-2">
                        <td className="p-2">Christopher A Escoto</td>
                        <td className="p-2">Rist</td>
                        <td className="p-2">09619830488</td>
                        <td className="p-2 truncate">christopher16escoto@gmail.com</td>
                        <td className="p-2">
                          <button className="
                          bg-gold-10
                          px-3
                          rounded-md
                          text-white
                          pointer-events-none">Offline</button>
                        </td>
                        <td className="px-2 space-y-1.5">
                          <button className="
                          bg-blue-10
                          px-3
                          text-white
                          rounded-md">UPDATE</button>
                          <button className="
                          bg-red-10
                          px-2
                          mx-2
                          text-white
                          rounded-md">REMOVE</button>
                        </td>
                      </tr>
                      <tr className="grid 
                      grid-cols-6
                      gap-x-4
                      text-center
                      text-oxford-blue
                      p-2">
                        <td className="p-2">Beatriz A Canlas</td>
                        <td className="p-2">Sena10</td>
                        <td className="p-2">09619830488</td>
                        <td className="p-2 truncate">beacanlas23@gmail.com</td>
                        <td className="p-2">
                          <button className="
                          bg-green-20
                          px-3
                          rounded-md
                          text-white
                          pointer-events-none">Online</button>
                        </td>
                        <td className="px-2 space-y-1.5">
                          <button className="
                          bg-blue-10
                          px-3
                          text-white
                          rounded-md">UPDATE</button>
                          <button className="
                          bg-red-10
                          px-2
                          mx-2
                          text-white
                          rounded-md">REMOVE</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <div className="flex
                    justify-center
                    items-center">
                      <button className="bg-penn-blue 
                      text-white 
                      text-md
                      text-center
                      rounded-lg
                      my-10
                      p-4
                      hover:bg-blue-20
                      duration-300">Add New Account</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    
    
   
  )
}

export default UserList;