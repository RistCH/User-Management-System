import Sidebar from "../../components/sidebar/index.tsx";

const Profile = () => {
  return(
    <div className="flex bg-indigo-dye">
      <Sidebar />
        <div className="w-full p-4">
          <div className="flex
            flex-col
            px-4
            py-3
            container-fluid">
              <div className="text-4xl 
              text-white 
              pl-4 
              px-3 
              font-bold">Profile</div>
              
              <div className="flex flex-row my-5">
                <div className="bg-white-10 
                w-7/8
                h-90
                my-2
                mx-3
                px-4
                rounded-md
                drop-shadow-xl">

                </div>
              </div>
            
                
          </div>
        </div>
    </div> 



    
  )
}



export default Profile;