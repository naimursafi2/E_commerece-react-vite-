import { Link } from "react-router";
import { useGetCategoryListQuery } from "../../services/Api";

const Sidebar = () => {
  const { data, isLoading } = useGetCategoryListQuery();

  return (
    <div className="w-64 rounded-2xl border p-4">
      <h2 className="mb-4 text-lg font-bold">Categories</h2>

      <div className="flex flex-col gap-2">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data?.slice(0, 10)?.map((item) => (
            <div key={item} className="relative group">
              <Link
                to={`/shop?category=${item}`}
                className="inline-block w-full rounded-2xl bg-third px-3 py-2 text-sm font-medium capitalize text-[#22222] hover:bg-brand hover:text-theme"
              >
                <div className="flex items-center gap-1">
                  <p>{item}</p>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;