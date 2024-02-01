"use client";
import React, { useState } from "react";

const TeamRegister = ({minTeamSize, maxTeamSize}) => {
  const [TeamSize,setTeamSize] = useState(0);
  minTeamSize=1
  maxTeamSize=3
  return (
    <main className="flex min-h-screen max-h-screen flex-col bg-[#121212] text-white items-center justify-center">
      <div className="z-10 flex flex-col text-center">
        <div className="size-[20px] w-full">Register Teams</div>
        <form>
          <div>{minTeamSize!=maxTeamSize?
            (<div>
              <label>select team size</label>
              <input type="number" min={minTeamSize} max={maxTeamSize} className="text-black w-10 pl-2" />
            </div>):""}</div>
        </form>
      </div>
    </main>
  )
}

export default TeamRegister;