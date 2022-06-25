import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

export function Event() {
  const slug = true;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
}
