import { Link } from "react-router";
import { useGetCategoryListQuery } from "../../services/Api";
import { FaChevronRight } from "react-icons/fa";

const Sidebar = () => {
  const { data, isLoading } = useGetCategoryListQuery();

  return (
    <div className="w-64 rounded-3xl bg-white p-5 shadow-md border border-slate-200">
      {/* Sidebar Title */}
      <div className="mb-5 border-b border-slate-200 pb-3">
        <h2 className="text-xl font-bold text-slate-800">Categories</h2>
        <p className="text-sm text-slate-500">Browse all product categories</p>
      </div>

      {/* Category List */}
      <div className="flex flex-col gap-3">
        {isLoading ? (
          <p className="text-sm text-slate-500">Loading...</p>
        ) : (
          data?.slice(0, 10)?.map((item) => (
            <Link
              key={item}
              to={`/shop?category=${item}`}
              className="group flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium capitalize text-slate-700 transition-all duration-200 hover:bg-brand hover:text-white hover:shadow-md"
            >
              <span>{item}</span>
              <FaChevronRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;