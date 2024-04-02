"use client";

export default function ROund1NotFound({ router, round }) {
  return (
    <div className="bg-[rgb(10,17,58)] text-white w-full p-5 pt-0 h-[80%] text-center rounded-b-xl justify-center">
      <div className="flex flex-col justify-center h-full p-6 item-center">
        <div className="text-[30px]">
          Submission deadline is over.<br />
          Sorry, you missed the deadline for Round {round} and hence, disqualified.
        </div>
        {/* <div>
          <button className="before:ease mx-auto mt-8 relative h-12 w-40 bg-blue-800 overflow-hidden border rounded border-blue-800 text-md flex justify-center items-center text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-800 hover:before:-translate-x-40"
          onClick={()=>router.push("/hackathon/round1")}
          >
            Submit Now
          </button>
        </div> */}
      </div>
    </div>
  );
}
