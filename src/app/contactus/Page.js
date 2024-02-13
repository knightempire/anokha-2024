import Navigationbar from "../components/EventHeader";

const contactUs = () => {
  return (
    <div>
      <Navigationbar />
      <div class="content bg-black bg-opacity-100">
        <div class="flex items-center justify-center h-screen">
          <div class="bg-white bg-opacity-75 rounded-lg shadow p-4">
            <div class="overflow-x-auto">
              <div class="min-w-full inline-block">
                <table class="min-w-full">
                  <thead>
                    <tr class="text-black">
                      <th class="text-left p-2">Team</th>
                      <th class="text-left p-2">Point of Contact</th>
                      <th class="text-left p-2">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="p-2">
                        Technical Competitions and Workshops (TCW)
                      </td>
                      <td class="p-2">Mehul Sharma</td>
                      <td class="p-2">anokhatechchair@cb.amrita.edu</td>
                    </tr>
                    <tr>
                      <td class="p-2">
                        Web, Multimedia and Documentation (WMD)
                      </td>
                      <td class="p-2">Dilip P</td>
                      <td class="p-2">anokhawmd@cb.amrita.edu</td>
                    </tr>
                    <tr>
                      <td class="p-2">Techfair Exhibitions (TE)</td>
                      <td class="p-2">S.R. Pranav Suriya</td>
                      <td class="p-2">anokhatechfair@cb.amrita.edu</td>
                    </tr>
                    <tr>
                      <td class="p-2">Public Relations (PR)</td>
                      <td class="p-2">Sagana Murali</td>
                      <td class="p-2">anokhapr@cb.amrita.edu</td>
                    </tr>
                    <tr>
                      <td class="p-2">Price Handling (PH)</td>
                      <td class="p-2">Teeja S</td>
                      <td class="p-2">anokhaprize@cb.amrita.edu</td>
                    </tr>
                    <tr>
                      <td class="p-2">Sponsorship (SP)</td>
                      <td class="p-2">Ala Manas Royal</td>
                      <td class="p-2">anokhacr@cb.amrita.edu</td>
                    </tr>
                    <tr>
                      <td class="p-2">Finance (FIN)</td>
                      <td class="p-2">Sanjay Chidambaram</td>
                      <td class="p-2">anokhafinance@cb.amrita.edu</td>
                    </tr>
                    <tr>
                      <td class="p-2">Planning and Resources (P&R)</td>
                      <td class="p-2">Aditya Prakash Dash</td>
                      <td class="p-2">anokhaplanning@cb.amrita.edu</td>
                    </tr>
                    <tr>
                      <td class="p-2">Communications</td>
                      <td class="p-2">Ananya R</td>
                      <td class="p-2">anokhacomm@cb.amrita.edu</td>
                    </tr>
                    <tr>
                      <td class="p-2">Hospitality</td>
                      <td class="p-2">Kishanth K</td>
                      <td class="p-2">anokhahosp@cb.amrita.edu</td>
                    </tr>
                    <tr>
                      <td class="p-2">Security and Discipline (S&D)</td>
                      <td class="p-2">Santhosh Sharma S S</td>
                      <td class="p-2">anokhasecurityteam@cb.amrita.edu</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactUs;
