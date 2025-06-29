"use client";
import {v4 as uuidv4} from "uuid";
import {cards} from "@/features/api/api";
import {useQuery} from "@tanstack/react-query";
const Card = () => {
  const {data, isLoading, isError} = useQuery<Person[]>({
    queryKey: ["personalinfo"],
    queryFn: cards,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>error</p>;

  const filteredData = data?.filter((eachElement) => eachElement.dob.age >= 50);

  if (filteredData?.length === 0) {
    return <p>დაფიქსირდა შეცდომა</p>;
  }
  return (
    <div>
      <div className="flex flex-wrap gap-[30px]">
        {filteredData?.map((eachElement) => (
          <div
            key={uuidv4()}
            className="min-h-[840px] m-auto gap-[60px] p-[90px] flex flex-col max-w-[900px] w-full bg-white rounded-[50px]"
          >
            <div className="flex items-center gap-[48px]">
              <div className="max-w-[200px] w-full min-h-[200px] rounded-full overflow-hidden flex items-center justify-center ">
                <img
                  src={eachElement.picture.medium}
                  alt="profilePicture"
                  className="w-full h-full"
                />
              </div>
              <div>
                <div className="flex gap-[15px] ">
                  <p className="text-[#00000080] text-[50px] font-bold ">
                    {eachElement.name.first}
                  </p>
                  <p className="text-[#00000080] text-[50px] font-bold">
                    {eachElement.name.last}
                  </p>
                </div>
                <p className="text-[#909090] text-[35px] font-medium">
                  {eachElement.dob.age} / <span> {eachElement.gender}</span>
                </p>
              </div>
            </div>
            <ul>
              <li className="flex gap-[117px]">
                <p className="text-[36px] font-bold text-[#505050] max-w-[163px] w-full">
                  Age:
                </p>
                <p className="text-[36px] font-medium text-[#505050]">
                  {eachElement.dob.age}
                </p>
              </li>
              <li className="flex gap-[117px]">
                <p className="text-[36px] font-bold text-[#505050] max-w-[163px]  w-full">
                  Name:
                </p>
                <div className="flex gap-[15px]">
                  <p className="text-[36px] font-medium text-[#505050]">
                    {eachElement.name.first}
                  </p>
                  <p className="text-[36px] font-medium text-[#505050]">
                    {eachElement.name.last}
                  </p>
                </div>
              </li>
              <li className="flex  gap-[117px]">
                <p className="text-[36px] max-w-[163px] font-bold text-[#505050]  w-full">
                  username:
                </p>
                <p className="text-[36px] font-medium text-[#505050] ">
                  {eachElement.login.username}
                </p>
              </li>
              <li className="flex gap-[117px]">
                <p className="text-[36px] font-bold text-[#505050] max-w-[163px] w-full ">
                  city:
                </p>
                <p className="text-[36px] font-medium text-[#505050]">
                  {eachElement.location.city}
                </p>
              </li>
              <li className="flex gap-[117px]">
                <p className="text-[36px] font-bold text-[#505050] max-w-[163px] w-full ">
                  country:
                </p>
                <p className="text-[36px] font-medium text-[#505050]">
                  {eachElement.location.country}
                </p>
              </li>
              <li className="flex gap-[117px]">
                <p className="text-[36px] font-bold text-[#505050] max-w-[163px] w-full ">
                  postcode:
                </p>
                <p className="text-[36px] font-medium text-[#505050] ">
                  {eachElement.location.postcode}
                </p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
