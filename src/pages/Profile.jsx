import React from "react";
import { useGetProfileQuery } from "../services/Api";
import { Navigate } from "react-router";

const Profile = () => {
  const { data, isLoading } = useGetProfileQuery();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <div className="rounded-xl bg-white px-6 py-4 shadow">
          <p className="text-lg font-semibold text-slate-700">
            Loading Profile...
          </p>
        </div>
      </div>
    );
  }

  if (!data) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="min-h-screen bg-slate-100 py-10">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Left Side */}
            <div className="bg-slate-900 px-6 py-10 text-white">
              <div className="flex flex-col items-center text-center">
                <img
                  src={data?.image}
                  alt={data?.firstName}
                  className="h-32 w-32 rounded-full border-4 border-white object-cover"
                />

                <h2 className="mt-4 text-2xl font-bold">
                  {data?.firstName} {data?.lastName}
                </h2>

                <p className="mt-1 text-sm text-slate-300">
                  {data?.company?.title || "User"}
                </p>

                <p className="mt-3 rounded-full bg-white/10 px-4 py-2 text-sm">
                  @{data?.username}
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-slate-300">Email</p>
                  <p className="mt-1 font-medium break-all">{data?.email}</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-slate-300">Phone</p>
                  <p className="mt-1 font-medium">{data?.phone}</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-slate-300">Website</p>
                  <p className="mt-1 font-medium">
                    {data?.domain || "Not available"}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-2 px-6 py-10">
              <h3 className="text-2xl font-bold text-slate-800">
                Profile Information
              </h3>
              

              <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Full Name</p>
                  <p className="mt-1 text-lg font-semibold text-slate-800">
                    {data?.firstName} {data?.lastName}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Username</p>
                  <p className="mt-1 text-lg font-semibold text-slate-800">
                    {data?.username}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Age</p>
                  <p className="mt-1 text-lg font-semibold text-slate-800">
                    {data?.age || "N/A"}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Gender</p>
                  <p className="mt-1 text-lg font-semibold text-slate-800">
                    {data?.gender || "N/A"}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Birth Date</p>
                  <p className="mt-1 text-lg font-semibold text-slate-800">
                    {data?.birthDate || "N/A"}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Company</p>
                  <p className="mt-1 text-lg font-semibold text-slate-800">
                    {data?.company?.name || "N/A"}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 p-5">
                <p className="text-sm text-slate-500">Address</p>
                <p className="mt-2 text-lg font-semibold text-slate-800 leading-8">
                  {data?.address?.address}, {data?.address?.city},{" "}
                  {data?.address?.state}, {data?.address?.country}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="rounded-xl bg-slate-900 px-6 py-3 text-white font-semibold hover:bg-slate-800 transition"
                >
                  Edit Profile
                </button>

                <button
                  type="button"
                  className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100 transition"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;