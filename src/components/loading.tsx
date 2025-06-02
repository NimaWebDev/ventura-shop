import loader from "../assets/loading/Spin@1x-1.0s-200px-200px.svg";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <img src={loader} alt="در حال بارگذاری..." className="w-16 h-16" />
    </div>
  );
}
