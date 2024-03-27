import {getServerSession} from "next-auth";

const DashboardPage = async() => {
  const session = await getServerSession()
  console.log(session, 'ss')
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Welcome {session?.user?.name}</h1>
    </div>
  );
};

export default DashboardPage;
