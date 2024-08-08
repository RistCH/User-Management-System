import { UserIcon } from "@heroicons/react/24/solid";
import Weather from "./weather/weather.tsx";
import DigitalClock from "./clock/clock.tsx";
import Sidebar from "../../components/sidebar/index.tsx";



const Dashboard = () => {;
  return (
    <div className="flex bg-indigo-dye">
      <Sidebar />
        <div className="w-full p-4">
          <div className="flex 
            flex-col 
            px-4 
            py-3
            container-fluid">
                <p className="text-4xl 
                text-white-type 
                pl-4 
                px-3 
                font-bold">Dashboard</p>
                
                <div className="flex 
                flex-row 
                mt-4 
                pl-4 
                py-3
                space-x-10">
                  <div className="
                  bg-white
                  text-penn-blue
                  flex
                  justify-center
                  items-center
                  font-bold
                  w-80
                  h-48
                  rounded-md">
                    <div className="text-center">
                      <p className="mb-3 text-5xl">1</p>
                      <UserIcon className="h-6 absolute" />
                      <p className="text-xl pl-8">
                        ONLINE USERS
                      </p>
                    </div>
                  </div>

                  <div className="
                  bg-white
                  text-penn-blue
                  flex
                  justify-center
                  items-center
                  font-bold
                  w-80
                  h-48
                  rounded-md">
                    <div className="text-center">
                      <p className="mb-3 text-5xl">1</p>
                      <UserIcon className="h-6 absolute" />
                      <p className="text-xl pl-8">OFFLINE USERS</p>
                    </div>
                  </div>

                  <div className="
                  bg-white
                  text-penn-blue
                  flex
                  justify-center
                  items-center
                  font-bold
                  w-80
                  h-48
                  rounded-md">
                    <div className="text-center">
                      <p className="mb-3 text-5xl">1</p>
                      <UserIcon className="h-6 absolute" />
                      <p className="text-xl pl-8">TOTAL USERS</p>
                    </div>
                  </div>

                  <div className="
                  bg-white
                  text-penn-blue
                  flex
                  justify-center
                  items-center
                  font-bold
                  w-80
                  h-48
                  rounded-md">
                    <div className="text-center">
                      <p className="mb-3 text-5xl">1</p>
                      <UserIcon className="h-6 absolute" />
                      <p className="text-xl pl-8">REMOVED USERS</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row my-5">
                  <div className="bg-white-10 
                  w-2/3
                  h-96 
                  my-5 
                  mx-4 
                  px-4
                  rounded-md
                  drop-shadow-xl">
                    <p className="text-3xl
                    p-4
                    font-bold
                    text-indigo-dye">ADMINISTRATORS</p>
                      <table className="grid 
                      grid-cols-1
                      border-2
                      border-indigo-dye
                      rounded-md">
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
                          text-oxford-blue">
                            <td className="p-2">Christopher A Escoto</td>
                            <td className="p-2">Rist</td>
                            <td className="p-2">09619830488</td>
                            <td className="p-2 truncate">christopher16escoto@gmail.com</td>
                            <td className="p-2">
                              <button className="
                              bg-green-20
                              px-3
                              rounded-md
                              text-white
                              pointer-events-none">Online</button>
                            </td>
                            <td className="p-2 space-y-2">
                              <button className="
                              bg-blue-10
                              px-3.5
                              text-white
                              rounded-md">UPDATE</button>
                              <button className="
                              bg-red-10
                              px-3
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

                  <div className="bg-white-10
                  w-96
                  h-96 
                  my-5 
                  mx-3 
                  rounded-md
                  drop-shadow-xl
                  shadow-gray-10">
                      <DigitalClock />
                      <Weather />
                  </div>
                </div>
            </div>
        </div>
    </div>
    
   
  )
}

export default Dashboard;